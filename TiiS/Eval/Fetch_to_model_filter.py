from init import *
from allURL import *
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
def filter_extract_model(_name_):
    path = '/Users/mdjavedulferdous/Desktop/TiiS/Code/result/filter/model_csv/'
    web_name = path+_name_+'.html.csv'
    filter_csv_df = pd.read_csv(web_name)
    filter_URL_name = filter_csv_df[["name_url"]]
    filter_X_test = filter_csv_df[["checkBoxList", "NumberOfLink","NumberOfInput", "URL_List", "button_List"]]
    filtername = "/Users/mdjavedulferdous/Desktop/TiiS/Code/filter_model_2.sav"
    target_names = ['Non-filter', 'filter']
    filter_URL_name = (filter_URL_name["name_url"][0].split('/')[-1]).split('.')[0]
    nameCSV = filter_URL_name+'.csv'

    data1_import = evaluation(filter_X_test,filtername,target_names,filter_URL_name)
    data2_import = pd.read_csv(web_name)   
    data_merge = pd.concat([data1_import, data2_import],axis=1)

    data_merge.to_csv(nameCSV, index = False) 
    
filter_GT = "/Users/mdjavedulferdous/Desktop/TiiS/Code/result/filter/filter_GT__1.csv"
filter_GT_df = pd.read_csv(filter_GT)
name_of_csv_filter = []
for i in range(len(filter_GT_df['name_url'])):
    name_of_csv_filter.append((filter_GT_df['name_url'][i].split('/')[-1]).split('.')[0])
for i in name_of_csv_filter:
    filter_extract_model(i)