// Professional Portfolio Data for Tarun Eppe (@eppetarun)
// Sourced directly from official GitHub profile and verified engineering codebases

export const PERSONAL_INFO = {
  name: "Tarun Eppe",
  handle: "eppetarun",
  title: "Software Engineer & AI Systems Developer",
  subheadline: "B.Tech Computer Science & Engineering Student (2023–2027) at JNTUH. Creator of 33+ open-source GitHub repositories specializing in Full-Stack Engineering, AI/RAG Architectures, and Cross-Platform Systems.",
  bio: "I am a Computer Science and Engineering undergraduate at JNTU Hyderabad with hands-on experience designing and deploying production-grade AI systems, high-performance web applications, and scalable microservices. I focus on clean architecture, strong algorithmic fundamentals, and solving practical real-world problems.",
  location: "Hyderabad, Telangana, India",
  availability: "Available for SWE, Full-Stack & AI Roles (Internship & New Grad)",
  email: "eppetarun@gmail.com",
  phone: "+91 9121919410",
  college: "DRK Institute of Science and Technology (JNTU Hyderabad)",
  degree: "B.Tech in Computer Science and Engineering (2023 - 2027)",
  avatar: "/images/github_avatar.jpg",
  socials: {
    github: "https://github.com/eppetarun",
    linkedin: "https://linkedin.com/in/eppetarun",
    whatsapp: "https://wa.me/919121919410",
    email: "mailto:eppetarun@gmail.com",
    blog: "https://enigma.page.gd",
    twitter: "https://x.com"
  },
  stats: [
    { label: "Public Repositories", value: "33+" },
    { label: "Production Platforms", value: "8+" },
    { label: "Languages & Frameworks", value: "18+" },
    { label: "Academic Standing", value: "JNTUH '27" }
  ]
};

