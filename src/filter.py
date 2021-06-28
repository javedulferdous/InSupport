from init import *
from allURL import *

def pageListFunction(_url_):
    myFile=open(_url_,'r',encoding="latin-1")
    soup=BeautifulSoup(myFile,"html5lib")
    
    divPageList, navPageList,liPageList,ulPageList,spanPageList, sectionPageList, buttonPageList, \
    trPageList, footerPageList, aPageList, paginationPageList, bPageList \
    = soup.findAll('div',{"data-attribute":"page"}), soup.findAll('nav',{"data-attribute":"page"}), \
    soup.findAll('li',{"data-attribute":"page"}), soup.findAll('ul',{"data-attribute":"page"}),\
    soup.findAll('span',{"data-attribute":"page"}), soup.findAll('section',{"data-attribute":"page"}), \
    soup.findAll('button',{"data-attribute":"page"}), soup.findAll('tr',{"data-attribute":"page"}), \
    soup.findAll('footer',{"data-attribute":"page"}), soup.findAll('a',{"data-attribute":"page"}), \
    soup.findAll('pagination',{"data-attribute":"page"}), soup.findAll('b',{"data-attribute":"page"})
    
    try:
        if divPageList != []:    
            d_url_, d_NumOfButton, d_NumOfLinks, d_commonURL, d_NumberOfValues, d_page_attribute, d_PageListClass = pageList_Extract(soup, 'div',_url_)
            return d_url_, d_NumOfButton, d_NumOfLinks, d_commonURL, d_NumberOfValues, d_page_attribute, d_PageListClass
        
        if navPageList != []:    
            n_url_, n_NumOfButton, n_NumOfLinks, n_commonURL, n_NumberOfValues, n_page_attribute, n_PageListClass = pageList_Extract(soup, 'nav',_url_)
            return n_url_, n_NumOfButton, n_NumOfLinks, n_commonURL, n_NumberOfValues, n_page_attribute, n_PageListClass
        
        if liPageList != []: 
            l_url_, l_NumOfButton, l_NumOfLinks, l_commonURL, l_NumberOfValues, l_page_attribute, l_PageListClass = pageList_Extract(soup, 'li',_url_)
            return l_url_, l_NumOfButton, l_NumOfLinks, l_commonURL, l_NumberOfValues, l_page_attribute, l_PageListClass
        
        if ulPageList != []: 
            u_url_, u_NumOfButton, u_NumOfLinks, u_commonURL, u_NumberOfValues, u_page_attribute, u_PageListClass = pageList_Extract(soup, 'ul',_url_)
            return u_url_, u_NumOfButton, u_NumOfLinks, u_commonURL, u_NumberOfValues, u_page_attribute, u_PageListClass
        
        if spanPageList != []:  
            span_url_, span_NumOfButton, span_NumOfLinks, span_commonURL, span_NumberOfValues, span_page_attribute, span_PageListClass = pageList_Extract(soup, 'span',_url_)
            return span_url_, span_NumOfButton, span_NumOfLinks, span_commonURL, span_NumberOfValues, span_page_attribute, span_PageListClass
        
        if sectionPageList != []: 
            sec_url_, sec_NumOfButton, sec_NumOfLinks, sec_commonURL, sec_NumberOfValues, sec_page_attribute, sec_PageListClass = pageList_Extract(soup, 'section',_url_) 
            return sec_url_, sec_NumOfButton, sec_NumOfLinks, sec_commonURL, sec_NumberOfValues, sec_page_attribute, sec_PageListClass 
        
        if buttonPageList != []: 
            btn_url_, btn_NumOfButton, btn_NumOfLinks, btn_commonURL, btn_NumberOfValues, btn_page_attribute, btn_PageListClass = pageList_Extract(soup, 'button',_url_) 
            return btn_url_, btn_NumOfButton, btn_NumOfLinks, btn_commonURL, btn_NumberOfValues, btn_page_attribute, btn_PageListClass
        
        if trPageList != []: 
            tr_url_, tr_NumOfButton, tr_NumOfLinks, tr_commonURL, tr_NumberOfValues, tr_page_attribute, tr_PageListClass = pageList_Extract(soup, 'tr',_url_) 
            return tr_url_, tr_NumOfButton, tr_NumOfLinks, tr_commonURL, tr_NumberOfValues, tr_page_attribute, tr_PageListClass
        
        if footerPageList != []: 
            ft_url_, ft_NumOfButton, ft_NumOfLinks, ft_commonURL, ft_NumberOfValues, ft_page_attribute, ft_PageListClass = pageList_Extract(soup, 'footer',_url_) 
            return ft_url_, ft_NumOfButton, ft_NumOfLinks, ft_commonURL, ft_NumberOfValues, ft_page_attribute, ft_PageListClass 
        
        if aPageList != []: 
            a_url_, a_NumOfButton, a_NumOfLinks, a_commonURL, a_NumberOfValues, a_page_attribute, a_PageListClass = pageList_Extract(soup, 'a',_url_) 
            return a_url_, a_NumOfButton, a_NumOfLinks, a_commonURL, a_NumberOfValues, a_page_attribute, a_PageListClass
        
        if paginationPageList != []: 
            pg_url_, pg_NumOfButton, pg_NumOfLinks, pg_commonURL, pg_NumberOfValues, pg_page_attribute, pg_PageListClass = pageList_Extract(soup, 'pagination',_url_) 
            return pg_url_, pg_NumOfButton, pg_NumOfLinks, pg_commonURL, pg_NumberOfValues, pg_page_attribute, pg_PageListClass
        
        if bPageList != []: 
            b_url_, b_NumOfButton, b_NumOfLinks, b_commonURL,  b_NumberOfValues, b_page_attribute, b_PageListClass = pageList_Extract(soup, 'b',_url_)  
            return  b_url_, b_NumOfButton, b_NumOfLinks, b_commonURL,  b_NumberOfValues, b_page_attribute, b_PageListClass
        else:
            return _url_,"0","0","0","0","0","1"
    except:
        pass

