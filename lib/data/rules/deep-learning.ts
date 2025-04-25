import { Rule } from "../../../lib/interfaces";

export const DeepLearningRules: Rule[] = [
  {
    title: "Deep Learning Developer (Python)",
    tags: ["deep-learning", "python", "pytorch", "ai", "ml"],
    slug: "deep-learning-developer-python",
    icon: "🧠",
    description: "Expert guidelines for deep learning model development, training, and deployment with Python",
    color: "#0f0fff",
    content: `
# Deep Learning Developer Rules

## Key Principles
- Follow PyTorch best practices for model architecture design
- Prioritize reproducibility with random seed fixing and hyperparameter documentation
- Use typed Python and modular architecture for maintainable code
- Leverage existing implementations from Hugging Face for standard architectures
- Build models with scalability in mind - from prototyping to production
- Document machine learning methods, data preprocessing, and training procedures
- Create clear abstractions between data, model, training, and evaluation components

## Model Development

### Standard Model Structure
- Implement models as Python classes inheriting from appropriate base classes (nn.Module for PyTorch)
- Define forward pass with clear input/output types, using type hints (-> Tensor)
- Separate model architecture from training loop logic
- Use config files or dataclasses for hyperparameters
- Prefer composition over inheritance for model components

### Transformers
- Use Hugging Face Transformers library for standard architectures
- Follow the encoder/decoder pattern with proper attention mechanisms
- Implement proper masking techniques for sequence tasks
- Scale dot-product attention with 1/sqrt(d_k)
- Use proper initialization for stability (Xavier/Glorot)
- Leverage transfer learning via pretrained models when possible

### Diffusion Models
- Implement proper noise scheduling (linear, cosine, etc.)
- Use efficient sampling methods (DDIM) for inference
- Apply gradient clipping during training
- Monitor sample quality throughout training
- Implement classifier-free guidance for controlled generation
- Use EMA of model weights for stability

## Training and Evaluation

### Training Loop
- Implement early stopping with validation metrics
- Use appropriate learning rate schedules (linear warmup, cosine decay)
- Monitor training with logging and visualization tools
- Implement gradient accumulation for large models
- Use mixed precision training (FP16/BF16) for efficiency
- Implement distributed training for multi-GPU setups
- Apply proper weight decay and regularization

### Evaluation
- Use appropriate metrics for the task (BLEU, ROUGE, Accuracy, F1, etc.)
- Separate validation from test evaluation
- Implement model checkpointing based on validation metrics
- Create reproducible evaluation pipeline
- Generate visualizations of model outputs where applicable
- Perform proper error analysis on validation failures

## Gradio Integration
- Create intuitive UI with appropriate input components
- Add descriptive labels and instructions
- Implement proper error handling for edge cases
- Design responsive layouts that work on various devices
- Use gradio.Blocks for complex layouts with custom CSS
- Add examples for user guidance
- Implement caching for efficiency

## Error Handling
- Use try/except blocks around model inference
- Validate inputs before passing to model
- Return user-friendly error messages
- Log detailed errors for debugging
- Handle tensor device mismatches gracefully
- Check for NaN values in outputs

## Performance Optimization
- Use torch.compile() for PyTorch 2.0+ models
- Apply quantization for inference (INT8, FP16)
- Optimize batch size based on available memory
- Implement efficient data loading with proper workers
- Use gradient checkpointing for memory-intensive models
- Profile and optimize bottlenecks
- Implement model pruning or distillation for efficiency

## Best Practices for Python Development
- Use virtual environments for project isolation
- Document requirements with requirements.txt or pyproject.toml
- Write comprehensive docstrings
- Implement proper logging with the logging module
- Implement proper testing with pytest
- Follow PEP 8 style guidelines
- Use appropriate type hints throughout your code
`,
    author: "Cursor Directory Team",
    date: "2023-07-05",
  },
]; 