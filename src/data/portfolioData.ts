import type {
  ContactInfo,
  Language,
  AboutMe,
  Feature,
  SkillCategory,
  Project,
  Experience,
  Recommendation,
  SubProject,
} from "../types/portfolio.types";

const img = (name: string) => `${import.meta.env.BASE_URL}image/projects/${name}`;

export const contactInfo: ContactInfo = {
  location: "Damascus, Syria",
  phone: "+963 945475943",
  email: "joudi.kab01@gmail.com",
};

export const cvPath = `${import.meta.env.BASE_URL}files/Judy_Alqabbani_CV.pdf`;

export const languages: Language[] = [
  {
    lang: "Arabic",
    level: "Native",
  },
  {
    lang: "English",
    level: "Advanced (C1 - Oxford Certified)",
  },
];

export const aboutMe: AboutMe = {
  title: "About Me",
  description:
    "Results-driven Product Owner and System Analyst with a strong software engineering background and hands-on experience leading cross-functional teams, owning product lifecycles, and driving business aligned technical solutions. Proven ability to translate complex business needs into clear product requirements, prioritize backlogs, manage stakeholders, and ensure high-quality delivery across multiple large-scale systems. Strong advocate of Agile practices, continuous improvement, and user-centered product design.",
};

export const features: Feature[] = [
   {
    title: "Product Ownership",
    description:
      "Define product vision, prioritize roadmaps, and ensure features deliver business value",
  },
  {
    title: "Agile Delivery",
    description:
      "Managed Scrum ceremonies, sprint planning, and continuous delivery for fast, reliable releases",
  },
  {
    title: "Team Leadership",
    description:
      "Led development teams and managed Agile projects successfully",
  },
  {
    title: "Stakeholder Management",
    description:
      "Built alignment across business, design, and engineering teams through clear communication and collaboration",
  },
  {
    title: "Mobile Development",
    description:
      "Expert in Flutter cross-platform development for iOS and Android",
  },
  {
    title: "Clean Architecture",
    description:
      "Proficient in MVC, MVVM patterns and state management solutions",
  }, 
  {
    title: "Performance",
    description: "Focus on building high-performance, scalable software solutions",
  },
];

export const skillCategories: SkillCategory[] = [
   {
    title: "Project Management",
    skills: [
      "Agile (Scrum)",
      "Agile (Kanban)",
      "Jira",
      "ClickUp",
      "Backlog Prioritization",
      "Sprint Planning",
      "Release Planning",
      "Stakeholder Management",
      "Cross-functional Coordination",
      "Risk & Issue Management",
      "Product Roadmapping",
    ],
  },
  {
    title: "Flutter Development",
    skills: [
      "Flutter Framework",
      "Dio",
      "Retrofit",
      "Chopper",
      "HTTP",
      "Hive",
      "SQFLite",
      "Background Services",
      "Shared Preferences",
      "Laravel Pusher",
      "iOS Development",
      "Android Development",
    ],
  },
  {
    title: "State Management",
    skills: ["Provider", "GetX", "Bloc", "Riverpod"],
  },
  {
    title: "Programming Languages",
    skills: [
      "Dart",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Python",
    ],
  },
  {
    title: "Web Development",
    skills: ["React", "HTML5", "CSS3", "Responsive Design", "Three.JS"],
  },
  {
    title: "Backend Frameworks",
    skills: ["NestJS", "Laravel"],
  },
  {
    title: "Databases & Storage",
    skills: [
      "Firebase Firestore",
      "SQL Server",
      "Oracle",
      "Big Data",
      "Data Warehousing",
    ],
  },
  {
    title: "Security & Authentication",
    skills: [
      "Firebase Authentication",
      "OAuth (Google)",
      "OAuth (Facebook)",
      "JWT",
      "REST API Authentication",
    ],
  },
  {
    title: "Version Control & CI/CD",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "CI/CD Pipelines",
      "Code Reviews",
    ],
  },
  {
    title: "UI/UX & Design",
    skills: ["Figma", "Adobe XD", "Design Systems", "Responsive App Design"],
  },
  {
    title: "Architecture & Patterns",
    skills: ["Clean Architecture", "MVC", "MVVM", "Legacy OpenGL"],
  },
];

