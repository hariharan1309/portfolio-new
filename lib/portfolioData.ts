// export const skills = [
//   {
//     category: "Frontend",
//     items: ["Next.js", "React.js", "React Native", "Expo", "TypeScript", "JavaScript (ES6+)", "Context API", "TailwindCSS", "Shadcn UI", "Framer Motion"]
//   },
//   {
//     category: "Backend & Tools",
//     items: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "JWT", "Git"]
//   }
// ];
export const skills = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Context API",
    ],
  },
  {
    category: "Mobile & AI Integration",
    items: [
      "React Native",
      "Expo",
      "TensorFlow Lite",
      "JSI Worklets",
      "rn-vision-camera",
    ],
  },
  {
    category: "UI & Styling",
    items: ["TailwindCSS", "Shadcn UI", "Framer Motion", "Reanimated"],
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "JWT", "Git"],
  },
];

export const experiences = [
  {
    role: "Associate Software Developer",
    company: "AGF Tecnik | Tanjore, India",
    period: "05/2025 - Present",
    responsibilities: [
      "Built frontend for an AI agent management platform using Next.js, TypeScript, and Shadcn UI",
      "Developing a high-performance on-device React Native face recognition app using TensorFlow Lite and Vision Camera worklets for real-time AI inference.",
      "Implemented role-based authorization with admin workflow management and share hierarchy controls",
      "Developed landing page and price analyzer dashboard using Next.js, TailwindCSS, and Framer Motion",
      "Mentored a team of 3 junior developers on developing invoice management, HRMS, and project management tools.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Gym Force | India",
    period: "09/2024 - 04/2025",
    responsibilities: [
      "Developed SaaS platform serving gym organizations with subscription-based authorization for multi-level user access.",
      "Implemented PWA, Web-socket notifications and Razor-pay payment integration.",
      "Optimized performance through best practices like lazy loading and code-splitting.",
    ],
  },
  {
    role: "Frontend Developer - Intern",
    company: "Gym Force | India",
    period: "06/2024 - 09/2024",
    responsibilities: [
      "Developed dashboard, user and plan pages for gym member management using Next.js, TypeScript, and Tailwind-CSS",
      "Implemented Authentication with JWT and Google OAuth authentication using Context to Authorize users across the pages",
    ],
  },
  {
    role: "Next.js Developer - Intern",
    company: "Achintya Solutions | India",
    period: "03/2024 - 06/2024",
    responsibilities: [
      "Built real-time web applications and landing pages using Next.js, TypeScript, and Tailwind-CSS.",
      "Gained production experience with Next.js App Router and server-side rendering.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed | India",
    period: "10/2023 - 01/2024",
    responsibilities: [
      "Delivered web applications using MERN stack and React.js with TailwindCSS for clients.",
    ],
  },
  {
    role: "Full Stack Developer - Intern",
    company: "Virtusa | India",
    period: "05/2023 - 08/2023",
    responsibilities: [
      "Trained in React.js and Spring Boot development following agile workflows and Git version control.",
    ],
  },
];

export const projects = [
  {
    title: "On-Device Biometric Authentication System",
    type: "Work Project (AGF Tecnik)",
    description:
      "A high-performance React Native mobile application featuring real-time face detection and local ML inference using TensorFlow Lite and JSI worklets to generate 512-dimensional vector embeddings.",
    image: "/project-biometrics.svg",
    technologies: [
      "React Native",
      "Expo",
      "TensorFlow Lite",
      "TypeScript",
      "Vision Camera",
    ],
    link: "", // Leave blank if internal
    github: "", // Leave blank if private repo
  },
  {
    title: "Gym Force Web Application",
    type: "Work Project",
    description:
      "A comprehensive web application for gym management, featuring user profiles, workout tracking, and membership management.",
    image: "/project-gymforce.svg",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "RizzUI",
      "React.js",
    ],
    link: "",
    github: "",
  },
  {
    title: "StayCation",
    type: "Personal Project",
    description:
      "StayCation is a vacation rental platform built with Next.js, TypeScript, and Tailwind CSS, offering seamless booking experiences with role-based access for users and property owners.",
    image: "/stayCation.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Node.js",
      "Shadcn UI",
    ],
    link: "https://staycation-eight-delta.vercel.app/",
    github: "https://github.com/hariharan1309/staycation",
  },
  {
    title: "Subscription Management System",
    type: "Personal Project",
    description:
      "This project is a comprehensive subscription management system with user authentication, subscription handling, and robust error management. The system allows users to sign up, log in, and manage their subscriptions with various features including upcoming renewal notifications and subscription status management.",
    image: "/project-subscription.svg",
    technologies: ["Express.js", "MongoDB", "Node.js"],
    link: "",
    github: "https://github.com/hariharan1309/subscription-tracker-express",
  },
];
