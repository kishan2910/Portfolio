import type { Locale, SkillCategory } from '../types'

export const skills: Record<Locale, SkillCategory[]> = {
  en: [
    { name: 'Languages', skills: ['Python (REST APIs, Microservices)', 'SQL'] },
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
  ],

  de: [
    { name: 'Sprachen', skills: ['Python (REST-APIs, Microservices)', 'SQL'] },
    {
      name: 'GenAI & Agenten',
      skills: ['RAG', 'LangChain', 'Embeddings', 'vLLM', 'Ollama', 'Agentic AI', 'OpenAI-APIs'],
    },
    {
      name: 'ML & Deep Learning',
      skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'CNN / RNN', 'Seq2Seq', 'OCR', 'Bildsegmentierung'],
    },
    {
      name: 'Vektorsuche',
      skills: ['Qdrant', 'ChromaDB', 'Hybride Suche', 'BM25', 'Reranking', 'Sentence Transformers'],
    },
    {
      name: 'Evaluation & Observability',
      skills: ['MLflow', 'DeepEval (LLM-as-Judge)', 'Prometheus', 'Grafana'],
    },
    {
      name: 'Cloud & MLOps',
      skills: ['AWS (SageMaker, S3, ECS/EKS, Bedrock)', 'Kubernetes', 'Docker', 'GitLab CI/CD', 'Git'],
    },
  ],
}
