from init import *

def evaluation_process():
    csv_df = pd.read_csv("filterList_version_two.csv")

    X = csv_df[['checkBoxList','NumberOfLink','NumberOfInput']]
    y = csv_df[['filterClass']]

    filtered_one = csv_df[csv_df['filterClass'] == 1] 
    filtered_zero = csv_df[csv_df['filterClass'] == 0] 

    f_o = filtered_zero.sample(n=1621,replace=False)
    z = pd.concat([filtered_one, f_o], axis=0)
    x_2 = z[['checkBoxList','NumberOfLink','NumberOfInput']]
    y_2 = z[["filterClass"]]
    
    return x_2, y_2
    
def train_classifier(X,y):
    clf = make_pipeline(StandardScaler(), LogisticRegression())
    clf1 = make_pipeline(StandardScaler(), MLPClassifier(solver='lbfgs', alpha=1e-5, hidden_layer_sizes=(5, 2), random_state=1))
    clf2 = make_pipeline(StandardScaler(), svm.SVC(kernel='rbf'))
    p_class_0, p_class_1, r_class_0, r_class_1 = [], [], [], []
    fivefold = [
             (np.r_[1:1297,1621:2918], np.r_[1297:1621,2918:3242]),
             (np.r_[1:1000,1324:2000, 2324:3242], np.r_[1000:1324, 2000:2324]),
             (np.r_[1:676, 1000:1676,2000:3242], np.r_[676:1000,1676:2000]),
             (np.r_[1:400, 562:800, 862:1700, 1862:2500, 2662:3242], np.r_[400:562, 800:862,1700:1862,2500:2662]),
             (np.r_[1:638,800:1297,1459:2000,2162:3080], np.r_[638:800,1297:1459, 2000:2162,3080:3242])
    ]
    print("==================================================================")
    print(clf)
    print("==================================================================")
    fold = 1
    for train_index, test_index in fivefold:
        print("Fold: ",fold)
        x_train, X_test, y_train, y_test = X.iloc[train_index], X.iloc[test_index], y.iloc[train_index], y.iloc[test_index]
        print("==================================================================")
        clf.fit(x_train, y_train)
        model_pred = clf.predict(X_test)
        print(classification_report(y_test, model_pred))
        cv_results = model_selection.cross_val_score(clf, x_train, y_train).mean()
        tn, fp, fn, tp = confusion_matrix(y_test, model_pred).ravel()
        #print("True negative: %s \nFalse positive: %s \nFalse negative: %s \nTrue positive: %s\n\n" % (tn, fp, fn, tp))
        print("==================================================================")
        cDF = pd.DataFrame(model_pred)
        y_test = np.asarray(y_test)
        misclassified = [i for i in range(len(model_pred)) if model_pred[i] != y_test[i]]
        #if misclassified ==[]:
        #    print("No misclassified index detected")
        #else:
       #     for i in misclassified:
        #        print("Misclassified index: ", i)
        precision = precision_score(y_test, model_pred, average=None)
        p_class_0.append(precision[0])
        p_class_1.append(precision[1])
        recall = recall_score(y_test, model_pred, average=None)
        r_class_0.append(recall[0])
        r_class_1.append(recall[1])
        print("==================================================================")
        fold +=1
    return p_class_0,p_class_1, r_class_0, r_class_1, cv_results


def main():
    
    x_2, y_2 = evaluation_process()
    p_class_0,p_class_1, r_class_0, r_class_1, acc = train_classifier(x_2,y_2)
    print("========================================================")
    print('Average class 0 precision = {:.1f}'.format((sum(p_class_0)/len(p_class_0))*100))
    print('Average class 1 precision = {:.1f}'.format((sum(p_class_1)/len(p_class_1))*100))
    print('Average class 0 recall = {:.1f}'.format((sum(r_class_0)/len(r_class_0))*100))
    print('Average class 1 recall = {:.1f}'.format((sum(r_class_1)/len(r_class_1))*100))
    print('Average accuracy = {:.1f}'.format(acc*100))

    print("========================================================")

if __name__ == "__main__":
    main()