# Short Course: Open Source Models with Hugging Face

An nice introduction to various ready to use open source models on Hugging Face from various contributors such as OpenAI, Fabebook, Salesforce etc.. The examples cover the three principal types of modalities: NLP, Speecxh and Computer Vision along with an assortment of tasks for each modality and a couple of multimodel examples as well. Each topic has itr;s own notebook and follows the same templkate of model usage.  
  
The notebooksa can bed run locally so long as a kernel is Jupyer kernel is installed providfed for the particular conda environment used. The Jupyter kernerl otherwise defaults to the global Python installed onthe local OS.  

## Installing a conda env kernel

    create -n my-conda-env  
    conda activate my-conda-env  
    conda install ipykernel  
    ipython kernel install --user --name=my-conda-env-kernel
  
  
## Selecting Models

To determine required memory  
- Look at pytorch-model.bin file size  
- Multiply by 1.2  

## NLP

- Model: facebook/blenderbot-400M-distill  

## Translation & Summarization

- Model: 

## Sentence Embeddings

- Model: 

## Zero-shot Audio Classification

- Model: 

## Automatic Speech Recognition

Sampling rate must match  
Use librosa library  
Use gradio for building interfaces  
OpenAI whisper model is best (30s)  

## Text to Speech

- Model: 

## Image Segmntation

- SAM: Segment Anything Model (FB 2023)
- Image Segmentation
- Mask Generation
- Use the SlimSAM model
- Use SamModel instead of pipeline for more control
- Can specify input points to specify region to mask
- Image depth estimation with DPT

## Image Retrieval

- Multimodal models
- E.g. /Salesforce/blip-itm-base-coco
- Processor processes text and iamage
  - Returns dictionary of pixels, input_ids & attention_mask

## Image Captioning

- Objective: Return description of image 
- Model: Salesforce/blip-image-captioning-base
- Conditional Image Captioning
  - Pass initial input text: 
- Unconditional Image Captioning
  - No text passed with image
  
## Mulimodal QA

- Task: Given an image and a question, answer the question
- Model: Salesforce/blip-vqa-base


## Zero-Shot Image Classification

- Task: Classify image based on user specified labels
- Model: openai/clip-vit-large-patch14
- Need to load model and processor
- Processot output is raw logits
  - weed to pass through softmax layer
  
## Deployment

- Hugging Face Spaces
- Zero GPU