export const PROJECTS = [
  {
    id: "carecircle-ai",
    title: "CareCircle AI",
    category: "AI & Machine Learning",
    subtitle: "AI-Powered Blood Support Network for Thalassemia Care",
    description: "An intelligent patient-centric healthcare platform engineered to streamline Thalassemia care through automated donor matchmaking, outreach orchestration, and transfusion-cycle predictive modeling.",
    image: "/images/spatial_matrix_ui.jpg",
    tags: ["Python", "FastAPI", "Machine Learning", "Predictive Analytics", "REST API", "TailwindCSS"],
    year: "2026",
    metrics: "Automated Donor Matchmaking • Transfusion Cycle Prediction • Zero Overhead",
    features: [
      "Machine learning predictive model forecasting recipient transfusion intervals",
      "Automated regional donor discovery and urgent blood appeal dispatch system",
      "Comprehensive patient health tracking and transfusion scheduling cockpit",
      "Privacy-first donor contact masking and secure notification pipeline"
    ],
    githubUrl: "https://github.com/eppetarun/carecircle--ai",
    liveUrl: "https://github.com/eppetarun/carecircle--ai"
  },
  {
    id: "mypic",
    title: "MyPic (FaceMatch AI)",
    category: "Computer Vision & Full-Stack",
    subtitle: "Biometric Face Recognition & Event Photo Retrieval Platform",
    description: "A self-hosted biometric photo management engine utilizing browser-side deep learning CNN models (SSD MobileNet V1, 68 Landmarks). Features real-time webcam facial scanning, 128-dimensional Euclidean vector matching, and automated batch ZIP photo retrieval for event attendees.",
    image: "/images/facematch_banner.jpg",
    tags: ["PHP 8", "MySQL", "TensorFlow.js", "face-api.js", "JavaScript", "CNN"],
    year: "2025 - 2026",
    metrics: "128D Vector Embeddings • Sub-50ms Match Distance • 100% Free / Zero Cloud API Costs",
    features: [
      "Browser-based webcam face detection with real-time biometric alignment guide",
      "High-performance 128-dimensional facial embedding vector extraction & MySQL search",
      "Batch organizer uploader automatically detecting and tagging multiple faces per image",
      "Instant ZIP archive bundling allowing users to download all matched high-res photos"
    ],
    githubUrl: "https://github.com/eppetarun/mypic",
    liveUrl: "http://eppe.gt.tc"
  },
  {
    id: "agripath-samadhan",
    title: "AgriPath Samadhan & ORLIV",
    category: "AI & Machine Learning",
    subtitle: "Intelligent Agricultural Advisory & RAG Knowledge Engine",
    description: "A production-grade Retrieval-Augmented Generation (RAG) backend engineered for terrace farming and agricultural advisory. Combines FastAPI, Next.js, LangChain LCEL, Pinecone Serverless Vector Database, and Google Gemini API (gemini-2.0-flash) for verified agronomic advice.",
    image: "/images/spatial_matrix_ui.jpg",
    tags: ["Python", "FastAPI", "LangChain LCEL", "Google Gemini API", "Pinecone DB", "Next.js"],
    year: "2025 - 2026",
    metrics: "768-Dim Vector Indexing • Sub-100ms Query Latency • Grounded Source Citations",
    features: [
      "Automated markdown knowledge base ingestion with Recursive Character Text Splitter",
      "High-dimensional vector indexing using Google Gemini text-embedding-004 in Pinecone",
      "Dynamic structural safety checks validating terrace slab live-load constraints",
      "Strict agronomic safety prompt engineering enforcing zero hallucinations"
    ],
    githubUrl: "https://github.com/eppetarun/agri-path-samadhan",
    liveUrl: "https://github.com/eppetarun/orliv"
  },
  {
    id: "enigma-app",
    title: "Enigma Mobile Platform",
    category: "Mobile & Cloud",
    subtitle: "Cross-Platform Application with Reactive UI & Cloud Sync",
    description: "A modern cross-platform application developed with Flutter and Dart, backed by a robust PHP/MySQL REST API and Firebase. Implements custom reactive state management, role-based onboarding, and real-time synchronization.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Flutter", "Dart", "Firebase", "PHP", "MySQL", "REST API", "Android/iOS"],
    year: "2024 - 2025",
    metrics: "60 FPS Fluid UI • Cross-Platform iOS/Android/Web • RESTful Microservices",
    features: [
      "Role-based authentication & credential hashing with token security",
      "Interactive dashboard with custom Flutter animated widgets and reactive state",
      "Standardized JSON REST API endpoints supporting instant data synchronization",
      "Cloud database integration with automated backup and schedule coordination"
    ],
    githubUrl: "https://github.com/eppetarun/enigma-app",
    liveUrl: "http://enigma.page.gd"
  },
  {
    id: "college-result",
    title: "College Result & Academic Intelligence",
    category: "Full-Stack Web",
    subtitle: "Departmental Grade Analysis & Performance Tracking Portal",
    description: "An enterprise academic portal built for JNTUH / DRK students and faculty. Features automated result ledger parsing, departmental pass-percentage analytics, syllabus tracking, and dynamic PDF transcript generation.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "Analytics", "HTML5", "JavaScript", "PDF Generation"],
    year: "2024 - 2025",
    metrics: "Sub-10ms Query Execution • Automated Grade Point Calculation • Multi-Department",
    features: [
      "Dynamic student marksheet lookup with instantaneous GPA calculation",
      "Departmental grade point distribution charts and failure trend analysis",
      "Automated PDF syllabus and transcript streaming engine",
      "Secure role-based faculty administration panel for grade record uploads"
    ],
    githubUrl: "https://github.com/eppetarun/college-result",
    liveUrl: "http://drksyllabus.great-site.net"
  },
  {
    id: "pushpa-spring",
    title: "Pushpa & Sunil Spring",
    category: "Enterprise Systems",
    subtitle: "Scalable Java Spring Boot Microservice REST API Architecture",
    description: "Modular enterprise backend microservices engineered with Java, Maven, and Spring Boot. Implements clean layered architecture (Controller, Service, Repository), JPA/Hibernate object-relational mapping, and automated build pipelines.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    tags: ["Java", "Spring Boot", "Maven", "REST API", "Hibernate", "Microservices"],
    year: "2025",
    metrics: "Layered Architecture • Automated Maven CI • Enterprise Grade",
    features: [
      "RESTful API endpoints following strict HTTP specifications and JSON responses",
      "Layered domain service architecture separating business rules from transport",
      "Data persistence layer utilizing JPA/Hibernate with connection pooling",
      "Automated dependency management and build verification via Maven"
    ],
    githubUrl: "https://github.com/eppetarun/pushpa-spring",
    liveUrl: "https://github.com/eppetarun/sunil-spring"
  },
  {
    id: "my-first-agent",
    title: "Autonomous AI Agent Workflow",
    category: "AI & Machine Learning",
    subtitle: "Intelligent Task Automation using Agent Development Kit (ADK)",
    description: "An autonomous multi-step reasoning agent built with the Agent Development Kit (ADK) and modern LLM orchestration. Features dynamic tool invocation, goal-directed planning loops, and robust error recovery.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "AI Agents", "ADK", "LLM Workflows", "Prompt Engineering"],
    year: "2025",
    metrics: "Autonomous Tool Calling • Multi-Step Planning • Context-Aware Recovery",
    features: [
      "Autonomous task decomposition and multi-step plan execution",
      "Tool integration allowing external API communication and data retrieval",
      "Robust context-aware error handling preventing infinite reasoning loops",
      "Modular prompt template architecture allowing zero-shot agent adaptation"
    ],
    githubUrl: "https://github.com/eppetarun/my-first-agent",
    liveUrl: "https://github.com/eppetarun/my-first-agent"
  },
  {
    id: "smart-upsc-advisor",
    title: "Smart UPSC Advisor & Exam Coach",
    category: "Full-Stack Web",
    subtitle: "AI-Assisted Civil Services Strategy & LLaMA Evaluation System",
    description: "An educational AI platform integrating open-source LLM APIs (LLaMA & Sarvam AI) for automated answer evaluation, personalized study schedule generation, and 25-year previous examination paper analysis.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "LLaMA API", "Sarvam AI", "Chart.js", "AI Evaluation"],
    year: "2025",
    metrics: "Instant Answer Evaluation • 25-Year PYQ Archive • Custom Schedule Generator",
    features: [
      "Automated descriptive answer evaluation with constructive critique and grading",
      "Dynamic personalized study schedule planner adapting to student weak spots",
      "Comprehensive 25-year digital archive of previous examination papers",
      "Interactive mock test interface with real-time performance analytics"
    ],
    githubUrl: "https://github.com/eppetarun/smart-upsc-advisor",
    liveUrl: "https://github.com/eppetarun/upsc-portal"
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for backend systems, algorithmic problem solving, and application logic.",
    skills: [
      { name: "Python", level: "Advanced", desc: "FastAPI, Flask, PyTorch, LangChain, NumPy, Pandas" },
      { name: "Java", level: "Advanced", desc: "Spring Boot, Object-Oriented Design, Maven, JPA" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "React, Node.js, Asynchronous Programming, DOM" },
      { name: "TypeScript", level: "Proficient", desc: "Next.js, Static Typing, Interfaces, Web Systems" },
      { name: "Dart", level: "Proficient", desc: "Flutter Mobile Development, State Management" },
      { name: "PHP", level: "Advanced", desc: "PHP 8, MVC Architectures, REST APIs, Security" },
      { name: "SQL", level: "Advanced", desc: "Complex Queries, Schema Design, Indexing, Joins" },
      { name: "C++", level: "Proficient", desc: "Data Structures & Algorithmic Problem Solving" }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Web Technologies",
    description: "Modern frameworks for scalable frontends, high-throughput APIs, and mobile clients.",
    skills: [
      { name: "React 19 & Next.js", level: "Advanced", desc: "Component Architecture, Hooks, SSR/SSG" },
      { name: "FastAPI & Flask", level: "Advanced", desc: "High-Performance Asynchronous Python Services" },
      { name: "Spring Boot", level: "Proficient", desc: "Enterprise Microservices, Dependency Injection" },
      { name: "Flutter", level: "Proficient", desc: "Cross-Platform iOS, Android & Web Applications" },
      { name: "Tailwind CSS", level: "Expert", desc: "Responsive Design Systems, Clean Utility CSS" },
      { name: "Vite & Tooling", level: "Advanced", desc: "Module Bundling, Optimization, Fast Builds" }
    ]
  },
  {
    id: "ai-ml",
    title: "AI, Machine Learning & Vector Search",
    description: "Production intelligence pipelines, computer vision, and Retrieval-Augmented Generation.",
    skills: [
      { name: "LangChain (LCEL)", level: "Advanced", desc: "RAG Pipelines, Prompt Templates, Vector Chaining" },
      { name: "Pinecone Vector DB", level: "Advanced", desc: "High-Dimensional Vector Search, Cosine Similarity" },
      { name: "Google Gemini API", level: "Advanced", desc: "Gemini 2.0 Flash, Multimodal & Text Embeddings" },
      { name: "face-api.js & TensorFlow.js", level: "Advanced", desc: "Browser-side CNNs, 128D Biometric Embeddings" },
      { name: "PyTorch & TensorFlow", level: "Proficient", desc: "Neural Networks, Image Classification, Training" },
      { name: "scikit-learn & Pandas", level: "Advanced", desc: "Data Preprocessing, Regression, Model Evaluation" }
    ]
  },
  {
    id: "cloud-db",
    title: "Databases, Cloud & DevOps",
    description: "Database engines, containerization, and reliable server infrastructure.",
    skills: [
      { name: "PostgreSQL & Supabase", level: "Advanced", desc: "Relational Modeling, Auth, Row-Level Security" },
      { name: "MySQL", level: "Advanced", desc: "ACID Transactions, Stored Procedures, Optimization" },
      { name: "Firebase Realtime DB", level: "Advanced", desc: "Live Synchronization, Rules, Cloud Firestore" },
      { name: "MongoDB & Redis", level: "Proficient", desc: "NoSQL Collections, In-Memory Caching" },
      { name: "Docker", level: "Proficient", desc: "Containerization, Multi-Stage Builds, Isolation" },
      { name: "Git & GitHub", level: "Expert", desc: "Version Control, CI/CD Actions, Code Review" }
    ]
  },
  {
    id: "core-cs",
    title: "Core CS & Engineering Tools",
    description: "Foundational computer science principles essential for Big Tech engineering roles.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced", desc: "Arrays, Trees, Graphs, Dynamic Programming" },
      { name: "System Design & REST", level: "Advanced", desc: "Stateless Microservices, Load Balancing, Caching" },
      { name: "Operating Systems & Linux", level: "Proficient", desc: "Processes, Threads, Sockets, Shell Scripting" },
      { name: "Postman & API Testing", level: "Advanced", desc: "Endpoint Verification, Mocking, Automated Tests" }
    ]
  }
];

