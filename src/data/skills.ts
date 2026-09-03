import type { SkillCategory } from '../types'

export const skills: SkillCategory[] = [
  {
    name: 'Languages & Frameworks',
    skills: ['Python', 'SQL', 'Shell Scripting', 'TypeScript', 'JavaScript', 'React'],
  },
  {
    name: 'GenAI & Agents',
    skills: ['RAG Pipeline', 'LangChain', 'Embeddings', 'vLLM', 'Ollama', 'Agentic AI', 'OpenAI APIs'],
  },
  {
    name: 'Evaluation & Observability',
    skills: ['MLflow', 'DeepEval (LLM-as-a-judge)', 'Prometheus', 'Grafana'],
  },
  {
    name: 'ML & Deep Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'YOLO',
      'SAM2',
      'Computer Vision',
      'ONNX Runtime',
      'Model Quantization (NCNN)',
    ],
  },
  {
    name: 'Vector Database & Search',
    skills: ['Qdrant', 'ChromaDB', 'Semantic Search', 'Hybrid Search', 'BM25', 'Reranking', 'Sentence Transformers'],
  },
  {
    name: 'Backend',
    skills: [
      'Node.js',
      'FastAPI',
      'REST APIs',
      'Microservices',
      'Distributed Systems',
      'Event-Driven Architecture',
      'Apache Kafka',
    ],
  },
  {
    name: 'Cloud, MLOps & Deployment',
    skills: [
      'Kubernetes',
      'Docker',
      'Helm Charts',
      'GitLab CI/CD',
      'Terraform',
      'AWS SageMaker',
      'AWS S3',
      'AWS ECS',
      'AWS EKS',
      'AWS Bedrock',
    ],
  },
]
