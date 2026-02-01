# Agentic AI Module 4: Practical Tips for Building Agentic AI

## Evaluations

2 Axes of evaluation.
  - objecvtive / subnjective
  - ground truth / nop ground truth
  
Create 4 quadrants of evaluation

## Error Analysis and Prioritizing Next Steps

Trace: Output of all step in pipeline
Span: Output of a single step


## More Error Analysis

- End-to-End Evals to assess issues
- Counting errors at each component
- Prepare 10 - 20 eval quessttions


## Componednt-Level Evaluations

- End-to-End evals are costly
- Once you identify problematic component
- Build eval just for that component
- Avoids nois of other components.

## Lab: Adding a component-level Eval


## How to address Problems you Identify

- Improving Non-LLM component performance
  - Tune Hyperpasameters of component
  - Replace the component

- Improving LLM component performance
  - Improve prompts
    - Explicit instructions
	- Few shot learning
  - Try a new model
  - Split up the Step
  - Fine-tune a model 
  
- Intuitions on what models work well in which situations
  - Look at other peoples prompts
  - Large models better at following instructions
  
- Once Agentic workflow is working well
  - Optimnize latency
  - Optimize cost
  



## Latency, Cost, Optimization

- Latency
  - Examine the time of each component 
  - Idfentify those with sufficiently high latency
  - Try smaller models to see if they can perform as well


- Cost
  
## Development Process


## Module 4 Quiz

