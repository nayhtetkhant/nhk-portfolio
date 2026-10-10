// ============================================================
// EDIT THIS FILE to customize your portfolio with real content
// Source of truth: Nay Htet Khant CV (extracted 2026-10)
// ============================================================

export const profile = {
  name: "Nay Htet Khant",
  role: "Full Stack Developer",
  tagline:
    "I build the parts that are hard to fake — real-time systems, queues, APIs, and databases.",
  location: "Hangdong, Chiang Mai, Thailand",
  phone: "+66 82 2736 118",
  email: "nayhtetkhant.dev@gmail.com",
  github: "https://github.com/nayhtetkhant",
  linkedin: "https://www.linkedin.com/in/nay-htet-khant-43a6a7389/",
  twitter: "",
  resumeUrl: "/resume.pdf",
  photo: "/profile.jpg",
  availability:
    "Open to on-site roles in Thailand & remote roles with international teams",
  summary:
    "Software Engineer with full-stack developer experience and a keen interest in DevOps and backend technologies. Knowledgeable on MVC design pattern based on current development practices. Continuously learning about AWS and CI/CD pipeline.",
  about: [
    "I'm a backend-leaning full stack developer who enjoys building the parts most people never see: APIs, queues, WebSocket layers, and database design — plus enough frontend to ship the whole product.",
    "My recent work includes ChatN, a real-time chat and video conferencing platform (Next.js frontend, Laravel API, WebRTC via LiveKit, Dockerized with Caddy), and ricemill-api, a Laravel application serving real business workflows.",
    "I learn by building: proof-of-concepts like a WebRTC playground and a PHP MVC framework written from scratch keep my fundamentals sharp.",
  ],
};

export const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "Shadcn"] },
  {
    category: "Full-Stack JavaScript",
    items: ["TypeScript", "Node.js", "Alpine.js", "React", "Next.js", "TanStack", "Zustand"],
  },
  { category: "Backend (PHP)", items: ["PHP", "Laravel", "Reverb"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "Redis"] },
  { category: "DevOps & Tools", items: ["Docker", "Caddy", "Nginx", "Git", "Linux"] },
];

export const projects = [
  {
    title: "ChatN — Group Chat & Video Conferencing",
    description:
      "A full-stack real-time communication app for multi-user group chat and video conferencing, split into three repos for production-style architecture.",
    highlights: [
      "Used LiveKit (SFU architecture) rather than P2P mesh because this approach saves on client bandwidth and guarantees the stability of video streams.",
      "Handled real-time messaging using Laravel Reverb (WebSockets) and optimized chat history loading with cursor pagination for smooth infinite scrolling.",
      "Managed the server and client states using TanStack Query and Zustand, respectively.",
      "Containerized the whole stack via Docker and set up Caddy as the reverse proxy with local SSL and nip.io routing for testing purposes within the whole local network.",
    ],
    tech: ["Laravel", "Next.js", "Docker", "Caddy", "Reverb", "LiveKit", "TanStack Query"],
    github: "https://github.com/nayhtetkhant/chatn-main",
    repos: [
      { label: "chatn-main", url: "https://github.com/nayhtetkhant/chatn-main" },
      { label: "chatn-api", url: "https://github.com/nayhtetkhant/chatn-api" },
      { label: "chatn-web", url: "https://github.com/nayhtetkhant/chatn-web" },
    ],
    demo: "",
  },
  {
    title: "Custom PHP MVC Framework",
    description:
      "A custom lightweight MVC framework written from scratch to gain thorough knowledge about modern frameworks' inner workings and the use of design patterns and OOP concepts.",
    highlights: [
      "Implemented an IoC / Service Container using PHP's ReflectionClass to support automatic Dependency Injection (DI) and method type-hinting, inspired by Laravel.",
      "Developed my own ORM-based database layer that uses PDO to perform secure and object-oriented database operations and prevent SQL injections in MySQL.",
      "Implemented modular core components including PSR-4 autoloading, custom routing, environment configuration (.env loader), and base Model-View-Controller classes.",
    ],
    tech: ["PHP (OOP)", "PDO", "MySQL", "Composer"],
    github: "https://github.com/nayhtetkhant/mvc-poc",
    repos: [{ label: "mvc-poc", url: "https://github.com/nayhtetkhant/mvc-poc" }],
    demo: "",
  },
  {
    title: "Real-Time Communication (RTC) Proof of Concept",
    description:
      "A peer-to-peer real-time communication proof of concept built to deeply study browser-level WebRTC internals and bidirectional signaling protocols.",
    highlights: [
      "Implemented Pusher Channels for WebSocket signaling, handling real-time peer discovery, channel subscriptions, and custom event dispatching.",
      "Integrated the native browser WebRTC API from scratch to manage peer connection handshakes, including SDP Offer/Answer exchange, ICE candidate gathering, and STUN server negotiation.",
    ],
    tech: ["Next.js", "WebRTC API", "Pusher", "STUN"],
    github: "https://github.com/nayhtetkhant/rtc-poc",
    repos: [{ label: "rtc-poc", url: "https://github.com/nayhtetkhant/rtc-poc" }],
    demo: "",
  },
  {
    title: "User Management System",
    description:
      "A simple user management web application featuring complete CRUD operations and user authentication.",
    highlights: [
      "Designed the back-end with clean architecture / SOLID design pattern to separate the business logic from the database and provide a modular RESTful API using PHP.",
      "Implemented raw PDO prepared statements without an ORM to master safe manual SQL querying and prevent SQL injection vulnerabilities.",
      "Designed a responsive front-end application with HTML/CSS and Alpine.js.",
    ],
    tech: ["PHP", "MySQL", "PDO", "Alpine.js", "HTML/CSS"],
    github: "https://github.com/nayhtetkhant/user-management",
    repos: [{ label: "user-management", url: "https://github.com/nayhtetkhant/user-management" }],
    demo: "",
  },
  {
    title: "Ricemill — Transaction Web App",
    description:
      "A Laravel application managing transaction workflows for a rice mill business — server-rendered pages, Eloquent data modeling, validation, and maintainable domain logic.",
    highlights: [
      "My most recent build — modeling real business transactions with Laravel conventions.",
    ],
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    github: "https://github.com/nayhtetkhant/ricemill-api",
    repos: [{ label: "ricemill-api", url: "https://github.com/nayhtetkhant/ricemill-api" }],
    demo: "",
  },
];

export const journey = [
  {
    period: "2026 — Present",
    role: "Full Stack Developer — Independent Projects",
    place: "Self-directed",
    points: [
      "Built ChatN end to end: Next.js frontend, Laravel API with Reverb, LiveKit video, Dockerized infrastructure with Caddy.",
      "Shipped ricemill-api, a Laravel app modeling real business workflows.",
      "Deep-dived real-time internals with a WebRTC proof-of-concept and a PHP MVC framework from scratch.",
    ],
  },
  {
    period: "In Progress",
    role: "CS50 | HarvardX",
    place: "edX",
    points: [
      "Harvard University's introduction to the intellectual enterprises of computer science and the art of programming.",
    ],
  },
  {
    period: "2024",
    role: "High School Graduated",
    place: "Thailand",
    points: [
      "Continued into software engineering through project-based self-study and open-source exploration.",
    ],
  },
];
