export interface ProfileConfig {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  overview: string;
  status: {
    availableForHire: boolean;
    badge: string;
    targetRoles: string[];
    period: string;
  };
  defaultMode: "job" | "craft";
}

export const profileConfig: ProfileConfig = {
  name: "Hariharan A",
  title: "Frontend & Mobile Engineer",
  phone: "+91 9344628710",
  email: "hariharana1309@gmail.com",
  location: "Salem, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/hari-haran-b59019187",
  github: "https://github.com/hariharan1309",
  portfolioUrl: "https://hari-haran-portfolio-fe.vercel.app",
  overview:
    "Frontend & Mobile Engineer specializing in Next.js, React, React Native, TypeScript, and TailwindCSS. Built multi-tenant SaaS platforms, AI application frontends, and on-device biometric authentication systems using TensorFlow Lite. Experienced in real-time features, performance optimization, authentication systems, and payment integration.",
  status: {
    availableForHire: true,
    badge: "AVAILABLE FOR HIRE // PRODUCTION READY",
    targetRoles: [
      "Frontend Engineer",
      "React Native Mobile Engineer",
      "Full Stack Engineer",
    ],
    period: "Immediate Availability",
  },
  defaultMode: "job",
};

export const skills = [
  {
    category: "Frontend Engineering",
    items: [
      "Next.js (App Router)",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "TailwindCSS",
      "Shadcn UI",
      "Framer Motion",
      "PWA",
      "Axios",
    ],
  },
  {
    category: "Mobile & On-Device AI",
    items: [
      "React Native",
      "Expo",
      "Vision Camera",
      "JSI Worklets",
      "TensorFlow Lite",
      "GhostFaceNet",
      "NativeWind",
      "Reanimated"
      // "Vector Embeddings",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "SQLite",
      "Drizzle ORM",
    ],
  },
  {
    category: "Auth & State Architecture",
    items: [
      "Role-Based Access (RBAC)",
      "JWT Authentication",
      "OAuth 2.0 (Google)",
      "Context API",
      "Zustand",
      "React Hooks",
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git & GitHub",
      "Docker",
      "Lighthouse CI",
      "Antigravity CLI",
      // "Vercel",
    ],
  },
];

