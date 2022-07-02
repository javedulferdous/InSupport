from init import *
from testURL import *

def filterFunc(_url_):
    sort_inner, sortClass,option_tag_attribute_value, sort_attribute,t_count  = ([] for i in range(5)) 
    
    myFile=open(_url_,'r',encoding="latin-1")
    soup=BeautifulSoup(myFile,"html5lib")
    
    divFilter, ulFilter, liFilter, formFilter, sectionFilter, fieldsetFilter, dtFilter,\
    buttonFilter,articleFilter,dlFilter,desktopfacetFilter = \
    soup.findAll('div',{"data-attribute":"filter"}),soup.findAll('ul',{"data-attribute":"filter"}),\
    soup.findAll('li',{"data-attribute":"filter"}), soup.findAll('form',{"data-attribute":"filter"}),\
    soup.findAll('section',{"data-attribute":"filter"}), soup.findAll('fieldset',{"data-attribute":"filter"}),\
    soup.findAll('dt',{"data-attribute":"filter"}),soup.findAll('button',{"data-attribute":"filter"}),\
    soup.findAll('article',{"data-attribute":"filter"}), soup.findAll('dl',{"data-attribute":"filter"}),\
    soup.findAll('desktop-facet',{"data-attribute":"filter"})
    try:
        if divFilter != []:    
            div_name_url, div_checkBoxList, div_NumberOfLink, div_NumberOfInput, div_URL_List, div_button_List, div_filterClass = filter_Extract(soup, 'div',_url_)
            return div_name_url, div_checkBoxList, div_NumberOfLink, div_NumberOfInput, div_URL_List, div_button_List, div_filterClass
        if liFilter != []:    
            li_name_url,  li_checkBoxList,  li_NumberOfLink,  li_NumberOfInput,  li_URL_List, li_button_List, li_filterClass = filter_Extract(soup, 'li',_url_)
            return li_name_url,  li_checkBoxList,  li_NumberOfLink,  li_NumberOfInput, li_URL_List, li_button_List, li_filterClass
        if buttonFilter != []:    
            button_name_url, button_checkBoxList, button_NumberOfLink, button_NumberOfInput, button_URL_List, button_button_List, button_filterClass = filter_Extract(soup, 'button',_url_)
            return button_name_url, button_checkBoxList, button_NumberOfLink, button_NumberOfInput, button_URL_List, button_button_List, button_filterClass
        if dlFilter != []:    
            dl_name_url, dl_checkBoxList, dl_NumberOfLink, dl_NumberOfInput, dl_URL_List, dl_button_List, dl_filterClass = filter_Extract(soup, 'dl',_url_)
            return dl_name_url, dl_checkBoxList, dl_NumberOfLink, dl_NumberOfInput, dl_URL_List, dl_button_List, dl_filterClass 
        if desktopfacetFilter != []:    
            df_name_url, df_checkBoxList, df_NumberOfLink, df_NumberOfInput, df_URL_List, df_button_List, df_filterClass = filter_Extract(soup, 'desktop-facet',_url_)
            return df_name_url, df_checkBoxList, df_NumberOfLink, df_NumberOfInput, df_URL_List, df_button_List, df_filterClass
        if articleFilter != []:    
            art_name_url, art_checkBoxList, art_NumberOfLink, art_NumberOfInput, art_URL_List, art_button_List, art_filterClass = filter_Extract(soup, 'article',_url_)
            return art_name_url, art_checkBoxList, art_NumberOfLink, art_NumberOfInput, art_URL_List, art_button_List, art_filterClass
        if dtFilter != []:    
            dt_name_url, dt_checkBoxList, dt_NumberOfLink, dt_NumberOfInput, dt_URL_List, dt_button_List, dt_filterClass = filter_Extract(soup, 'dt',_url_)
            return dt_name_url, dt_checkBoxList, dt_NumberOfLink, dt_NumberOfInput, dt_URL_List, dt_button_List, dt_filterClass 
        if fieldsetFilter != []:    
            f_name_url, f_checkBoxList, f_NumberOfLink, f_NumberOfInput, f_URL_List, f_button_List, f_filterClass = filter_Extract(soup, 'fieldset',_url_)
            return f_name_url, f_checkBoxList, f_NumberOfLink, f_NumberOfInput, f_URL_List, f_button_List, f_filterClass
        if sectionFilter != []:    
            s_name_url, s_checkBoxList, s_NumberOfLink, s_NumberOfInput, s_URL_List, s_button_List, s_filterClass = filter_Extract(soup, 'section',_url_)
            return s_name_url, s_checkBoxList, s_NumberOfLink, s_NumberOfInput, s_URL_List, s_button_List, s_filterClass
        if formFilter != []:    
            form_name_url, form_checkBoxList, form_NumberOfLink, form_NumberOfInput, form_URL_List, form_button_List, form_filterClass = filter_Extract(soup, 'form',_url_)
            return form_name_url, form_checkBoxList, form_NumberOfLink, form_NumberOfInput, form_URL_List, form_button_List, form_filterClass
        if ulFilter != []:    
            ul_name_url, ul_checkBoxList, ul_NumberOfLink, ul_NumberOfInput, ul_URL_List, ul_button_List, ul_filterClass = filter_Extract(soup, 'ul',_url_)
            return ul_name_url, ul_checkBoxList, ul_NumberOfLink, ul_NumberOfInput, ul_URL_List, ul_button_List, ul_filterClass
        else:
            return _url_,"0","0","0","0","0","1"
    except:
        pass
def filter_Extract(soup, tag,_url_):
    fCount  = 0
    filterClass, checkBoxList,insideList,outerList, NumberOfFilter, NumberOfLink, temp2,\
    NumberOfInput, URL_List, button_List = [], [], [], [], [], [], [], [], [], []
    
    for ele in soup.findAll(tag):
                if "data-attribute" in list(ele.attrs.keys()) and "filter" in list(ele.attrs.values()):
                        #======================= filterClass =======================
                        filterClass.append(1)
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

    name_url = len(filterClass)*[_url_]
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
    if (filterClass == [] or filterClass is None):
        filterClass = [1]

    return name_url, checkBoxList, NumberOfLink, NumberOfInput, URL_List, button_List, filterClass
def get_class_data(searchQ) :
        start_time= time.time()
        name_url, checkBoxList, NumberOfLink, NumberOfInput, URL_List, button_List, filterClass = filterFunc(searchQ)
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
        
        t_filterClass = []
        for m in filterClass:
            t_filterClass.append(m)
        filterClass_arr2d = np.matrix(f_button_List)
        filterClass_to_add = np.array(t_filterClass)
        output_filterClass = np.column_stack((filterClass_arr2d, filterClass_to_add))
        f_filterClass = output_filterClass.tolist()
        
        t_name= []
        for m in name_url:
            t_name.append(m)
        a_name = np.matrix(f_filterClass)
        column_name = np.array(name_url)
        o_name = np.column_stack((a_name, column_name))
        f_name= o_name.tolist()
        
        end = time.time()
        
        hours, rem = divmod(end-start_time, 3600)
        minutes, seconds = divmod(rem, 60)
        print("\nTime takes: {:0>2}:{:0>2}:{:05.2f} Seconds\n".format(int(hours),int(minutes),seconds))
        return f_name
    
def write_header():
    list_of_header = ["checkBoxList", "NumberOfLink","NumberOfInput", "URL_List", "button_List","filterClass", "name_url"]
    save_path = 'result/filter/'
    file_name = "filter_GT__1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(list_of_header)

def write_CSV(tlist):
    save_path = 'result/filter/'
    file_name = "filter_GT__1.csv"
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
