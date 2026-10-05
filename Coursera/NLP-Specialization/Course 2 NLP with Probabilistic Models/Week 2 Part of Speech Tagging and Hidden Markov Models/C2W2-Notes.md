# C2W2: Part of Speech Tagging

## Video: Week Introduction (1 min)

- Part of Speech (POS) Tagging
- Hidden Markov Models
- Viterbri Algorithm

## Video: Part of Speech Tagging (2 min)

- What is POS
  - Use shorthand tags
  
- Application of POS
  - Named entities
  - Co-reference resolutin
  - Speech Recognition
  
- Markov Chains
- Hidden Markov Models
- Viterbi Algorithm
- Example

## Reading: Part of Speech Tagging (4 min)

Part of Speech Tagging (POS) is the process of assigning a part of speech to a word.__
By doing so, you will learn the following:__

- Markov Chains
- Hidden Markov Models
- Viterbi algorithm

You can use part of speech tagging for:__

- Identifying named entities__
- Speech recognition__ 
- Coreference Resolution__

## Lab: Lecture Notebook - Working with text files (20mn)

- Python string module
  - string.punctuation

## Video: Markov Chains (3 min)

- Type of stochastyic mode that describes sequence of events
- Needs only probabiulity of previous event
- Models components that havre a random aspect to them


## Reading: Markov Chains (3 min)

- You can use Markov chains to identify the probability of the next word.
- You can see that the most likely word after a verb is a noun. 

## Video: Markov Chains and POS Tags (4 min)

- POS are states
- Transition probabilities
  - Probability of going from one state to another
  
- Markov Property
  - You only need the current state to determine next state
  
- Transition Matrix
  - Conisys all states by all states
  - A Table of all possible transition probabilities
  - Rows and columns should sum to 1
  
- Issue with probability first word
  - Add an initial state row for first word
  - Transition Matrix an actual matrix
    Dimensions: (N+1, N)

## Reading: Markov Chains and POS Tags (6 min)

- To help identify the parts of speech for every word, you need to build a transition matrix that gives you the probabilities from one state to another.  

- In the diagram above, the blue circles correspond to the part of speech tags, and the arrows correspond to the transition probabilities from one part of speech to another. You can populate the table on the right from the diagram on the left. The first row in your A matrix corresponds to the initial distribution among all the states. 


## Video: Hidden Markov Models (3 min)

- States are hidden, or not diredctly observable
- HMM has **transition probabilities**
= HMM alse has **emission probabilities**
  - These are the probabilities from hidden state to the **observables**
  - Observables are the words in the corpus
  - Emission probabilities: POS --> Observable
  - Can be represented in an **emission probability matrix**

## Reading: Hidden Markov Models (6 min)

In the previous video, I showed you an example with a simple markov model. The transition probabilities allowed you to identify the transition probability from one POS to another. We will now explore hidden markov models. In hidden markov models you make use of emission probabilities that give you the probability to go from one state (POS tag) to a specific word.  
  
For example, given that you are in a verb state, you can go to other words with certain probabilities. This emission matrix B, will be used with your transition matrix A, to help you identify the part of speech of a word in a sentence. To populate your matrix B, you can just have a labelled dataset and compute the probabilities of going from a POS to each word in your vocabulary.  
  
  
## Video: Calculating Probabilities (3 min)

- Compute probabilities of transition 
- Count all occurences of tag pairs in training corpus

**Transition Probabilities**
- Calculate P(t(i) } t(i-1)
  - Count of all occurences of C(t(i-1), t(i))
  - Divide by sum of  C(t(i-1), t(j)) for all j tags
  
- Add a start state <s> to each line in the corpus
- Lowercase all sentences in the cor5pus

## Reading: Calculating Probabilities (5 min)

The number of times that blue is followed by purple is 2 out of 3. We will use the same logic to populate our transition and emission matrices.__

