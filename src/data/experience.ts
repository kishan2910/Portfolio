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
      projectsPage: '/hs-flensburg',
      projects: [
        {
          title: 'LLM Infrastructure & MLOps Platform',
          client: 'Hochschule Flensburg',
          href: 'https://kuenstliche-intelligenz.sh/de/hs-flensburg',
          description: [
            'Spearheaded the deployment of a single-node, 2× H100 GPU server for on-premise LLM hosting via vLLM to serve ~500 concurrent users at low per-token latency.',
            'Applied tensor parallelism across both GPUs to host high-parameter LLMs exceeding single-GPU memory limits.',
            'Integrated OpenWebUI with web search and image generation, giving internal teams feature-rich AI chat and API access to locally hosted models.',
            'Implemented Keycloak integration to centralize authentication and enforce enterprise access controls across all local AI services.',
          ],
        },
        {
          title: 'Automated Nematode Analysis for Sustainable Crop Protection',
          client: 'Künstliche Intelligenz SH — agriculture partner',
          href: 'https://kuenstliche-intelligenz.sh/de/automatisierte-nematodenanalyse-fuer-nachhaltigen-pflanzenschutz',
          description: [
            'Automated manual biological quality control by replacing 30-minute microscopic counts with a real-time computer vision video analysis pipeline.',
            'Leveraged Segment Anything Model 2 (SAM 2) and custom keypoint labeling to track and segment microscopic organisms across video frames for dataset generation.',
            'Trained an efficient YOLO model to detect and classify living vs. dead nematodes in real time while filtering out debris, air bubbles and object clusters.',
            'Reduced sample analysis time from 30 minutes to 2 minutes (~93% speedup) at 85% accuracy, drastically accelerating quality assurance for biological crop protection products.',
          ],
        },
        {
          title: 'RAG Pipeline over Technical Documentation',
          client: 'Möller Operating Engineering GmbH',
          description: [
            'Developed an agentic RAG pipeline over internal technical documentation for interactive Q&A system with grounded, verifiable source citations.',
            'Combined Docling, Tesseract OCR and Vision-Language Models (VLMs) to extract text, tables and complex diagram contexts from engineering PDFs that standard parsers miss.',
            'Architected document chunking, embedding and indexing in ChromaDB to enable high-precision vector similarity search across technical repositories.',
            'Integrated an agentic routing layer and dynamic evaluation metrics to measure retrieval accuracy and answer groundedness, eliminating hallucinated responses.',
          ],
        },
        {
          title: 'AI-Based Fault Detection in Solar Plants',
          client: 'Künstliche Intelligenz SH — energy partner',
          href: 'https://kuenstliche-intelligenz.sh/de/wartung-mit-weitblick-ki-gestuetzte-stoerungserkennung-in-solaranlagen',
          description:
            '“Maintenance with foresight” — anomaly and fault detection on solar-plant operating data that flags failures early and helps operators prioritise maintenance before yield is lost.',
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
        },
        {
          title: 'Edge Deployment on Raspberry Pi 5',
          description:
            'Converted the trained model to NCNN format for on-device inference, cutting latency with under 1% accuracy drop.',
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
        },
        {
          title: 'CNN OCR Pipelines for Industrial Images',
          description:
            'Developed CNN-based OCR pipelines to extract text from industrial images, improving accuracy from 49% to 98%. Converted models to ONNX for cross-platform deployment and optimised with TensorRT down to 10 ms inference.',
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
      projectsPage: '/hs-flensburg',
      projects: [
        {
          title: 'LLM-Infrastruktur & MLOps-Plattform',
          client: 'Hochschule Flensburg',
          href: 'https://kuenstliche-intelligenz.sh/de/hs-flensburg',
          description: [
            'Federführend die Inbetriebnahme eines Single-Node-Servers mit 2× H100-GPUs für das On-Premise-Hosting von LLMs mit vLLM übernommen, um rund 500 gleichzeitige Nutzer bei niedriger Latenz pro Token zu bedienen.',
            'Tensor-Parallelismus über beide GPUs angewendet, um Modelle mit sehr vielen Parametern zu hosten, die den Speicher einer einzelnen GPU übersteigen.',
            'OpenWebUI mit Websuche und Bildgenerierung integriert und internen Teams so funktionsreichen KI-Chat- und API-Zugriff auf lokal gehostete Modelle ermöglicht.',
            'Keycloak-Integration umgesetzt, um die Authentifizierung zu zentralisieren und unternehmensweite Zugriffskontrollen für alle lokalen KI-Dienste durchzusetzen.',
          ],
        },
        {
          title: 'RAG-Pipeline über technische Dokumentation',
          client: 'Möller Operating Engineering GmbH',
          description: [
            'Eine agentische RAG-Pipeline über die interne technische Dokumentation entwickelt — für ein interaktives Q&A-System mit belegten, überprüfbaren Quellenangaben.',
            'Docling, Tesseract OCR und Vision-Language-Modelle (VLMs) kombiniert, um Text, Tabellen und komplexe Diagrammkontexte aus technischen PDFs zu extrahieren, die Standard-Parser übersehen.',
            'Dokumenten-Chunking, Embedding und Indexierung in ChromaDB entworfen, um hochpräzise Vektor-Ähnlichkeitssuche über technische Dokumentenbestände zu ermöglichen.',
            'Eine agentische Routing-Schicht und dynamische Evaluationsmetriken integriert, um Retrieval-Genauigkeit und Antwortverankerung zu messen und Halluzinationen zu eliminieren.',
          ],
        },
        {
          title: 'Wissensbasis-Onboarding für RAG',
          client: 'fjord7',
          description:
            'Den Dokumentenbestand von fjord7 in die RAG-Wissensbasis überführt — Ingestion, Chunking und Embedding des Materials strukturiert und das Retrieval so abgestimmt, dass Antworten in den eigenen Inhalten verankert bleiben.',
        },
        {
          title: 'Automatisierte Nematodenanalyse für nachhaltigen Pflanzenschutz',
          client: 'Künstliche Intelligenz SH — Partner aus der Landwirtschaft',
          href: 'https://kuenstliche-intelligenz.sh/de/automatisierte-nematodenanalyse-fuer-nachhaltigen-pflanzenschutz',
          description: [
            'Die manuelle biologische Qualitätskontrolle automatisiert, indem 30-minütige mikroskopische Zählungen durch eine Echtzeit-Computer-Vision-Videoanalyse-Pipeline ersetzt wurden.',
            'Segment Anything Model 2 (SAM 2) und individuelles Keypoint-Labeling genutzt, um mikroskopische Organismen über Videoframes hinweg zu verfolgen und zu segmentieren und so Trainingsdaten zu erzeugen.',
            'Ein effizientes YOLO-Modell trainiert, um lebende und tote Nematoden in Echtzeit zu erkennen und zu klassifizieren und dabei Schmutzpartikel, Luftblasen und Objektcluster herauszufiltern.',
            'Die Analysezeit pro Probe von 30 Minuten auf 2 Minuten reduziert (~93 % schneller) bei 85 % Genauigkeit und damit die Qualitätssicherung für biologische Pflanzenschutzprodukte drastisch beschleunigt.',
          ],
        },
        {
          title: 'KI-gestützte Störungserkennung in Solaranlagen',
          client: 'Künstliche Intelligenz SH — Partner aus der Energiebranche',
          href: 'https://kuenstliche-intelligenz.sh/de/wartung-mit-weitblick-ki-gestuetzte-stoerungserkennung-in-solaranlagen',
          description:
            '„Wartung mit Weitblick“ — Anomalie- und Störungserkennung auf Betriebsdaten von Solaranlagen, die Ausfälle früh meldet und Betreibern hilft, Wartung zu priorisieren, bevor Ertrag verloren geht.',
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
        },
        {
          title: 'Edge-Deployment auf Raspberry Pi 5',
          description:
            'Das trainierte Modell für die Inferenz auf dem Gerät nach NCNN konvertiert und die Latenz bei unter 1 % Genauigkeitsverlust gesenkt.',
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
        },
        {
          title: 'CNN-OCR-Pipelines für Industriebilder',
          description:
            'CNN-basierte OCR-Pipelines entwickelt, um Text aus Industriebildern zu extrahieren, und die Genauigkeit von 49 % auf 98 % gesteigert. Modelle für den plattformübergreifenden Einsatz nach ONNX konvertiert und mit TensorRT auf 10 ms Inferenz optimiert.',
        },
      ],
    },
  ],
}
