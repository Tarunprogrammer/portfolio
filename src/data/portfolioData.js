// Authentic Portfolio Data for Eppe Tarun (Tarun Media)
// Grounded directly in verified academic records, resume, and local codebases

export const PERSONAL_INFO = {
  name: "Eppe Tarun",
  alias: "TARUN MEDIA",
  title: "Computer Science Engineer | Full-Stack & AI Systems Developer",
  roles: [
    "Full-Stack Web Architect",
    "AI & Computer Vision Developer",
    "RAG & LLM Systems Engineer",
    "B.Tech CSE Student @ JNTUH",
    "Digital Platform Specialist (Tarun Media)"
  ],
  bio: "B.Tech Computer Science and Engineering student at JNTUH with deep hands-on expertise building production-ready AI applications, computer vision face retrieval, vector RAG systems, educational marketplaces, and scalable full-stack web platforms.",
  location: "Hyderabad, Telangana, India",
  availability: "OPEN FOR HIGH-IMPACT ROLES & FREELANCE PLATFORMS",
  email: "eppetarun@gmail.com",
  phone: "+91 9121919410",
  college: "DRK Institute of Science and Technology (JNTUH), Hyderabad",
  degree: "B.Tech in Computer Science and Engineering (2023 - 2027)",
  socials: {
    github: "https://github.com/eppetarun",
    linkedin: "https://linkedin.com/in/eppetarun",
    whatsapp: "https://wa.me/919121919410",
    twitter: "https://x.com",
    instagram: "https://instagram.com"
  },
  stats: [
    { label: "Real Systems Built", value: "8+" },
    { label: "AI & ML Integrations", value: "4" },
    { label: "Core Technologies", value: "15+" },
    { label: "Academic Standing", value: "JNTUH '27" }
  ]
};

