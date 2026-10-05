# Week 3: Vector Space Models



## Video: Week Introduction (47sec)

- All about representing words as vectors.

----

## Video: Vector Space Models (2mn)

- Vector Space Models
  - Represent words and documents as vectors
  - Reprensentation that capture relative meaning
  - Can be buiilt using co-occurence matrices

## Reading: Vector Space Models (10mn)

## Video: Word by Word and Word by Doc. : (4mn)

- Co-occurence --> Vector Representation
- Relationships between words/documnents

- Word by Word Design
  - Count co-occuences of words within a certain distance
  - Count for a word to each other word can construct a vector

- Word by Word Design
  - Count the word occurs within a certain category
  - Words become the dimensions of vector space
  - Allows comparison of category similarity
  
## Reading: Word by Word and Word by Doc (10mn)

## Lab: Linear algebra in Python with Numpy (1h)

---

## Video: Euclidian Distance : (3mn)

- Euclidian Distance = Norm of the difference
- Numpy use. np.linalg.norm

Summary
- Euclidian sistrance is straight line between points
- Norm of the difference between vectors --> Similarity metric
- Next we look at cosine similarity

## Reading: Euclidean Distance

----

## Video: Cosine Similarity: Intuition : (2mn)

- Measures the angle between two vectors
- Advantageous when corpora has different sizes
  - Not biased by the size of the vector
  - Euclidian is disdanvatageous in that case

## Reading: Cosine Similarity: Intuition(10mn)

- One of the issues with euclidean distance is that it is not always accurate and sometimes we are not looking for that type of similarity metric. For example, when comparing large documents to smaller ones with euclidean distance one could get an inaccurate result.__


## Video: Cosine Similarity : (3mn)

- Learn how to compute dot product and the norm of vectors
- Vector Norm: ||V|| =  SQRT (SUM (components squared))
- Dot Product: v1.v3 = SUM (product of the components)

- Cosine of angle BETA between two vectors v & w:

    cosine(BETA) = dotproduct(v, w) / ||v|| x ||w
	
- Cosine similarity interpretation
  - 90 degree Angle ==> cosine of 0 (dissimilar)
  - 0 degree angle ==> cosine of 1 (similar) 
  - orthogonal and dissimilar
  - higher score means more similar
  
	
	
## Reading: Cosine Similarity(10mn)

- If v & w are the same then you get the numerator to be equal to the denominator. Hence 
are the same then you get the numerator to be equal to the denominator.
  - Hence β = 0

- The dot product of two orthogonal (perpendicular) vectors is 0
  - I.e.  β = 90
  
----

## Video: Manipulating Words in Vector Spaces : (3mn)

- Use relationship between two concepts
  - Country & Capial
  - Knowing USA & Washington, DC
  - Can Predict capital of Russia


## Reading: Manipulating Words in Vector Spaces(10mn)

- You can use the word vector for Russia, USA, and DC to actually compute a vector that would be very similar to that of Moscow.  
- You can then use cosine similarity of the vector with all the other word vectors you have and you can see that the vector of Moscow is the closest.   

- Note that the distance (and direction) between a country and its capital is relatively the same. Hence manipulating word vectors allows you identify patterns in the text.  


## Lab: Manipulating word embeddings(10mn)


----

## Video: Visualization and PCA : (3mn)

- PCA used for dimensionality reduction
- Unsupervised learning algortithm
- Can visualize high dimensional spaces

## Reading: Visualization and PCA

## Video: PCA algorithm : (3mn)

- Eigenvalues & eigenvectors
- Covariance matrix
- Get uncorrelated features
- Use Single Value Decompositrion

## Reading: PCA Algorithm(10mn)

- PCA is commonly used to reduce the dimension of your data. 
- Intuitively the model collapses the data across principal components.
- You can think of the first principal component (in a 2D dataset) as the line where there is the most amount of variance. 
- You can then collapse the data points on that line. Hence you went from 2D to 1D. You can generalize this intuition to several dimensions. 

- Eigenvector: the resulting vectors, also known as the uncorrelated features of your data

- Eigenvalue: the amount of information retained by each new feature. You can think of it as the variance in the eigenvector. 

- Also each eigenvalue has a corresponding eigenvector. The eigenvalue tells you how much variance there is in the eigenvector. Here are the steps required to compute PCA: 

- Steps to Compute PCA: 

  - Mean normalize your data: (x(i) - mean(x(i))) / variance(x(i))
  - Compute the covariance matrix
  - Compute SVD on your covariance matrix. 
    - This returns  [USV]=svd(Σ). 
    - The three matrices U, S, V are drawn above.
    -   U is labelled with eigenvectors, 
   - S is labelled with eigenvalues. 

- You can then use the first n columns of vector U to get your new data by
- multiplying XU[:,0:n].

----

## Lab: Another explanation about PCA(10mn)


## Reading: The Rotation Matrix (Optional Reading)

----

## Video: Week Conclusion

- Vector Representation
- Pricipal Component Analysis