def search(myDict, search1):
    search.a=[]
    for key, value in myDict.items():
        if search1 in value:
            search.a.append(key)
    return len(search.a)

def pageList_Extract(soup, tag,_url_):  
    pageClass, NumOfPage, pageListAttribute, is_page, NumOfButton, NumOfLinks, NumberOfValues, outsideURL, insideURL, commonURL \
    = [] ,[], [],[], [], [], [], [], [], []
    count, btn, valueCounter = 0, 0, 0
    print("Tag: ", tag)
    for ele in soup.findAll(tag):
        try:
            if "data-attribute" in list(ele.attrs.keys()) and "page" in list(ele.attrs.values()):
                #print(ele)
                nText = ele.text
                #=======================Page Class======================= 
                pageClass.append(1)
                #=======================Page Name======================= 
                is_present = bool(re.search('page', str(ele)) or re.search('show', str(ele)))
                if(is_present == True):
                    is_page.append(1)
                else:
                    is_page.append(0)
                #====================Number of links==================== 
                for link in ele.find_all('a'):
                    count += 1
                NumOfLinks.append(count)
                #====================Number of Button==================== 
                for btnlink in ele.find_all('button'):
                    btn += 1
                NumOfButton.append(btn)
                #=======================Common url=======================
                for link in ele.find_all('a'):
                    insideURL.append(link.get('href'))
                
                for link in soup.find_all('a'):
                    outsideURL.append(link.get('href'))

                s = set(insideURL)
                temp3 = [x for x in outsideURL if x not in s]
                commonURL.append(len(outsideURL)-len(temp3))
                
                #=====================Number of values=====================
                for link in ele.find_all('a'):
                    if (link.text).isdigit()==True:
                        valueCounter += 1
                NumberOfValues.append(valueCounter)
                #print(valueCounter)
                    
            else:
                pageClass.append(0)
                is_page.append(0)
                NumOfButton.append(0)
                NumOfLinks.append(0)
                commonURL.append(0)
                NumberOfValues.append(0)
        except:
                is_page.append(0)
                NumOfButton.append(0)
                NumOfLinks.append(0)
                commonURL.append(0)
                NumberOfValues.append(0)
    
    name_url = len(pageClass)*[_url_]
    if (NumOfLinks ==[] or NumOfLinks is None):
        NumOfLinks = [0]
    if (NumOfButton ==[] or NumOfButton is None):
        NumOfButton = [0] 
    if (commonURL ==[] or commonURL is None):
        commonURL = [0] 
    if (pageClass == [] or pageClass is None):
        pageClass = [1]
    if (is_page == [] or is_page is None):
        is_page = [0]
    if (NumberOfValues == [] or NumberOfValues is None):
        NumberOfValues = [0]
    #print(len(name_url), len(NumOfButton), len(NumOfLinks), len(commonURL), len(is_page), len(pageClass))     
    return name_url, NumOfButton, NumOfLinks, commonURL, NumberOfValues, is_page, pageClass 

