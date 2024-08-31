# Week 1: Sentiment Analysis and Logistic Regression  

## Welcome to the NLP Specialization

LR easy to train and provide a good baseline.

## Supervised ML and Sentiment Analysis

1. Process raw tweets to extract features from each
2. Train a model using these features

## Vocabulary and Feature Extraction  

Build the vocabulary by extracting each unique word that appears.

Sparse Representation:  
- For each tweet build a vector same size as vocabulary with a 1 if word appear or a zero otherwise.  
- This is known as a sparse respresentation.  

Problems with sparse representration.__
- Would have to learn n parameters theta, where n = |V|__
- Large training time__
- Large prediction time  

## Negative and Positive Frequencies  

Generate word counts for positive and negative classes.  
Frequency dictionary m,aps aa word and its class to a count.  

## Feature Extraction with Frequencies  

Encdode a Tweet as a verctor dimension 3__

    X(m) = [1, Sum of Pos. Freqs, Sum, of Neg. Freq]
	
## Preprocessing: Stop Words and Punctuation  

For Sentiment Analysis eliminate:
- Stop words and punctuation
- Handles (@pierre) and URLs

Stemming and lowercasing
- Stem: Tun: tune, tuning, tuned
- Vocabulary reduction

Preprocessing Steps:  
1. Eliminate handles and URLs  
2. Tokenize string  
3. Remove stop words  
4. Perform stemming  
5. Convert all words to lowercase  

## Putting it all together  

Build a matrix X that encodes all the features of the Dataset.  

----

## Logistic Regression Overwiew  


Logistic Regression uses the Sigmoid Function, Sigma, thresholded usually at 0.5.
It takes as input a features data point and a parameter vector theta 
It outpust a number between ) and 1.

## Logistic Regression Training

Simply use gradient descent on the training data.

## Logistic Regression Testing  

Compute the average correct predictions.


