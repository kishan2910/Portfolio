import type { ExperienceEntry, Locale } from '../types'

export const experience: Record<Locale, ExperienceEntry[]> = {
  en: [
    {
      company: 'KI.SH - Hochschule Flensburg',
      role: 'AI & MLOps Engineer - Research Associate',
      location: 'Flensburg, Germany',
      period: 'Jan 2025 - Present',
      summary:
        'Part of the state AI-transfer initiative Künstliche Intelligenz SH - a team that helps small and mid-sized companies (SMEs) across Schleswig-Holstein put AI into practice. I run the LLM infrastructure and deliver client projects end-to-end, from defining usecases to running scalable system.',
      projects: [
        {
          title: 'LLM Infrastructure & MLOps Platform',
          client: 'Hochschule Flensburg',
          href: 'https://kuenstliche-intelligenz.sh/de/hs-flensburg',
          description:
            'Own the on-premise GPU infrastructure the whole team builds on: deployed and operate open-source LLMs and VLMs from Hugging Face with vLLM on bare-metal Kubernetes, serving roughly 500 concurrent users at ~78 ms per output token — fully on-premise to meet GDPR data-residency rules. Hardened the inference endpoints with Keycloak authentication, structured logging and request tracing.',
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
        'Trained and finetuned YOLOv8 instance-segmentation model for real-time obstacle avoidance on robotic lawn mowers and deployed it to Raspberry Pi 5 edge device.',
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
        "Built a simulation-data conversion pipeline for ADAS testing, mapping vehicle recordings into Continental's internal format to validate Matrix-LED light control.",
      projects: [
        {
          title: 'Simulation Data Pipeline for ADAS Testing',
          description:
            "Analysed the container structures used to store vehicle simulation data, designed a field-level mapping to Continental's internal recording format, and implemented the conversion pipeline — filtering redundant frames to cut dataset volume and enable evaluation of the Matrix-LED light-control algorithm against simulated night scenarios.",
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
      company: 'BLUIE',
      role: 'Junior AI Engineer',
      location: 'Ahmedabad, India',
      period: 'Mar 2021 — Jun 2022',
      summary:
        'Built an OCR and Data Matrix decoding system for pharmaceutical cartons, using sequence modelling to map visual input to structured text.',
      projects: [
        {
          title: 'High-Speed OCR & Data Matrix Decoding for Pharma Cartons',
          description:
            'Built an OCR and Data Matrix decoding system for pharmaceutical cartons, using sequence modelling to map visual input to structured text — fast enough for real-time inference (<3 ms) to meet packaging-standard compliance.',
          metrics: ['<3 ms inference'],
          tech: ['Sequence Modelling', 'OCR', 'Computer Vision'],
        },
        {
          title: 'CNN OCR Pipelines for Industrial Images',
          description:
            'Developed CNN-based OCR pipelines to extract text from industrial images, improving accuracy from 49% to 98%. Converted models to ONNX for cross-platform deployment and optimised with TensorRT down to 10 ms inference.',
          metrics: ['49% → 98% accuracy', '10 ms inference'],
          tech: ['CNN', 'ONNX', 'TensorRT'],
        },
      ],
    },
  ],

  de: [
    {
      company: 'KI.SH - Hochschule Flensburg',
      role: 'KI- & MLOps-Engineer - Wissenschaftlicher Mitarbeiter',
      location: 'Flensburg, Deutschland',
      period: 'Jan. 2025 – heute',
      summary:
        'Teil der landesweiten KI-Transfer-Initiative Künstliche Intelligenz SH — ein Team, das kleine und mittlere Unternehmen (KMU) in Schleswig-Holstein dabei unterstützt, KI in die Praxis zu bringen. Ich betreibe die LLM-Infrastruktur und setze Kundenprojekte von A bis Z um — von der Definition der Use Cases bis zum skalierbaren, laufenden System.',
      projects: [
        {
          title: 'LLM-Infrastruktur & MLOps-Plattform',
          client: 'Hochschule Flensburg',
          href: 'https://kuenstliche-intelligenz.sh/de/hs-flensburg',
          description:
            'Verantwortlich für die On-Premise-GPU-Infrastruktur, auf der das ganze Team aufbaut: Open-Source-LLMs und -VLMs von Hugging Face mit vLLM auf Bare-Metal-Kubernetes bereitgestellt und betrieben, rund 500 gleichzeitige Nutzer bei ca. 78 ms pro Ausgabe-Token — vollständig on-premise, um die DSGVO-Vorgaben zur Datenlokalität zu erfüllen. Die Inferenz-Endpunkte mit Keycloak-Authentifizierung, strukturiertem Logging und Request-Tracing abgesichert.',
          metrics: ['~500 gleichzeitige Nutzer', '78 ms TPOT', 'On-Prem / DSGVO'],
          tech: ['vLLM', 'Kubernetes', 'Hugging Face', 'GPU-Infrastruktur', 'Observability'],
          image: '/images/projects/llm-infrastructure.jpg',
          imageAlt: 'On-Premise-GPU-Cluster für LLMs an der Hochschule Flensburg',
        },
        {
          title: 'Fallbasiertes Assistenzsystem für juristische Entscheidungen',
          client: 'Kreis Plön (Kreisverwaltung)',
          description:
            'Ein Assistenzsystem entwickelt, das Sachbearbeiter:innen unterstützt, indem es zu einem neuen Sachverhalt vergleichbare frühere Fälle und Entscheidungen findet — fallbasiertes Schließen kombiniert mit Retrieval über juristische und Verwaltungsdokumente, sodass Präzedenzfälle in Sekunden statt durch manuelle Recherche sichtbar werden.',
          metrics: ['Präzedenzsuche in Sekunden'],
          tech: ['Fallbasiertes Schließen', 'RAG', 'Legal NLP', 'Retrieval'],
          note: 'Ausführlicher Projektbericht auf Anfrage.',
          image: '/images/projects/kreis-ploen-legal-cbr.jpg',
          imageAlt: 'Fallbasiertes Assistenzsystem zur juristischen Entscheidungsunterstützung',
        },
        {
          title: 'RAG-Pipeline über technische Dokumentation',
          client: 'Möller Operating Engineering GmbH',
          description:
            'Eine Retrieval-Augmented-Generation-Pipeline über die technische Dokumentation des Unternehmens entworfen und gebaut — Ingestion, Chunking, Embedding, Vektor-Retrieval und eine belegte Antwortebene — sodass Ingenieur:innen in natürlicher Sprache fragen und Antworten mit Quellenangabe erhalten.',
          metrics: [],
          tech: ['RAG', 'LangChain', 'Vektorsuche', 'FastAPI'],
          image: '/images/projects/moeller-rag-pipeline.jpg',
          imageAlt: 'RAG-Pipeline für Fragen zur technischen Dokumentation',
        },
        {
          title: 'Wissensbasis-Onboarding für RAG',
          client: 'fjord7',
          description:
            'Den Dokumentenbestand von fjord7 in die RAG-Wissensbasis überführt — Ingestion, Chunking und Embedding des Materials strukturiert und das Retrieval so abgestimmt, dass Antworten in den eigenen Inhalten verankert bleiben.',
          metrics: [],
          tech: ['RAG', 'Embeddings', 'Daten-Ingestion', 'Retrieval-Tuning'],
          image: '/images/projects/fjord7-knowledge-base.jpg',
          imageAlt: 'Dokumenten-Ingestion in eine RAG-Wissensbasis für fjord7',
        },
        {
          title: 'Automatisierte Nematodenanalyse für nachhaltigen Pflanzenschutz',
          client: 'Künstliche Intelligenz SH — Partner aus der Landwirtschaft',
          href: 'https://kuenstliche-intelligenz.sh/de/automatisierte-nematodenanalyse-fuer-nachhaltigen-pflanzenschutz',
          description:
            'An einem Computer-Vision-System mitgewirkt, das Nematoden in Mikroskopbildern automatisch erkennt und zählt — es ersetzt das langsame manuelle Zählen und liefert Betrieben schnellere, konsistentere Daten für nachhaltigen Pflanzenschutz.',
          metrics: [],
          tech: ['Computer Vision', 'Bildanalyse', 'PyTorch'],
          image: '/images/projects/nematode-analysis.jpg',
          imageAlt: 'Automatisierte Mikroskopanalyse zur Nematodenerkennung',
        },
        {
          title: 'KI-gestützte Störungserkennung in Solaranlagen',
          client: 'Künstliche Intelligenz SH — Partner aus der Energiebranche',
          href: 'https://kuenstliche-intelligenz.sh/de/wartung-mit-weitblick-ki-gestuetzte-stoerungserkennung-in-solaranlagen',
          description:
            '„Wartung mit Weitblick“ — Anomalie- und Störungserkennung auf Betriebsdaten von Solaranlagen, die Ausfälle früh meldet und Betreibern hilft, Wartung zu priorisieren, bevor Ertrag verloren geht.',
          metrics: [],
          tech: ['Anomalieerkennung', 'Zeitreihen', 'Predictive Maintenance'],
          image: '/images/projects/solar-fault-detection.jpg',
          imageAlt: 'Frühzeitige Störungserkennung für Solaranlagen',
        },
      ],
    },
    {
      company: 'AL-KO Geräte GmbH',
      role: 'Masterarbeit — Computer-Vision-Engineer',
      location: 'Kötz, Deutschland',
      period: 'Apr. 2024 — Sep. 2024',
      summary:
        'Ein YOLOv8-Instanzsegmentierungsmodell für die Echtzeit-Hinderniserkennung von Mährobotern trainiert und feinabgestimmt und auf einem Raspberry Pi 5 als Edge-Gerät ausgeliefert.',
      projects: [
        {
          title: 'Echtzeit-Hinderniserkennung für Mähroboter',
          description:
            'Ein YOLO-Instanzsegmentierungsmodell trainiert und feinabgestimmt, um kritische Hindernisse für einen Mähroboter zu erkennen und zu klassifizieren.',
          metrics: ['90,2 % mAP', '87,9 % Recall'],
          tech: ['YOLO', 'Instanzsegmentierung', 'PyTorch'],
        },
        {
          title: 'Edge-Deployment auf Raspberry Pi 5',
          description:
            'Das trainierte Modell für die Inferenz auf dem Gerät nach NCNN konvertiert und die Latenz bei unter 1 % Genauigkeitsverlust gesenkt.',
          metrics: ['1492 ms → 435 ms', '3,4× schneller', '<1 % Genauigkeitsverlust'],
          tech: ['NCNN', 'Modellquantisierung', 'Raspberry Pi 5'],
        },
      ],
      testimonial: {
        quote:
          'Herr Ajudiya überzeugte durch tiefe Fachkenntnisse im Bereich der Umsetzung und vor allem des Trainings von neuronalen Netzen. Dabei gelang es ihm in kürzester Zeit, die an ihn gestellten Aufgaben umzusetzen und ein hervorragendes Ergebnis zu erreichen.',
        author: 'Peter Müller',
        role: 'Leiter Elektronik Entwicklung, AL-KO Geräte GmbH',
      },
    },
    {
      company: 'Continental AG',
      role: 'Werkstudent — Bildverarbeitung & Tool-Entwicklung',
      location: 'Neu-Ulm, Deutschland',
      period: 'Jan. 2023 — Dez. 2023',
      summary:
        'Eine Pipeline zur Umwandlung von Simulationsdaten für ADAS-Tests gebaut, die Fahrzeugaufzeichnungen in Continentals internes Format überführt, um die Matrix-LED-Lichtsteuerung zu validieren.',
      projects: [
        {
          title: 'Simulationsdaten-Pipeline für ADAS-Tests',
          description:
            'Die Container-Strukturen zur Speicherung von Fahrzeug-Simulationsdaten analysiert, eine feldgenaue Zuordnung zu Continentals internem Aufzeichnungsformat entworfen und die Umwandlungs-Pipeline implementiert — redundante Frames herausgefiltert, um das Datenvolumen zu reduzieren und die Matrix-LED-Lichtsteuerung gegen simulierte Nachtszenarien auswertbar zu machen.',
          metrics: ['Datenvolumen reduziert', 'Matrix-LED-Nachttests ermöglicht'],
          tech: ['ADAS', 'Datenpipelines', 'Simulation'],
        },
      ],
      testimonial: {
        quote:
          'Ein fleißiger, an der Arbeit des Unternehmens sehr interessierter Werkstudent — besonders hervorzuheben sind seine Fähigkeiten, komplexe Sachverhalte schnell zu erfassen und zu analysieren.',
        author: 'Dr. Bernd Kitt',
        role: 'Senior Software Engineer, Continental AG',
      },
    },
    {
      company: 'BLUIE',
      role: 'Junior AI Engineer',
      location: 'Ahmedabad, Indien',
      period: 'März 2021 — Juni 2022',
      summary:
        'Ein OCR- und Data-Matrix-Decodierungssystem für pharmazeutische Kartons gebaut, das mit Sequenzmodellierung visuelle Eingaben auf strukturierten Text abbildet.',
      projects: [
        {
          title: 'Schnelle OCR & Data-Matrix-Decodierung für Pharma-Kartons',
          description:
            'Ein OCR- und Data-Matrix-Decodierungssystem für pharmazeutische Kartons gebaut, das mit Sequenzmodellierung visuelle Eingaben auf strukturierten Text abbildet — schnell genug für Echtzeit-Inferenz (<3 ms), um Verpackungsnormen zu erfüllen.',
          metrics: ['<3 ms Inferenz'],
          tech: ['Sequenzmodellierung', 'OCR', 'Computer Vision'],
        },
        {
          title: 'CNN-OCR-Pipelines für Industriebilder',
          description:
            'CNN-basierte OCR-Pipelines entwickelt, um Text aus Industriebildern zu extrahieren, und die Genauigkeit von 49 % auf 98 % gesteigert. Modelle für den plattformübergreifenden Einsatz nach ONNX konvertiert und mit TensorRT auf 10 ms Inferenz optimiert.',
          metrics: ['49 % → 98 % Genauigkeit', '10 ms Inferenz'],
          tech: ['CNN', 'ONNX', 'TensorRT'],
        },
      ],
    },
  ],
}
