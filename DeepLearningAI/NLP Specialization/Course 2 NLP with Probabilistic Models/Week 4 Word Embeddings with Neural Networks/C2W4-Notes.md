# Lecture: Word Embeddings

## Learning Objectives

Gradient descent
One-hot vectors
Neural networks
Word embeddings
Continuous bag-of-words model
Text pre-processing
Tokenization
Data generators


## Video: Week Introduction (1 min)

## Video: Overview (2 min)

- Word Vectors = Word Embeddings
- Learn how to compute from scratch
- Cornerstone of most NLP applications
  - Basic Usage
    - Sentiment analysis
    - Customer feedback classification
  - Advanced Usage
    - Machine Translation
	- Information Extraction
	- Question Answering
  

## Reading: Overview

Word embeddings are used in most NLP applications. Whenever you are dealing with text, you first have to find a way to encode the words as numbers. Word embedding are a very common technique that allows you to do so. Here are a few applications of word embeddings that you should be able to implement by the time you complete the specialization.  


## Video: Basic Word Representations (3 min)

- Can simply assign integers from 1 to len(vocab)
  - No semantic relevance
  
- One-hot vectors
  - Column vectors: 
    - 1 in the row corresponding to word
	- 0 everywhere else
	- Advanmtages
	  - Easy to map to integer representation
	  - No implied ordering as with integers
	- Disadvantages
	  - Huge sparse vectors
	  - No embedded meaning (all same distance)
	  
	- Solution: Word embeddings

## Reading: Basic Word Representations (5 min)

Basic word representations could be classified into the following:

- Integers
- One-hot vectors
- Word embeddings

To the left, you have an example where you use integers to represent a word. The issue there is that there is no reason why one word corresponds to a bigger number than another. To fix this problem we introduce one hot vectors (diagram on the right). To implement one hot vectors, you have to initialize a vector of zeros of dimension V  and then put a 1 in the index corresponding to the word you are representing.  

Pros of one-hot vectors:  simple and require no implied ordering.  

Cons of one-hot vectors: huge and encode no meaning.  


## Video: Word Embeddings (3 min)

- Start by creating semantic-type dimension
  - Positive vs. Negative words
  - Concrete vs. abstract words
  
- Want to encode vectors with meaning in low-dimensional vectors

- Corpus will affect embeddings
- Need 2 things
  1. Corpus: Words in context, i.e. Wikipedia, Shakespeares books
  2. Embedding Method
    - Machine Learning model
	- Learning task: Self supervised = unsupervised + supervised
	  - The data contains the labels
	- Hyperparameters
	  - Word embeding size: Few hundred to low thousands

  
## Reading: Word Embeddings (4 min)

From the plot above, you can see that when encoding a word in 2D, similar words tend to be found next to each other. Perhaps the first coordinate represents whether a word is positive or negative. The second coordinate tell you whether the word is abstract or concrete. This is just an example, in the real world you will find embeddings with hundreds of dimensions. You can think of each coordinate as a number telling you something about the word. 

The pros:
- Low dimensions (less than V)
- Allow you to encode meaning
  
  
## Video: How to Create Word Embeddings (3 min)

To create word embeddings you always need__
  - a corpus of text__
  - an embedding method.__

The context of a word tells you what type of words tend to occur near that specific word. The context is important as this is what will give meaning to each word embedding.__
  
  
## Reading: How to Create Word Embeddings? (4 min)

Embeddings
There are many types of possible methods that allow you to learn the word embeddings.
The machine learning model performs a learning task,
and the main by-products of this task are the word embeddings.

The task could be to learn to predict a word based on the surrounding words in a
sentence of the corpus, as in the case of the continuous bag-of-words.

The task is self-supervised:
  - both unsupervised in the sense that the input data — the corpus — is unlabelled,
  - and supervised in that the data itself provides the context which up the labels. 

When training word vectors, there are some parameters you need to tune.
  - i.e. the dimension of the word vector
  
  
## Video: Word Embedding Methods (3 min)

**Basic Methods**