def get_class_data(searchQ) :
        start_time= time.time()
        name_url, NumOfButton, NumOfLinks, commonURL,NumberOfValues, is_page, pageClass = pageListFunction(searchQ)
        #checkBoxList = str(checkBoxList)[1:-1].replace(",","").replace(" ","")
        #insideList = str(insideList)[1:-1].replace(",","").replace(" ","")
        #filterClass = str(filterClass)[1:-1].replace(",","").replace(" ","")

        temp = []
        temp2 = []
        for i in NumOfButton:
            NumOfButton = i
            temp.append([NumOfButton])        
        
        t_NumOfLinks= []
        for m in NumOfLinks:
            t_NumOfLinks.append(m)
        NumOfLinks_arr2d = np.matrix(temp)
        NumOfLinks_to_add = np.array(t_NumOfLinks)
        output_NumOfLinks = np.column_stack((NumOfLinks_arr2d, NumOfLinks_to_add))
        f_NumOfLinks = output_NumOfLinks.tolist()
        
        t_commonURL = []
        for m in commonURL:
            t_commonURL.append(m)
        commonURL_arr2d = np.matrix(f_NumOfLinks)
        commonURL_to_add = np.array(t_commonURL)
        output_commonURL = np.column_stack((commonURL_arr2d, commonURL_to_add))
        f_commonURL = output_commonURL.tolist()
        
        t_is_Page = []
        for m in is_page:
            t_is_Page.append(m)
        is_Page_arr2d = np.matrix(f_commonURL)
        is_Page_to_add = np.array(t_is_Page)
        output_is_Page = np.column_stack((is_Page_arr2d, is_Page_to_add))
        f_is_Page = output_is_Page.tolist()
        
        t_NumberOfValues = []
        for m in NumberOfValues:
            t_NumberOfValues.append(m)
        NumberOfValues_arr2d = np.matrix(f_is_Page)
        NumberOfValues_to_add = np.array(t_NumberOfValues)
        output_NumberOfValues = np.column_stack((NumberOfValues_arr2d, NumberOfValues_to_add))
        f_NumberOfValues = output_NumberOfValues.tolist()
        
        t_pageClass = []
        for m in pageClass:
            t_pageClass.append(m)
        pageClass_arr2d = np.matrix(f_NumberOfValues)
        pageClass_to_add = np.array(t_pageClass)
        output_pageClass = np.column_stack((pageClass_arr2d, pageClass_to_add))
        f_pageClass = output_pageClass.tolist()
        
        t_name= []
        for m in name_url:
            t_name.append(m)
        a_name = np.matrix(f_pageClass)
        column_name = np.array(name_url)
        o_name = np.column_stack((a_name, column_name))
        f_name= o_name.tolist()
        
        end = time.time()
        
        hours, rem = divmod(end-start_time, 3600)
        minutes, seconds = divmod(rem, 60)
        print("\nTime takes: {:0>2}:{:0>2}:{:05.2f} Seconds\n".format(int(hours),int(minutes),seconds))
        return f_name

def write_CSV(tlist):
    save_path = 'test/'
    file_name = "filterList_test_1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerows(tlist)
    with open(completeName, "r", newline="") as fr:
        reader = csv.reader(fr)
        lines= len(list(reader))
        print("[",lines,"].", "rows!")

def write_header():
    list_of_header = ["NumOfButton", "NumOfLinks", "commonURL","is_page", "NumberOfValues","pageClass", "name_url"]
    save_path = 'folder/'
    file_name = "filterList_test_1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(list_of_header)

def main():
    write_header()
    
    for i in range(0,209):
            print(write_CSV(get_class_data(urllist[i])))

if __name__ == "__main__":
    main()