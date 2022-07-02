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
            if "data-attribute" in list(my_attributes.keys()):
                if "search" in list(my_attributes.values()):
                    sClass.append(1)
                
  
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
                    sClass.append(0)
            
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
        sClass = [0]
    
    temp = len(s_inner)*[_url_]
    
    return temp,s_inner, search_attribute,noWord,is_button, search_button_attribute_value,sClass
def write_header():
    list_of_header = ["search_innertext", "search_attribute", "Number_of_search_word","search_button_attribute_value","is_button", "sClass", "URL name"]
    save_path = 'result/search/'
    file_name = "search_GT__1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(list_of_header)

def write_CSV(tlist):
    save_path = 'result/search/'
    file_name = "search_GT__1.csv"
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
    for i in range(0,100):
            print(write_CSV(get_class_data(turl[i])))

if __name__ == "__main__":
    main()