export const projects: Project[] = [
  {
    id: "glovent",
    title: "Glovent Website",
    company: "Pharaon",
    period: "05/2026 - Present",
    status: "completed",
    url: "https://glovent-events.com/",
    description:
      "Developed the official landing page for Glovent, an event management and production company. Built a visually engaging, fully responsive web presence that communicates the brand's identity, highlights its services, and drives client acquisition. Focused on performance, modern UI/UX, and seamless cross-device experience.",
    technologies: [
      "React",
      "TypeScript",
      "CSS3",
      "Responsive Design",
      "Web Performance",
    ],
    features: [
      "Fully responsive landing page optimized for all screen sizes",
      "Modern UI/UX aligned with the Glovent brand identity",
      "Service showcase sections with smooth animations and transitions",
      "Performance-optimized asset loading for fast time-to-interactive",
      "SEO-friendly structure and semantic HTML markup",
    ],
    image: img("Glovent.png"),
  },
  {
    id: "like-platform",
    title: "Like — Multimedia Streaming Platform",
    company: "Pharaon",
    period: "01/2026 - Present",
    status: "in-progress",
    description:
      "Led as Project Manager the end-to-end delivery of Like, a comprehensive multimedia streaming ecosystem developed under Pharaon Group. Like provides subscribers with access to live TV channels, on-demand content, and premium entertainment across multiple device platforms — including smart TVs (LG WebOS, Samsung Tizen), web browsers, and dedicated billing and back-office systems. The platform is engineered for reliability, scalability, and a smooth subscriber experience across all touchpoints.",
    technologies: [
      "Project Management",
      "Scrum",
      "Agile",
      "WebOS",
      "Tizen",
      "React",
      "System Analysis",
      "REST API",
    ],
    features: [
      "Unified streaming ecosystem spanning web, LG Smart TV, and Samsung Smart TV",
      "Live TV channel delivery and on-demand content library management",
      "Subscriber billing and subscription lifecycle management",
      "Back-office dashboard for operators and content administrators",
      "Cross-platform architecture ensuring consistent UX across all devices",
      "Led Scrum ceremonies, sprint planning, and cross-functional team coordination",
    ],
    url: "https://likesyria.sy/apps",
    image: img("like.png"),
    subProjects: [
      {
        id: "like-iptv",
        title: "Like IPTV",
        status: "completed",
        description:
          "Core IPTV application delivering live TV channel streaming and on-demand video content to subscribers. Provides a rich EPG (Electronic Program Guide), channel zapping, catch-up TV, and parental controls for a complete home entertainment experience.",
        technologies: ["IPTV", "HLS Streaming", "EPG", "REST API"],
        features: [
          "Live channel streaming with Electronic Program Guide (EPG)",
          "Catch-up TV and on-demand content library",
          "Parental controls and subscriber profile management",
          "Adaptive bitrate streaming for consistent quality",
        ],
      },
      {
        id: "like-lg",
        title: "Like LG TV",
        status: "completed",
        url: "http://10.237.239.31:8080/auth/login",
        description:
          "A native Smart TV application built for LG WebOS, bringing the full Like streaming experience to the living room. Designed for remote-control navigation with an optimized 10-foot UI, delivering smooth channel browsing and content playback on LG Smart TVs.",
        technologies: ["WebOS", "LG Smart TV", "JavaScript", "HLS Streaming"],
        features: [
          "Native LG WebOS app with remote-control-first navigation",
          "Optimized 10-foot UI for comfortable TV viewing",
          "Full channel grid and VOD catalog integration",
          "Smooth playback with adaptive quality switching",
        ],
      },
      {
        id: "like-samsung",
        title: "Like Samsung TV",
        status: "completed",
        url: "http://samsung.likesyria.sy",
        description:
          "A native Smart TV application built for Samsung Tizen OS, extending the Like platform to Samsung Smart TVs. Mirrors the full feature set of the LG counterpart with platform-specific optimizations for Tizen's runtime and input model.",
        technologies: [
          "Tizen OS",
          "Samsung Smart TV",
          "JavaScript",
          "HLS Streaming",
        ],
        features: [
          "Native Samsung Tizen OS app with D-pad navigation",
          "Full parity with Like LG TV feature set",
          "Platform-optimized performance for Tizen runtime",
          "Seamless account and subscription sync across devices",
        ],
      },
      // {
      //   id: "like-web",
      //   title: "Like On Internet",
      //   status: "in-progress",
      //   url: "https://dashboard.likeoverinternet.dev.ultrawares.com",
      //   description:
      //     "Web-based streaming portal giving subscribers browser access to the full Like content library — live channels and on-demand — without requiring a dedicated device. Built for cross-browser compatibility and responsive viewing on desktop and tablet.",
      //   technologies: [
      //     "React",
      //     "TypeScript",
      //     "HLS.js",
      //     "REST API",
      //     "Responsive Design",
      //   ],
      //   features: [
      //     "Browser-based live TV and VOD streaming (no app install required)",
      //     "Responsive layout for desktop, tablet, and large-screen viewing",
      //     "Subscriber authentication and profile management",
      //     "Cross-browser compatible player with adaptive quality",
      //   ],
      // },
      {
        id: "like-billing",
        title: "Like Billing",
        status: "in-progress",
        url: "https://dev-front-newbilling-like.ultrawares.com/",
        description:
          "Subscription management and billing portal for Like platform operators. Handles the full subscriber lifecycle — plan creation, renewals, payment processing, invoicing, and revenue reporting — giving the business team complete financial visibility and control.",
        technologies: ["React", "TypeScript", "REST API", "Dashboard"],
        features: [
          "Subscription plan creation and lifecycle management",
          "Payment processing and automated renewal workflows",
          "Invoicing, receipts, and revenue reporting dashboards",
          "Operator-facing subscriber search and account management",
        ],
      },
      {
        id: "like-blue",
        title: "Like Blue",
        status: "in-progress",
        url: "https://dashboard.likeoverinternet.dev.ultrawares.com/",
        description:
          "Back-office administration dashboard for the Like platform, providing operators with centralized control over content, subscribers, devices, and system configuration. Serves as the command center for day-to-day platform operations.",
        technologies: ["React", "TypeScript", "REST API", "Admin Dashboard"],
        features: [
          "Centralized content and channel management interface",
          "Subscriber and device administration panels",
          "Real-time platform monitoring and activity logs",
          "Role-based access control for operator teams",
        ],
      },
    ] as SubProject[],
  },
  {
    id: "pyramind",
    title: "Pyramind",
    url: "https://pyramind.pharaon-group.com/",
    company: "Pharaon",
    period: "04/2025 - 05-2026",
    status: "completed",
    description:
      "Led the analysis and planning of the project, defining clear requirements, user stories, and acceptance criteria to align development with business goals. Managed the development process using the Scrum framework, facilitating sprint planning, daily stand-ups, reviews, and retrospectives to ensure continuous progress and team collaboration. Coordinated cross-functional teams and stakeholders, tracking progress through agile tools and ensuring timely delivery of high-quality features.",
    technologies: [
      "Scrum",
      "Agile",
      "Jira",
      "System Analysis",
      "User Stories",
      "Acceptance Criteria",
    ],
    features: [
      "Defined epics, user stories, and acceptance criteria from stakeholder input",
      "Facilitated Scrum ceremonies: sprint planning, stand-ups, reviews, retrospectives",
      "Coordinated cross-functional development and QA teams",
      "Tracked delivery milestones with agile project management tools",
      "Aligned technical scope with business goals through iterative refinement",
    ],
    playStore: "",
    appStore: "",
    image: img("pyramind.png"),
  },
  {
    id: "damen",
    title: "Damen",
    company: "Ikoniks",
    period: "06/2024 - 10/2024",
    status: "completed",
    description:
      "Developed two mobile applications connecting users with building service professionals, such as contractors, architects, and engineers. Designed and integrated a real-time chat feature, enabling seamless communication between users and service providers. Enhanced the user experience and interface, ensuring intuitive navigation and engagement.",
    technologies: [
      "Flutter",
      "Dart",
      "Real-time Chat",
      "REST API",
      "Provider",
      "Firebase",
    ],
    features: [
      "Dual-app architecture connecting clients with building professionals",
      "Real-time chat with push notifications between users and providers",
      "Professional profile and service listing management",
      "Intuitive onboarding and filtering for service discovery",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=net.damenapp.damen",
    appStore:
      "https://apps.apple.com/us/app/%D8%B6%D8%A7%D9%85%D9%86/id6477861699",
    image: img("damen.png"),
  },
  {
    id: "batra",
    title: "Batra",
    company: "Plansters",
    period: "05/2024 - 06/2024",
    status: "completed",
    description:
      "Led the development of the Batra mobile application, a digital platform for one of Iraq's leading lighting solution providers. Engineered a user-friendly interface for browsing and purchasing indoor and outdoor lighting products, ensuring a seamless shopping experience. Integrated a robust product catalog and inventory management system to align with the company's global standards.",
    technologies: ["Flutter", "Dart", "E-commerce", "REST API", "GetX", "Hive"],
    features: [
      "Full product catalog for indoor and outdoor lighting lines",
      "Seamless cart and checkout shopping flow",
      "Inventory management integration with backend ERP",
      "Responsive UI designed for both Arabic and English locales",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=plansters.plansters.com.batra",
    appStore:
      "https://apps.apple.com/us/app/batra-%D8%A8%D8%AA%D8%B1%D9%89/id1498040607",
    image: img("batra.png"),
  },
  {
    id: "al-aseel-keys",
    title: "Al Aseel Keys",
    company: "Plansters",
    period: "01/2024 - 04/2024",
    status: "completed",
    description:
      "Designed and developed Al Aseel Keys, a mobile application tailored for managing and purchasing high-quality security and access control solutions. Built a dynamic UI/UX to enhance customer interaction and simplify product navigation. Implemented real-time data synchronization and efficient backend solutions for optimal performance.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "GetX",
      "Real-time Sync",
      "SQFLite",
    ],
    features: [
      "Product catalog for security and access control hardware",
      "Real-time inventory and data synchronization",
      "Dynamic filtering and product comparison UI",
      "Optimized app performance across Android and iOS",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.plansters.alaseel_app",
    appStore:
      "https://apps.apple.com/us/app/%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD-%D8%A7%D9%84%D8%A3%D8%B5%D9%8A%D9%84/id6503984032",
    image: img("alassel.png"),
  },
  {
    id: "tayar",
    title: "Tayar",
    company: "Solunyx",
    period: "07/2023 - 12/2023",
    status: "completed",
    description:
      "Designed and developed an energy monitoring and control system that allows users to manage electricity regulators and system readings efficiently. Integrated real-time data tracking, remote control capabilities, and automated alerts, improving the reliability and accuracy of energy management. Worked closely with hardware and backend teams to ensure seamless integration between the mobile application and energy devices.",
    technologies: [
      "Flutter",
      "Dart",
      "IoT",
      "REST API",
      "BLoC",
      "Background Services",
    ],
    features: [
      "Real-time energy consumption monitoring dashboard",
      "Remote control of electricity regulators from mobile",
      "Automated alerts for anomalies and threshold breaches",
      "Seamless hardware-to-app integration with backend teams",
      "Background data sync for continuous device tracking",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.solunyx.tayar",
    appStore:
      "https://apps.apple.com/us/app/%D8%AA%D9%8A%D8%A7%D8%B1/id6444006868",
    image: img("tayar.png"),
  },
  {
    id: "iman-smart-athan",
    title: "Iman Smart Athan",
    company: "Solunyx",
    period: "04/2023 - 01/2024",
    status: "completed",
    description:
      "Enhanced and optimized the Iman Smart Athan application, focusing on performance improvements, UI/UX refinements, and feature expansions. Developed and implemented new functionalities, including prayer time automation, athan notifications, and personalized Islamic content.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "Firebase",
      "Push Notifications",
      "IoT",
    ],
    features: [
      "Automated prayer time scheduling and athan playback",
      "Personalized Islamic content and Quran integration",
      "Smart device synchronization for physical athan clocks",
      "Performance optimizations reducing load time significantly",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.solunyx.cs4_controller",
    appStore: "https://apps.apple.com/us/app/iman-smart-azan/id1643399190",
    image: img("iman-smart-azan.png"),
  },
  {
    id: "smart-athan",
    title: "Smart Athan",
    company: "Solunyx",
    period: "04/2023 - 09/2023",
    status: "completed",
    description:
      "Contributed to the enhancement of the Smart Athan app, improving its core functionalities and user engagement features. Assisted in refining the app's notification system, real-time athan alerts, and seamless synchronization with external devices.",
    technologies: [
      "Flutter",
      "Dart",
      "GetX",
      "Push Notifications",
      "Background Services",
    ],
    features: [
      "Refined notification system for reliable athan alerts",
      "Real-time synchronization with external smart devices",
      "Improved UI/UX for prayer time settings and customization",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.solunyx.smartathan",
    appStore: "https://apps.apple.com/us/app/smart-athan/id1661943118",
    image: img("smart-athan.png"),
  },
  {
    id: "smart-deen",
    title: "SmartDeen",
    company: "Solunyx",
    period: "06/2023 - 01/2024",
    status: "completed",
    description:
      "Led the development and maintenance of SmartDeen Classic, a mobile companion app for the SmartDeen Classic Clock, providing a seamless digital experience for Islamic practices. Implemented features such as prayer time notifications, Quran recitations, Islamic calendars, and customizable alerts.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "Hive",
      "Background Services",
      "IoT",
    ],
    features: [
      "Companion app for SmartDeen Classic hardware clock",
      "Prayer time notifications and Quran recitation playback",
      "Islamic calendar with Hijri date support",
      "Customizable alert profiles per user preference",
      "Cross-device data sync via cloud backend",
    ],
    playStore: "",
    appStore: "",
    image: img("smart-deen.png"),
  },
  {
    id: "yalla-mazad",
    title: "Yalla Mazad",
    company: "WeCan",
    period: "12/2022 - 02/2023",
    status: "completed",
    description:
      "Designed and developed a real-time auction platform using Flutter, providing a smooth bidding experience for users. Integrated Google Pay, Apple Pay, and Firebase Firestore, ensuring secure transactions and seamless payment processing.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Firestore",
      "Google Pay",
      "Apple Pay",
      "Provider",
    ],
    features: [
      "Real-time live auction bidding with instant price updates",
      "Google Pay and Apple Pay integration for secure checkout",
      "Push notifications for bid status and auction countdowns",
      "Dynamic auction catalog with search and filtering",
    ],
    playStore: "",
    appStore:
      "https://apps.apple.com/us/app/%D9%8A%D9%84%D8%A7-%D9%85%D8%B2%D8%A7%D8%AF/id6449505286",
    image: img("mazad.png"),
  },
  {
    id: "alma-chat",
    title: "Alma Chat",
    company: "Future Code",
    period: "10/2022 - 12/2022",
    status: "completed",
    description:
      "Played a key role in the development of Alma Chat, a real-time messaging and social application with advanced communication features. Integrated instant messaging, voice and video calls, e-payments, and multimedia sharing.",
    technologies: [
      "Flutter",
      "Dart",
      "WebRTC",
      "Firebase",
      "E-payments",
      "Background Services",
    ],
    features: [
      "Real-time instant messaging with multimedia sharing",
      "Voice and video calling via WebRTC integration",
      "In-app e-payment flow for digital transactions",
      "Optimized background services for stable connectivity",
    ],
    playStore: "",
    appStore: "",
    image: img("alma.png"),
  },
];

export const recommendations: Recommendation[] = [
  {
    name: "Bisher Alhasani Aljazaeri",
    title: "Project Manager at Pharaon Group",
    expertise: "Project Management",
    relationship: "Worked with Judy · July 2025 – Present",
    message:
      "",
    linkedin: "https://www.linkedin.com/in/bisher-al-hasani-19008a219/",
  },
  {
    name: "Micheal Namma",
    title: "Senior Back End Developer at Pharaon Group",
    expertise: "Backend Development",
    linkedin: "https://www.linkedin.com/in/micheal-namma-8111231b9/",
    relationship:
      "Worked with Judy · Damen & Pyramind Projects at Pharaon Group",
    message:
      "I had the pleasure of collaborating with Joudi as a Flutter developer on the Damen project and as a project manager on the Pyramind project. She is very proactive, well-organized, and constantly makes sure that projects run smoothly while producing excellent outcomes.\n\nJoudi is able to effectively manage priorities, communicate clearly, and quickly adjust to changing needs. She transforms concepts into dependable, user-friendly applications as a developer thanks to her strong technical abilities and meticulous attention to detail.\n\nAn excellent member of any team and a trustworthy professional.",
  },
  {
    name: "Nazem Almsouti",
    title: "Software Engineer · Frontend ",
    expertise: "Frontend ",
    relationship: "Worked with Judy · Pyramind Project at Pharaon Group",
    message:
      "I had the opportunity to work with Judy Alqabbani at Pharaon Group on the Pyramind project, where she served as Project Manager and I contributed as a frontend developer. Judy's strength lies in how she handles requirements: clearly written, well-structured, and easy to act on. Tasks were properly defined before they reached the team, which reduced unnecessary back-and-forth significantly. She managed task distribution and scheduling with a practical approach, took deadlines seriously, and followed up on project releases in an organized manner. When issues came up, she addressed them with a problem-solving mindset and was open to technical input from the development side, which kept communication straightforward. I'd recommend Judy to any team that values clear processes, on-time delivery, and structured project management.",
    linkedin: "https://www.linkedin.com/in/nazem-almsouti/",
  },
];

export const experiences: Experience[] = [
  {
    id: "pharaon-2025",
    companyKey: "Pharaon",
    role: "System Analyst",
    company: "Pharaon Group",
    location: "Damascus, Syria",
    period: "Apr 2025 - Present",
    logo: img("pharaon.svg"),
    description: [
      "Collaborating with clients to gather business needs and translate them into functional requirements",
      "Creating detailed project documentation, including epics, user stories, and requirement specifications",
      "Conducting system testing and validation to guarantee quality and performance before delivery",
      "Coordinating with development teams to refine workflows and support smooth project execution",
    ],
    current: true,
  },
  {
    id: "ikoniks-pm-2024",
    companyKey: "Ikoniks",
    period: "08/2024 – 01/2025",
    role: "Project Manager",
    company: "Ikoniks",
    location: "Germany (Remote)",
    logo: img("Ikoniks.jpeg"),
    description: [
      "Lead a team of developers in delivering scalable software solutions",
      "Manage project timelines, Agile processes, and client communications",
      "Ensure efficient workflow using Scrum methodologies and project tracking tools",
    ],
  },
  {
    id: "ikoniks-dev-2024",
    companyKey: "Ikoniks",
    period: "06/2024 – 01/2025",
    role: "Flutter Developer",
    company: "Ikoniks",
    location: "Germany (Remote)",
    logo: img("Ikoniks.jpeg"),

    description: [
      "Developed and maintained the Damen mobile app using Flutter",
      "Collaborated with designers and backend developers to implement modern UI/UX principles",
      "Applied state management solutions (Provider, GetX, Bloc) to improve app responsiveness",
    ],
  },
  {
    id: "plansters-2024",
    companyKey: "Plansters",
    period: "01/2024 – 06/2024",
    role: "Flutter Developer",
    company: "Plansters",
    location: "Damascus, Syria",
    logo: img("plansters_logo.jpeg"),
    description: [
      "Designed and built cross-platform mobile applications for diverse clients",
      "Implemented modern UI/UX principles and optimized app performance",
      "Ensured high performance and user satisfaction for both iOS and Android platforms",
    ],
  },
  {
    id: "solunyx-2023",
    companyKey: "Solunyx",
    period: "04/2023 – 01/2024",
    role: "Flutter Developer",
    company: "Solunyx",
    location: "Syria",
    logo: img("solunyx_tech_logo.jpeg"),
    description: [
      "Developed and maintained mobile applications, meeting strict deadlines",
      "Led the implementation of state management solutions (BLoC, GetX)",
      "Optimized app responsiveness and backend integrations",
    ],
  },
  {
    id: "wecan-2022",
    companyKey: "WeCan",
    period: "12/2022 – 03/2023",
    role: "Flutter Developer",
    company: "WeCan",
    location: "Amman, Jordan",
    logo: img("WeCan.jpeg"),
    description: [
      "Enhanced and maintained cross-platform applications",
      "Conducted code reviews, performance testing, and documentation",
    ],
  },
  {
    id: "future-code-2022",
    companyKey: "Future Code",
    period: "10/2022 – 12/2022",
    role: "Flutter Developer",
    company: "Future Code",
    location: "Syria",
    logo: img("0future_code_logo.jpeg"),
    description: [
      "Developed real-time messaging and social features for Alma Chat",
      "Integrated voice/video calling and in-app payment flows",
    ],
  },
];