- word2vec (Google 2013)
  - Continuous bag-of-words (CBOW)
  - Continuous skip-gram / Skip-gram with negative sampling (SGNS)
  
- Global Vectors (GloVe) (Stanford, 2014)
  - Factorising the logarithm of the corpus' word co-occurence matrix
  
- fastText (Facebook, 2016)
  - Based on Skip-Gram model
  - Represents words as an N-Gram of characters
  - Allows the model to support (OOV) words
    - By using embeddings of simmilar charracter n-grams
	- i.e. kitty and kitten
  - Brenefits include being able to be averaged together
    - To make verctor representations of phrases and sentences
	
**Advanced Methods**

- Deep learning, contextual embeddings
- Words have different embeddings depending on their context

- Examples of advanced models
  - BERT (Google, 2018)
    - Biderectional Encoding Representation from Transfortmers)
  - ELMo (Allen Institute for AI, 2018)
    - Embeddings from Language Models
  - GPT 2 (OpenAI, 2018)
    Generative Pre-Training
	
- Tunable Pre-Trained models available

- Currently transformers are one of the most advbanced embedding methods
  
  
## Reading: Word Embedding Methods (4 min)


**Classical Methods**

- **word2vec** (Google, 2013)
  - Continuous bag-of-words (CBOW):
    the model learns to predict the center word
    given some context words.
  - Continuous skip-gram / Skip-gram with negative sampling (SGNS):
    the model learns to predict the words surrounding a given input word.

- **Global Vectors** (GloVe) (Stanford, 2014):
    factorizes the logarithm of the corpus's word co-occurrence matrix, 
	similar to the count matrix you’ve used before.

- **fastText** (Facebook, 2016): 
  based on the skip-gram model and takes into account the structure of words
  by representing words as an n-gram of characters.
  It supports out-of-vocabulary (OOV) words.

**Deep learning, contextual embeddings**

In these more advanced models, words have different embeddings depending on their
context. You can download pre-trained embeddings for the following models. 

- BERT (Google, 2018):
- ELMo (Allen Institute for AI, 2018)
- GPT-2 (OpenAI, 2018)
  
  
## Video: Continuous Bag-of-Words Model (4 min)

- Center word: 1
- Context words: C = 1/2 context size
- Window = C + Center-word + C 
  e.g. Context size is 4:
       Window = 2 +1 + 2 = 5
- Create the training data from corpus

- In CBOW you btry to predict center
- In doing so you get the cword embeddings

## Reading: Continuous Bag of Words Model (3 min)

To create word embeddings, you need a corpus and a learning algorithm. The by-product of this task would be a set of word embeddings. In the case of the continuous bag-of-words model, the objective of the task is to predict a missing word based on the surrounding words.  
  

## Video: Cleaning and Tokenization (4 min)

- case insensitivity
- punctuation
- numbers
- Special characters
- Special words: emojis, hashtags, etc...

## Reading: Cleaning and Tokenization (5 min)

## Video: Sliding Window of Words in Python (3 min)

- Iterate over center words, returning center word and contyext words
- Use the yield function in a loop mto create a generator in Python

## Reading: Sliding Window of words in Python (10 min)

- See screeshot of Python code

## Video: Transforming Words into Vectors (3 min)


- Create  a vocabulary of center words
- Create one-hot vector for center words

## Reading: Transforming Words into Vectors (2 min)

Lab: Lecture Notebook - Data Preparation
. Duration: 30 minutes30 min

## Video: Architecture of the CBOW Model (3 min)

- Use a shallow fully connected NN

## Reading: Architecture for the CBOW Model (4 min)

= See screenshot

## Video: Architecture of the CBOW Model: Dimensions (3 min)

- z2 in the second 

## Reading: Architecture of the CBOW Model: Dimensions (4 min)

- See screenshot

## Video: Architecture of the CBOW Model: Dimensions 2 (2 min)

- Batch processing

## Reading: Architecture of the CBOW Model: Dimensions (3 min)

- See screenshot

## Video: Architecture of the CBOW Model: Activation Functions (4 min)

