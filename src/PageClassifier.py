from init import *

def evaluation_process():
    csv_df = pd.read_csv("pageList_version_six.csv")
    X = csv_df[['NumOfButton','NumOfLinks','commonURL','NumberOfValues','is_page']]
    y = csv_df[['pageClass']]
    filtered_one = csv_df[csv_df['pageClass'] != 0] 
    filtered_zero = csv_df[csv_df['pageClass'] == 0] 
    f_o = filtered_zero.sample(n=209,replace=False)
    z = pd.concat([filtered_one, f_o], axis=0)
    x_2 = z[['NumOfButton','NumOfLinks','commonURL','NumberOfValues','is_page']]
    y_2 = z[["pageClass"]]

    return x_2, y_2
    
def train_classifier(X,y):
    clf = make_pipeline(StandardScaler(), LogisticRegression())
    clf1 = make_pipeline(StandardScaler(), MLPClassifier(solver='lbfgs', alpha=1e-5, hidden_layer_sizes=(5, 2), random_state=1))
    clf2 = make_pipeline(StandardScaler(), svm.SVC(kernel='rbf'))
    p_class_0, p_class_1, r_class_0, r_class_1 = [], [], [], []
    fivefold = [
             (np.r_[1:168,209:335,376:418], np.r_[168:209,335:376]),
             (np.r_[1:83,124:239, 280:418], np.r_[83:124, 239:280]),
             (np.r_[1:124, 165:377], np.r_[124:165,377:418]),
             (np.r_[1:168, 251:418], np.r_[168:251]),
             (np.r_[1:100,142:209,250:418], np.r_[100:142, 209:250])
    ]
    for train_index, test_index in fivefold:
        #print('Iteration:',iteration)
        #print("No of Training Instance: ",(NoY - len(test_index)))
        #print("No of Testing Instance: ",(NoY - len(train_index)))
       # print("Train Index: ", train_index)
      #  print("Test Index: ", test_index)
        
        model = clf1
        X_train, X_test, y_train, y_test = X.iloc[train_index], X.iloc[test_index], y.iloc[train_index], y.iloc[test_index]
        model.fit(X_train, y_train)
        y_score = model.predict(X_test)
        cv_results = model_selection.cross_val_score(model, X_train, y_train).mean()
        #print(cv_results)
        precision = precision_score(y_test, y_score, average=None)
        p_class_0.append(precision[0])
        p_class_1.append(precision[1])
        
        recall = recall_score(y_test, y_score, average=None)
        #print(recall)
        r_class_0.append(recall[0])
        r_class_1.append(recall[1])
        target_names = ['Class 0', 'Class 1']
        print(classification_report(y_test, y_score, target_names=target_names))

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