from init import *
from allURL import *
def pageListFunction(_url_):
    myFile=open(_url_,'r',encoding="latin-1")
    soup=BeautifulSoup(myFile,"html5lib")
    
    divPageList, navPageList,liPageList,ulPageList,spanPageList, sectionPageList, buttonPageList, \
    trPageList, footerPageList, aPageList, paginationPageList, bPageList \
    = soup.findAll('div'), soup.findAll('nav'), \
    soup.findAll('li'), soup.findAll('ul'),\
    soup.findAll('span'), soup.findAll('section'), \
    soup.findAll('button'), soup.findAll('tr'), \
    soup.findAll('footer'), soup.findAll('a'), \
    soup.findAll('pagination'), soup.findAll('b')
    
    try:
        if divPageList != []:    
            return pageList_Extract(soup, 'div',_url_)
        
        if navPageList != []:    
            return pageList_Extract(soup, 'nav',_url_)
        
        if liPageList != []: 
            return pageList_Extract(soup, 'li',_url_)
        
        if ulPageList != []: 
            return pageList_Extract(soup, 'ul',_url_)
        
        if spanPageList != []:  
            return pageList_Extract(soup, 'span',_url_)
        
        if sectionPageList != []: 
            return pageList_Extract(soup, 'section',_url_) 
        
        if buttonPageList != []: 
            return pageList_Extract(soup, 'button',_url_)
        
        if trPageList != []: 
            return pageList_Extract(soup, 'tr',_url_) 
        
        if footerPageList != []: 
            return pageList_Extract(soup, 'footer',_url_) 
        
        if aPageList != []: 
            return pageList_Extract(soup, 'a',_url_) 
        
        if paginationPageList != []: 
            
            return pageList_Extract(soup, 'pagination',_url_) 
        
        if bPageList != []: 
            return  pageList_Extract(soup, 'b',_url_)  
        else:
            return _url_,"0","0","0","0","0","0","0"
    except:
        pass
def search(myDict, search1):
    search.a=[]
    for key, value in myDict.items():
        if search1 in value:
            search.a.append(key)
    return len(search.a)


def pageList_Extract(soup, tag,_url_):  
    pageClass, NumOfPage, pageListAttribute, is_page, NumOfButton, NumOfLinks, NumberOfValues, outsideURL, insideURL, commonURL, \
    navType= [] ,[], [],[], [], [], [], [], [], [], []
    
    print("Tag: ", tag)
    for ele in soup.findAll(tag):
        try:
                count, btn, valueCounter = 0, 0, 0
                nText = ele.text
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
                insideURL, outsideURL = [], []
                for link in ele.find_all('a'):
                    insideURL.append(link.get('href'))
                for link in soup.find_all('a'):
                    outsideURL.append(link.get('href'))
                def compare(list1,list2):
                    ln= []
                    for i in list1:
                        if i  in list2:
                           ln.append(i)
                    return ln
                s = -len(set(compare(insideURL,outsideURL)))+len(outsideURL)
                commonURL.append(s)
                
                #=====================Number of values=====================
                for link in ele.find_all('a'):
                    if (link.text).isdigit()==True:
                        valueCounter += 1
                NumberOfValues.append(valueCounter)
                #print(valueCounter)
                
                #=====================Number of pages=====================
                temp1 = re.findall(r'\d+', ele.text) 
                res2 = list(map(int, temp1))
                if(len(res2)==1):
                    if res2==[0] or res2==[]:
                        NumOfPage.append(1)
                    else:
                        NumOfPage.append(str(res2[0])[0:2])
                else:
                    if res2==[0] or res2==[]:
                        NumOfPage.append(1)
                    else:
                        NumOfPage.append(str(res2[-1])[0:2])
                #=====================Navigation type=====================
                nav = ele.find('button')
                alink = ele.find('a')
                if (bool(nav)) == True:
                    if(bool(alink)) == True and (bool(nav)) == True:
                        navType.append(3)
                    else:
                        navType.append(1)
                elif(bool(alink)) == True:
                    navType.append(2)
                else:
                    navType.append(0)
        except:
                NumOfPage.append(0)
                navType.append(0)
                pass
    
    name_url = len(NumOfLinks)*[_url_]
    if (NumOfLinks ==[] or NumOfLinks is None):
        NumOfLinks = [0]
    if (NumOfButton ==[] or NumOfButton is None):
        NumOfButton = [0] 
    if (commonURL ==[] or commonURL is None):
        commonURL = [0] 
    if (is_page == [] or is_page is None):
        is_page = [0]    
    if (NumOfPage == [] or NumOfPage is None):
        NumOfPage = [0]
    if (NumberOfValues == [] or NumberOfValues is None):
        NumberOfValues = [0]
    if (navType == [] or navType is None):
        navType = [0]
    #print(len(navType), len(name_url), len(NumOfButton), len(NumOfLinks), (commonURL), len(is_page), len(pageClass), len(NumOfPage))     
    return name_url, NumOfButton, NumOfLinks, commonURL, NumberOfValues, is_page, NumOfPage, navType 

#print(pageListFunction(turl[4]))
def get_class_data(searchQ) :
        start_time= time.time()
        name_url, NumOfButton, NumOfLinks, commonURL,NumberOfValues, is_page, NumOfPage, navType = pageListFunction(searchQ)
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
        
        t_NumOfPage = []
        for m in NumOfPage:
            t_NumOfPage.append(m)
        NumOfPage_arr2d = np.matrix(f_is_Page)
        NumOfPage_to_add = np.array(t_NumOfPage)
        output_NumOfPage = np.column_stack((NumOfPage_arr2d, NumOfPage_to_add))
        f_NumOfPage = output_NumOfPage.tolist()
        
        t_NumberOfValues = []
        for m in NumberOfValues:
            t_NumberOfValues.append(m)
        NumberOfValues_arr2d = np.matrix(f_NumOfPage)
        NumberOfValues_to_add = np.array(t_NumberOfValues)
        output_NumberOfValues = np.column_stack((NumberOfValues_arr2d, NumberOfValues_to_add))
        f_NumberOfValues = output_NumberOfValues.tolist()
        
        t_navType = []
        for m in navType:
            t_navType.append(m)
        navType_arr2d = np.matrix(f_NumberOfValues)
        navType_to_add = np.array(t_navType)
        output_navType = np.column_stack((navType_arr2d, navType_to_add))
        f_navType = output_navType.tolist()
        

        
        t_name= []
        for m in name_url:
            t_name.append(m)
        a_name = np.matrix(f_navType)
        column_name = np.array(name_url)
        o_name = np.column_stack((a_name, column_name))
        f_name= o_name.tolist()
        
        end = time.time()
        
        hours, rem = divmod(end-start_time, 3600)
        minutes, seconds = divmod(rem, 60)
        print("\nTime takes: {:0>2}:{:0>2}:{:05.2f} Seconds\n".format(int(hours),int(minutes),seconds))
        return f_name
    
#get_class_data(turl[4])    
def write_header():
    list_of_header = ["NumOfButton", "NumOfLinks", "commonURL","is_page", "NumOfPage", "NumberOfValues","navType", "name_url"]
    save_path = 'result/page/'
    file_name = "page_test_set__1.csv"
    completeName = os.path.join(save_path, file_name)

    with open(completeName, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(list_of_header)

def write_CSV(tlist):
    save_path = 'result/page/'
    file_name = "page_test_set__1.csv"
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