- Rectified Linear Unit (ReLU
## Reading: Architecture of the CBOW Model: Activation Functions (5 min)

Lab: Lecture Notebook - Intro to CBOW model
. Duration: 30 minutes30 min

## Video: Training a CBOW Model: Cost Function (4 min)

- Will be minimizing the softmax function
- Parameters being learned are W1, b1, W3 & b2
- Cross-entropy loss will be used (common for classification tasks)

- Cost function J = -[sum(over V) of (y * log(y-hat)]

## Reading: Training a CBOW Model: Cost Function (3 min)

- See screenshot
  

## Video: Training a CBOW Model: Forward Propagation (3 min)

- Train iusing a batch of examples
- Forward Propagation
- Compute Cost
- Backward proppagaation and gradient descent

- Start with a batch of examples in a vector X
- Use Loss for a single example
- Use Cost for a batch of examples

## Reading: Training a CBOW Model: Forward Propagation (3 min)

- See screenshot
  

## Video: Training a CBOW Model: Backpropagation and Gradient Descent (4 min)

- 1. Use Backpropagation to calculate partial derivaties  J(W1, b1, W2, b2)
- 2. Use gradients descent to update weights of W2, b2, then W1, b1

Backpropagtion
  - Partial derivatives with respect to parameters W1, b1, W2, b2
  - Formulas: See screen shot of Baackpropagatstion formulas
  - In Python lib these will be computed for you
  - Now you have the gradients of W1, b1, W2, B2
  
Gradient Descent
  - Hyperparameters include learning rate alpha
  - Basic idea: Take original params and subtract alpha times their gradient
  - Alpha reduces the amount by whic h each parameter is updated
  - Alpha is a small positive number less than 1
  
## Reading: Training a CBOW Model: Backprop and Gradient Descent (4 min)

- Backpropagation:
  - Calculate partial derivatives of cost with respect to weights and biases.
  - When computing the back-prop , you need to compute the partial derivatives of J
  
- Gradient descent:
  - Update weights and biases
  
- See screentshot

## Lab: Lecture Notebook - Training the CBOW model (40 min)

How this practice relates to and differs from the upcoming graded assignment

- In the assignment, for each iteration of training
  you will use batches of examples instead of a single example.
  The formulas for forward propagation and backpropagation will be modified accordingly,
  and you will use cross-entropy cost instead of cross-entropy loss.

- You will also complete several iterations of training,
  until you reach an acceptably low cross-entropy cost,
  at which point you can extract good word embeddings from the weight matrices.


## Video: Extracting Word Embedding Vectors (3 min)

- Several methods (3 discussed) for extracting word embeddings

- Option 1: Use each columns of W1 in same order as vocab.
- Option 2: Use each row of W2 in same order as vocab.
- Option 3: Take the average- W3 = (W1 + W2.T) / 2

## Reading: Extracting Word Embedding Vectors (5 min)

- See Screenshot

## Lab: Lecture Notebook - Word Embeddings (20 min)

- Trying out all 3 options for extracting words


## Video: Evaluating Word Embeddings: Intrinsic Evaluation (3 min)

- Mesaures how well capture relationship between words

- Analogies
  - Semantic analogies
  - Syntactic analogies
  
- Clustering 
- Visualisation

- Ambiguities are much harder, several correct analogies


## Reading: Evaluating Word Embeddings: Intrinsic Evaluation (4 min)

- Same as above

## Video: Evaluating Word Embeddings: Extrinsic Evaluation (2 min)

- Test the quality on an external task
  - NER
  - POS Tagging
  - Speech recognition
  
  - Can test classifier using accuracy or F1 score
  
  - Pros:
    - Evaluates usefulness of embeddings
	
  - Cons
    - Time consuming
	- More difficult to troubleshoot
	

## Reading: Evaluating Word Embeddings: Extrinsic Evaluation (3 min)

- See above


## Lab: Lecture notebook: Word embeddings step by step (1h)

## Video: Conclusion (1 min)

## Reading: Conclusion (2 min)

## Video: Week Conclusion (45 sec)
