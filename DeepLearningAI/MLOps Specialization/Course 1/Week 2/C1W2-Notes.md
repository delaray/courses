# Select and Train a Model

## Learning Objectives

- Identify the key challenges in model development.  
- Describe how performance on a small set of disproportionately important examples may be more crucial than performance on the majority of examples.  
- Explain how rare classes in your training data can affect performance.  
- Define three ways of establishing a baseline for your performance.  
- Define structured vs. unstructured data.  
- Identify when to consider deployment constraints when choosing a model.  
- List the steps involved in getting started with ML modeling.  
- Describe the iterative process for error analysis.  
- Identify the key factors in deciding what to prioritize when working to improve model accuracy.  
- Describe methods you might use for data augmentation given audio data vs. image data.  
- Explain the problems you can have training on a highly skewed dataset.  
- Identify a use case in which adding more data to your training dataset could actually hurt performance.  
- Describe the key components of experiment tracking.  

----

## Selecting and Training a Model

### Modeling Overview

### Key Challenges

AI System = Code + Data__

Challenges in Model Development__
1. Doing well on training set__
2. Doing well on dev/test set__
3. Doing well on business metrics/project goals__
  
  
### Why Low Average Error Isn't Good Enough

Performance on disproportionately import examples__

Informational and Transactional Queries__
Navigational Queies__

Perfoprmance on Key S;ices of ther Dataset__

Example: ML for Loan Approval__
- Do no discriminate by ethnicity, gender, location,...__

Example: Product Recommendations__
- Treat major users, retailers and product categories fairly __

Rare Classes__
- Skewed data disdtribution__
- Medical domain:__
  99% Negative, 1% Positive__
  
### Establish a Baseline

- First step: establish a baseline__

- Example: Four typer of SR__
  - Clear Speech__
  - Car Noise__
  - People Noise__
  - Low Bandwidth__
  
- Can use human-level performance vas baseline__

- Ways to establish a baseline__
  - Human level performance (HLP)__
  - Literature Search__
  - Quick and Dirty implementation (opewn-source)__
  - Performance of an older system__

### Tips for Getting Started

- ML is an iterativee process__
- First iteration__
  - Literature search__
  - Don't obsess on SOTA__
  - Find Open-source implementastion__
  - Reasonable alg with good data better than better alg with worse data__
  - Take deployment constraints?__
    - Yes if baseline established and goal is deployment__
	- No if goal is to establish a baselinew__
	
- Snaity-check for code and algorithm__
  - Try to overfit a on small dsataset before moving to larger one__
	

----

## Error Analysis and Performance Auditing

### Error Analysis Example

- Speech Recognition Errorr Analysis Example__
  - Use a spreadsheet to manually compare label & prediction__
  - Identify cases with car noise, people noise or both__
  - Can use MLOps tools to faciliate anmalysis__
  
- Iterative process of error analysi8s__
  - Propose new tags__
  
- Tag sources for visual inspection__
  Specifoic class labels__
  Image properties__
  Other meta-data: phone model, fdactory__
    
- Useful metrics for each tag__
  Percent oof errors with that tag__
  What fraction of the data has that tag__
  How much room for improvement__
  
### Prioritizing What to Work On

- Look at the  percent of data affected by the improvement of each tag__
- Start with the one that has most overall impact__
- Decide on the most important categories vto work on__
  - How much ropom for improvement__
  
- Add/Imprtove data for specific categories

### Skewed Datasets

- If 99.7% no defect ==> print("0") has 99.7%__
- Raw accuracy not very useful__

- Can build a Confusion Matrix__
  - Precision: Percent the algorithm got right__
    - Precision = TP / (TP+FP)__
  - Recall: __
    - Recall: TP / (TP + FN)__
  - F1 Score: Combining Precision & Recall__
    - Harmonic mean__
	- F1 = 2 / (1/P) + (1/R)__
	
- Multiclass Metrics__
  - Defect types: Scratch, Dent, Discoloration...__
  - Look at F1 score of each defect.__

### Performance Auditing 

- Final audit performance__

- Check for accuracy, fairnmess/bias or other problkems__
1. Brainstorm ways system might go wrong__
2. Establish metrics to assess performance__
3. Get business/product owner buy-in__

    
  
----

## Data Iteration

### Data-Centric AI development

- Focus on improving the data and not the code.

### A usefule picture of Data Augmentation

- For unstructured Data, augmenting one area is unlikely to negatively impact other areas.__
- Gap between model performance and human performance indicates where data augmentation most effective.__

### Data Augmentation

- Speech recognition Example
  - Take a sample audio clip 
  - Add noise from different sources
  
- Goal:
  Create examples the algorithm does poorly on but humans (or baeline) do well on__
  
- Image Example
  - Flip image vertically
  - Brighten image
  - Darken image
  
  - Use photoshop
  - Use GANs
  
- Data Iteration Loop
  - Hold Model fixed
  - Add/improve data
  - Error analysis
  - Loop

### Can Addding Data hurt?

- For unstructured data the answer is usually "no".
- Exceptions:
  Adding "I" to system thatr reads house numbers may effect its performance on "1".

### Adding Features

- Structured Data
  - Adding new examples can be hard
  - Adding new features may be feasible
  
- Designing features for small datasets and structured data

### Experiment Tracking

- What to track
  - Algorithm/code versioning
  - Dataset used
  - Hyperparameters
  - Results
  
- Tracking Tools
  - Text files
  - Spreadsheet
  - Experiment tracking System

- Desiorable Features
  - Info needed to replicxate resultsa
  - Experiment resul analysis
  - Resource monitoring
  - Visualiuzation
  - Model error analysis

### From Big Data to Good Data

----


