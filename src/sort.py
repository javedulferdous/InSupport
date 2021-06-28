from init import *
from allURL import *

def sortFunc(_url_):
    sort_inner, sortClass,option_tag_attribute_value, sort_attribute,t_count  = ([] for i in range(5)) 
    myFile=open(_url_,'r',encoding="latin-1")
    
    soup=BeautifulSoup(myFile,"html5lib")
    selectSearch = soup.findAll('select',{"data-attribute":"sort"})
    ulSearch = soup.findAll('ul',{"data-attribute":"sort"})
    '''
    divSearch = soup.findAll('div',{"data-attribute":"sort"})
    if not divSearch:
        print("No Div")
    else:
        print("Div")
    '''
    if not ulSearch:
        print("No UL")
    else:
        print("UL") 
    if not selectSearch:
        print("No Select")
    else:
        print("Select")  
    #print(soup.findAll(text=re.compile('^Sort By$')))
    #print(len(soup.findAll(text=re.compile(".*sort .*"))))

    if selectSearch != []:
        #print("Select")
        for tests in soup.findAll('select'):
            t_Price = len(tests.findAll(text=re.compile(".*Price.*"))) 
            t_Most = len(tests.findAll(text=re.compile(".*Most recent.*")))
            t_New = len(tests.findAll(text=re.compile(".*New.*")))
            t_Best = len(tests.findAll(text=re.compile(".*Best Match.*")))  
            t_Highest = len(tests.findAll(text=re.compile(".*Highest*"))) 
            t_Ratings = len(tests.findAll(text=re.compile(".*Ratings.*"))) 
            t_Distance = len(tests.findAll(text=re.compile(".*Distance*"))) 
            t_Time = len(tests.findAll(text=re.compile(".*Time*"))) 
            t_Relevance = len(tests.findAll(text=re.compile(".*Relevance*"))) 
            t_Featured = len(tests.findAll(text=re.compile(".*Featured.*"))) 
            t_Recommended = len(tests.findAll(text=re.compile(".*Recommended.*")))
            t_count.append((int(t_Price)+int(t_Most)+int(t_New)+int(t_Best)+int(t_Highest)+int(t_Ratings)+int(t_Distance)+int(t_Time)+int(t_Relevance)+int(t_Featured)+int(t_Recommended)))
            if "data-attribute" in list(tests.attrs.keys()):
                if "sort" in list(tests.attrs.values()):
                    sortClass.append(1)
                else:
                    sortClass.append(0)
            else:
                sortClass.append(0)
            if " " == tests.text:
                sort_inner.append(0)             
            else:
                #print(tests.text)
                if (t_Price or t_Most or t_New or t_Best or  t_Highest or t_Ratings or t_Distance or t_Time or t_Relevance or t_Featured or t_Recommended)!=0:
                    #print(tests(text=lambda t: "sort:" in t))
                    sort_inner.append(1)
                else:
                    sort_inner.append(0)             
            if('sort' in list(tests.attrs.values())):
                #print(tests.attrs.values())
                sort_attribute.append(1)
            else:
                sort_attribute.append(0) 
            optionTag = tests.findAll("option")
            option_tag_attribute_value.append(len(optionTag))
    elif ulSearch != []:
        #print("UL")
        for tests in soup.findAll('ul'):
            t_Price = len(tests.findAll(text=re.compile(".*Price.*"))) 
            t_Most = len(tests.findAll(text=re.compile(".*Most recent.*")))
            t_New = len(tests.findAll(text=re.compile(".*New.*")))
            t_Best = len(tests.findAll(text=re.compile(".*Best Match.*")))  
            t_Highest = len(tests.findAll(text=re.compile(".*Highest*"))) 
            t_Ratings = len(tests.findAll(text=re.compile(".*Ratings.*"))) 
            t_Distance = len(tests.findAll(text=re.compile(".*Distance*"))) 
            t_Time = len(tests.findAll(text=re.compile(".*Time*"))) 
            t_Relevance = len(tests.findAll(text=re.compile(".*Relevance*"))) 
            t_Featured = len(tests.findAll(text=re.compile(".*Featured.*"))) 
            t_Recommended = len(tests.findAll(text=re.compile(".*Recommended.*")))
            t_count.append((int(t_Price)+int(t_Most)+int(t_New)+int(t_Best)+int(t_Highest)+int(t_Ratings)+int(t_Distance)+int(t_Time)+int(t_Relevance)+int(t_Featured)+int(t_Recommended)))
            if "data-attribute" in list(tests.attrs.keys()):
                if "sort" in list(tests.attrs.values()):
                    sortClass.append(1)
                else:
                    sortClass.append(0)
            else:
                sortClass.append(0)
            if " " == tests.text:
                sort_inner.append(0)             
            else:
                #print(tests.text)
                if (t_Price or t_Most or t_New or t_Best or  t_Highest or t_Ratings or t_Distance or t_Time or t_Relevance or t_Featured or t_Recommended)!=0:
                    #print(tests(text=lambda t: "sort:" in t))
                    sort_inner.append(1)
                else:
                    sort_inner.append(0)             
            if('sort' in list(tests.attrs.values())):
                #print(tests.attrs.values())
                sort_attribute.append(1)
            else:
                sort_attribute.append(0) 
            optionTag = tests.findAll("li")
            option_tag_attribute_value.append(len(optionTag))
    else:
        sortClass.append(0)
        sort_inner.append(0)
        option_tag_attribute_value.append(0)
        sort_attribute.append(0)
    if (sort_inner ==[]):
        sort_inner = [0]
    if (sort_attribute ==[]):
        sort_attribute = [0]
    if (option_tag_attribute_value ==[]):
        option_tag_attribute_value = [0]
    if (sortClass ==[]):
        sortClass = [0]
    if (t_count ==[]):
        t_count = [0]    
    temp = len(sort_inner)*[_url_]
    
    return temp, sort_inner,  option_tag_attribute_value, sort_attribute, sortClass,t_count