export const experiences = [
  {
    role: "Associate Software Developer",
    company: "AGF Tecnik",
    location: "Tanjore, India",
    period: "05/2025 – Present",
    responsibilities: [
      "Architected frontend for an enterprise AI agent management platform using Next.js, TypeScript, and Shadcn UI.",
      "Engineered high-performance on-device React Native face recognition engine using TensorFlow Lite (GhostFaceNet) and Vision Camera JSI worklets for real-time 512-D vector inference with local SQLite storage via Drizzle ORM.",
      "Implemented enterprise role-based authorization (RBAC) with granular admin workflow management and share hierarchy controls.",
      "Developed landing pages and price analyzer analytical dashboards using Next.js, TailwindCSS, and Framer Motion.",
      // "Mentored a team of 3 junior developers on internal invoice management, HRMS, and project management applications.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Gym Force",
    location: "India",
    period: "09/2024 – 04/2025",
    responsibilities: [
      "Architected multi-tenant SaaS frontend serving commercial gym organizations with subscription-based authorization for multi-level user tiers.",
      "Engineered PWA offline capabilities, real-time WebSocket push notifications, and seamless Razorpay payment gateway integration.",
      "Optimized production performance to achieve 95+ Lighthouse scores through intelligent code-splitting, lazy loading, and memoization.",
    ],
  },
  {
    role: "Frontend Developer – Intern",
    company: "Gym Force",
    location: "India",
    period: "06/2024 – 09/2024",
    responsibilities: [
      "Developed interactive dashboards, member directory, and subscription plan management interfaces using Next.js, TypeScript, and TailwindCSS.",
      "Implemented secure JWT authentication and Google OAuth 2.0 with React Context API for global session state across routes.",
    ],
  },
  {
    role: "Next.js Developer – Intern",
    company: "Achintya Solutions",
    location: "India",
    period: "03/2024 – 06/2024",
    responsibilities: [
      "Built production-ready real-time web applications and responsive landing pages utilizing Next.js, TypeScript, and TailwindCSS.",
      "Gained deep production experience with Next.js App Router, Server Components (RSC), and hybrid server-side rendering architectures.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "India",
    period: "10/2023 – 01/2024",
    responsibilities: [
      "Delivered performant, custom full-stack web applications for independent clients using the MERN stack, TypeScript, and TailwindCSS.",
    ],
  },
  {
    role: "Full Stack Developer – Intern",
    company: "Virtusa",
    location: "India",
    period: "05/2023 – 08/2023",
    responsibilities: [
      "Trained in modern React.js frontend engineering and Spring Boot microservice architectures following strict Agile methodologies and Git workflows.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering — Electronics & Communication Engineering (ECE)",
  institution: "KPR Institute of Engineering and Technology",
  location: "Coimbatore, India",
  period: "08/2019 – 04/2023",
};

export const projects = [
  {
    title: "Enterprise AI Agent Management Platform",
    type: "Enterprise Architecture // AGF Tecnik",
    classification: "enterprise",
    ndaProtected: true,
    description:
      "Enterprise orchestration frontend for designing, deploying, and monitoring autonomous AI agents. Features dynamic visual workflow node builders, multi-tenant Role-Based Access Control (RBAC) with granular admin delegation, real-time LLM token telemetry, and analytical dashboards.",
    image: "/project-ai-agent.svg",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Shadcn UI",
      "TailwindCSS",
      "Framer Motion",
      "RBAC Engine",
      "RESTful APIs",
    ],
    metrics: "Autonomous Agent Orchestration // Multi-Tenant RBAC",
    link: "",
    github: "",
  },
  {
    title: "On-Device Biometric Facial Authentication",
    type: "Enterprise Work Project (AGF Tecnik)",
    classification: "enterprise",
    ndaProtected: true,
    description:
      "A high-performance on-device biometric security app built with React Native. Leverages TensorFlow Lite (GhostFaceNet) and Vision Camera JSI worklets to generate 512-dimensional vector embeddings locally in <45ms with zero cloud exposure, backed by local SQLite via Drizzle ORM.",
    image: "/project-biometrics.svg",
    technologies: [
      "React Native",
      "Expo",
      "TensorFlow Lite",
      "GhostFaceNet",
      "Vision Camera",
      "JSI Worklets",
      "SQLite / Drizzle",
    ],
    metrics: "<45ms On-Device Latency // Zero Cloud Egress",
    link: "",
    github: "",
  },
  {
    title: "Gym Force SaaS Platform",
    type: "Commercial Work Project",
    classification: "enterprise",
    ndaProtected: true,
    description:
      "Production-scale multi-tenant SaaS application built for commercial fitness enterprises. Features role-based tiered membership access, real-time WebSocket attendance notifications, and Razorpay subscription checkout flows.",
    image: "/project-gymforce.svg",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "WebSocket",
      "Razorpay",
      "RBAC",
    ],
    metrics: "Multi-Tenant RBAC // Real-time Notifications",
    link: "",
    github: "",
  },
  {
    title: "StayCation Vacation Rental Platform",
    type: "Production Full-Stack Application",
    classification: "personal",
    ndaProtected: false,
    description:
      "Full-stack property booking platform featuring granular role-based authorization for guests and property managers. Integrates dynamic availability scheduling, interactive map discovery, secure credential handling, and lightning-fast server-rendered listings.",
    image: "/stayCation.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Node.js",
      "Shadcn UI",
    ],
    metrics: "Full-Stack Deployment // Role-Based Portals",
    link: "https://staycation-eight-delta.vercel.app/",
    github: "https://github.com/hariharan1309/staycation",
  },
  {
    title: "Enterprise Subscription Management",
    type: "Backend Systems Architecture",
    classification: "personal",
    ndaProtected: false,
    description:
      "Robust subscription billing lifecycle system built with Express.js and MongoDB. Handles automated subscription renewal schedules, rate-limiting, comprehensive error recovery cascades, and webhook transaction states.",
    image: "/project-subscription.svg",
    technologies: [
      "Express.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "RESTful API",
    ],
    metrics: "Automated Lifecycles // Webhook Event Pipeline",
    link: "",
    github: "https://github.com/hariharan1309/subscription-tracker-express",
  },
];
