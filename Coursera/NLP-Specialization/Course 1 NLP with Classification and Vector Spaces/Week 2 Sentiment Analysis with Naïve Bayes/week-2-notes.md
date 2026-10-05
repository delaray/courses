# Sentiment Analysis with Naïve Bayes

## Video 1: Week Introduction  

----

## Video 2: Probability and Bayes’ Rule (3mn)

## Reading 1: Probability and Bayes’ Rule (10 min)

## Video 3: Bayes’ Rule (4mn)

- P(X|Y) = P (X intersect Y) / P(Y)
- P(Y|X) = P (Y intersect X) / P(X)
- P(X|Y) = P(Y|X) * P(X)/P(Y)


## Reading 2: Bayes’ Rule (10mn)

- Derivation Bayes' Rule

----

## Video 4: Naïve Bayes Introduction (5mn)

- Shares vsimilarities with Logistic Regression
- Called Naïve because assumes features independent 
- Like LR, count positive and negative word frequencies
- Compute conditional probabilitiers
- Same probility in each class words are uninformative

- Naive Bayes inference condition rule for binary classification
  - the product across all of the words in your tweets
    - the probability for each word in the positive class
    - divide it by the probability in the negative class.

- Compute the Naive Bayes inference condition rule
  - if > 1 ==> Positive sentiment
  - if < 1 ==> Negative sentiment
  
- Called the Likelyhood score
  
  
## Reading 3: Naive Bayes Introduction (10mn)

- To build a classifier, 
  - first start by creating word class frequency tables
  - Compute conditional probability tables
  - you can compute the likelihood score 
  - A score greater than 1 indicates that the class is positive,
  - A score less than 1 indicates that the class is negative.



## Video 5: Laplacian Smoothing (2mn)

- Used to avoid probabilities of 0

- Original Formula 
  - P(w(i)|class) = freq(w(i), class) / N-class
	- N-class = sum of the frequencies in class
	
- New Formula
  - P(w(i)|class) = freq(w(i), class) + 1 / (N-class + V)
  - V = number of unique words in vocabulary
  - Probabilities in a class column still sum to 1


## Reading 4: Laplacian Smoothing (10mn)

----

## Video 6: Log Likelihood Part 1 (6mn)

- log(a * b) = log(a) + log(b)
- Product formula for Naive bayes now becomes a sum

- Calculating Lambda
  - log (positive class prob / negative class prob)
  - Single column in the table
  - Lambda Log Word:
    - 0 is neutal
	- positive is posit5ive class
	- negative is negative class
	
- Word Sentiment:
  - ratio(w) = P(w|pos) / P(w|neg)
  - Lambda(w) = log (ratio(w))

## Reading 5: Log Likelihood Part 1 (10mn)

- To compute the log likelihood, we need to get the ratios and use them to compute a score that will allow us to decide whether a tweet is positive or negative. The higher the ratio, the more positive the word is  
- 


## Video 7: Log Likelihood Part 2 (2mn)

- Calculate the sentiment of a tweet
- Sum of the lambda values of each word
- For Log Likelihood Theshold is 0


## Reading : Log Likelihood, Part 2 (10mn)

- Sentiment Analysis
  - Compute Lambda Dictionary
  - Sum of the lambda values

----


## Video: Training naïve Bayes ()

- No gradient descent
- Five steps to training Naive Bayes
  - Step 1: Collect and annotate corpus
  - Step 1: Preprocess corpus
    - Lowercase
	- Puctuation, urls, handles, etc..
	- Stop words
	- Stemming
	- Tokenization
  - Step 3: Word Count
    - Pos & Neg frequencies
  - Step 4: Get P(w|Pos) & P(w|neg)
	- Use Laplacioan Smoothing formula
  - Step 5: Compute Lambda(w)  factor for each word
    -  Lambda(w) = log(P(w|pos)/P(w|neg))
  - Step 6: Compute log prior
    - log(P(pos)/P(neg))


## Reading: Training Naïve Bayes

## LAB: Visualizing likelihoods and confidence ellipses (10mn)

- Calculate the likelihoods for each tweet
- Use Confidence Ellipses to interpret Naïve Bayes
- A confidence ellipse is a way to visualize a 2D random variable.

- It is a better way than plotting the points over a cartesian plane because,
  - with big datasets, the points can overlap badly and
  - hide the real distribution of the data.
  
- Confidence ellipses summarize the information of the dataset with four parameters:__
  - Center: It is the numerical mean of the attributes__
  - Height and width: Related with the variance of each attribute.__
    - The user must specify the desired amount of standard deviations__
    - used to plot the ellipse.
  - Angle: Related with the covariance among attributes.__
  
- https://matplotlib.org/3.1.1/gallery/statistics/confidence_ellipse.html
  
  
## Video: Testing Naïve Bayes (4mn)

- Predict using Naïve Bayes on unseen data
- Look up lambda score for words in the table
- Sum the scores and adsd the logprior to account for imbalance
- If > 0 then positive.

Summaary

- Given X-Val and Y-Val as unseen validation set
- Predict using lambda and logprior for each new tweet
- Compute accuracy of prediction (i.e. percentage correct)
  
----

## Reading: Testing Naïve Bayes (10mn)

- Compute lambda log-likelihood vocabulary dioctionary
- Compute LogPrior
- Compute score: sum of the log-likelihood words in text
- Prediction = score > 0

- The example above shows how you can make a prediction given your λ dictionary.
- In this example the logprior is 0 because we have the same amount of positive and negative documents (i.e. log(1)=0)
⁡

----

## Video: Applications of Naïve Bayes (3mn)

- Sentiment analysis
- Author Identification
- Information Retrieval
- Word disambiguation
- Spam detection

## Reading: Applications of Naïve Bayes (10mn)

- Often used as a simple baseline
- Really fast

----
## Video: Naïve Bayes Assumptions (3mn)

- Independence
  - Words in a sentence are often not independent
  - E.g. "It's always cold and sbnowy in the ___"
  - a) Spring, b) Summer, c) Fall, d) Winter
  - Naïve Bayes may assign equal proabilities to a, b c & d
  
- Relative frequencies in corpus
  - Can be artificial in balanced corpus

## Reading: Naïve Bayes Assumptions (10mn)

- Words in NLP and typically not independant

----

## Video: Error Analysis (3mn)

- Removing punctuation and stop words

- Word Order

- Adversarial attacks
  - Sarcasm
  - Irony
  - Euphemisms

## Reading: Error Analysis (10mn)

----

## Video: Conclusion (44s)



