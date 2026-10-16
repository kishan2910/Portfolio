import type { Locale, SkillCategory } from '../types'

export const skills: Record<Locale, SkillCategory[]> = {
  en: [
    { name: 'Programming', skills: ['Python (REST APIs, Microservices)', 'SQL'] },
    {
      name: 'GenAI',
      skills: ['RAG', 'LangChain', 'Embeddings', 'vLLM', 'Ollama', 'Agentic AI', 'Open WebUI'],
    },
    {
      name: 'ML & Computer Vision',
      skills: [
        'PyTorch',
        'YOLOv8',
        'OCR (Tesseract)',
        'ONNX',
        'TensorRT',
        'CNN',
        'Quantization',
        'Image Processing',
        'Image Segmentation',
      ],
    },
    {
      name: 'Vector Database',
      skills: ['Qdrant', 'Semantic Search', 'Hybrid Search (BM25 + dense)', 'Reranking'],
    },
    {
      name: 'Data & Analytics',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'],
    },
    {
      name: 'MLOps & Cloud',
      skills: [
        'MLflow',
        'DeepEval',
        'Prometheus',
        'Grafana',
        'Git',
        'Kubernetes',
        'Docker',
        'GitLab CI/CD',
        'AWS (SageMaker, S3, EC2, ECR, Bedrock)',
      ],
    },
  ],

  de: [
    { name: 'Programmierung', skills: ['Python (REST-APIs, Microservices)', 'SQL'] },
    {
      name: 'GenAI',
      skills: ['RAG', 'LangChain', 'Embeddings', 'vLLM', 'Ollama', 'Agentic AI', 'Open WebUI'],
    },
    {
      name: 'ML & Computer Vision',
      skills: [
        'PyTorch',
        'YOLOv8',
        'OCR (Tesseract)',
        'ONNX',
        'TensorRT',
        'CNN',
        'Quantisierung',
        'Bildverarbeitung',
        'Bildsegmentierung',
      ],
    },
    {
      name: 'Vektordatenbank',
      skills: ['Qdrant', 'Semantische Suche', 'Hybride Suche (BM25 + Dense)', 'Reranking'],
    },
    {
      name: 'Daten & Analytics',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'],
    },
    {
      name: 'MLOps & Cloud',
      skills: [
        'MLflow',
        'DeepEval',
        'Prometheus',
        'Grafana',
        'Git',
        'Kubernetes',
        'Docker',
        'GitLab CI/CD',
        'AWS (SageMaker, S3, EC2, ECR, Bedrock)',
      ],
    },
  ],
}
