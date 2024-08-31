# DLS Course 2: Improving Deep Neural Networks (Week 3)


## OBJECTIVES
- Master the process of hyperparameter tuning
- Describe softmax classification for multiple classes
- Apply batch normalization to make your neural network more robust
- Build a neural network in TensorFlow and train it on a TensorFlow dataset
- Describe the purpose and operation of GradientTape
- Use tf.Variable to modify the state of a variable
- Apply TensorFlow decorators to speed up code
- Explain the difference between a variable and a constant

## Hyperparamer Tuning

Hyperparameters
- Learning rate Alpha
- Momentum Beta
- Adam Optimizer Beta1 (0.9), Beta2 (0.999), epsilon(10^-8)
- #Layers
- #Hidden units
- Mini-batch size
- Learnin rate decay

Imnportance:
1. Learning rate alpha,
2. #Units, Momentum (0.9), Mini-batch-size
3. #Layers, Learning rate decay,
4: Never tune Adam Optimizer

Parameter Exploration
- Try parameter values at random
- Don't use a grid of values
- Use coarse to fine

Appropriate Scale for sampling HP
- Uniform random is ok for some (e.g. #layers) but not all
- When range spans multiple powers of 10, use log scale
  - r = -4 * np.random.rand()  --> [-4, 0]
  - alpha = 10^r ---> [10^-4, 10^0]
- For exponentially weighted averages
- [0.1, 0.001]
  - r = [-1, -3]
  - 1 - Beta = 10^r
  - Beta = 1 - 10^r

- All about sample distribution

- Re-test hyperameters occasionally (every several mmonths)

Tuning in PracticeL Pandas vs. Caviar
- Babysit one model (low resources)
- Train many in parallel

## Batch Normalization

Normalizing Inputs (for a single unit)
  - Compute mean mu
  - X = X - mu
  - Compute the standard deviation(variance) sigma
  - X = (X - mu) / sigma

- Can we normalize for a deep network?
- Issue: Normalize before or after activation?
- Most normalize before.

Implementaing Batch Norma
- Four required equations
  - mu = 1/m * sum(X(i))
  - sigma^2 = 1/2 sum(X(i)^2)
  - Z-norm(i) = (Z(i) - mu) / Sqrt(sigma^2 + epsilon)
  - Z-tilda(i) = gamma * Z-norm(i) + beta
  
- gamma & beta are learnable parameters of model

- Use Z-tilda(i) instead of Z(i) for later computations of the model
- Hidden units have normalized mean & variance
- Mean & variance explicitly controlled by two learnable parameters

Adding Batch Norm (BN) to a network
- Standard params: W1, B1, W2, B2...
- New params: Beta1, Gamma1, Beta2, Gamma2, ....
- Because BN zeroes out the mean ==> No need for B parameter
- B is essentially replaced by Beta which now controls shift or bias.
- Parametes ==> W, Beta, Gamma

  
Learning on Shifting Input Distribution
- Covariate Shift
- BN reduces shift of parameters in each layer
- Guarantees Mean and Variance remain same
- Reduces the effect of change in layer inputs

Batch Normalization as Regularization (side effect)
- Makes later weights more robust to changes in earlier wights
- Each mini-batch scaled on just that mini-batch
- Adds some noise becausze only computed on mini-batch (not whole set)
- Similar to dropout, produces a slight regularization effect
- Can use Dropout and BN for larger regularization effect
- Don't use BN just for regularization

Batch Norm at Test Time
- Training done of batches, Test is done on individual instances
- Need a way to compute mu and sigma^2 at Test Time
- Use exponentially weighted average across mini-batches
- AKA running average of mu and sigma^2

## Multiclass Classification

SoftMax Regression
- Softmax is a multiclass generalization of Logistic Regression
- First compute z: z[L] = W[L] * a[L-1] + B[L]
- Takes in a vector and outputs a vector (unlike sigmoid fn)
- Analogy to Log. Reg.: Ouputs multple decision boundaries

Training a Softmax Classifier
- Name Sofmax is in contrast to Hardmax
  Softmax = [5, 1, -2, 3]
  Hardmax = [1, 0, 0, 0]
- Generalizes Logistic Regression from 2 to C classes
- Loss function on single instance
  - L(y, yhat) =  - SUM(1,C)[y(i) * log(yhat(i))]
- This is a form of maximum likelyhood estimation
- Cost function all instances
  - J(W(1}, B(1), ...) = 1/m * SUM(1, m)[L{i)]
- Gradient Descent with Softmax
  - Output layer computes z(L)
  - Apply Softmax activation function to get a(L) = yhat
  - Then compute loss L(y, yhat)
  - Backprop init: dz(L) = y - yhat

INTRODUCTION TO DEEP LEARNING FRAMEWORKS
- Caffe
- CLTK
- DL4K
- Keras
- lasagne
- mxnet
- PaddlePaddle
- Theano
- Tensorflow
- Torch

Choosing a Framework
- Ease of Programming
- Runnig speed
- Truly open source

TENSORFLOW
- Want to minimize some cost function J(w)
- Define variable w with tf.variable
- Specify the cost function
- Specify the optimizer
- Use with gradientTape for building the computation graph
- Use a vector to hold and define parameters of cost function

import numpy as np
import tensorflow as tf

w = tf.variable(0, dtype=tf.float32
optimizer = tf.keras.optimisers.Adam(0.1)

- Only need to implement forward prop. TF does the backprop.
- This can be accomplished GradientTape

def train_step():
    with GradientTape() as tape:
        cost = w ** 2 - 10 * w + 25
    trainable_variables = [w]
    grads = tape.gradient(cost, trainable_variables)
    optimizer.apply_gradients(zip(grads, trainable_variables))

- Using inputs in the cost function:

w = tf.variable(0, dtype=tf.float32
x = np.array([1.0, -10.0, 25.0], dtype=np.float32)
optimizer = tf.keras.optimisers.Adam(0.1)

def training(x, w, optimizer):
    def cost_fn():	
        return x[0}*w ** 2 + x[1]*w + x[2]
    for i in range(1000):
        optimizer.minimizer(cost_fn, [w])
    return w
