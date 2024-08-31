# Quantization Fundamentals

## Data Types and Sizes

### Integers

torch.int8
torch.uint8
torch.int16
torch.int32
torch.int64

    In [527]: torch.iinfo(torch.uint8)
    Out[527]: iinfo(min=0, max=255, dtype=uint8)
	
### Floating Points

FP32 implortant in ML as it is common FP for models
- Sign: 1 bit
- Exponent (range): 8 bit
- Fraction (precision): 23 bit
- Total: 32 bit

### FP Downcasting

Higher --> Lower results in a loss of data


## Loading Models by Data Type

- Not all models are implemented for CPU only
- E.g.  RuntimeError :  "addmm_impl_cpu_" not implemented for 'Half' 
- CPU Kernels not implemented for FP16
- Use BF16 instead in those cases.

- model.get_memory_footprint()

- Use torch_dtype keyword arg in from_pretrained

- Globally use: torch.set_default_dtype

- You just used a simple form of quantization, in which the model's parameters are saved in a more compact data type (bfloat16). During inference, the model performs its calculations in this data type, and its activations are in this data type.  

- In the next lesson, you will use another quantization method, "linear quantization", which enables the quantized model to maintain performance much closer to the original model by converting from the compressed data type back to the original FP32 data type during inference.
  

## Quantization Theory

## Quantization of LLMs

## Conclusion 

