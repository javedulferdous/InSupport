from init import *
from allURL import *

def search(myDict, search1):
    search.a=[]
    for key, value in myDict.items():
        if search1 in value:
            search.a.append(key)
    return len(search.a)

def search_query(_url_):
    s_inner,is_button,search_attribute, noWord, sClass,search_button_attribute_value  = ([] for i in range(6)) 
    BnoWord = 0
    myFile=open(_url_,'r',encoding="latin-1")
    soup=BeautifulSoup(myFile,"html5lib")
    #print(soup)
    try:
        for tests in soup.findAll('form'):
            my_attributes = tests.attrs
            #print(my_attributes)
            if "data-attribute" in list(my_attributes.keys()):
                if "search" in list(my_attributes.values()):
                    sClass.append(1)
                else:
                    sClass.append(0)
            else:
                sClass.append(0)
            if('search' in list(tests.attrs.values())):
                search_attribute.append(1)
            else:
                search_attribute.append(0) 
            if " " == tests.text:
                s_inner.append(0)
                
            else:
                s_inner.append(1)                
            my_no = tests.attrs
            noWord.append(search(my_no, "search"))
            
            is_present = bool(re.search('button', str(tests)))
            if(is_present == True):
                is_button.append(1)
            else:
                is_button.append(0)
                
            if "data-attribute" in list(my_attributes.keys()):    
                buttonSearch = tests.find("button")
                button_attributes = buttonSearch.attrs
                BnoWord = search(button_attributes, "search")
                if(BnoWord == 1):
                    search_button_attribute_value.append(1)
                else:
                    search_button_attribute_value.append(0)
            else:
                search_button_attribute_value.append(0)
            
    except:
        search_button_attribute_value.append(0)
    
    if (s_inner ==[]):
        s_inner = [0]
    if (search_attribute ==[]):
        search_attribute = [0]
    if (noWord ==[]):
        noWord = [0]
    if (is_button ==[]):
        is_button = [0]
    if (search_button_attribute_value ==[]):
        search_button_attribute_value = [0]    
    if (sClass ==[]):
        sClass = [1]
    
    temp = len(s_inner)*[_url_]
    
    return temp,s_inner, search_attribute,noWord,is_button, search_button_attribute_value,sClass

def get_class_data(searchQ) :
        name_url, search_innertext,search_attribute,noWord, is_button, search_button_attribute_value, sClass = search_query(searchQ)
        search_innertext = str(search_innertext)[1:-1].replace(",","").replace(" ","")
        search_attribute = str(search_attribute)[1:-1].replace(",","").replace(" ","")
        noWord = str(noWord)[1:-1].replace(",","").replace(" ","")
        is_button = str(is_button)[1:-1].replace(",","").replace(" ","")
        search_button_attribute_value = str(search_button_attribute_value)[1:-1].replace(",","").replace(" ","")
        sClass = str(sClass)[1:-1].replace(",","").replace(" ","")
        temp = []
        temp2 = []
        
        for i in search_innertext:
            search_innertext = i
            temp.append([search_innertext])        
            
        t_search_attribute = []
        for m in search_attribute:
            t_search_attribute.append(m)
        arr2d = np.matrix(temp)
        column_to_add = np.array(t_search_attribute)
        output = np.column_stack((arr2d, column_to_add))
        f_search_attribute = output.tolist()
        
        t_noWord = []
        for m in noWord:
            t_noWord.append(m)
        a_noWord = np.matrix(f_search_attribute)
        column_noWord = np.array(t_noWord)
        o_noWord = np.column_stack((a_noWord, column_noWord))
        f_noWord = o_noWord.tolist()        
        
        t_is_button= []
        for m in is_button:
            t_is_button.append(m)
        a_is_button = np.matrix(f_noWord)
        column_is_button= np.array(t_is_button)
        o_is_button = np.column_stack((a_is_button, column_is_button))
        f_is_button= o_is_button.tolist()        
        
        t_s_value= []
        for m in search_button_attribute_value:
            t_s_value.append(m)
        a_s_value = np.matrix(f_is_button)
        column_s_value= np.array(t_s_value)
        o_s_value = np.column_stack((a_s_value, column_s_value))
        f_s_value= o_s_value.tolist()
        
        t_sClass= []
        for m in sClass:
            t_sClass.append(m)
        a_sClass = np.matrix(f_s_value)
        column_sClass= np.array(t_sClass)
        o_sClass = np.column_stack((a_sClass, column_sClass))
        f_sClass= o_sClass.tolist()
        
        t_name= []
        for m in name_url:
            t_name.append(m)
        a_name = np.matrix(f_sClass)
        column_name = np.array(t_name)
        o_name = np.column_stack((a_name, column_name))
        f_name= o_name.tolist()
        
        return f_name

def write_header():
    list_of_header = ["search_innertext", "search_attribute", "Number_of_search_word","search_button_attribute_value","is_button", "sClass", "URL name"]
    save_path = 'test/'
    file_name = "searchList_test_1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(list_of_header)

def write_CSV(tlist):
    save_path = 'test/'
    file_name = "searchList_test_1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerows(tlist)
    with open(completeName, "r", newline="") as fr:
        reader = csv.reader(fr)
        lines= len(list(reader))
        print("[",lines,"].", "form!")

def main():
    write_header()
    for i in range(0,209):
            print(write_CSV(get_class_data(urllist[i])))

if __name__ == "__main__":
    main()