export const PROJECTS = [
  {
    id: "facematch-ai",
    title: "FACEMATCH AI",
    subtitle: "Biometric Face Recognition & Event Photo Retrieval System",
    description: "A self-hosted photo management platform built with PHP, MySQL, and face-api.js / TensorFlow.js CNN models (SSD MobileNet V1, 68 Facial Landmarks, Face Recognition). Features real-time webcam face scanning with an alignment guide, 128-dimensional Euclidean vector search, automatic multi-face batch detection for organizers, and instant ZIP archive downloading.",
    image: "/images/facematch_banner.jpg",
    tags: ["face-api.js", "TensorFlow.js", "PHP 8", "MySQL", "CNN", "JavaScript", "REST API"],
    year: "2025 - 2026",
    metrics: "128D Vector Embeddings • Sub-50ms Distance • Zero Cloud API Costs",
    features: [
      "Live webcam facial detection scanner with interactive oval guide and selfie upload",
      "128-dimensional facial embedding extraction and MySQL Euclidean distance search (O(n))",
      "Batch photo uploader automatically detecting and tagging multiple faces per event picture",
      "Instant ZIP generator allowing attendees to download all their matched photos at full resolution"
    ],
    liveUrl: "https://github.com/eppetarun",
    githubUrl: "https://github.com/eppetarun"
  },
  {
    id: "agripath-ai",
    title: "AGRIPATH AI / ORLIV",
    subtitle: "Urban Rooftop Agriculture & Agronomic RAG Knowledge Engine",
    description: "A production-grade Retrieval-Augmented Generation (RAG) backend designed for urban terrace farming and agricultural advisory. Combines FastAPI, LangChain (LCEL), Pinecone Serverless Vector Database, and Google Gemini API (gemini-2.0-flash & text-embedding-004) to provide verified agronomic calculations, soil mix formulas, and structural load analysis.",
    image: "/images/spatial_matrix_ui.jpg",
    tags: ["FastAPI", "Python", "Google Gemini API", "LangChain LCEL", "Pinecone DB", "RAG"],
    year: "2025 - 2026",
    metrics: "768-Dim Embeddings • Top-k Similarity • Strict Source Grounding",
    features: [
      "Automated markdown agronomy knowledge base ingestion with Recursive Character Text Splitter",
      "Semantic vector indexing using Google Gemini text-embedding-004 into Pinecone Serverless DB",
      "Dynamic safety algorithms checking residential slab structural live load thresholds",
      "Verified agronomic prompt engineering with zero hallucinations and source citations"
    ],
    liveUrl: "https://github.com/eppetarun",
    githubUrl: "https://github.com/eppetarun"
  },
  {
    id: "smart-canteen",
    title: "SMART CANTEEN PLATFORM",
    subtitle: "Campus Digital Food Ordering & Kitchen Telemetry System",
    description: "An end-to-end digital food ordering system engineered for educational campuses. Features intuitive user menus, real-time cart and checkout workflows, live order tracking, administrative product catalog management, and operational analytics dashboards.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "JavaScript", "Session Cart", "Admin Analytics", "HTML5/CSS3"],
    year: "2025",
    metrics: "Real-Time Order Flow • Sub-Second Cart Update • Zero Missed Tokens",
    features: [
      "Streamlined checkout flow with live session persistence and automated token generation",
      "Interactive menu with category filtering, dietary tags, and real-time inventory counts",
      "Kitchen administration console for real-time order processing and status toggling",
      "Analytics dashboard reporting daily sales volume, peak hours, and popular dishes"
    ],
    liveUrl: "https://github.com/eppetarun",
    githubUrl: "https://github.com/eppetarun"
  },
  {
    id: "zeng-apparel",
    title: "ZENG CUSTOM APPAREL STUDIO",
    subtitle: "Interactive SVG T-Shirt Customizer & E-Commerce Platform",
    description: "A modern e-commerce platform equipped with an interactive in-browser SVG customizer. Allows users to manipulate vector designs on front and back garment surfaces in real time, with Google Auth, phone OTP verification, and an automated order management system.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    tags: ["JavaScript", "SVG Graphics", "PHP", "MySQL", "OTP Auth", "Canvas"],
    year: "2025",
    metrics: "Dynamic SVG Rendering • Dual-Surface Canvas • Instant OTP Auth",
    features: [
      "Dynamic SVG vector customizer allowing artwork placement, color selection, and scaling",
      "Dual-view perspective toggle for designing front and back apparel surfaces",
      "Phone OTP verification and Google Authentication for seamless customer onboarding",
      "Complete order lifecycle pipeline with production mockups and invoice generation"
    ],
    liveUrl: "https://github.com/eppetarun",
    githubUrl: "https://github.com/eppetarun"
  },
  {
    id: "enigma-tuitions",
    title: "ENIGMA HOME TUITIONS",
    subtitle: "Two-Sided Marketplace Connecting Tutors and Students",
    description: "A two-sided educational platform featuring role-based access control, booking workflows, and student-tutor matchmaking. Built with a clean PHP/MySQL REST API layer and accompanied by a cross-platform mobile client for managing classes, consultations, and schedules.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "REST API", "Flutter", "Role-Based Auth", "JavaScript"],
    year: "2024 - 2025",
    metrics: "Dual-Role Architecture • RESTful Endpoints • Mobile & Web Integration",
    features: [
      "Role-based authentication & credential security for both students and private tutors",
      "Standardized JSON REST API endpoints supporting Flutter mobile and web clients",
      "Automated subject matching, booking workflow, and parent consultation coordinator",
      "Administrative dashboard for tutor verification, class schedules, and review management"
    ],
    liveUrl: "https://github.com/eppetarun",
    githubUrl: "https://github.com/eppetarun"
  },
  {
    id: "upsc-prep-ai",
    title: "SMART UPSC PREP ADVISOR",
    subtitle: "AI-Powered Civil Services Mentor & Answer Evaluator",
    description: "An advanced educational preparation platform integrating Sarvam AI and LLaMA models for automated study mentoring, personalized timetable generation, interactive timed mock tests with instant AI analysis, and historical PYQ question archives.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "Sarvam AI", "LLaMA LLM", "AI Coach", "Analytics"],
    year: "2025",
    metrics: "Instant AI Evaluation • Automated Timetables • 10+ Years PYQ Archive",
    features: [
      "Intelligent AI study coach powered by modern Indian language and general LLM models",
      "Interactive mock test engine with instant score breakdown and AI recommendations",
      "Dynamic algorithm generating custom study timetables tailored to syllabus progress",
      "Curated digital repository for previous year question papers (PYQs) and reference guides"
    ],
    liveUrl: "https://github.com/eppetarun",
    githubUrl: "https://github.com/eppetarun"
  },
  {
    id: "online-job-portal",
    title: "ENTERPRISE JOB PORTAL",
    subtitle: "Modern Recruitment & Applicant Tracking System",
    description: "A full-scale job recruitment and placement management portal featuring candidate profile generation, resume processing, company job posting, applicant tracking, and status pipeline management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "CSS3 / Deep Theme", "Applicant Tracking", "Workflow"],
    year: "2025",
    metrics: "End-to-End Application Pipeline • Role-Based Dashboard • Fast Search",
    features: [
      "Candidate profile creator with education, experience, and uploaded resume management",
      "Employer cockpit for posting vacancies, specifying skill tags, and viewing applicants",
      "Interactive application status workflow from review to interview scheduling",
      "Custom responsive interface with custom deep-theme styling"
    ],
    liveUrl: "https://github.com/eppetarun",
    githubUrl: "https://github.com/eppetarun"
  },
  {
    id: "techfair-voting",
    title: "TECHFAIR DIGITAL VOTING",
    subtitle: "Campus Innovation Exhibition & Real-Time Voting Portal",
    description: "A specialized web application engineered for college technical symposiums and project exhibitions. Enables student innovation teams to showcase project abstracts and allows attendees to cast secure digital ballots with live administrative tabulation.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    tags: ["PHP", "MySQL", "Real-Time Polling", "Student Auth", "Admin Results"],
    year: "2025",
    metrics: "One-Student-One-Vote Security • Real-Time Tabulation • Live Leaderboard",
    features: [
      "Student registration and secure authenticated single-vote verification system",
      "Interactive project catalogue with technical abstracts and team credentials",
      "Real-time administrative scoreboard aggregating voting tallies across departments",
      "Optimized lightweight architecture with sub-10ms database response latency"
    ],
    liveUrl: "https://github.com/eppetarun",
    githubUrl: "https://github.com/eppetarun"
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "ai-vision",
    title: "AI, Vision & RAG Systems",
    description: "Developing production AI architectures, facial biometric recognition, and semantic vector retrieval pipelines.",
    skills: [
      { name: "face-api.js & TensorFlow.js", level: "Expert", pct: 93 },
      { name: "Google Gemini API & LLMs", level: "Advanced", pct: 90 },
      { name: "FastAPI & Python", level: "Expert", pct: 95 },
      { name: "LangChain & LCEL RAG", level: "Advanced", pct: 88 },
      { name: "Pinecone Vector Database", level: "Advanced", pct: 86 },
      { name: "Sarvam AI & LLaMA Integration", level: "Advanced", pct: 87 }
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Engineering",
    description: "Designing resilient backend architectures, relational databases, and modern interactive user interfaces.",
    skills: [
      { name: "PHP 8 & MySQL", level: "Master", pct: 96 },
      { name: "Python (Flask / FastAPI)", level: "Expert", pct: 94 },
      { name: "JavaScript (ES6+) & DOM", level: "Expert", pct: 92 },
      { name: "React 19 & Tailwind CSS", level: "Expert", pct: 91 },
      { name: "HTML5 Canvas & Responsive UI", level: "Master", pct: 98 },
      { name: "RESTful APIs & JSON Transport", level: "Expert", pct: 95 }
    ]
  },
  {
    id: "platform-cloud",
    title: "Platform & App Architecture",
    description: "Building cross-platform client solutions, real-time synchronization, and robust server deployments.",
    skills: [
      { name: "Flutter & Dart (Cross-Platform)", level: "Advanced", pct: 85 },
      { name: "Firebase Realtime Database", level: "Advanced", pct: 88 },
      { name: "Git & GitHub Version Control", level: "Master", pct: 95 },
      { name: "Apache & XAMPP Server Hosting", level: "Expert", pct: 92 },
      { name: "Vite & Modern Frontend Tooling", level: "Expert", pct: 90 },
      { name: "SVG & Canvas Dynamic Customizers", level: "Advanced", pct: 89 }
    ]
  },
  {
    id: "media-business",
    title: "Media Production & Digital Business",
    description: "Directing cinematic audiovisual editing, platform strategy, and user journey optimization at Tarun Media.",
    skills: [
      { name: "Adobe Premiere Pro Editing", level: "Expert", pct: 94 },
      { name: "DaVinci Resolve Color Grading", level: "Advanced", pct: 88 },
      { name: "Adobe Photoshop Visual Design", level: "Expert", pct: 92 },
      { name: "Digital Business & Platform UX", level: "Expert", pct: 93 },
      { name: "User Journey & Flow Mapping", level: "Expert", pct: 91 },
      { name: "Technical Communication & Leadership", level: "Master", pct: 96 }
    ]
  }
];

export const VISUAL_GALLERY = [
  {
    id: "gal-1",
    title: "FaceMatch AI Event Architecture",
    category: "Biometric AI & Computer Vision",
    image: "/images/facematch_banner.jpg",
    aspect: "col-span-1 md:col-span-2 aspect-video"
  },
  {
    id: "gal-2",
    title: "ORLIV RAG Knowledge Matrix",
    category: "Vector Search & LLMs",
    image: "/images/spatial_matrix_ui.jpg",
    aspect: "col-span-1 aspect-square"
  },
  {
    id: "gal-3",
    title: "Tarun Media Production Suite",
    category: "Cinematic Media & VFX",
    image: "/images/cinematic_virtual_stage.jpg",
    aspect: "col-span-1 md:col-span-2 aspect-video"
  },
  {
    id: "gal-4",
    title: "Smart Canteen Real-Time Ordering",
    category: "Campus Web Platforms",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    aspect: "col-span-1 aspect-square"
  },
  {
    id: "gal-5",
    title: "Interactive Vector Customization",
    category: "Dynamic Canvas & SVG",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    aspect: "col-span-1 aspect-square"
  },
  {
    id: "gal-6",
    title: "Quantum Holographic Core",
    category: "Interactive 3D WebGL",
    image: "/images/cyber_quantum_core.jpg",
    aspect: "col-span-1 aspect-square"
  }
];

export const TIMELINE = [
  {
    year: "2023 - 2027",
    role: "B.Tech in Computer Science and Engineering (CSE)",
    company: "DRK Institute of Science and Technology (JNTUH), Hyderabad",
    description: "Undergraduate degree in Computer Science and Engineering. Specializing in Artificial Intelligence, Machine Learning, Operating Systems, Database Management, and Full-Stack Engineering."
  },
  {
    year: "2024 - PRESENT",
    role: "Lead Full-Stack Developer & Media Director",
    company: "Tarun Media",
    description: "Directing digital platform development, AI system deployments, full-stack web applications, and professional multimedia production for clients and modern digital initiatives."
  },
  {
    year: "2024 - 2026",
    role: "Lead Systems Architect (Academic & Independent Systems)",
    company: "Campus & Client Deployments",
    description: "Engineered and deployed FaceMatch AI biometric facial recognition, AgriPath AI / ORLIV RAG assistant, Smart Canteen ordering, ENIGMA marketplace, and Zeng Apparel Studio."
  },
  {
    year: "2020 - 2022",
    role: "Higher Secondary Education (MPC)",
    company: "J.S. Junior College, Hyderabad",
    description: "Completed intermediate studies with focused concentration in Mathematics, Physics, and Chemistry."
  },
  {
    year: "2020",
    role: "Secondary School Certificate (SSC)",
    company: "SVBV School",
    description: "Completed high school with academic distinction, building fundamental passion for computer programming and visual technologies."
  }
];

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  • about       : Display Eppe Tarun's profile & mission
  • education   : Academic chronology & degrees (JNTUH CSE)
  • skills      : List primary technical and creative proficiencies
  • projects    : Show verified developed projects (FaceMatch, AgriPath, etc.)
  • contact     : Get direct communication frequencies (Email, Phone, WhatsApp)
  • hire        : Inquire regarding software engineering, AI, & freelance
  • clear       : Clear the terminal screen
  • matrix      : Initialize cybernetic visual stream`,
  about: `EPPE TARUN [TARUN MEDIA]
Status: Active • B.Tech CSE (2023-2027) @ JNTUH
Profile: Computer Science Engineer, Full-Stack Architect & AI Systems Developer
Location: Hyderabad, Telangana, India
Focus: Face Biometrics (face-api.js), Vector RAG (Gemini & Pinecone), Full-Stack (PHP, Python, React)`,
  education: `ACADEMIC CHRONOLOGY:
  • 2023 - 2027 : B.Tech, Computer Science and Engineering
                  DRK Institute of Science and Technology (JNTUH), Hyderabad
  • 2020 - 2022 : Intermediate (MPC), J.S. Junior College, Hyderabad
  • 2020        : Secondary School Certificate (SSC), SVBV School`,
  skills: `CORE ARSENAL:
  [AI & Vision]    face-api.js, TensorFlow.js, Google Gemini API, LangChain LCEL, Pinecone DB
  [Full-Stack]     PHP 8, MySQL, Python (FastAPI/Flask), React 19, JavaScript ES6+, Tailwind CSS
  [Platforms]      Flutter & Dart, Firebase Realtime DB, Git, Apache, XAMPP, SVG Customizers
  [Media & UX]     Adobe Premiere Pro, DaVinci Resolve, Photoshop, Platform Strategy`,
  projects: `VERIFIED DEVELOPED PROJECTS:
  1. FACEMATCH AI        - 128D Biometric Face Recognition & Event Photo Retrieval
  2. AGRIPATH AI / ORLIV - Urban Rooftop Agriculture RAG Vector Knowledge Engine
  3. SMART CANTEEN       - Campus Digital Food Ordering & Kitchen Telemetry
  4. ZENG APPAREL        - Interactive SVG T-Shirt Customizer & E-Commerce
  5. ENIGMA TUITIONS     - Two-Sided Tutor Marketplace with Mobile App REST API
  6. SMART UPSC ADVISOR  - AI Civil Services Mentoring & Answer Evaluator
  7. ENTERPRISE JOBS     - Full-Scale Recruitment & Applicant Tracking System
  8. TECHFAIR VOTING     - Campus Technical Innovation Exhibition & Live Voting`,
  contact: `DIRECT FREQUENCIES:
  Email    : eppetarun@gmail.com
  Phone    : +91 9121919410
  WhatsApp : wa.me/919121919410
  GitHub   : github.com/eppetarun
  LinkedIn : linkedin.com/in/eppetarun`,
  hire: `COLLABORATING WITH EPPE TARUN:
  • Roles: Full-Stack Web Engineer, AI Systems Integrator, Frontend Architect, Media Director
  • Availability: Immediate for freelance web platforms, internships, and high-impact software roles
  • Action: Reach out via email (eppetarun@gmail.com) or WhatsApp (+91 9121919410)!`
};
