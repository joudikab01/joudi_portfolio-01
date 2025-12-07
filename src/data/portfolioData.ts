import type {
  ContactInfo,
  Language,
  AboutMe,
  Feature,
  SkillCategory,
  Project,
  Experience,
} from "../types/portfolio.types";

export const contactInfo: ContactInfo = {
  location: "Damascus, Syria",
  phone: "+963 945475943",
  email: "joudi.kab01@gmail.com",
};

export const cvPath = "/src/assets/files/eng_judy_alqabbani.pdf";

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
    "Results-driven Software Engineer and Flutter Developer with expertise in cross-platform mobile development, state management, and software architecture. Proficient in Dart, Java, C++, and JavaScript, with a strong focus on UI/UX, Agile methodologies, and REST APIs. Passionate about building high-performance, scalable applications and leveraging technical skills to drive innovative software solutions.",
};

export const features: Feature[] = [
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
    title: "Team Leadership",
    description:
      "Led development teams and managed Agile projects successfully",
  },
  {
    title: "Performance",
    description: "Focus on building high-performance, scalable applications",
  },
];

export const skillCategories: SkillCategory[] = [
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
    title: "Project Management",
    skills: ["Agile (Scrum)", "Agile (Kanban)", "Jira", "ClickUp"],
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
    title: "Pyramind",
    company: "Pharaon",
    period: "04/2025 - Present",
    description:
      "Led the analysis and planning of the project, defining clear requirements, user stories, and acceptance criteria to align development with business goals Managed the development process using the Scrum framework, facilitating sprint planning, daily stand-ups, reviews, and retrospectives to ensure continuous progress and team collaboration.Coordinated cross-functional teams and stakeholders, tracking progress through agile tools and ensuring timely delivery of high-quality features..",
    playStore: "",
    appStore: "",
    image: "/src/assets/image/projects/Pyramind.png",
  },
  {
    title: "Damen",
    company: "Ikoniks",
    period: "06/2024 - 10/2024",
    description:
      "Developed two mobile applications connecting users with building service professionals, such as contractors, architects, and engineers. Designed and integrated a real-time chat feature, enabling seamless communication between users and service providers. Enhanced the user experience and interface, ensuring intuitive navigation and engagement.",
    playStore:
      "https://play.google.com/store/apps/details?id=net.damenapp.damen",
    appStore:
      "https://apps.apple.com/us/app/%D8%B6%D8%A7%D9%85%D9%86/id6477861699",
    image: "/src/assets/image/projects/damen.png",
  },
  {
    title: "Batra",
    company: "Plansters",
    period: "05/2024 - 06/2024",
    description:
      "Led the development of the Batra mobile application, a digital platform for one of Iraq's leading lighting solution providers. Engineered a user-friendly interface for browsing and purchasing indoor and outdoor lighting products, ensuring a seamless shopping experience. Integrated a robust product catalog and inventory management system to align with the company's global standards.",
    playStore:
      "https://play.google.com/store/apps/details?id=plansters.plansters.com.batra",
    appStore:
      "https://apps.apple.com/us/app/batra-%D8%A8%D8%AA%D8%B1%D9%89/id1498040607",
    image: "/src/assets/image/projects/batra.png",
  },
  {
    title: "Al Aseel Keys",
    company: "Plansters",
    period: "01/2024 - 04/2024",
    description:
      "Designed and developed Al Aseel Keys a mobile application tailored for managing and purchasing high-quality security and access control solutions. Built a dynamic UI/UX to enhance customer interaction and simplify product navigation. Implemented real-time data synchronization and efficient backend solutions for optimal performance.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.plansters.alaseel_app",
    appStore:
      "https://apps.apple.com/us/app/%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD-%D8%A7%D9%84%D8%A3%D8%B5%D9%8A%D9%84/id6503984032",
    image: "/src/assets/image/projects/alassel.png",
  },
  {
    title: "Tayar",
    company: "Solunyx",
    period: "07/2023 - 12/2023",
    description:
      "Designed and developed an energy monitoring and control system that allows users to manage electricity regulators and system readings efficiently. Integrated real-time data tracking, remote control capabilities, and automated alerts, improving the reliability and accuracy of energy management. Worked closely with hardware and backend teams to ensure seamless integration between the mobile application and energy devices.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.solunyx.tayar",
    appStore:
      "https://apps.apple.com/us/app/%D8%AA%D9%8A%D8%A7%D8%B1/id6444006868",
    image: "/src/assets/image/projects/tayar.png",
  },
  {
    title: "Iman Smart Athan",
    company: "Solunyx",
    period: "04/2023 - 01/2024",
    description:
      "Enhanced and optimized the Iman Smart Athan application, focusing on performance improvements, UI/UX refinements, and feature expansions. Developed and implemented new functionalities, including prayer time automation, athan notifications, and personalized Islamic content. Ensured a highly responsive and intuitive user experience by optimizing app architecture and refining interactions.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.solunyx.cs4_controller",
    appStore: "https://apps.apple.com/us/app/iman-smart-azan/id1643399190",
    image: "/src/assets/image/projects/iman-smart-azan.png",
  },
  {
    title: "Smart Athan",
    company: "Solunyx",
    period: "04/2023 - 09/2023",
    description:
      "Contributed to the enhancement of the Smart Athan app, improving its core functionalities and user engagement features. Assisted in refining the app's notification system, real-time athan alerts, and seamless synchronization with external devices.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.solunyx.smartathan",
    appStore: "https://apps.apple.com/us/app/smart-athan/id1661943118",
    image: "/src/assets/image/projects/smart-athan.png",
  },
  {
    title: "SmartDeen",
    company: "Solunyx",
    period: "06/2023 - 01/2024",
    description:
      "Led the development and maintenance of SmartDeen Classic, a mobile companion app for the SmartDeen Classic Clock, providing a seamless digital experience for Islamic practices. Implemented features such as prayer time notifications, Quran recitations, Islamic calendars, and customizable alerts, enhancing the spiritual experience for users. Optimized app performance and user interface to ensure a smooth and engaging user experience across different devices.",
    playStore: "",
    appStore: "",
    image: "/src/assets/image/projects/smart-deen.png",
  },
  {
    title: "Yalla Mazad",
    company: "WeCan",
    period: "12/2022 - 02/2023",
    description:
      "Designed and developed a real-time auction platform using Flutter, providing a smooth bidding experience for users. Integrated Google Pay, Apple Pay, and Firebase Firestore, ensuring secure transactions and seamless payment processing. Implemented real-time bid tracking, push notifications, and dynamic price updates, enhancing user engagement.",
    playStore: "",
    appStore:
      "https://apps.apple.com/us/app/%D9%8A%D9%84%D8%A7-%D9%85%D8%B2%D8%A7%D8%AF/id6449505286",
    image: "/src/assets/image/projects/mazad.png",
  },
  {
    title: "Alma Chat",
    company: "Future Code",
    period: "10/2022 - 12/2022",
    description:
      "Played a key role in the development of Alma Chat, a real-time messaging and social application with advanced communication features. Integrated instant messaging, voice and video calls, e-payments, and multimedia sharing, offering a robust digital communication solution. Ensured high app stability and responsiveness by optimizing network requests, background services, and data synchronization.",
    playStore: "",
    appStore: "",
    image: "/src/assets/image/projects/alma.png",
  },
];

