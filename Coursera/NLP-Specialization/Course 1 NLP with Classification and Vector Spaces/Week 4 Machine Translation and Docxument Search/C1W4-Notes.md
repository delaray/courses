# C1W4: Machine Translation

- Machine translation
- Document search

## Overview 

- Learning Objectives
- Transform vector
- K-nearest neighbors
- Hash tables
- Divide vector space into regions
- Locality sensitive hashing
- Approximate nearest neighbor

## Video Transforming word vectors

 - Frobenius Norm
 
## Reading Transforming word vectors

## Lab: Rotation matrices in R2


## Video K-nearest neighbors

## Reading K-nearest neighbors

After you have computed the output of XR you get a vector.__
You then need to find the most similar vectors to your output__

If you were in San Francisco, and you had friends all over the world__
Yyou would want to find the nearest neighbors.__ 

To do that it might be expensive to go over all the countries one at a time.__
So we will introduce hashing to show you how you can do a look up much faster.__ 


## Video Hash tables and hash functions

- Divide the sapce into buckets
- Create a hash function 
- Map items to buckets

## Reading Hash tables and hash functions

## Video Locality sensitive hashing

- Vector transformations: scaling, rotation, 
- Want a hash function that is sensitive location of items
- Direction of dot product
- Sign of a projection of two vectors determines the side plane


## Reading Locality sensitive hashing

- Locality sensitive hashing is a technique that allows you to hash similar inputs into the same buckets with high probability. 

- Instead of the typical buckets we have been using, you can think of clustering the points by deciding whether they are above or below the line. Now as we go to higher dimensions (say n-dimensional vectors), you would be using planes instead of lines. 


## Video Multiple Planes

- Map signals from multiple planes into single hash value
- Take the of the signals each multiplied by ba power of 2
- Hash Value = Sum(i, 0, H) 2**i x h(i)


## Reading Multiple Planes

- You can use multiple planes to get a single hash value.

- Given some point denoted by v,  you can run it through several projections P1, P2, P3  to get one hash value.--
- If you compute P1 time v.T you get a positive number, so you set h1 = 1
- If you get a negative number you set intermediate h(i) to 0.
- Once you have computer the h(i)'s for each plane
- You take the sum of the h(i)'s with each one multiple powers of 2.

## Lab: Hash tables

- Build a hash table with a simple hash function

## Video Approximate nearest neighbors

## Reading Approximate nearest neighbors

## Video Searching documents

## Reading Searching documents

- The previous video shows you a toy example of how you can actually represent a document as a vector. 

## Video Week Conclusion

- Transform vector
- K nearest neighbors
- Hash tables
- Divide vector space into regions
- Locality sensitive hashing
- Approximate nearest neighbor
