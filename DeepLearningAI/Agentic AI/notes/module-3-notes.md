# Agentic AI Module 3: Tool Use

## What are Tools?

Tools are simply functions that can get exceuted in order toi provide additional information or perform actions on an LLM's behalf. Strictly speaking the LLM doesn't "call" the fucntion, but nevertheless we allow that particular speech expression.

## Creating a Toool

## Tool Syntax

Specify tools in the chat completion api as a list of fixed JSON schemas that specify function namew, descriptionand parameters at a minimum.

## Lab 1

Basic Tool use with aisuite library

## Lab 2

More complex multitool example with aisuite library implementing an email assistant agent that can read and reply to emails by chyoosing from 1/2 dozen email api tools.

## Code Execution

- Can add as many tools as necessary
- Alternative is to ask LLM to write code
  - Avoids needing a new tool for each new task
  - Delimit the code in xml brackets
  - Execute the code
  - Feed the result back into the prompt
  
- Can use python **exec** function to execute code.
  
- Secure Code Execution
  - Agentic code can be buggy
  - Best to run in **sandbox** environment

## MCP

Model Context Protocol
Reduces an M x N effort to an M + N effort.