export const TIMELINE = [
  {
    year: "2023 - 2027",
    role: "B.Tech in Computer Science and Engineering",
    company: "DRK Institute of Science and Technology (JNTU Hyderabad)",
    description: "Pursuing bachelor's degree in Computer Science and Engineering. Rigorous coursework in Data Structures, Algorithms, Database Systems, Computer Networks, Operating Systems, Machine Learning, and Software Engineering."
  },
  {
    year: "2024 - PRESENT",
    role: "Open-Source Software Engineer & Systems Creator",
    company: "GitHub Community (@eppetarun)",
    description: "Designed, built, and open-sourced 33+ repositories spanning AI healthcare platforms (CareCircle AI), biometric computer vision (MyPic), agronomic RAG systems (AgriPath/Orliv), Flutter mobile apps, and enterprise Spring Boot microservices."
  },
  {
    year: "2020 - 2022",
    role: "Higher Secondary Education (MPC)",
    company: "J.S. Junior College, Hyderabad",
    description: "Completed intermediate education with major concentration in Mathematics, Physics, and Chemistry, laying a strong quantitative and analytical foundation."
  },
  {
    year: "2020",
    role: "Secondary School Certificate (SSC)",
    company: "SVBV School",
    description: "Completed secondary education with academic distinction and early exploration into computer programming."
  }
];

export const GITHUB_STATS = {
  username: "eppetarun",
  repoCount: 33,
  followers: 0,
  topLanguages: ["Python", "JavaScript", "PHP", "Java", "Dart", "C++"],
  profileUrl: "https://github.com/eppetarun",
  avatarUrl: "https://avatars.githubusercontent.com/u/164149707?v=4"
};