export const experiences: Experience[] = [
  {
    role: "System Analyst",
    company: "Pharaon Group",
    location: "Damascus, Syria",
    period: "Apr 2025 - Present",
    description: [
      "Collaborating with clients to gather business needs and translate them into functional requirements",
      "Creating detailed project documentation, including epics, user stories, and requirement specifications",
      "Conducting system testing and validation to guarantee quality and performance before delivery",
      "Coordinating with development teams to refine workflows and support smooth project execution",
    ],
    current: true,
  },
  {
    period: "08/2024 – 01/2025",
    role: "Project Manager",
    company: "Ikoniks, Germany",
    description: [
      "Lead a team of developers in delivering scalable software solutions",
      "Manage project timelines, Agile processes, and client communications",
      "Ensure efficient workflow using Scrum methodologies and project tracking tools",
    ],
  },
  {
    period: "06/2024 – 01/2025",
    role: "Flutter Developer",
    company: "Ikoniks, Germany",
    description: [
      "Developed and maintained the Damen mobile app using Flutter",
      "Collaborated with designers and backend developers to implement modern UI/UX principles",
      "Applied state management solutions (Provider, GetX, Bloc) to improve app responsiveness",
    ],
  },
  {
    period: "01/2024 – 06/2024",
    role: "Flutter Developer",
    company: "Freelance, Damascus, Syria",
    description: [
      "Designed and built cross-platform mobile applications for diverse clients",
      "Implemented modern UI/UX principles and optimized app performance",
      "Ensured high performance and user satisfaction for both iOS and Android platforms",
    ],
  },
  {
    period: "04/2023 – 01/2024",
    role: "Flutter Developer",
    company: "Solunyx, Syria",
    description: [
      "Developed and maintained mobile applications, meeting strict deadlines",
      "Led the implementation of state management solutions (BLoC, GetX)",
      "Optimized app responsiveness and backend integrations",
    ],
  },
  {
    period: "12/2022 – 03/2023",
    role: "Flutter Developer",
    company: "WeCan, Amman, Jordan",
    description: [
      "Enhanced and maintained cross-platform applications",
      "Conducted code reviews, performance testing, and documentation",
    ],
  },
];
