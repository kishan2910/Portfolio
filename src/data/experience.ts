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
            'Spearheaded the deployment of a single-node 2× H100 server for hosting open-source LLMs (e.g. Qwen3-Coder-Next) via vLLM to serve ~500 active users.',
            'Applied tensor parallelism across both GPUs to host high-parameter LLMs exceeding single-GPU memory limits.',
            'Deployed Open WebUI with web search, image generation and API access as the internal AI platform for locally hosted models.',
            'Secured the platform with Keycloak SSO across all local AI services.',
          ],
        },
        {
          title: 'Automated Nematode Analysis for Sustainable Crop Protection',
          client: 'E-Nema',
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
            'Built an agentic RAG system for Q&A over internal engineering documentation, cutting average lookup time from ~5 min to ~8 s.',
            'Indexed documents in Qdrant with hybrid search (BM25 + dense) and reranking for high-precision retrieval with grounded source citations.',
            'Developed document ingestion with Docling, Tesseract OCR and Vision-Language Models (VLMs) to extract text, tables and diagrams from engineering PDFs.',
            'Set up evaluation with DeepEval (LLM-as-a-judge) for answer correctness, faithfulness and hallucination rate, plus MLflow tracing for debugging in production.',
          ],
        },
        {
          title: 'AI-Based Fault Detection in Solar Plants',
          client: 'Solar-Energie Andresen GmbH',
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
      summary: [
        'Developed an obstacle avoidance system for robotic lawn mowers by training and fine-tuning YOLOv8 instance segmentation, achieving 90.2% mAP and 87.9% recall on critical objects.',
        'Deployed on Raspberry Pi 5, converting the model to NCNN format and reducing inference time from 1,492 ms to 435 ms (3.4× faster) with <1% mAP drop.',
      ],
      projects: [],
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
        "Analysed the container structures used to store vehicle simulation data, designed a field-level mapping to Continental's internal recording format, and built the conversion pipeline — filtering redundant frames to cut dataset volume so the Matrix-LED light-control algorithm could be evaluated against simulated night scenarios.",
      projects: [],
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
      period: 'Jan 2021 — Jul 2022',
      summary: [
        'Built an OCR and Data Matrix decoding system for pharmaceutical cartons, meeting packaging compliance standards in real-time line inspection.',
        'Contributed to OCR pipelines using CNN-based models and computer vision techniques for extracting text from industrial images, improving accuracy from 49% to 98%.',
        'Exported CNN models from PyTorch to ONNX for lightweight deployment and optimized them with TensorRT to reduce inference time (<10 ms).',
      ],
      projects: [],
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
            'Federführend die Inbetriebnahme eines Single-Node-Servers mit 2× H100 für das Hosting von Open-Source-LLMs (z. B. Qwen3-Coder-Next) mit vLLM übernommen, um rund 500 aktive Nutzer zu bedienen.',
            'Tensor-Parallelismus über beide GPUs angewendet, um Modelle mit sehr vielen Parametern zu hosten, die den Speicher einer einzelnen GPU übersteigen.',
            'Open WebUI mit Websuche, Bildgenerierung und API-Zugriff als interne KI-Plattform für lokal gehostete Modelle bereitgestellt.',
            'Die Plattform mit Keycloak-SSO über alle lokalen KI-Dienste hinweg abgesichert.',
          ],
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
          title: 'RAG-Pipeline über technische Dokumentation',
          client: 'Möller Operating Engineering GmbH',
          description: [
            'Ein agentisches RAG-System für Q&A über interne technische Dokumentation gebaut und die durchschnittliche Suchzeit von ~5 Min. auf ~8 s reduziert.',
            'Dokumente in Qdrant mit hybrider Suche (BM25 + Dense) und Reranking indexiert — für hochpräzises Retrieval mit belegten Quellenangaben.',
            'Dokumenten-Ingestion mit Docling, Tesseract OCR und Vision-Language-Modellen (VLMs) entwickelt, um Text, Tabellen und Diagramme aus technischen PDFs zu extrahieren.',
            'Evaluation mit DeepEval (LLM-as-a-Judge) für Antwortkorrektheit, Faithfulness und Halluzinationsrate aufgesetzt, dazu MLflow-Tracing zum Debugging in Produktion.',
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
      summary: [
        'Ein Hinderniserkennungssystem für Mähroboter entwickelt, indem ein YOLOv8-Instanzsegmentierungsmodell trainiert und feinabgestimmt wurde — mit 90,2 % mAP und 87,9 % Recall bei kritischen Objekten.',
        'Auf einem Raspberry Pi 5 bereitgestellt, das Modell nach NCNN konvertiert und die Inferenzzeit von 1.492 ms auf 435 ms (3,4× schneller) bei <1 % mAP-Verlust reduziert.',
      ],
      projects: [],
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
        'Die Container-Strukturen zur Speicherung von Fahrzeug-Simulationsdaten analysiert, eine feldgenaue Zuordnung zu Continentals internem Aufzeichnungsformat entworfen und die Umwandlungs-Pipeline implementiert — redundante Frames herausgefiltert, um das Datenvolumen zu reduzieren und die Matrix-LED-Lichtsteuerung gegen simulierte Nachtszenarien auswertbar zu machen.',
      projects: [],
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
      period: 'Jan. 2021 — Jul. 2022',
      summary: [
        'Ein OCR- und Data-Matrix-Decodierungssystem für pharmazeutische Kartons gebaut, das die Verpackungsnormen bei der Echtzeit-Inline-Prüfung erfüllt.',
        'Mitgewirkt an OCR-Pipelines mit CNN-basierten Modellen und Computer-Vision-Techniken zur Textextraktion aus Industriebildern, wodurch die Genauigkeit von 49 % auf 98 % gesteigert wurde.',
        'CNN-Modelle von PyTorch nach ONNX exportiert für ein schlankes Deployment und mit TensorRT optimiert, um die Inferenzzeit zu senken (<10 ms).',
      ],
      projects: [],
    },
  ],
}
