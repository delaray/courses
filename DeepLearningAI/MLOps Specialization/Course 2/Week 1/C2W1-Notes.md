# Week 1: Collecting, Labeling and Validating Data

- First week of Course 2: Machine Learning Data Lifecycle in Production

## Learning Objectives
- Describe the differences between ML modeling and a production ML system
- Identify responsible data collection for building a fair production ML system
- Discuss data and concept change and how to address it by annotating new training data with direct labeling and/or human labeling
- Address training data issues by generating dataset statistics and creating, comparing and updating data schemas


----


### Specialization overview (6 min)

- The world Change
- Need expertise in ML & Software Engineering
- Gathering, Cleaning, Preprocessing

- Course 1: Overview of Data, Modeling & Deployment
- Course 2:
  - All about data and how it evolves over time
  - Build data pipelines using TensorFlow Extended (TFX)
  - Track changes with ML metada using data provenance
- Course 3: 
  - Focused on ML modeling pipelines in production
  - Manage modeling resources to best server inference requests
  - Analytics, Fairness & Bottlenecks
- Course 4:
  - All about Deployment
  
       
### Course Overview (2 min)

- First course looked  at the entire lifecycle
- This course dives deeper into the data journey
- Implement feature engineering, transformation and selection
- Use the TFX Framework
- Main focus is on Data


----

## Introduction to Machine Learning Engineering in Production

### Overview (11 min)

- Data in ML & Production
- Production ML = ML development + modern software development
- In a research (traditional) setting less complicated

- Production ML requires so much more
  - Configuration
  - Data Collection
  - Feature Extraction
  - Data Verification
  - Machine Resource Management
  - Analysis Tools
  - Process Management Tools
  - Serving Infrastructure
  - Monitoring 

- ML code is usually 5% of the softwarwe

- Academic ML vs Production ML
  - Priorities are different
  - Objectives are different

- Modern software bdevelopment
  - Scalability
  - Extensibility
  - Configuration
  - Consistency & reproducibility
  - Safety & Security
  - Modularity
  - Testability
  - Monitoring
  - Best practices
  
- Production ML System
  - Scoping
  - Data
  - Modeling
  - Deployment
  
- Iterative process

- Challenges in production grade ML systems

### ML Pipelines (6 min)

- ML Pipelines
- DAG
- Tensor Flow Extended (TFX)

- Almost always DAGs

- Pipeline Orchestration Frameworks
  - Responsible for scheduling various ML Pipeline components
  - Help with Pipeline automation
  - Example include: Airflow, Argo, Celery, Luigio, Kubeflow

- TensorFlow Extende3d (TFX)
  - End-to-end platform for deployingh ML Pipelines
  - TFX production components
  - TFX has libraries and components which leverage the former
  - Components represent the nodes in the DAG
  
- Key Points
  - Production ML Pipelines: Automating, monitoring & maintaining end-to-end processes
  - Production ML is more than justy ML Code
    - ML Dev + Software Dev
  - TFX is an open-source end-to-end ML platform
  
Intro to MLEP Practice Quiz (10 questions)
Ungraded App Item (1 hour)

----

## Collecting Data

### Importance of Data (8 min)


### Example Application: Suggesting Runs (8 min)


### Responsible Data: Security, Privacy & Fairness (11 min)


Data Collection Practice Quiz (7 questions)

----

## Labeling Data

### Case Study: Degraded Model Performance (9 min)


### Data and Concept Change in Production ML (5 min)


### Process Feedback and Human Labeling (11 min)


Data Labeling Practice Quiz (3 questions)

----

## Validating Data

### Detecting Data Issues (7 min)

### TensorFlow Data Validation (6 min)

----

