# Week 1: Introduction to GANs  

## Generative Models  

Discriminative Models  
- Capture a class given a set of features  
- P(X|Y)  
  
Generative Modesl  
- Capture a set of features given a class & random noise  
- Noise prevents same image produced each time  
- P(Y|X)  
  
Types of Generative Models  
- Variational Autoencoders (VAE)  
- Generative Adversarial Networks  
  
VAE  
- AE part is trained to produce output like input  
- Variational part injects noise into decoder  
- Produces a probability distribution  
- Then samples from that distribution to produce outpuy  
  
GAN  
- Generator & Discriminator  
- Gernerator   
  - Takes in noise  
  - Produces an image  
  - Similar to decoder in VAE  
- Models compete against each other  
- Eventually don't need discriminator  
  
Summary  
- Generative models learn to produce realistic examples  
- Discriminative models learn to distinguish between classes  

## Real Life GANSs

- Cool applications
- GANs for Image Translation
  - StyleGAN
  - GauGAN
- Image animation
- 3D image generation

- Companies using GAN
  - Adobe: Next-gen Photoshop
  - Google: Text generation
  - IBM: Data Augmentation
  - TikTok: Image Filters
  - Disney: Super-resolution
  
- Summary
  - Rapidly improving performance
  - Major companies are using them
  
  
## Intuition behind GANs

- Goal of geenerator and discriminator
- Competion between them

- GHenerator: Painting Forger
- Discrimnator: Painting Inspector

- Start with a collection of real images
- Intially generator doesn't see real images
- Initially Discriminator is clueless

- Train the discriminator with supervised learning
- Train the generator by using scpores assigned by discriminator

- Discriminator i8mproves as the generator improves
- Eventually generator produces high quality images

- Generator tries to fool discriminator
- Discriminator tries to distinguish real from fake
- They learn from the competition between them
- At the end, the fakes look real

## Discriminator

- Goal is yield a probability distribution for the classes
- Computes: P(<class-Y>|<Features-X>)
- Discriminator is a classifier that insoects the examples
- Discriminator models the probability of FAKE given input features
- P(Fake | image)

Summary
- Discvriminator is atype of classifier
- Learn the probability of real or fake given features X
- Probabilities ar the feedback for the generator

## Generator

- Heart of GAN  
- Goal is to genertae examples of a class  
- Input a noise vector for diversity  
- Features: Class + Noise Vector  
- Output nodes are individual pixels  
- Once generator trained  
  - Input random noise vectors  
  - Generate all sorts of examples  
- Models   
  - P(image | class)  
  - P(X Features | Y)  
  - If 1 class then just P(X Features)  
  - Most common feature values sampled more frequently  
  
Summary  
  - Generator produces fake datya that tries to look real  
  - Learns the probability of Features X  
  - Generator takes as input noise (random features)  

## BCE Cost Function

- Binary Cross Entropy  
- Ideal for binary classificatyioon  
- Two Terms in cost function  
  - Only one is relevant for each class  
  - Left term applicable when prediction is 1  
  - Right term applicable when prediction is 0  
  
- Cost close to zero when label and prediction similar  
- Close close to infinity when label and prediction different  
  

## Putting it all Together

- Overview of the whole architecture
- Training GANs
  - Alternate training 
  - Should always have a matching skill levels.



## Intro to Pytorch



Intro to GANs
Video: VideoWelcome to the Specialization
. Duration: 5 minutes5 min
Video: VideoWelcome to Week 1
. Duration: 54 seconds54 sec
Reading: ReadingSyllabus
. Duration: 5 minutes5 min
Reading: Reading[IMPORTANT] Have questions, issues or ideas? Join our Forum!
. Duration: 2 minutes2 min
Video: VideoGenerative Models
. Duration: 8 minutes8 min
Video: VideoReal Life GANs
. Duration: 5 minutes5 min
Reading: ReadingCheck out some non-existent people!
. Duration: 5 minutes5 min
Video: VideoIntuition Behind GANs
. Duration: 5 minutes5 min
Video: VideoDiscriminator
. Duration: 5 minutes5 min
Video: VideoGenerator
. Duration: 7 minutes7 min
Video: VideoBCE Cost Function
. Duration: 6 minutes6 min
Video: VideoPutting It All Together
. Duration: 5 minutes5 min
Video: Video(Optional) Intro to PyTorch
. Duration: 6 minutes6 min
Lab: (Optional) Intro to PyTorch
. Duration: 1 hour1h
Ungraded App Item: Ungraded App ItemIntake Survey
. Duration: 1 minute1 min
Reading: Reading(Optional) Lecture Notes W1
. Duration: 1 minute1 min
Programming Assignment: Your First GAN
. Duration: 3 hours3h
Reading: ReadingWorks Cited
. Duration: 10 minutes10 min
Reading: ReadingHow to Refresh your Workspace
. Duration: 10 minutes10 min
