
## Enabling EfficientWeb Data-Record Interaction for People with Visual Impairments via Proxy Interfaces

### Dataset

Algorithm evaluation dataset can be found [here.](https://drive.google.com/drive/folders/1Oe4MD59RU5fvZmTrmfkvS847MOcdxbKi?usp=sharing)

or

run  `gdown --id 1Oe4MD59RU5fvZmTrmfkvS847MOcdxbKi` command on the terminal/command prompt.


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