In the transition matrix we will count the number of times tag t(i−1) ,t(i) show up near each other and divide by the total number of times t(i−1) shows up (which is the same as the number of times it shows up followed by anything else). C(t(i−1) ,t(i)) is the count of times tag (i-1) shows up before tag i.__

- From this you can compute the probability that a tag shows up after another tag. 

 

## Video: Populating the Transition Matrix (4 min)

- Sum of thr row counts is the denomibnator above

- Smoothing (avoid diviosion by zero)
  - Add small value epsilon to each value to avoid divisionn by zero
  - Add epsilon to the numerator
  - Add N*epsilon to the denominator to account for epsilons
  - N is the number of tags
- 

## Reading: Populating the Transition Matrix (6 min)

- To populate the transition matrix you have to keep track of the number of times each tag shows up before another tag. 

## Video: Populating the Emission Matrix (2 min)

- Use the same fdormula as the transition matrix
- Use the word counts from the emissions matrix instead
- Apply smoothing as usual
- Note:
  - the nominator is the probaility givena particular word
  - the denomibnator in emmision matrix is over the Vocabulary

## Reading: Populating the Emission Matrix (5 min)

Lab: Lecture Notebook - Working with tags and Numpy
. Duration: 20 minutes20 min

## Video: The Viterbi Algorithm (4 min)

- Compute the transition and emission probabilities
- Multiply them together for the proability of that word
- Multiply all probabilities for sequence of hiddenm states
- Viterbi algorithm computes several paths to find mosty likely

- Viterbi Algorithm
1. Initialization
2. Forward Pass
3. Backward Pass


## Reading: The Viterbi Algorithm (5 min)

## Video: Viterbi: Initialization (2 min)

Initialization Step
Matrices C & D
Multiply transitionm atrix value by emission matrix value

## Reading: Viterbi Initialization (5 min)

## Video: Viterbi: Forward Pass (2 min)

- Matrices are populated column by column

## Reading: Viterbi: Forward Pass (10 min)

## Video: Viterbi: Backward Pass (5 min)

- Use the indices in D to work way back through tags
- Implentation notes:
  - Python indices start at 0
  - Use log in formula and add the probabilities

## Reading: Viterbi: Backward Pass (10 min)

## Video: Week Conclusion (1 min)

Summary

Transition Matrix (A)
- POS ---> POS
- First row represents the start state
- Dimension: (Number of tags + 1)  X Number of tags
- Probability of a tag follwoing another tag
- Rows represent the current state
- Cols represent next state
- Computing
  - First compute the occurs of each tag pair
  - Divide the occurence of the pair by sum second tag
- Smoothing
  - Add epsilon to numerator
  - Add N*epsilon to denominator
  - Do not apply smoothing to first row
  
Emissions Matrix (B)
- Probability of going from word to a tag
- Dimension: Number of tags X Number of Words
- Count the number of times a word is tagged
- Comput the probability word tagged by row sum

Viterbi Matrices C & D
- Joint probability of emitting a word for a tag
  - Transition prob. (from A) * Emissions prob. (from B)
  - C holds intermediate optimal probabilities
  - D holds the indices of visited hidden states
- Dimensions of C & D
  - Number of Tags X Number of words in sequence
  - C allows you to compute probabilities of each path
  - D allows ypu to determine the path that was chosen
  
- Intializtion
  - Populates the first columnn of C & D
  - Prob. of first state * the emission probability
  - Prob. of first state given by first row of transition matrix
  - c(i, 1) = a(1, i) * b(i, index(w1))
  - d(i, 0) = 0
  
- Forward Pass
  - Populate column by column
  - Choose the k that maximizes
    - c(i,j) = max_k(c(k, j-1) * a(k, i) * b(i, index(w(j)))
	- d(i,j) = argmax(c(i,j)
	- d(i,j) = k chosen for c(i,j)
	
- Backward Pass
  - Start from last column of D
  - Chosse row with maximum value in C
  - Use that index to determine row previous column
  - Repeat until first column.
  - s = argmax(i)(C(i, K))
  - Entries in D represent index row of previous state with highest prob.


