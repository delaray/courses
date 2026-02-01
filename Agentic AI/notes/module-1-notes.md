# Agentic AI Module 1: Introduction to Agentic Workflows

## What is Agentic AI

- Agentic AI
  - Non-Agentic workflow (zero-shot LLM)
    - Straight shot to response
  - Agentic Workflow
    - Iterative
	- drafts
	- Revisions
	
- Autonomy


## Degrees of Autonomy

- Use adjective term "agentic" rather than noun "agent"
- Allows us to talk about degrees of autonomy

- Less autonomous
  - All sfteps predetermined
  - All tool us hard coded
  - Autononmy is in text generation
  
- Semi-autonomous Agents
  - Agent can make some decisions. choose tools
  - All tools predefined
  
- Highly autonomous
  - Agent makes many decisions autonomously
  - Can create new tools on the fly


## Benefits of Agentic AI

- Accomplish tasks that were not possibhle before
- Parallelism
- Modularity

- Agentic workflow improves performance of existing LLMS
  - GPT-3.5 goes from 48% --> 75% - 95%
  - GPT-4.0 goes from 67% --> 75% - 95%
  - Based on the HumaeEval Dataset
  
- Parallelism
  - E.g. Simultaneous web searches


## Agentic AI Applications

- Example: Invoice processing
- Example: Responding to customer email
- Diificult: Visual Computer Use

Suitability

-Easier
 - Clear, step-by-step process
 - Standard procedures to follow
 - Text asets only
 
- Harder
  - Steps not known ahead of time
  - Plan/solve as you go
  - Multimodal (sound, vision)
  
 - Identify individu8al steps
 
 
## Task Decomposition

Example: Writing an essay

Attemp 1: (Straight shot)
- LLM --> Essay
- Surface level
- Covers obvious facts only

Attemp 2: (Basic decomposition)
1. Write an essay outline on topic X
   - LLM
2. Search Web
   - LLM + Web Search
3. Write the essay
   - LLM --> Essay

- Still not good enough

Attemp 3: (iterative revisions)
- replace step 3 above with revision
  - Write a first draft
  - consider what parts to rewrite
  - revise fyour draft

## Evaluation agentic AI (evals)

- Effective evals drive effective agentic workflows
- Difficult to anticipate what could go wrong
- Track recurring errors
  - Add an evaluation to track the error
- Objective error
  - Use code to check occurrences
- Subjective erro
  - Common to use LLM-as-a-judge
  - Can give output a score of 1 to 5 (for example)
  - Note: LLMs arte actually not very good at assigning scores
  - Therer are better techniques for LLM-as-a-Judge.
  
- Evaluating Agentic AI

  - Objective Evals: Evaluate with Codfe
  - Subjective Evals: LLM-a-a-Judge
  - Two-types of Eval:
    - End-to-ernd and component-level
	- Examine traces to perform analysis
  - Much more on Evals in Module 4


## Agentic Design Patterns

- We build agentic workflows by cobining building blocks
- Agentic Design Patterns
  - Reflection
  - Tool Use
  - Planning
  - Multi-agent Collaboration
  
  Reflection
  - Ask LLM to examine its own output
  - Use external tool to execute code
  - Bring in a critic agent (different role)
  
  Tool Use
  - Functions theyu can call
  - Web search tool
  - Code execution tool
  
  Planning
  - Plans sequence of actions
  - Lets agent decide on sequence of steps
  
  Multi-afgent Workflows
  - ChatDeu example: Software compny teams
  - Difficult to predict
  - Can lead to better performance

 
 


