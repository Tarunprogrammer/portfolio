// Comprehensive Portfolio Data for Eppe Tarun (Tarun Media)

export const PERSONAL_INFO = {
  name: "Eppe Tarun",
  alias: "TARUN MEDIA",
  title: "Creative Technologist & 3D Full-Stack Architect",
  roles: [
    "Creative Technologist",
    "3D WebGL Architect",
    "Full-Stack Engineer",
    "Spatial Computing Pioneer",
    "Cinematic Media Producer"
  ],
  bio: "Architecting hyper-immersive digital dimensions at the nexus of real-time 3D graphics, generative intelligence, and resilient full-stack web engineering. Turning abstract imaginations into ultra-cinematic reality.",
  location: "India • Available Worldwide",
  availability: "OPEN FOR ELITE PROJECTS & ROLES (Q3/Q4)",
  email: "contact.eppetarun@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com"
  },
  stats: [
    { label: "Production Deployments", value: "28+" },
    { label: "Interactive 3D Experiences", value: "14+" },
    { label: "Global Users Reached", value: "150K+" },
    { label: "Client Satisfaction Rate", value: "100%" }
  ]
};

export const PROJECTS = [
  {
    id: "aetheria-3d",
    title: "AETHERIA SPATIAL 3D",
    subtitle: "Real-Time WebGL Cybernetic Metaverse Showroom",
    description: "An ultra-low latency WebGL interactive spatial environment featuring procedural custom shaders, dynamic shadow mapping, camera spline animations, and spatial Web Audio synthesis. Delivers 60 FPS performance on both desktop and mobile.",
    image: "/images/cyber_quantum_core.jpg",
    tags: ["Three.js", "WebGL", "GLSL Shaders", "React", "Web Audio", "Tailwind"],
    year: "2026",
    metrics: "60 FPS Render Loop • 0 External Audio Bandwidth • 45% Smaller Bundle",
    features: [
      "Procedural crystalline 3D mesh deformation with custom vertex shaders",
      "Dynamic volumetric mouse-reactive point lights and bloom post-processing",
      "Integrated procedural audio synth responding directly to 3D interaction physics",
      "Progressive asset stream pipeline with graceful WebGL fallback"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com"
  },
  {
    id: "neura-synapse",
    title: "NEURA SYNAPSE OS",
    subtitle: "Autonomous AI Intelligence & Telemetry Cockpit",
    description: "Mission-critical AI telemetry dashboard engineered for monitoring distributed multi-agent LLM systems in real time. Features holographic glassmorphic UI, live WebSocket streaming, and interactive neural network topology graphs.",
    image: "/images/spatial_matrix_ui.jpg",
    tags: ["React 19", "TypeScript", "WebSockets", "Three.js", "Python", "FastAPI"],
    year: "2025",
    metrics: "100k+ Events/Sec • Sub-15ms Latency • Zero Layout Jitter",
    features: [
      "Real-time WebSocket event ingestion with zero-copy stream processing",
      "Interactive 3D node matrix graph visualizing active neural weights and tokens",
      "Cyberpunk glassmorphic HUD with user-customizable floating widget dock",
      "Auditable execution logs with instant time-travel rollback debugger"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com"
  },
  {
    id: "vortex-engine",
    title: "VORTEX MEDIA ENGINE",
    subtitle: "Virtual Production & High-Throughput 3D Studio",
    description: "A state-of-the-art virtual production workflow platform uniting Unreal Engine / WebGL camera tracking with high-performance real-time browser rendering. Enables filmmakers and creators to preview live LED volume compositions seamlessly.",
    image: "/images/cinematic_virtual_stage.jpg",
    tags: ["WebGL2", "WebGPU", "Node.js", "FFmpeg WASM", "Tailwind", "Three.js"],
    year: "2025",
    metrics: "4K Real-Time Compositions • 10x Render Acceleration",
    features: [
      "Browser-based camera tracking telemetry synchronized with 3D scene cameras",
      "Real-time LUT color grading preview using custom WebGL fragment shaders",
      "In-browser hardware-accelerated video transcoding via WebAssembly",
      "Collaborative cloud review room with frame-accurate multi-user annotations"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com"
  },
  {
    id: "chrono-terminal",
    title: "CHRONO CLOUD MATRIX",
    subtitle: "Distributed Microservice Command & Orchestration Plane",
    description: "High-security distributed cloud management platform with a cinematic dark-mode interface. Features an integrated command-line emulator, cluster topology visualizer, and automated canary deployment gates.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Go", "Docker", "Kubernetes", "Tailwind CSS", "GraphQL"],
    year: "2024",
    metrics: "99.99% Availability • Multi-Region Resiliency",
    features: [
      "Real-time Kubernetes cluster topology rendering with interactive 3D nodes",
      "Instant terminal command interface with keyboard shortcuts and auto-complete",
      "Automated canary rollback mechanisms triggered by real-time anomaly alerts",
      "End-to-end encrypted telemetry transport with zero-trust token validation"
    ],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com"
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "3d-creative",
    title: "3D & Creative WebGL",
    description: "Crafting living, interactive three-dimensional digital environments and cinematic aesthetics.",
    skills: [
      { name: "Three.js / WebGL", level: "Expert", pct: 95 },
      { name: "GLSL Shaders", level: "Advanced", pct: 88 },
      { name: "Blender 3D Modeling", level: "Advanced", pct: 85 },
      { name: "Unreal Engine 5", level: "Intermediate", pct: 80 },
      { name: "Framer Motion", level: "Expert", pct: 96 },
      { name: "Web Audio API", level: "Advanced", pct: 90 }
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Architecture",
    description: "Engineering rock-solid, scalable frontend ecosystems and resilient backend backbones.",
    skills: [
      { name: "React 19 / Next.js", level: "Master", pct: 98 },
      { name: "TypeScript", level: "Expert", pct: 94 },
      { name: "Tailwind CSS", level: "Master", pct: 98 },
      { name: "Node.js & Express", level: "Expert", pct: 92 },
      { name: "PostgreSQL & Prisma", level: "Advanced", pct: 88 },
      { name: "REST & GraphQL APIs", level: "Expert", pct: 92 }
    ]
  },
  {
    id: "ai-systems",
    title: "AI & Distributed Cloud",
    description: "Infusing web applications with intelligent agents, real-time streaming, and cloud infrastructure.",
    skills: [
      { name: "Python / FastAPI", level: "Advanced", pct: 90 },
      { name: "LLM Agent Tooling", level: "Advanced", pct: 88 },
      { name: "Docker & Containerization", level: "Advanced", pct: 85 },
      { name: "Vercel / AWS Cloud", level: "Advanced", pct: 88 },
      { name: "WebSockets & WebRTC", level: "Expert", pct: 91 },
      { name: "Git & CI/CD Pipelines", level: "Master", pct: 95 }
    ]
  },
  {
    id: "media-production",
    title: "Cinematic Media Production",
    description: "Directing high-impact audiovisual content, motion graphics, and brand experiences.",
    skills: [
      { name: "Premiere Pro & DaVinci", level: "Expert", pct: 94 },
      { name: "After Effects VFX", level: "Advanced", pct: 89 },
      { name: "Cinematography & Lighting", level: "Advanced", pct: 87 },
      { name: "UI/UX & Figma Design", level: "Master", pct: 95 },
      { name: "Sound Engineering", level: "Advanced", pct: 85 },
      { name: "Creative Art Direction", level: "Master", pct: 96 }
    ]
  }
];

export const VISUAL_GALLERY = [
  {
    id: "gal-1",
    title: "Quantum Core Polyhedron",
    category: "Real-Time 3D CGI",
    image: "/images/cyber_quantum_core.jpg",
    aspect: "col-span-1 md:col-span-2 aspect-video"
  },
  {
    id: "gal-2",
    title: "Spatial HUD Cockpit",
    category: "Futuristic UI/UX",
    image: "/images/spatial_matrix_ui.jpg",
    aspect: "col-span-1 aspect-square"
  },
  {
    id: "gal-3",
    title: "Virtual Production LED Stage",
    category: "Cinematic Production",
    image: "/images/cinematic_virtual_stage.jpg",
    aspect: "col-span-1 md:col-span-2 aspect-video"
  },
  {
    id: "gal-4",
    title: "Cybernetic High-Density Circuitry",
    category: "Hardware & Tech",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    aspect: "col-span-1 aspect-square"
  },
  {
    id: "gal-5",
    title: "Neon Metropolis Twilight",
    category: "Atmospheric Lighting",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop",
    aspect: "col-span-1 aspect-square"
  },
  {
    id: "gal-6",
    title: "Acoustic Wave Hologram",
    category: "Audio Visualization",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1000&auto=format&fit=crop",
    aspect: "col-span-1 aspect-square"
  }
];

export const TIMELINE = [
  {
    year: "2026 - PRESENT",
    role: "Lead Creative Technologist & Founder",
    company: "Tarun Media",
    description: "Directing the convergence of real-time 3D spatial computing, interactive WebGL applications, and cutting-edge software architecture for global forward-thinking brands."
  },
  {
    year: "2024 - 2025",
    role: "Senior 3D & Full-Stack Engineer",
    company: "Apex Spatial Labs",
    description: "Engineered ultra-responsive WebGL showrooms, generative AI dashboards, and modular design systems reaching hundreds of thousands of active digital users."
  },
  {
    year: "2023 - 2024",
    role: "Creative Developer & Motion Specialist",
    company: "Hyperion Digital Studio",
    description: "Crafted award-winning interactive web experiences, micro-interactions, custom Web Audio synthesis, and dynamic particle systems."
  },
  {
    year: "2022 - 2023",
    role: "Software Engineer & Visual Designer",
    company: "CoreTech Innovations",
    description: "Developed scalable full-stack applications with React, Node.js, and modern cloud deployment pipelines."
  }
];

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  • about       : Display Eppe Tarun's profile & mission
  • skills      : List primary technical and creative proficiencies
  • projects    : Show flagship interactive 3D productions
  • contact     : Get direct communication frequencies
  • hire        : Quick inquiry checklist for hiring Eppe Tarun
  • clear       : Clear the terminal screen
  • matrix      : Initialize cybernetic visual stream`,
  about: `EPPE TARUN [TARUN MEDIA]
Status: Active • Open for Q3/Q4 2026 Collaborations
Mission: Bridging the gap between cinematic storytelling and rigorous software engineering.
Location: India / Remote Worldwide`,
  skills: `CORE ARSENAL:
  [3D & Graphics]  Three.js, WebGL, GLSL Shaders, Blender, Unreal Engine
  [Frontend]       React 19, TypeScript, Next.js, Tailwind CSS, Framer Motion
  [Backend & AI]   Node.js, Express, Python, FastAPI, Docker, WebSockets
  [Media & VFX]    DaVinci Resolve, Premiere Pro, After Effects, Figma`,
  projects: `FLAGSHIP PROJECTS:
  1. AETHERIA 3D      - Spatial WebGL Metaverse Showroom (60 FPS)
  2. NEURA SYNAPSE OS - Autonomous AI Telemetry Cockpit
  3. VORTEX ENGINE    - Virtual Production & 3D Video Studio
  4. CHRONO MATRIX    - Distributed Cloud Management Plane`,
  contact: `DIRECT CHANNELS:
  Email    : contact.eppetarun@gmail.com
  GitHub   : github.com/eppetarun
  LinkedIn : linkedin.com/in/eppetarun`,
  hire: `HIRING EPPE TARUN:
  • Role Types: Creative Technologist, Lead Frontend, 3D WebGL Engineer, Technical Director
  • Availability: Immediate for contract or high-impact full-time roles
  • Action: Scroll down to the contact terminal or email directly!`
};
