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
def search_extract_model(_name_):
    Search_searchpath = '/Users/mdjavedulferdous/Desktop/TiiS/Code/result/search/model_csv/AmericanEagle.html.csv'
    Search_csv_df = pd.read_csv(Search_searchpath)
    search_URL_name = Search_csv_df[["URL name"]]
    Search_X_test = Search_csv_df[["search_innertext", "search_attribute", "Number_of_search_word","search_button_attribute_value","is_button"]]
    searchname = "/Users/mdjavedulferdous/Desktop/TiiS/Code/search_model.sav"
    target_names = ['Non-Search', 'Search']
    search_URL_name = (search_URL_name["URL name"][0].split('/')[-1]).split('.')[0]
    nameCSV = search_URL_name+'.csv'

    data1_import = evaluation(Search_X_test,searchname,target_names,search_URL_name)
    data2_import = pd.read_csv(Search_searchpath)   
    data_merge = pd.concat([data1_import, data2_import],axis=1)

    data_merge.to_csv(nameCSV, index = False)  

search_GT = "/Users/mdjavedulferdous/Desktop/TiiS/Code/result/search/search_GT__1.csv"
search_GT_df = pd.read_csv(search_GT)
name_of_csv_sort = []
for i in range(len(search_GT_df['URL name'])):
    name_of_csv_sort.append((search_GT_df['URL name'][i].split('/')[-1]).split('.')[0])
for i in name_of_csv_sort:
    search_extract_model(i)
