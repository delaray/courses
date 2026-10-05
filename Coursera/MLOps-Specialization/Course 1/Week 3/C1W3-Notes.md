# Data Definition and Baseline

## Learning Objectives

- List the questions you need to answer in the process of data definition.__
- Compare and contrast the types of data problems you need to solve for structured vs. unstructured and big vs. small data.__
- Explain why label consistency is important and how you can improve it__
- Explain why beating human level performance is not always indicative of success of an ML model.__
- Make a case for improving human level performance rather than beating it.__
- Identify how much training data you should gather given time and resource constraints.__
- Describe the key steps in a data pipeline.__
- Compare and contrast the proof of concept vs. production phases on an ML project.__
- Explain the importance of keeping track of data provenance and lineage.__

----

## Define Data and Establish Baseline

- Use consdistent labeling conventions  
  - E.g. Bounding box of iguana images  
  - E.g. Bounding box(es) on phone scrathes  
    
- Define the data  

### Why is data definition hard?: (4 min)

- Data labeling ambiguities and conventions  
- Need to standardize on a single convention  
- Need more systematic framework  


### More label ambiguity examples: (9 min)

- Unstructured Data Example
  Speech recognition:
  "Um, nearest gas station"
  "Umm, nearest gas station"
  "Nearest gas station [uninitelligeble]
  
- Structured Data Example
  User ID Merge
  - Importance of consistency
  
- Ground truth can be ambiguous
- Ways to ensure consistent labeling
- Ca give humans labeling instructions
  
Data Definition Questions
- Improve conditions of data collection
  - E.g. Lighting in a factory
  - E.g. ID merge use rough geographic info

  

### Major types of data problems: (11 min)

- Major types of data problems  
  - Can divide into 4 quadr5ants
    - Unsdtructured vs Structured  
    - Small vs Large Data Set (> 10,000)  
	
- Advice from a particular quadrant:  
  - Most useful for problems in same quadrant   
  - Advice from another quadrant can be useless__

### Small data and label consistency: (8 min)

- Controlling speed of a helipcopter  
- Map Voltage ==> Speed (rpm)  

- Phone Defect Example  
  - E.g. Agree on size of a scatch (defect)  
  - Provide consistent labeling of defects  
  
- Big data problems can have small data challenges  
  - Web search: Some queries are very rare, small dataset of examples  
  - Self-Driving: Rare situations will have few examples  
    
- Label consistency critical for small datasets  
- Can be an issue for certain slices of a large dataset  


### Improving label consistency: (9 min)

- Have multiple labelers label same example  
- If disagreement, improve definitionn of label  
- If input is insufficient, change input  

- Standardize labels  
- Merge classes if ambiguous  
- Have a class capture uncertainty  
  - No defect / Defect ==> No Defect / Borderline  
  
Small vs. Big Data (Unstructured data)  
- Small data  
  - Small number of labellers  
  - Discuss specific labels  
- Big Data  
  - Get to a consistent derfinition  
  - Otherwise use consensus labeling  


### Human level performance (HLP): (10 min)

- Why measure HLP  
  - Estimate Bayes error / irreducible error  
  - To help with error analysisa   
  - Help with error pioritiztion  
  - Compare Ground Truth Label with Inspector  
    - Demonstrates Human Level Performance  
	- Indicates feasability of business objectives  
	
- What is Ground Truth Label  
  - Can be externally defined (e.g. medical biopsy)
  - If comes from another human  
  - Might be comparing opinion 2 different people  
  
- In academia, HLP can help establish validity of results  
  
- But HLP can give ML algorithm unfair advanatge  

### Raising HLP: (8 min)

- If ground truth is externally defined  
  - HLP gives estimate Bayes error / irreducible error  
  
- Often ground truth is jusat another human  

- Try to understand and resolve discrepency  

- Improving label consistrency will raise HLP  


----

## Label and Organize Data


### Obtaining data: (12 min)

- Don't take too long to obtain data  
- Get into the train/error/model+data iteration fast  
- Exception: Know ahead of time the problem requires m examples.  

- Take inventory   
- Brainstrorm list of data sources:  
  - Already own data  
  - Crowsoursed data  
  - Pay for labels  
  - Purchase data  
  
- Consider Amount/Cost/Time  

- Labeling Data:  
  - in-house vs out-source vs crowd-source  
  - Have MLE's do it just a few days is fine  
  - Who is qualified to label data  
  - Don't increase data by more than 10x at a time  
    
  
### Data pipelines: (5 min)

- Multiple steps in processing data


### Meta-data, data provenance and lineage: (9 min)

- Example: Predict if someone is looking for a job

- Provenence: Where the data came from
- Lineage: Sequence of processing steps

- Keep track of provenance and lineage
- Make extensive use of Meta-Data
- Store meta-data as much as possible

  
### Balanced train/dev/test splits: (4 min)

- Balanced train/dev/test split in small data problems
- Balanced split avoids under-representation in dev or tests
- Not an issue in large datasets


----

## Scoping (optional)

### What is scoping?: (2 min)


### Scoping process: (6 min)


### Diligence on feasibility and value: 1(4 min)


### Diligence on value: (6 min)


### Milestones and resourcing: (2 min)

----

## Optional References

Name:
Machine Learning in Production

Issuing Organization:
DeepLearning.AI

Credential ID:
R1D5038BFYDZ

Credential URL:
https://www.coursera.org/account/accomplishments/records/R1D5038BFYDZ
