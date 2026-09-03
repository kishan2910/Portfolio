import type { ExperienceEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    company: 'Künstliche Intelligenz SH · Hochschule Flensburg',
    role: 'AI & MLOps Engineer · Scientific Research Associate',
    location: 'Flensburg, Germany',
    period: 'Jan 2025 — Present',
    summary:
      'Part of the state AI-transfer initiative Künstliche Intelligenz SH — a service-based team that helps small and mid-sized companies (SMEs) and public bodies across Schleswig-Holstein put AI into practice. I run the LLM infrastructure and deliver client projects end-to-end, from first workshop to a running system.',
    projects: [
      {
        title: 'LLM Infrastructure & MLOps Platform',
        client: 'Hochschule Flensburg',
        href: 'https://kuenstliche-intelligenz.sh/de/hs-flensburg',
        description:
          'Own the on-premise GPU infrastructure the whole team builds on: deployed and operate open-source LLMs and VLMs from Hugging Face with vLLM on bare-metal Kubernetes, serving roughly 500 concurrent users at ~78 ms per output token — fully on-premise to meet GDPR data-residency rules. Hardened the inference endpoints with authentication, rate-limiting, structured logging and request tracing.',
        metrics: ['~500 concurrent users', '78ms TPOT', 'On-prem / GDPR'],
        tech: ['vLLM', 'Kubernetes', 'Hugging Face', 'GPU Infra', 'Observability'],
        image: '/images/projects/llm-infrastructure.jpg',
        imageAlt: 'On-premise GPU cluster serving LLMs at Hochschule Flensburg',
      },
      {
        title: 'Case-Based Reasoning Assistant for Legal Decisions',
        client: 'Kreis Plön (district administration)',
        description:
          'Built an assistant that helps caseworkers by retrieving comparable past cases and decisions for a new situation — combining case-based reasoning with retrieval over legal and administrative documents, so precedent is surfaced in seconds instead of manual research.',
        metrics: ['Precedent search in seconds'],
        tech: ['Case-Based Reasoning', 'RAG', 'Legal NLP', 'Retrieval'],
        note: 'Detailed project report available on request.',
        image: '/images/projects/kreis-ploen-legal-cbr.jpg',
        imageAlt: 'Case-based reasoning assistant for legal decision support',
      },
      {
        title: 'RAG Pipeline over Technical Documentation',
        client: 'Möller Operating Engineering GmbH',
        description:
          'Designed and built a retrieval-augmented generation pipeline over the company’s engineering documentation — ingestion, chunking, embedding, vector retrieval and a grounded answer layer — so engineers can ask questions in natural language and get sourced answers.',
        metrics: [],
        tech: ['RAG', 'LangChain', 'Vector Search', 'FastAPI'],
        image: '/images/projects/moeller-rag-pipeline.jpg',
        imageAlt: 'RAG pipeline for engineering documentation Q&A',
      },
      {
        title: 'Knowledge Base Onboarding for RAG',
        client: 'fjord7',
        description:
          'Onboarded fjord7’s document corpus into the RAG knowledge base — structured the ingestion, chunking and embedding of their material and tuned retrieval so answers stay grounded in their own content.',
        metrics: [],
        tech: ['RAG', 'Embeddings', 'Data Ingestion', 'Retrieval Tuning'],
        image: '/images/projects/fjord7-knowledge-base.jpg',
        imageAlt: 'Document ingestion into a RAG knowledge base for fjord7',
      },
      {
        title: 'Automated Nematode Analysis for Sustainable Crop Protection',
        client: 'Künstliche Intelligenz SH — agriculture partner',
        href: 'https://kuenstliche-intelligenz.sh/de/automatisierte-nematodenanalyse-fuer-nachhaltigen-pflanzenschutz',
        description:
          'Contributed to a computer-vision system that detects and counts nematodes in microscopy images automatically, replacing slow manual counting and giving growers faster, more consistent data for sustainable plant protection.',
        metrics: [],
        tech: ['Computer Vision', 'Image Analysis', 'PyTorch'],
        image: '/images/projects/nematode-analysis.jpg',
        imageAlt: 'Automated microscopy analysis for nematode detection',
      },
      {
        title: 'AI-Based Fault Detection in Solar Plants',
        client: 'Künstliche Intelligenz SH — energy partner',
        href: 'https://kuenstliche-intelligenz.sh/de/wartung-mit-weitblick-ki-gestuetzte-stoerungserkennung-in-solaranlagen',
        description:
          '“Maintenance with foresight” — anomaly and fault detection on solar-plant operating data that flags failures early and helps operators prioritise maintenance before yield is lost.',
        metrics: [],
        tech: ['Anomaly Detection', 'Time Series', 'Predictive Maintenance'],
        image: '/images/projects/solar-fault-detection.jpg',
        imageAlt: 'Early fault detection dashboard for solar plants',
      },
    ],
  },
  {
    company: 'AL-KO Geräte GmbH',
    role: 'Master Thesis — Computer Vision Engineer',
    location: 'Kötz, Germany',
    period: 'Apr 2024 — Sep 2024',
    summary:
      'Trained a YOLO instance-segmentation model for real-time obstacle avoidance on robotic lawn mowers and shipped it to a Raspberry Pi 5 edge target.',
    projects: [
      {
        title: 'Real-Time Obstacle Avoidance for Robotic Lawn Mowers',
        description:
          'Trained and fine-tuned a YOLO instance segmentation model to detect and classify critical obstacles for a robotic lawn mower.',
        metrics: ['90.2% mAP', '87.9% recall'],
        tech: ['YOLO', 'Instance Segmentation', 'PyTorch'],
      },
      {
        title: 'Edge Deployment on Raspberry Pi 5',
        description:
          'Converted the trained model to NCNN format for on-device inference, cutting latency with under 1% accuracy drop.',
        metrics: ['1492ms → 435ms', '3.4× faster', '<1% accuracy drop'],
        tech: ['NCNN', 'Model Quantization', 'Raspberry Pi 5'],
      },
    ],
    testimonial: {
      quote:
        'Demonstrated deep technical expertise in implementing and training neural networks, delivering an outstanding result well beyond what was expected of him.',
      author: 'Peter Müller',
      role: 'Head of Electronics Development, AL-KO Geräte GmbH',
    },
  },
  {
    company: 'Continental AG',
    role: 'Working Student — Image Processing & Tools Development',
    location: 'Neu-Ulm, Germany',
    period: 'Jan 2023 — Dec 2023',
    summary:
      'Built a simulation-data conversion pipeline for ADAS testing, mapping vehicle recordings into Continental\'s internal format to validate Matrix-LED light control.',
    projects: [
      {
        title: 'Simulation Data Pipeline for ADAS Testing',
        description:
          'Analysed the container structures used to store vehicle simulation data, designed a field-level mapping to Continental\'s internal recording format, and implemented the conversion pipeline — filtering redundant frames to cut dataset volume and enable evaluation of the Matrix-LED light-control algorithm against simulated night scenarios.',
        metrics: ['Reduced dataset volume', 'Matrix-LED night testing enabled'],
        tech: ['ADAS', 'Data Pipelines', 'Simulation'],
      },
    ],
    testimonial: {
      quote:
        "A diligent working student, keenly interested in the company's work — particularly notable for his ability to quickly grasp and analyze complex problems.",
      author: 'Dr. Bernd Kitt',
      role: 'Senior Software Engineer, Continental AG',
    },
  },
  {
    company: 'Saleshandy',
    role: 'Software Engineer',
    location: 'Ahmedabad, India (remote)',
    period: 'Jul 2022 — Dec 2024',
    summary:
      'Owned core SaaS features end-to-end across Node.js and React, and architected an event-driven pipeline processing millions of events a month for 25,000+ businesses.',
    projects: [
      {
        title: 'Core SaaS Features at Scale',
        description:
          'Owned core product features end-to-end across a Node.js backend and React frontend — email health scoring, sequence pause diagnostics, a multi-tenant agency portal, and a metered email-verification credit system.',
        metrics: ['15% lift in cold-mailing outcomes'],
        tech: ['Node.js', 'React', 'Feature Ownership'],
      },
      {
        title: 'High-Throughput Event Pipeline',
        description:
          'Architected asynchronous backend workflows using RabbitMQ/Kafka-style queues, decoupling ingestion, processing and delivery in the email pipeline.',
        metrics: ['Millions of events / month'],
        tech: ['RabbitMQ', 'Apache Kafka', 'AWS', 'Event-Driven Architecture'],
      },
      {
        title: 'Multi-Tenant Security & Performance',
        description:
          'Implemented RBAC and fine-grained permissions across the platform, added Redis-based caching and rate-limiting, and optimized PostgreSQL data models for high-scale, multi-tenant workloads.',
        metrics: ['25,000+ businesses supported'],
        tech: ['RBAC', 'Redis', 'PostgreSQL', 'Multi-Tenancy'],
      },
    ],
  },
  {
    company: 'Saleshandy',
    role: 'Junior Software Engineer',
    location: 'Ahmedabad, India (remote)',
    period: 'Mar 2021 — Jun 2022',
    summary:
      'Shipped backend and UI features across the subscription and deliverability modules, and set up GitHub Actions CI/CD for Node.js services.',
    projects: [
      {
        title: 'Subscriptions & Deliverability Backend',
        description:
          'Built backend features across subscription and deliverability modules using Node.js, contributing to deals worth up to $300K.',
        metrics: ['Deals up to $300K'],
        tech: ['Node.js'],
      },
      {
        title: 'Customer-Facing UI Flows',
        description:
          'Built React components and UI flows for customer-facing features — sequence status indicators, verification credit displays — collaborating closely with senior engineers.',
        metrics: [],
        tech: ['React'],
      },
      {
        title: 'CI/CD for Node.js Services',
        description:
          'Set up and maintained GitHub Actions pipelines to automate build, test and deployment for Node.js services, reducing manual release effort.',
        metrics: [],
        tech: ['GitHub Actions', 'CI/CD'],
      },
    ],
  },
]
