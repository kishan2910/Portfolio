import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'SQL', 'REST APIs', 'Microservices'],
  },
  {
    name: 'GenAI & Agents',
    skills: ['RAG', 'LangChain', 'Embeddings', 'vLLM', 'Ollama', 'Agentic AI', 'OpenAI APIs'],
  },
  {
    name: 'ML & Deep Learning',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'CNN / RNN', 'Seq2Seq', 'OCR', 'Image Segmentation'],
  },
  {
    name: 'Vector Search',
    skills: ['Qdrant', 'ChromaDB', 'Hybrid Search', 'BM25', 'Reranking', 'Sentence Transformers'],
  },
  {
    name: 'Evaluation & Observability',
    skills: ['MLflow', 'DeepEval (LLM-as-judge)', 'Prometheus', 'Grafana'],
  },
  {
    name: 'Cloud & MLOps',
    skills: ['AWS (SageMaker, S3, ECS/EKS, Bedrock)', 'Kubernetes', 'Docker', 'GitLab CI/CD', 'Git'],
  },
]