def get_class_data(searchQ) :
        name_url, sort_inner, option_tag_attribute_value, sort_attribute, sortClass, textCount = sortFunc(searchQ)
        sort_inner = str(sort_inner)[1:-1].replace(",","").replace(" ","")
        sort_attribute = str(sort_attribute)[1:-1].replace(",","").replace(" ","")
        #option_tag_attribute_value = str(option_tag_attribute_value)[1:-1]
        sortClass = str(sortClass)[1:-1].replace(",","").replace(" ","")
        temp = []
        temp2 = []
        for i in sort_inner:
            sort_inner = i
            temp.append([sort_inner])        
        
        t_sort_attribute = []
        for m in sort_attribute:
            t_sort_attribute.append(m)
        arr2d = np.matrix(temp)
        column_to_add = np.array(t_sort_attribute)
        output = np.column_stack((arr2d, column_to_add))
        f_sort_attribute = output.tolist()
        
        t_option = []
        for m in option_tag_attribute_value:
            t_option.append(m)
        option_arr2d = np.matrix(f_sort_attribute)
        option_to_add = np.array(t_option)
        output_option = np.column_stack((option_arr2d, option_to_add))
        f_option = output_option.tolist()

        t_sortClass = []
        for m in sortClass:
            t_sortClass.append(m)
        sortClass_arr2d = np.matrix(f_option)
        sortClass_add = np.array(t_sortClass)
        sortClass_output = np.column_stack((sortClass_arr2d, sortClass_add))
        f_sortClass = sortClass_output.tolist()
        
        t_textCount = []
        for m in textCount:
            t_textCount.append(m)
        textCount_arr2d = np.matrix(f_sortClass)
        textCount_add = np.array(t_textCount)
        textCount_output = np.column_stack((textCount_arr2d, textCount_add))
        f_textCount = textCount_output.tolist()
        
        t_name= []
        for m in name_url:
            t_name.append(m)
        a_name = np.matrix(f_textCount)
        column_name = np.array(t_name)
        o_name = np.column_stack((a_name, column_name))
        f_name= o_name.tolist()

        return f_name

def write_header():
    list_of_header = ["sort_inner", "sort_attribute", "option_tag_attribute_value","sortClass","textCount","name_url"]
    save_path = 'test/'
    file_name = "sort_test_1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(list_of_header)

def write_CSV(tlist):
    save_path = 'test/'
    file_name = "sort_test_1.csv"
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

