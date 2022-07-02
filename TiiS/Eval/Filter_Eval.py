from init import *
from allURL import *
def filterFunc(_url_):
    sort_inner, sortClass,option_tag_attribute_value, sort_attribute,t_count  = ([] for i in range(5)) 
    
    myFile=open(_url_,'r',encoding="latin-1")
    soup=BeautifulSoup(myFile,"html5lib")
    
    divFilter, ulFilter, liFilter, formFilter, sectionFilter, fieldsetFilter, dtFilter,\
    buttonFilter,articleFilter,dlFilter,desktopfacetFilter = \
    soup.findAll('div'),soup.findAll('ul'),\
    soup.findAll('li'), soup.findAll('form'),\
    soup.findAll('section'), soup.findAll('fieldset'),\
    soup.findAll('dt',{"data-attribute":"filter"}),soup.findAll('button'),\
    soup.findAll('article'), soup.findAll('dl'),\
    soup.findAll('desktop-facet')
    try:
        if divFilter != []:    
            return filter_Extract(soup, 'div',_url_)
        if liFilter != []:    
            return filter_Extract(soup, 'li',_url_)
        if buttonFilter != []:    
            return filter_Extract(soup, 'button',_url_)
        if dlFilter != []:    
            return filter_Extract(soup, 'dl',_url_)
        if desktopfacetFilter != []:    
            return filter_Extract(soup, 'desktop-facet',_url_)
        if articleFilter != []:    
            return filter_Extract(soup, 'article',_url_)
        if dtFilter != []:    
            return filter_Extract(soup, 'dt',_url_)
        if fieldsetFilter != []:    
            return filter_Extract(soup, 'fieldset',_url_)
        if sectionFilter != []:    
            return filter_Extract(soup, 'section',_url_)
        if formFilter != []:    
            return filter_Extract(soup, 'form',_url_)
        if ulFilter != []:    
            return filter_Extract(soup, 'ul',_url_)
        else:
            return _url_,"0","0","0","0","0"
    except:
        pass
def filter_Extract(soup, tag,_url_):
    fCount  = 0
    filterClass, checkBoxList,insideList,outerList, NumberOfFilter, NumberOfLink, temp2,\
    NumberOfInput, URL_List, button_List = [], [], [], [], [], [], [], [], [], []
    
    for ele in soup.findAll(tag):
                        #======================= filterClass =======================
                        fCount +=1
                        ch1 = 0
                        #======================= Sub-Category ======================= 
                        child = 0
                        for scat in ele.findAll('label'):
                            child +=1
                            #print(scat.text)
                        insideList.append(child)
                        #========================= CheckBox =========================             
                        for chk in ele.findAll('input', {"type": "checkbox"}):
                            pass
                            ch1 += 1
                        if ch1 !=0 and ch1 !=1:
                            pass
                            #print(ch1)
                            checkBoxList.append(1)
                        elif ch1 is None:
                            pass
                            #print("Empty")
                        else:
                            checkBoxList.append(0)
                      
                        #=================== Number of link used =================== 
                        valueCounter =0
                        for link in ele.findAll('a'):
                            valueCounter += 1
                        NumberOfLink.append(valueCounter)
                        #=================== Number of inputbox =================== 
                        inputCounter = 0
                        for link in ele.findAll('input'):
                            inputCounter += 1
                        NumberOfInput.append(inputCounter)
                        #=================== Number of URL List =================== 
                        linkCount = 0
                        for alink in ele.findAll('a', href=True):
                            linkCount += 1
                        URL_List.append(1)
                        #=================== Number of button List =================== 
                        buttonCount = 0
                        for btn in ele.findAll('button'):
                            buttonCount += 1
                        if buttonCount!=1:
                            button_List.append(1)
                        else:
                            button_List.append(0)
   
    name_url = len(NumberOfLink)*[_url_]
    if (NumberOfLink ==[] or NumberOfLink is None):
        NumberOfLink = [0]
    if (NumberOfInput ==[] or NumberOfInput is None):
        NumberOfInput = [0] 
    if (checkBoxList ==[] or checkBoxList is None):
        checkBoxList = [0]
    if (URL_List ==[] or URL_List is None):
        URL_List = [0]
    if (button_List ==[] or button_List is None):
        button_List = [0]

    return name_url, checkBoxList, NumberOfLink, NumberOfInput, URL_List, button_List

def get_class_data(searchQ) :
        start_time= time.time()
        name_url, checkBoxList, NumberOfLink, NumberOfInput, URL_List, button_List = filterFunc(searchQ)
        #checkBoxList = str(checkBoxList)[1:-1].replace(",","").replace(" ","")
        #insideList = str(insideList)[1:-1].replace(",","").replace(" ","")
        #filterClass = str(filterClass)[1:-1].replace(",","").replace(" ","")

        
        temp = []
        temp2 = []
        for i in checkBoxList:
            checkBoxList = i
            temp.append([checkBoxList])        
        
        t_NumberOfLink= []
        for m in NumberOfLink:
            t_NumberOfLink.append(m)
        NumOfLinks_arr2d = np.matrix(temp)
        NumOfLinks_to_add = np.array(t_NumberOfLink)
        output_NumOfLinks = np.column_stack((NumOfLinks_arr2d, NumOfLinks_to_add))
        f_NumOfLinks = output_NumOfLinks.tolist()
        
        t_NumberOfInput = []
        for m in NumberOfInput:
            t_NumberOfInput.append(m)
        NumberOfInput_arr2d = np.matrix(f_NumOfLinks)
        NumberOfInput_to_add = np.array(t_NumberOfInput)
        output_NumberOfInput = np.column_stack((NumberOfInput_arr2d, NumberOfInput_to_add))
        f_NumberOfInput = output_NumberOfInput.tolist()
        
        t_URL_List = []
        for m in URL_List:
            t_URL_List.append(m)
        URL_List_arr2d = np.matrix(f_NumberOfInput)
        URL_List_to_add = np.array(t_URL_List)
        output_URL_List = np.column_stack((URL_List_arr2d, URL_List_to_add))
        f_URL_List= output_URL_List.tolist()
        
        t_button_List = []
        for m in button_List:
            t_button_List.append(m)
        button_List_arr2d = np.matrix(f_URL_List)
        button_List_to_add = np.array(t_button_List)
        output_button_List = np.column_stack((button_List_arr2d, button_List_to_add))
        f_button_List= output_button_List.tolist()
        
        
        t_name= []
        for m in name_url:
            t_name.append(m)
        a_name = np.matrix(f_button_List)
        column_name = np.array(name_url)
        o_name = np.column_stack((a_name, column_name))
        f_name= o_name.tolist()
        
        end = time.time()
        
        hours, rem = divmod(end-start_time, 3600)
        minutes, seconds = divmod(rem, 60)
        print("\nTime takes: {:0>2}:{:0>2}:{:05.2f} Seconds\n".format(int(hours),int(minutes),seconds))
        return f_name
    

#get_class_data(turl[32])
def write_header():
    list_of_header = ["checkBoxList", "NumberOfLink","NumberOfInput", "URL_List", "button_List", "name_url"]
    save_path = 'result/filter/'
    file_name = "filter_test_set_1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(list_of_header)

def write_CSV(tlist):
    save_path = 'result/filter/'
    file_name = "filter_test_set_1.csv"
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



    