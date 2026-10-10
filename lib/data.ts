// ============================================================
// EDIT THIS FILE to customize your portfolio with real content
// ============================================================

export const profile = {
  name: "Nay Htet Khant",
  role: "Backend-Leaning Full Stack Developer",
  tagline:
    "I build the parts that are hard to fake — real-time systems, queues, APIs, and databases.",
  location: "Thailand",
  email: "nayhtetkhant.dev@gmail.com",
  github: "https://github.com/nayhtetkhant",
  linkedin: "https://www.linkedin.com/in/nay-htet-khant-43a6a7389/",
  twitter: "",
  resumeUrl: "/resume.pdf", // drop your resume into /public
  availability:
    "Open to on-site roles in Thailand & remote roles with international teams",
  about: [
    "I'm a backend-leaning full stack developer who enjoys building the parts most people never see: APIs, queues, WebSocket layers, and database design — plus enough frontend to ship the whole product.",
    "My recent work includes ChatN, a real-time chat platform (Next.js frontend, Laravel API, WebRTC via LiveKit, Dockerized with Caddy), and ricemill-api, a Laravel application serving real business workflows.",
    "I learn by building: proof-of-concepts like a WebRTC playground and a PHP MVC framework written from scratch keep my fundamentals sharp.",
  ],
};

export const skills = [
  {
    category: "Backend",
    items: ["Node.js", "Laravel (PHP)", "REST APIs", "Queues / Jobs", "Auth", "Caddy"],
  },
  {
    category: "Real-Time",
    items: ["WebSockets", "WebRTC", "LiveKit", "Broadcasting", "Presence"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Blade"],
  },
  {
    category: "Data & DevOps",
    items: ["MySQL", "Docker", "Docker Compose", "Git", "Linux", "CI basics"],
  },
];

export const projects = [
  {
    title: "ChatN — Real-Time Chat Platform",
    description:
      "My flagship project, split into three repos for real production-style architecture: a Next.js frontend (shadcn, TanStack Query, Zustand), a Laravel API with Sanctum auth and Reverb WebSocket broadcasting, and a Docker infra layer (Caddy + LiveKit) powering real-time messaging and voice/video rooms.",
    tech: ["Next.js", "TypeScript", "Laravel", "Reverb", "Sanctum", "LiveKit", "Docker"],
    github: "https://github.com/nayhtetkhant/chatn-web",
    repos: [
      { label: "chatn-web", url: "https://github.com/nayhtetkhant/chatn-web" },
      { label: "chatn-api", url: "https://github.com/nayhtetkhant/chatn-api" },
      { label: "chatn-main", url: "https://github.com/nayhtetkhant/chatn-main" },
    ],
    demo: "",
    image: "/projects/chat.svg",
  },
  {
    title: "Ricemill — Transaction Web App",
    description:
      "A Laravel + Blade application managing transaction workflows for a rice mill business — server-rendered pages, Eloquent data modeling, validation, and maintainable domain logic. My most recent build (Oct 2026).",
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    github: "https://github.com/nayhtetkhant/ricemill-api",
    repos: [{ label: "ricemill-api", url: "https://github.com/nayhtetkhant/ricemill-api" }],
    demo: "",
    image: "/projects/ricemill.svg",
  },
  {
    title: "RTC Proof of Concept",
    description:
      "A focused WebRTC playground in TypeScript — experimenting with peer connections, media streams, and signaling to really understand how real-time video works under the hood.",
    tech: ["TypeScript", "WebRTC", "JavaScript"],
    github: "https://github.com/nayhtetkhant/rtc-poc",
    repos: [{ label: "rtc-poc", url: "https://github.com/nayhtetkhant/rtc-poc" }],
    demo: "",
    image: "/projects/rtc.svg",
  },
  {
    title: "MVC Framework from Scratch",
    description:
      "A PHP MVC framework written from scratch — routing, controllers, views, and request handling implemented manually to learn exactly how frameworks like Laravel work internally.",
    tech: ["PHP", "MVC"],
    github: "https://github.com/nayhtetkhant/mvc-poc",
    repos: [{ label: "mvc-poc", url: "https://github.com/nayhtetkhant/mvc-poc" }],
    demo: "",
    image: "/projects/mvc.svg",
  },
  {
    title: "User Management",
    description:
      "A classic user management system — authentication, sessions, and CRUD over users, built to nail the fundamentals of server-rendered web apps.",
    tech: ["PHP", "HTML", "JavaScript"],
    github: "https://github.com/nayhtetkhant/user-management",
    repos: [{ label: "user-management", url: "https://github.com/nayhtetkhant/user-management" }],
    demo: "",
    image: "/projects/users.svg",
  },
];

export const experience = [
  {
    role: "Self-Taught Developer — Building in Public",
    company: "Independent",
    period: "2026 — Present",
    points: [
      "Built ChatN end to end: Next.js frontend, Laravel API, WebRTC/LiveKit video, Dockerized infrastructure.",
      "Shipped ricemill-api, a Laravel app modeling real business workflows.",
      "Deep-dived real-time internals with a WebRTC proof-of-concept and a PHP MVC framework from scratch.",
    ],
  },
  {
    role: "Learning Journey — Foundations",
    company: "Self-study & school projects",
    period: "2024 — 2026",
    points: [
      "Mastered backend fundamentals: HTTP, REST, databases, sessions, auth, and queues.",
      "Grew from HTML/PHP basics to full stack work with TypeScript, Next.js, and Docker.",
      "Maintain a clean, public GitHub with 7+ repositories of real projects.",
    ],
  },
];
