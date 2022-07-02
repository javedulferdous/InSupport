from init import *
from testURL import *
def evaluation(Search_X_test,searchname,target_names,search_URL_name):
    p_class_0, p_class_1, r_class_0, r_class_1 = [], [], [], []
    #searchname = "/Users/mdjavedulferdous/Desktop/TiiS/Code/search_model.sav"
    search_model = pickle.load(open(searchname, 'rb'))
    y_score = search_model.predict(Search_X_test)
    y_score_1 = search_model.predict_proba(Search_X_test)*100
    #print(y_score_1)
    for i in range(len(y_score_1)):
        if y_score_1[i][1] >y_score_1[i][0]:
            print([i],"Positive Result")
            print("TRUE: ",y_score_1[i][1])
            print("FALSE: ",y_score_1[i][0])
            print("==========================")
        else:
            print([i],"Negative Result")
            print("TRUE: ",y_score_1[i][1])
            print("FALSE: ",y_score_1[i][0])
            print("==========================")
    df = pd.DataFrame(y_score_1) 
    return (df)

count = 1
name_list = []

def accuracy_eval(_name_, feature,actual_data):
    try:
        
        name_path = "./"+feature+"_after_model/"
        path = name_path
        web_name = path+_name_+'.csv'

        data_after_model = pd.read_csv(web_name)
        data_after_model_name = data_after_model["URL name"]

        actual_data_list = actual_data.values.tolist()
        data_after_model_list = data_after_model.values.tolist()
        for i in range(len(actual_data_list)):
            for j in range(len(data_after_model_list)):
                if (actual_data_list[i][-1])==data_after_model_list[j][-1]:
                     if (actual_data_list[i][-2]==1 and data_after_model_list[j][1]>data_after_model_list[j][0])  :
                            if data_after_model_list[j][-1].split('/')[-1].split('.')[0] not in name_list:
                                name_list.append(data_after_model_list[j][-1].split('/')[-1].split('.')[0])
                                #print((name_list))
                                return data_after_model_list[j][-1].split('/')[-1].split('.')[0]
    except:
      pass  

def check_feature(_feature_):
    path = "./result/"+_feature_+"/"+_feature_+"_GT__1.csv"
    actual_data = pd.read_csv(path)
#     classname = _feature_+"Class"
    actual = actual_data["sClass"]
    name_path_list = []
    for i in range(len(actual_data['URL name'])):
        name_path = (actual_data['URL name'][i].split('/')[-1]).split('.')[0]
        name_path_list.append(name_path)
    
    for i in name_path_list:
            name_list.append(accuracy_eval(i,_feature_,actual_data))
    list_difference = []
    for item in name_path_list:
      if item not in name_list:
        list_difference.append(item)

    print(list_difference)
    true_predict = (sum(x is not None for x in set(name_list)))
    print("Total number of webpage:",len(actual))
    print("Number of True predicted webpage:",true_predict)
    print("Accuracy for",_feature_,":",true_predict)
check_feature("search")