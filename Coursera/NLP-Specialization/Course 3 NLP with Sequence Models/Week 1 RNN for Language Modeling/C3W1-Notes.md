# 1. Introduction to Neural Networks and TensorFlow

## Video: Course 3 Introduction (3 min)

- Deep Neural Nets for Sentiment analysais
- RNN & LSTM for text generation

## Video: Lesson Introduction (44 sec)
  
## Reading: Lesson Introduction Clarification (10 min)

## Video: Neural Networks for Sentiment Analysis (3 min)
  
  
## Reading: Neural Networks for Sentiment Analysis (7 min)

## Video: Dense Layers and ReLU (2 min)
  
- Compute Z the pre-acvtivation value
- Compute g using an activation function (ReLU or other)

## Reading: Dense Layers and ReLU (5 min)

- See screenshot 

## Video: Embedding and Mean Layers (3 min)

- Maps integer rep. of a word vand maps it to a vector
- The vectors are trainable
- Learn a matrix of dim: Vocab x Vector size
- Mean Layer computes average of the words 
  - Returns a single vector the size of the embedding
  
  
## Reading: Embedding and Mean Layers (3 min)

## Lab: Introduction to TensorFlow (30 min)

- Various tf functions
- tf.data

# 2. N-grams vs. Sequence Models
## Video: Lesson Introduction (49 sec)
  
  
## Video: Traditional Language models (3 min)

- N-Grams aare computationall expensive
- Need large N-Grams to capture depedndencies far away

- Recurrent Neural Networks (RNN)
- Gated Recurrent Units (GRU)
  
  
## Reading: Traditional Language models (5 min)

- N-Grams computationally inefficient

## Video: Recurrent Neural Networks (4 min)

- RNN: Can capture more dependencies between words
- RNN: Look at every previous word by prpagating information
  
  
## Reading: Recurrent Neural Networks (4 min)

-- See Screenshot

## Video: Applications of RNNs (3 min)

- Types of architectures based on input/oupt types

- One to one (no need RNN)

- One to many (can use RNN)

- Many bo one (can use an RNN)

  
## Reading: Application of RNNs (3 min)

Application of RNNs

RNNs could be used in a variety of tasks ranging from machine translation to caption generation. There are many ways to implement an RNN model:

- One to One: given some scores of a championship, you can predict the winner. 
- One to Many: given an image, you can predict what the caption is going to be.
- Many to One: given a tweet, you can predict the sentiment of that tweet. 
- Many to Many: given an english sentence, you can translate it to its German equivalent.

In the next video, you will see the math in simple RNNs. 


## Video: Math in Simple RNNs (3 min)
  

## Reading: Math in Simple RNNs (6 min)


# Lab: Hidden State Activation (20 min)

Numpy Matrix functions:

- concatenate: 
  axis=1 for horizontal concatenation
  axis=0 for vertical concatenation
  
- hstack

- vstack

## Video: Cost Function for RNNs (2 min)
  
- Sum over all time steps the cross-entropy cost

## Reading: Cost Function for RNNs (5 min)

- See screenshot

## Video: Implementation Note (1 min)
  
- Use scan function for computing forward pass
  - Returns list of the y-hats
  - Returns the final hidden state
  
## Reading: Implementation Note (3 min)

- Abstractions like the SCAN function are needed
  - Although they are simple to implement yourself
  - Needed by frameworks like TF
  - TF uses them to parallelize computations on GPUs

## Video: Gated Recurrent Units (4 min)
  
Outline
  - Gated Recurrent Units (GRU)
  - Comparison between Vanilla RNN & GRU
  
GRU allow relevent info to be kept even in long seqs.
Think of them as RNNs with additional computations/

Take 2 inputs like RNN
Then compute 2 gates
  - Gamma-u: Update gate
    -  How much to update weights by
  - Gamma-r: Relevance gate:
    - Determines a relevance score

These 2 gates are most important
  - Determine which info from previous state is important
  - Update gate
    - Detetermines how info from previous state can be overwritten
	
Comparison:

Vanilla RNNs with long sequences
  - Vanishing gradient problem
  - Information tends to vanish
  
GRUs
  - More operations ==> longer processing time
  - Relevance and update gates determine
    - What is relevant
	- What should be updated
	
GRUs are a simplified version of LSTMs

## Reading: Gated Recurrent Units (7 min)

The first gate gamma-u decidea how much you want to update the weights by.
The second gate gamma-r helps you find a relevance score. 
You can compute the new ℎ by using the relevance gate.
Finally you can compute h, using the update gate

 GRUs “decide” how to update the hidden state.
 GRUs help preserve important information.


## Lab: Vanilla RNNs, GRUs and the scan function (20 min)

In this notebook, you will learn how to define the forward method for vanilla RNNs and GRUs from scratch. Additionally, you will see how to define and use  the function scan to compute forward propagation for RNNs. In the end you will implement them also in TensorFlow.  

## Video: Deep and Bi-directional RNNs (4 min)

Bi-directional RNNs
  - Same as RNN but in the opposite directiuon
  
Deep NNs
  - Just stacked versions of RNNs
  
## Reading: Deep and Bi-directional RNNs (10 min)

## Reading: Calculating Perplexity (10 min)

Lab: Calculating Perplexity
. Duration: 20 minutes20 min

## Video: Week Conclusion (57 sec)
  
  
