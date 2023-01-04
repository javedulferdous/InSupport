
## Enabling Efficient Web Data-Record Interaction for People with Visual Impairments via Proxy Interfaces

### Abstract
<div align="justify"> 

Web data records are usually accompanied by auxiliary webpage segments such as filters, sort options, search
form, and multi-page links, to enhance interaction efficiency and convenience for end users. However, blind
and visually impaired (BVI) persons are presently unable to fully exploit the auxiliary segments like their
sighted peers, since these segments are scattered all across the screen, and as such assistive technologies used
by BVI users, i.e., screen reader and screen magnifier, are not geared for efficient interaction with such scattered
content. Specifically, for blind screen reader users, content navigation is predominantly one-dimensional
despite the support for skipping content, and therefore navigating to-and-fro between different parts of the
webpage is tedious and frustrating. Similarly, low vision screen magnifier users have to continuously pan
back-and-forth between different portions of a webpage, given that only a portion of the screen is viewable at
any instant due to content enlargement. The extant techniques to overcome inefficient web interaction for BVI
users have mostly focused on general web-browsing activities, and as such they provide little to no support for
data record-specific interaction activities such as filtering and sorting – activities that are equally important
for facilitating quick and easy access to desired data records. To fill this void, we present InSupport, a browser
extension that: (i) employs custom machine learning-based algorithms to automatically extract auxiliary
segments on any webpage containing data records; and (ii) provides an instantly accessible proxy one-stop
interface for easily navigating the extracted auxiliary segments using either basic keyboard shortcuts or
mouse actions. Evaluation studies with 14 blind participants and 16 low vision participants showed significant
improvement in web usability with InSupport, driven by increased reduction in interaction time and user
effort, compared to state-of-the-art solutions.
</div>

### Dataset

Algorithm evaluation dataset can be found [here.]([https://drive.google.com/drive/folders/1Oe4MD59RU5fvZmTrmfkvS847MOcdxbKi?usp=sharing](https://olddominion-my.sharepoint.com/:f:/g/personal/mferd002_odu_edu/ErtjFoD0jpFKkdo8_Xr7CysBQ7miD21CXxR6TJqVC6CXPw?e=TkYiFz))



#####  Category by Number

<div align="center">

| No  |  Category Name | Number of webpage  | 
|:-:|:-:|:-:|
|  1 | Miscellaneous  | 6  |
|  2 |  Real Estate Industry  | 19  |
|  3 |  Personal Finance | 1  |
|  4 |  Shopping |  56 |
|  5 |  Design and Art | 1  |
|  6 |  Lifestyle | 2  |
|  7 |  Travel | 5  |
|  8 |  Home & Garden | 4  |
|  9 |  Finance | 3  |
|  10 |  Technology & Computing | 2  |
|  11 |  Sports | 1  |

  
</div>


### Source Code

* **Eval**: Contains all the code to evaluate the model in terms of ground truth.
    * There are four type code available here
    
       * *Fetch_to_model_FEATURE.py*: Fetch testing dataset to model.
       * *FEATURE_Eval.py*: Extract all the features from this dataset by using the feature.
       * *Model_Eval_FEATURE.py*: Predict whether the model predicts the positive result or not. 
       * *Split_CSV_FEATURE.py*: Split our original extracted CSV file into several CSV files based on the website name.

* **GT**: Contains the code to extract all the ground truth for four auxiliary segments.

* **Model**: Contains both the model and code to extract the model for auxiliary features.

    * **Filter options**: MLP classifier
    * **Sort options**:  MLP classifier
    * **Search form**: Logistic regression
    * **Multi-page links**:  Logistic regression

* **result**: Content the CSV file for both ground truth and extracted feature from each of the auxiliary features.

* **init.py**: Library file

*  **testURL.py**: The source for our test dataset

### Procedure
Most of the code is contained in two folders: Eval, and GT. Inside of GT folder, existing the code will produce all the ground truth for each of the auxiliary segments, therefore, this folder needs to be executed first. The instruction running all code in the Eval folder is as follows:

1. *Feature*_Eval.py
2. Split_CSV_*Feature*.py
3. Fetch_to_model_*Feature*.py
4. Model_Eval_*Feature*.py

### Evaluation
We keep updating our work to have a better performance using the model.
Our reported result:

|Feature |Search  |  Sort | Filter | Multilink Page |
|:-:|:-:|:-:|:-:|:-:|
|Accuracy|0.87 |0.90 |0.82 |0.86 |
|Precision|0.98 |0.86 |0.85 |0.95 |
|Recall|0.83 | 0.98|0.95 | 0.89|

Our current result

|Feature |Search  |  Sort | Filter | Multilink Page |
|:-:|:-:|:-:|:-:|:-:|
|Accuracy|0.87 |0.9 | 0.9|0.97 |
|Precision|0.98 |0.86 | 1|1 |
|Recall|0.83 | 0.98|0.9 | 0.97|

### Bibtex

```
[Not available right now]
```

