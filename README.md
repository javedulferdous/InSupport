# InSupport: Proxy Interface for Enabling Efficient Non - Visual Interaction with Web Data Records

### Abstract
<div align="justify"> 

Interaction with web data records typically involves accessing auxiliary webpage segments such as filters, sort options, search form, and multi-page links. As these segments are usually scattered all across the screen, it is arduous and tedious for blind users who rely on screen readers to access the segments, given that content navigation with screen readers is predominantly one-dimensional, despite the available support for skipping content via either special keyboard shortcuts or selective navigation. The extant techniques to overcome inefficient web screen reader interaction have mostly focused on general web content navigation, and as such they provide little to no support for data record-specific interaction activities such as filtering and sorting – activities that are equally important for enabling quick and easy access to the desired data records. To fill this void, we present InSupport, a browser extension that: (i) employs custom-built machine learning models to automatically extract auxiliary segments on any webpage containing data records, and (ii) provides an instantly accessible proxy one-stop interface for easily navigating the extracted segments using basic screen reader shortcuts. An evaluation study with 14 blind participants showed significant improvement in usability with InSupport, driven by increased reduction in interaction time and the number of key presses, compared to state-of-the-art solutions.
</div>

### What it does
It employs custom-built machine learning models to automatically extract auxiliary segments on any webpage containing data records, and provides an instantly accessible proxy one-stop interface for easily navigating the extracted segments using basic screen reader shortcuts.

To pop-open the extension and watch the list, press:

```
Windows: Ctrl+Shift+Z
Mac: Command+Shift+Z
Chromeos: Ctrl+Shift+Z
Linux: Ctrl+Shift+Z
```
### Extention installation guidelines
Please download the extension first and then follow the instructions:

Go to Google Chrome settings.
Click Extensions from the left panel.
Click on "Load unpacked" from the top panel. - Now you have to select the folder containing the extension files.
The extension will be added to your browser by now. If you change any code please save it and reload it from the extension window to get the impacts.


### Dataset

Model evaluation dataset can be found [here](https://drive.google.com/file/d/1XUQ8bP_yMrbaakuVhXT3_fn0e-iwda3A/view?usp=sharing).

1. Install  [gdown](https://github.com/wkentaro/gdown) by using `pip install gdown`.
2. run  `gdown --id 1XUQ8bP_yMrbaakuVhXT3_fn0e-iwda3A` command on the terminal/command prompt.

#####  Category by Number

<div align="center">

| No  |  Category Name | Number of webpage  | 
|:-:|:-:|:-:|
|  1  |  Shopping |  42 |
|  2 | Style & Fashion  | 36  |
|  3 |  Travel | 39  |
|  4 |  Hobbies & Interests | 6  |
|  5 |  Uncategorized |  51 |
|  6 |  Books and Literature | 4  |
|  7 |  Food & Drink | 3  |
|  8 |  Business and Finance | 10  |
|  9 |  Automotive | 2  |
|  10 |  Television | 1  |
|  11 |  Technology & Computing | 3  |
|  12 |  Events and Attractions |  1 |
|  13 |  Movies |  1 |
|  14 |  Home & Garden | 3  |
|  15 |  Sports |  4 |
|  16 |  Healthy Living |  2 |
|  17 |  Real Estate | 1  |
  
</div>


### Bibtex

```
@inproceedings{ferdous2022insupport,
  title={InSupport: Proxy Interface for Enabling Efficient Non-Visual Interaction with Web Data Records},
  author={Ferdous, Javedul and Lee, Hae-Na and Jayarathna, Sampath and Ashok, Vikas},
  booktitle={27th International Conference on Intelligent User Interfaces},
  pages={49--62},
  year={2022}
}
```
