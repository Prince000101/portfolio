import {
  PersonalInfo,
  Social,
  Skills,
  Project,
  BlogPost,
  Experience,
  Education,
  Activity,
  Interest,
  Stat,
} from "./types";

export const personal: PersonalInfo = {
  name: "Prince Kumar",
  navBrand: "Prince.",
  role: "Aspiring Computer Science Engineer",
  email: "kumar.prince7428@gmail.com",
  phone: "+91 9310993218",
  location: "New Delhi, India",
  resumeUrl:
    "https://docs.google.com/document/d/1mnWD8_78yeq7sO0rWggk7SbVOpJJYdGul1Ape1XUrDw/edit?tab=t.0",
  heroDescription:
    "I'm Prince. A full-stack developer blending technology and psychology to create meaningful software.",
  aboutParagraph1:
    "I am passionate about the intersection of human behavior and technology. Currently pursuing a BCA alongside studies in psychology, I strive to build intuitive, beautiful software.",
  aboutParagraph2:
    "Whether it's scripting in Python, structuring data, or painting interfaces with CSS, my goal is always simplicity. Elegance found in the details.",
  footerText: "Crafted with care. \u00A9 2026 Prince Kumar.",
};

export const socials: Social[] = [
  { name: "GitHub", url: "https://github.com/Prince000101" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dudeprincekumar/",
  },
  { name: "Email", url: `mailto:${personal.email}` },
];

export const skills: Skills = {
  languages: ["Python", "C", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  frameworks: ["React.js", "Next.js (App Router)", "Node.js", "Tailwind CSS"],
  backend: ["Supabase", "PostgreSQL", "JWT Auth", "RESTful API"],
  devops: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "Linux", "PowerShell"],
  specializations: ["Full-Stack Engineering", "Web Security", "Data Analysis", "React Query"],
  design: ["Minimalism", "Psychology UX", "Interface Design"],
};

export const projects: Project[] = [
  {
    slug: "countryspices-store",
    title: "CountrySpices Store",
    description:
      "Full-stack organic spice e-commerce platform with admin dashboard, built with React, Node.js, and MongoDB.",
    longDescription:
      "A full-stack e-commerce application for Meghalaya organic spices. Features product browsing, cart, wishlist, COD checkout, admin dashboard with sales charts, coupon management, and review system. Built with React/Vite frontend, Node.js/Express backend, and MongoDB. Deployed on Vercel (frontend) and Render (backend).",
    image: "/images/projects/countryspices-hero.png",
    github: "https://github.com/Prince000101/countryspices-store",
    demo: "https://countryspices-store.vercel.app",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Full-Stack"],
    featured: true,
  },
  {
    slug: "spiceroot-store",
    title: "SpiceRoot Store",
    description:
      "E-commerce store for homemade Maharashtrian masalas and papad with admin panel and sales analytics.",
    longDescription:
      "Full-stack React/Node.js e-commerce store branded \"SpiceRoot by Saraswati Gruhudyog.\" Includes admin panel, cart, wishlist, coupon system, and sales charts. Built with the same MERN stack architecture as CountrySpices.",
    image: "/images/projects/countryspices-1.jpg",
    github: "https://github.com/Prince000101/spiceroot-store",
    demo: "https://spiceroot-store.vercel.app",
    tags: ["React", "Node.js", "MongoDB", "E-Commerce"],
    featured: false,
  },
  {
    slug: "tamrapatra-store",
    title: "Tamrapatra Store",
    description:
      "E-commerce platform for Indian handicrafts with product management, admin dashboard, and COD checkout.",
    longDescription:
      "Full-stack e-commerce platform for Indian handicrafts built with React (Vite) + Node.js/Express + MongoDB. Features product management, admin dashboard, and COD checkout.",
    image: "/images/projects/countryspices-5.jpg",
    github: "https://github.com/Prince000101/tamrapatra-store",
    demo: "https://tamrapatra-store.vercel.app",
    tags: ["React", "Node.js", "MongoDB", "E-Commerce"],
    featured: false,
  },
  {
    slug: "chavan-brothers-store",
    title: "Chavan Brothers Store",
    description:
      "Mumbai's finest spice store — full-stack e-commerce with React, Node.js, Express, and MongoDB.",
    longDescription:
      "Full-stack spice e-commerce app branded \"Chavan Brothers - Mumbai's Finest Spice Store.\" React frontend with Node.js/Express backend and MongoDB. Same robust MERN architecture.",
    image: "/images/projects/countryspices-hero.png",
    github: "https://github.com/Prince000101/chavan-brothers-store",
    demo: "https://chavan-brothers-store.vercel.app",
    tags: ["React", "Node.js", "MongoDB", "E-Commerce"],
    featured: false,
  },
  {
    slug: "downtube-pro",
    title: "Downtube Pro",
    description:
      "Material Design 3 desktop YouTube downloader with download queue, history, and multi-format support.",
    longDescription:
      "A PyQt5 GUI wrapper around yt-dlp for downloading YouTube videos, audio, and playlists. Features Material Design 3 interface, download queue with progress tracking, SQLite history, format selection, YouTube search, batch URL processing, cookie support, and 4 color themes. Cross-platform with Linux as primary target.",
    image: "/images/projects/downtube-icon.png",
    github:
      "https://github.com/Prince000101/Downtube-Pro-download-any-vedio-form-online-linux-tool",
    tags: ["Python", "PyQt5", "yt-dlp", "Linux", "GUI App"],
    featured: true,
  },
  {
    slug: "downtube-classic",
    title: "DownTube Classic",
    description:
      "Original PyQt5 YouTube downloader with cookie-based login and PyInstaller packaging.",
    longDescription:
      "The original DownTube — a PyQt5 GUI wrapper around yt-dlp for downloading YouTube videos (MP4) or audio (MP3), with cookie-based login support and PyInstaller packaging for distribution.",
    image: "/images/projects/downtube-icon.png",
    github:
      "https://github.com/Prince000101/Downtube__-ytdlp_gui-__application",
    tags: ["Python", "PyQt5", "yt-dlp", "Desktop App"],
    featured: false,
  },
  {
    slug: "macshot-for-linux",
    title: "Macshot for Linux",
    description:
      "Lightweight screen recorder for Linux using GTK3, Go, and FFmpeg — 60MB idle vs OBS's 218MB.",
    longDescription:
      "A lightweight screen recorder for Linux featuring screenshot capture, realtime recording at 15/30/60 FPS, timelapse with auto-stitch, and GIF export. Built with Python + GTK3 GUI, Go for capture, and FFmpeg for encoding. Uses only ~60MB RAM idle compared to OBS's ~218MB.",
    image: "/images/projects/macshot-main.png",
    github: "https://github.com/Prince000101/Macshot-for-linux",
    tags: ["Python", "Go", "GTK3", "FFmpeg", "Linux"],
    featured: true,
  },
  {
    slug: "ghost-engineer",
    title: "Ghost Engineer",
    description:
      "Python tool that fills your GitHub contribution graph with realistic backdated commits.",
    longDescription:
      "A Python desktop GUI (customtkinter) that fills your GitHub contribution graph with realistic backdated commits. Generates fake source files, pushes them with realistic timestamps, then auto-cleans everything. Supports Linux, Windows, and macOS. Includes time distribution logic and commit type variation for natural-looking graphs.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/ghost-engineer",
    tags: ["Python", "CustomTkinter", "Git", "Automation"],
    featured: true,
  },
  {
    slug: "gravity-simulations",
    title: "Gravity Simulations Collection",
    description:
      "C++/SFML physics simulations of black holes with GLSL shaders and solar system dynamics.",
    longDescription:
      "A collection of C++/SFML projects visualizing black holes (with GLSL shaders for gravitational lensing, accretion disks) and solar system dynamics with real-time physics. Features custom shader pipelines and N-body gravitational simulation.",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github:
      "https://github.com/Prince000101/Gravity-Simulations-Collection-C-",
    tags: ["C++", "SFML", "GLSL", "Physics", "Shaders"],
    featured: true,
  },
  {
    slug: "sniper3d-linux",
    title: "Sniper 3D Linux",
    description:
      "First-person sniper game built in Godot 4 with 5 rifles, 10 missions, and realistic ballistics.",
    longDescription:
      "A first-person sniper game built in Godot 4, inspired by Sniper 3D mobile. Features 5 rifles, 10 mission levels, ballistics (wind/gravity), scope sway, and weapon upgrades. Cross-platform game engine.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/sniper3d-linux",
    tags: ["GDScript", "Godot 4", "Game Dev", "3D"],
    featured: true,
  },
  {
    slug: "plusepad",
    title: "PlusePad",
    description:
      "Turn your smartphone into a low-latency Linux game controller using Flutter and Python.",
    longDescription:
      "A system that turns your Android phone into a virtual Linux gamepad. Uses a Flutter app as the controller interface and a Python daemon creating a virtual gamepad via Linux uinput. Supports USB (<5ms latency) and Wi-Fi (<15ms) modes with haptic feedback.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/PlusePad",
    tags: ["Flutter", "Dart", "Python", "Linux", "Hardware"],
    featured: false,
  },
  {
    slug: "face-recognition",
    title: "Face Recognition Suite",
    description:
      "Three facial recognition applications: passport photos, facial landmarks, and face-lock security.",
    longDescription:
      "Three PyQt5 facial recognition applications built with OpenCV and the face_recognition library. Includes a passport photo capture tool, a facial structure and landmark viewer, and a face-based security lock system.",
    image: "/images/projects/face-recog-1.png",
    github: "https://github.com/Prince000101/face_recognition-open-cv-",
    tags: ["Python", "OpenCV", "Computer Vision", "PyQt5"],
    featured: false,
  },
  {
    slug: "linux-script",
    title: "Linux Toolkit",
    description:
      "Chocolatey-like package manager for Linux with 150+ packages and an interactive TUI browser.",
    longDescription:
      "A Chocolatey-like package manager (lget) and system toolkit (ltool) for Ubuntu/Debian Linux. Features 150+ packages across browsers, media, dev tools, gaming, and security. Includes an interactive TUI package browser, bash aliases, and install scripts.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/linux-script",
    tags: ["Shell", "Bash", "Linux", "Package Manager"],
    featured: false,
  },
  {
    slug: "termux-toolkit",
    title: "Termux Toolkit",
    description:
      "Custom scripts and tools for the Termux Android terminal emulator.",
    longDescription:
      "A collection of custom scripts and tools for the Termux Android terminal emulator, automating common tasks and extending Termux's capabilities.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/termux-toolkit",
    tags: ["Shell", "Termux", "Android", "Automation"],
    featured: false,
  },
  {
    slug: "deardiary",
    title: "DearDiary",
    description:
      "Backend diary system built with Java, Spring Boot, and Hibernate ORM.",
    longDescription:
      "A robust backend system leveraging Java, Spring Boot, and Hibernate ORM for secure data journaling. Features RESTful API architecture, session management, and database-driven persistence.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github:
      "https://github.com/Prince000101/DearDiary-JAVA_springboot_hybernet",
    tags: ["Java", "Spring Boot", "Hibernate", "Backend"],
    featured: false,
  },
  {
    slug: "ai-vs-human",
    title: "AI vs Human",
    description:
      "Interactive moral dilemma game comparing human ethical choices with AI model responses.",
    longDescription:
      "An interactive web-based moral dilemma game comparing human ethical choices with AI model responses (Gemini, Groq, Mistral, OpenAI). Built with HTML/CSS/JS for a hackathon project.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github:
      "https://github.com/Prince000101/AI_vs_HUMAN-Hackathon_protect",
    tags: ["HTML", "CSS", "JavaScript", "AI", "Hackathon"],
    featured: false,
  },
  {
    slug: "hand-tracking",
    title: "Hand Tracking",
    description:
      "Two Python projects using OpenCV + MediaPipe for hand gesture recognition and games.",
    longDescription:
      "Two Python projects using OpenCV + MediaPipe: a hand-closure counter UI built with Tkinter, and a hand-controlled box-moving game built with Pygame. Demonstrates real-time hand tracking and gesture recognition.",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Hand-Tracking-with-Pyhton",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    featured: false,
  },
  {
    slug: "pseudo-random-generator",
    title: "Pseudo Random Generator",
    description:
      "Experimental PRNG seeded from memory addresses, timestamps, and live weather API data.",
    longDescription:
      "An experimental pseudo-random number generator in Python that seeds from memory addresses, timestamps, and live weather API data, with a matplotlib dashboard analyzing digit distribution.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Psudo_random_genrator",
    tags: ["Python", "Random", "Data Visualization"],
    featured: false,
  },
  {
    slug: "java-notepad",
    title: "Java Notepad",
    description:
      "Full-featured text editor with undo/redo, find & replace, font control, and print support.",
    longDescription:
      "A full-featured Java Swing text editor with undo/redo, find & replace, font size control, status bar, print support, and keyboard shortcuts.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/java-notepad",
    tags: ["Java", "Swing", "Desktop App", "Text Editor"],
    featured: false,
  },
  {
    slug: "java-pixelart",
    title: "Java Pixel Art Editor",
    description:
      "Pixel art editor with adjustable grids, color picker, undo, and PNG export.",
    longDescription:
      "A Java Swing pixel art editor with adjustable grid sizes (8x8 to 128x128), color picker, undo, and save/load PNG functionality with nearest-neighbor scaling.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Java-pixelart-software-",
    tags: ["Java", "Swing", "Desktop App", "Creative"],
    featured: false,
  },
  {
    slug: "cashier-software",
    title: "Cashier System",
    description:
      "Java Swing POS/cashier application with cart management, payment processing, and receipt generation.",
    longDescription:
      "A Java Swing POS/cashier application for supermarkets with cart management, payment processing, change calculation, and receipt generation.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Cashier-software",
    tags: ["Java", "Swing", "Desktop App", "POS"],
    featured: false,
  },
  {
    slug: "java-ip-finder",
    title: "Java IP Finder",
    description:
      "Java Swing app that resolves any domain name to its IP address.",
    longDescription:
      "A simple Java Swing app that resolves any domain name to its IP address. Lightweight GUI utility for network diagnostics.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Java-IP-finder",
    tags: ["Java", "Swing", "Networking", "Utility"],
    featured: false,
  },
  {
    slug: "cpp-games",
    title: "C++ Games Collection",
    description:
      "A collection of terminal games written in C++ for fun and practice.",
    longDescription:
      "A collection of CLI/terminal games built in C++ as practice projects. Covers game logic, state management, and terminal rendering techniques.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Cpp_games",
    tags: ["C++", "Games", "Terminal"],
    featured: false,
  },
  {
    slug: "github-profile-viewer",
    title: "GitHub Profile Viewer",
    description:
      "HTML/CSS/JS app that searches GitHub users via the API and displays profile details.",
    longDescription:
      "A simple HTML/CSS/JS web app that searches GitHub users via the API and displays profile details, repositories, and follower counts.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github:
      "https://github.com/Prince000101/API-Git-hub-profile-viewer",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    featured: false,
  },
  {
    slug: "music-player",
    title: "Music Player",
    description:
      "Python Tkinter music player with play/pause/stop, volume slider, and playlist management.",
    longDescription:
      "A Python Tkinter music player with play/pause/stop, volume slider, and playlist management, powered by Pygame.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Music-player",
    tags: ["Python", "Tkinter", "Pygame", "Desktop App"],
    featured: false,
  },
  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    description:
      "Web-based habit tracking application built with JavaScript.",
    longDescription:
      "A habit tracking web application built with JavaScript for monitoring and maintaining daily routines and goals.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/habit_tracking",
    tags: ["JavaScript", "Web App", "Productivity"],
    featured: false,
  },
  {
    slug: "measure-fitness",
    title: "Measure Fitness",
    description:
      "Modern fitness measurement app built with TypeScript.",
    longDescription:
      "A robust modern fitness application conceptualized with TypeScript to provide precise measurement and tracking tooling.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Mesure_Fittness_app",
    tags: ["TypeScript", "App", "Fitness"],
    featured: false,
  },
  {
    slug: "clock-and-calendar",
    title: "Python Clock & Calendar",
    description:
      "Python Tkinter digital clock with real-time updates and a calendar widget.",
    longDescription:
      "A Python Tkinter digital clock with real-time updates and a tkcalendar widget for date selection, featuring a modern UI theme.",
    image:
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/python-clock-and-calender",
    tags: ["Python", "Tkinter", "Desktop App"],
    featured: false,
  },
  {
    slug: "falling-sand",
    title: "Falling Sand Simulation",
    description:
      "Particle simulation where sand, water, and fire interact in real time using Python/Pygame.",
    longDescription:
      "A falling sand simulation in Python/Pygame where users place sand, water, and fire particles that interact with each other in real time.",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/falling-sand-project",
    tags: ["Python", "Pygame", "Simulation"],
    featured: false,
  },
  {
    slug: "fun-math-shapes",
    title: "Fun Math Shapes",
    description:
      "Python Tkinter app for drawing, resizing, and rotating geometric shapes with custom colors.",
    longDescription:
      "A Python Tkinter app for drawing, resizing, and rotating geometric shapes with sliders, optional center markers, and custom colors.",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Fun-math-shapes-project-",
    tags: ["Python", "Tkinter", "Math", "Education"],
    featured: false,
  },
  {
    slug: "old-web-games",
    title: "Old Web Games",
    description:
      "Retro game collection on GitHub Pages with Space Shooter, Tetris, Snake, and Chess.",
    longDescription:
      "A retro game collection hosted on GitHub Pages featuring Space Shooter, Tetris, Snake, and Chess games built with HTML/CSS/JS.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/OldWevGame.github.io",
    tags: ["HTML", "CSS", "JavaScript", "Games"],
    featured: false,
  },
  {
    slug: "flappy-bird",
    title: "Flappy Bird",
    description:
      "Flappy Bird clone built with vanilla JavaScript and HTML5 Canvas.",
    longDescription:
      "A basic Flappy Bird clone built with vanilla JavaScript and HTML5 Canvas for learning game development fundamentals.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Flappy-bird-with-js",
    tags: ["HTML", "JavaScript", "Games", "Canvas"],
    featured: false,
  },
  {
    slug: "weather-api",
    title: "Weather API App",
    description:
      "Web app fetching weather data from an external API with HTML and CSS.",
    longDescription:
      "A simple web application that fetches and displays weather data from an external API, built with HTML and CSS.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Whether-API",
    tags: ["HTML", "CSS", "API", "Weather"],
    featured: false,
  },
  {
    slug: "beach-website",
    title: "Beach Website",
    description:
      "Beach and hotel booking website built with HTML and CSS.",
    longDescription:
      "A small website for booking beach vacations and hotels, built with HTML and CSS.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Beach-website",
    tags: ["HTML", "CSS", "Website"],
    featured: false,
  },
  {
    slug: "small-website",
    title: "Quick Bootstrap Site",
    description:
      "A small website built in under 10 minutes using Bootstrap.",
    longDescription:
      "A small website built in under 10 minutes using Bootstrap, demonstrating rapid prototyping with CSS frameworks.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/just-a-small-website",
    tags: ["HTML", "CSS", "Bootstrap", "Website"],
    featured: false,
  },
  {
    slug: "ai-learning",
    title: "AI Learning",
    description:
      "HTML-based AI/ML learning notes and experiments collection.",
    longDescription:
      "A collection of HTML-based notes and experiments exploring artificial intelligence and machine learning concepts.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/Ai-i_learning",
    tags: ["HTML", "AI", "Machine Learning"],
    featured: false,
  },
  {
    slug: "py-file-shorter",
    title: "PY File Shorter",
    description:
      "Python utility for compressing and shortening file references.",
    longDescription:
      "A Python utility for compressing and shortening file references, useful for managing large codebases.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/Prince000101/PY-File-shorter",
    tags: ["Python", "Utility", "CLI"],
    featured: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-countryspices-store",
    title: "Building CountrySpices: A Full-Stack E-Commerce Platform",
    excerpt:
      "How I built an organic spice e-commerce store with React, Node.js, MongoDB, and a full admin dashboard.",
    content: `CountrySpices started as a freelance project — build an e-commerce platform for Meghalaya organic spices. It grew into a full-stack application that taught me everything from database design to payment flows.

## The Tech Stack

- **Frontend:** React + Vite with component-based architecture
- **Backend:** Node.js + Express RESTful API
- **Database:** MongoDB with Mongoose ODM
- **Deployment:** Vercel (frontend) + Render (backend)

## Key Features

### Product Browsing & Cart
8 products with image galleries, wishlist functionality, and a cart system supporting COD checkout.

### Admin Dashboard
Sales analytics with charts, coupon management, and a review moderation system. All protected behind role-based access.

### API Architecture
Separated public and protected routes. Admin operations require JWT authentication with environment-based secret management.

## What I Learned
Building both sides of the stack taught me how data flows through an entire application — from a user clicking "Add to Cart" to that item being stored in MongoDB.`,
    date: "2026-07-15",
    tags: ["React", "Node.js", "MongoDB", "Full-Stack"],
    readTime: "5 min read",
  },
  {
    slug: "building-linux-desktop-apps",
    title: "Building Desktop Apps for Linux with Python",
    excerpt:
      "How I created Downtube Pro and Macshot — two native Linux desktop apps that solve real problems.",
    content: `I've always loved Linux for its freedom, but the desktop app ecosystem can feel sparse. That's why I started building my own tools.

## Downtube Pro

A Material Design 3 YouTube downloader wrapping yt-dlp in a PyQt5 interface. Features include:
- Download queue with progress tracking
- SQLite history for past downloads
- Format selection (video/audio/playlist)
- 4 color themes
- Cookie support for age-restricted content

## Macshot for Linux

A lightweight screen recorder that uses only 60MB RAM idle (vs OBS's 218MB). Built with:
- Python + GTK3 for the GUI
- Go for the capture engine
- FFmpeg for encoding
- Supports 15/30/60 FPS recording and GIF export

## Why Desktop Apps?

Web apps are great, but some tasks need native performance. Screen recording and media downloading are two of those tasks where system-level access makes a real difference.`,
    date: "2026-06-20",
    tags: ["Python", "Linux", "Desktop Apps", "PyQt5"],
    readTime: "4 min read",
  },
  {
    slug: "ghost-engineer-story",
    title: "Ghost Engineer: The Tool That Fakes Your GitHub Graph",
    excerpt:
      "Why I built a Python tool to generate realistic-looking GitHub contributions, and the engineering behind it.",
    content: `Let's be honest — everyone wants a green GitHub graph. But maintaining daily contributions while juggling coursework and freelance work is hard. So I built Ghost Engineer.

## What It Does

Ghost Engineer fills your GitHub contribution graph with realistic backdated commits. It:
1. Creates fake source files in a temporary folder
2. Pushes them with carefully distributed timestamps
3. Auto-deletes everything after pushing
4. Supports Linux, Windows, and macOS

## The Engineering

### Time Distribution
Random timestamps aren't convincing. I built a distribution algorithm that:
- Concentrates commits during weekdays
- Adds occasional weekend activity
- Maintains natural-looking gaps

### Safety Features
- All files are created in a \`_ge/\` folder
- Automatic cleanup after push
- No modification of existing files
- Git history can be reviewed before pushing

## Why I Built It

Not to be dishonest — but to understand how Git internals work. Building this tool taught me more about git plumbing, force pushing, and commit trees than any tutorial ever could.`,
    date: "2026-06-01",
    tags: ["Python", "Git", "Automation", "Tools"],
    readTime: "4 min read",
  },
  {
    slug: "vibe-coding-revolution",
    title: "The Vibe Coding Revolution: AI as Your Pair Programmer",
    excerpt:
      "How AI-powered development is reshaping the way we build software — and why understanding the fundamentals matters more than ever.",
    content: `The term "vibe coding" has exploded across developer communities. It describes a new way of building software where you collaborate with AI models to write, debug, and iterate on code at unprecedented speed. But what does it actually look like in practice, and where does it break down?

## What Is Vibe Coding?

Vibe coding is the practice of describing what you want in natural language and letting an AI generate the implementation. You review the output, refine your prompts, and iterate. It's pair programming where your partner has read every codebase on the internet.

Tools like Cursor, GitHub Copilot, and Claude have made this workflow mainstream. Instead of memorizing syntax, you focus on architecture, intent, and quality.

## The Vibe Coding Workflow

1. **Describe your intent** — Tell the AI what the feature should do, not how to implement it.
2. **Review the output** — Read the generated code critically. Does it match your architecture?
3. **Iterate with feedback** — Refine by pointing out bugs, performance issues, or design mismatches.
4. **Validate with tests** — Always verify AI-generated code with your own test cases.
5. **Refactor and own it** — Rewrite what doesn't feel right. The code is your responsibility.

## Where It Breaks Down

Vibe coding excels at greenfield projects and well-defined problems. It struggles with:

- **Legacy codebases** — AI lacks context about undocumented business rules.
- **Performance-critical systems** — Generated code often prioritizes correctness over efficiency.
- **Security-sensitive paths** — Never trust AI to handle auth, payments, or data validation without scrutiny.
- **Complex state management** — Multi-layered state transitions still need human reasoning.

## The Uncomfortable Truth

AI lowers the barrier to entry but raises the bar for mastery. The developers who thrive in this new landscape are the ones who already understand fundamentals — data structures, system design, networking, and security. AI amplifies your existing knowledge; it doesn't replace the need for it.

The best engineers use AI to move faster through the boilerplate, then apply their expertise where it matters most: the hard problems that no prompt can solve.`,
    date: "2026-07-10",
    tags: ["AI", "Software Engineering", "Developer Tools", "Career"],
    readTime: "5 min read",
  },
  {
    slug: "becoming-irreplaceable-ai-era",
    title: "How to Become Irreplaceable in the Age of AI",
    excerpt:
      "AI can write boilerplate, optimize algorithms, and generate tests. Here's what it can't do — and how to build your career around those gaps.",
    content: `Junior developers who string together APIs and write boilerplate are already being automated. AI models spin up basic web apps, optimize standard algorithms, and write unit tests faster than any human. If you're competing with AI on speed or syntax, you've already lost.

The path forward is to stop being a "coder" and become an architect.

## What AI Owns

- **Boilerplate and scaffolding** — Basic React frontends, standard REST APIs, CRUD operations.
- **Algorithmic optimization of known problems** — Sorting, standard database queries, routine refactoring.
- **Code review and linting** — Formatting, finding standard security flaws in common frameworks.

## What Humans Own

### High-Volume Ambiguity
AI needs clear prompts. Clients never have clear prompts. The human translates chaotic business needs into structured technical architecture. This is the skill that makes you irreplaceable.

### System Integration
Tying together a legacy mainframe, a modern cloud microservice, and a third-party API in a way that doesn't collapse under load. AI cannot foresee emergent failures in complex systems.

### Physical-Cyber Interfaces
Hardware is messy. AI lives in perfect digital simulations. When a sensor sends garbage data because of electromagnetic interference, the AI fails. You step in.

### Zero-Day Security
AI is trained on past data. It cannot invent defenses for novel, unprecedented attacks. Human lateral thinking is the only defense against threats that don't exist yet in any training set.

### Accountability
If a trading bot loses $50 million or a medical AI misdiagnoses a patient, an AI cannot testify before a board. Humans hold ultimate liability and therefore ultimate control.

## Building Your Portfolio

Kill the to-do apps. Build things that are painfully difficult or highly unusual:

- **Custom network protocols** on top of UDP with a working chat client
- **A key-value database** in C or Rust with concurrent read/write handling
- **Hardware integration** — a Raspberry Pi that flags unusual network traffic with physical LEDs
- **Research papers** — implement a known algorithm, optimize one parameter for a specific edge case, run benchmarks

## The Digital Presence Protocol

Your social media must be high-signal engineering content, not motivational quotes:

- **Postmortems** — Share exact debugging output, the code that caused it, and how you fixed it.
- **Architecture tradeoffs** — Compare two solutions with diagrams and explain the tradeoffs.
- **Open source contributions** — One merged PR into Linux or Kubernetes outweighs a hundred personal projects.

## The Survival Directive

"I will not compete with machines on execution. I will command the machines through architecture, lateral thinking, and taking accountability for the chaos of the real world."

Be polymathic. Embrace the painfully complex. Deploy immediately. The machine is your weapon — do not let it become your replacement.`,
    date: "2026-07-05",
    tags: ["AI", "Career", "Systems Engineering", "Architecture"],
    readTime: "6 min read",
  },
  {
    slug: "building-engineer-digital-presence",
    title: "Building Your Digital Presence as an Engineer",
    excerpt:
      "A platform-by-platform strategy for creating a high-signal digital identity that recruiters and senior engineers actually pay attention to.",
    content: `Your code is useless if you're a ghost. In the modern recruitment landscape, your digital presence is your artillery. Recruiters, principal engineers, and founders don't read resumes — they read proof of work.

## GitHub: The Foundation

Your GitHub is your actual resume. Stop pushing trivial updates to keep contribution graphs green. Elite engineers look for depth, not breadth.

Every repository needs a professional README: an architecture diagram, the "why" behind your design decisions, and benchmark data. Pin only your best work — the custom database, the consensus implementation, the protocol stack. Hide the to-do lists.

## LinkedIn: The Executive Briefing

LinkedIn is flooded with motivational fluff. Cut through it with engineering intel.

**Your headline** should reflect what you build, not what you're studying. Not "B.Tech CS Student | Looking for Internships" — but "Systems Engineer | Building a distributed Key-Value Store in Rust."

**Post twice a week:** postmortems of real bugs you've fixed, architectural tradeoff analyses with diagrams, and open source victories with the actual git diffs.

**The metric of success** isn't 1,000 likes. It's one comment from a senior engineer at Stripe or Palantir saying "Interesting approach."

## X (Twitter): The Engineering Tavern

This is where builders talk, debate, and argue about architecture. Follow the creators of tools you use — core Linux maintainers, React authors, DeepMind researchers.

Post daily: build-in-public snippets, backed-up hot takes about technology choices, and paper breakdowns that distill complex research into clear threads.

When a principal engineer complains about a missing feature in an open-source tool, build the fix and reply with the GitHub link. That's how you get noticed.

## YouTube: The Professor's Lectern

The highest form of understanding is teaching. Your channel won't be "Day in the Life of a CS Student." It will be hardcore technical lectures.

Record from scratch tutorials — writing a TCP/IP stack in Rust, breaking down a CTF binary exploit, explaining how WhatsApp handles 50 billion messages. Even if a video gets 500 views, a recruiter finding an hour-long video of you calmly explaining distributed systems architecture means you're immediately hired.

## The Rule of Authenticity

Do not fake the work. If you try to act like a genius without having bled through real projects, elite engineers will expose you immediately.

Your social media is the exhaust fume of an incredibly high-performance engine. Do the hard work first in the dark. Then, turn on the lights.`,
    date: "2026-06-28",
    tags: ["Career", "GitHub", "LinkedIn", "Personal Brand"],
    readTime: "5 min read",
  },
  {
    slug: "harsh-reality-self-discipline",
    title: "The Harsh Reality of Self-Discipline for Engineers",
    excerpt:
      "Motivation is a myth. Comfort is a prison. Here's a non-negotiable system for building the discipline that separates great engineers from everyone else.",
    content: `This isn't a self-help guide. It's a war manual. Every goal — math, psychology, internships, open source contributions — is pointless if the person pursuing them is broken. You must kill the weak version of yourself. Every single day.

## The Harsh Truths

**Your feelings are irrelevant.** The biggest lie is "follow your passion" or "do what you feel like." Your feelings are the voice of weakness. They tell you to stay in bed, watch another reel, eat the junk food. From now on, you don't consult feelings. You consult your schedule.

**Motivation is a myth.** It's a fleeting, emotional high. Unreliable. You are forging discipline — the unfeeling, mechanical execution of your plan, especially on the days you don't feel like it. Discipline is what remains when motivation has abandoned you.

**Comfort is the prison.** Your desire for comfort is the cage that keeps you weak. Becoming better is choosing voluntary discomfort. The difficult workout, the challenging chapter, the cold shower — this is where you are forged.

## The Operating System

### The Mind

**The Dopamine Fast.** For 30 days, starve your brain of cheap pleasure. No short-form video content. No mindless browsing. If you're on the internet, you have a specific productive purpose. You are a creator and a student, not a consumer. The first two weeks will be withdrawal. Push through.

**The Rule of Action.** If you have an instinct to do something productive, move within 5 seconds. 5-4-3-2-1-GO. Don't think. Just move. Your body in motion will drag your mind with it.

**Mandatory Stillness.** Every morning, before anything else, sit in silence for 10 minutes. Focus on your breath. Your mind will wander. Notice it wandered and bring it back. Each time you do this, it's a push-up for your focus muscle. This isn't for relaxation — it's for training.

### The Body

**Obey the Sun.** Sleep is your ultimate performance-enhancing drug. 10 PM to 6 AM. Every single day. No screens for one hour before bed. Read a physical book.

**The Iron Price.** Train 6 days a week. Three days resistance (push-ups, pull-ups, squats), three days cardio (running, cycling, skipping). It's not a negotiation.

**Fuel, Don't Fill.** Cut liquid calories. Eliminate processed sugar. Eat real food: meat, fish, eggs, vegetables, fruits, nuts.

### The System

**The Sunday Ritual.** Every Sunday night, plan your entire week in a calendar. Block out every hour. You don't wake up and decide what to do — the decision was already made. You execute.

**Do It Badly.** On days you feel defeated, do not skip. Do it badly. Instead of a 1-hour workout, do 10 minutes of push-ups. Instead of 2 hours of study, read for 15 minutes. Show up. Reinforce the habit. Do not break the chain.

The person you are now is comfortable, weak, and distracted. He must be sacrificed. The person you want to be is forged in discipline, discomfort, and daily work. The war starts now.`,
    date: "2026-06-15",
    tags: ["Productivity", "Discipline", "Mindset", "Self-Improvement"],
    readTime: "6 min read",
  },
  {
    slug: "future-of-computer-science",
    title: "The Future of Computer Science: What Actually Matters",
    excerpt:
      "AI slop is declining, specialization is rising, and the gap between academia and industry is wider than ever. Here's how to navigate it.",
    content: `The landscape of computer science is shifting violently. Low-effort AI-generated content is being filtered out. Developers who rely entirely on AI without understanding fundamentals are being exposed. Here's what actually matters for your career.

## The Decline of AI Slop

The era of generating a basic project with AI and calling it a portfolio piece is ending. Employers are catching up. They can spot AI-generated boilerplate from a mile away. The expectation is shifting: use AI to build meaningful, real-world projects that demonstrate true competency — not to skip the learning.

## Specialization Is Your Moat

AI excels at breadth but struggles with depth. The best defense against automation is to specialize so deeply in a domain that you can solve problems and debug without relying on AI.

Pick a lane: systems programming, embedded systems, backend infrastructure, security engineering, or machine learning operations. Go deep enough that you understand the internals — not just the API surface.

## Bridging the Education Gap

Academic curricula focus on generalist knowledge. Industry needs practical, hands-on builders. The gap is real, and it's your responsibility to close it.

Use AI to speed through mundane coursework, then reinvest that time in deep, project-based learning. Build the thing the textbook describes but never implements. Run the benchmarks the assignment skips. Write the code that the lecture only diagrams.

## Evolving Interviews

Data structures and algorithms still matter — they test problem-solving ability. But the shift is toward practical, hands-on interviews where you build alongside engineers. System design rounds are becoming more important than leetcode hards.

Prepare by building real systems, not just solving puzzles. Understand tradeoffs at the architectural level: why you'd choose event-driven over request-response, why you'd shard vs. replicate, why you'd use a message queue instead of direct calls.

## Build Your Community

The grind of computer science becomes manageable when you find your people. Hackathons, open source communities, programming study groups — these aren't luxuries. They're force multipliers for consistency and growth.

Find three to five people who are as serious as you are. Review each other's code. Debounce architecture decisions. Hold each other accountable. The lone wolf burns out. The pack survives.`,
    date: "2026-06-10",
    tags: ["Computer Science", "Career", "AI", "Education"],
    readTime: "5 min read",
  },
  {
    slug: "escaping-the-matrix-engineers",
    title: "Escaping the Matrix: A Blueprint for Engineers Starting from Zero",
    excerpt:
      "You don't have a safety net, an inherited network, or an operating system for wealth. Here's how to build all three from scratch.",
    content: `If you come from a background without generational wealth, inherited connections, or exposure to the rules of power, you're not playing the same game as those who do. But that's not a death sentence — it's a strategic advantage if you understand the rules.

## What the Privileged Have (That You Don't)

**Freedom from fear.** Their primary advantage isn't luxury — it's the certainty that failure won't mean starvation. This freedom from survival-level fear lets them take massive risks and think in decades, not paychecks.

**An installed operating system.** From birth, they absorb the language of investments, leverage, legal structures, and power navigation at the dinner table. You must build this OS from scratch.

**A private network.** For them, doors open with a single phone call. For you, the same door is a ten-foot-thick steel wall.

## The Three-Part Escape

### Part 1: See the Code — Become a Learning Machine

Your weapon against their effortless osmosis is a conscious, relentless pursuit of knowledge across disciplines:

- **Psychology** — to understand how minds are programmed
- **Economics** — to understand the flow of money and incentives
- **History** — to see that no system is permanent
- **Philosophy** (specifically Stoicism) — to forge mental resilience
- **Biographies** — of empire-builders, scientists, and artists

**Skill stack, don't specialize.** The matrix wants specialists because they're replaceable cogs. Build a stack of technology, communication, and leverage skills that makes you irreplaceable when combined.

### Part 2: Rewrite the Code — Forge Asymmetric Leverage

You cannot out-work everyone. You must build systems that work for you. Three forms of modern leverage:

1. **Code** — Write software once, serve millions, work 24/7. Stop just learning — build and launch a product. Even a simple tool that solves a real problem.

2. **Media** — Build an audience by sharing what you're learning. An engaged audience is an asset no one can take from you. Start writing, start creating.

3. **Capital** — Once Code or Media generates income, make that money work through investing. Start with knowledge, even if you only have 100 rupees to invest.

### Part 3: Execute the Escape — The Solitary Operator

**Embrace obscurity.** No one is watching you. Experiment, fail, and learn in the dark. This is your training ground.

**Master solitude.** Learn to be alone without being lonely. Solitude is the price of admission to greatness.

**Become a ruthless producer.** Default to creating: code, articles, businesses, videos. Consumption is strategic and for learning only.

**Shrink your world.** Eliminate everything that doesn't serve your mission. News, gossip, drama, most social events — they're all distractions designed to keep you engaged in someone else's system.

## The Reality

You're starting from a deep deficit. Good. They have a safety net — you have the abyss, and it will make you move faster. They have an OS installed from birth — you will build a better one. They have a network — you will become the network.

The door isn't locked. It's guarded by comfort, distraction, and fear. Walk through.`,
    date: "2026-06-05",
    tags: ["Mindset", "Career", "Strategy", "Self-Improvement"],
    readTime: "6 min read",
  },
];

export const stats: Stat[] = [
  { label: "Projects Built", value: "35+" },
  { label: "Technologies", value: "20+" },
  { label: "Experience", value: "2+ yr" },
  { label: "Problems Solved", value: "100+" },
];

export const experience: Experience[] = [
  {
    company: "Indian AJS",
    role: "Full-Stack & Data Analyst Engineer",
    period: "June 2025 \u2013 Present",
    location: "Delhi, India (Hybrid)",
    type: "Full-Time",
    highlights: [
      "Engineered a secure, multi-branch fleet management platform (FleetCommand) serving 22 interactive dynamic routes using Next.js and Supabase",
      "Reduced Time to First Byte (TTFB) by 75% (from ~800ms to ~200ms) by replacing client-side waterfall requests with Server-Side Rendering",
      "Architected a zero-database-query verification system utilizing JWT-based Row-Level Security claims via database triggers, dropping active database hits per page load from 18 down to 4",
      "Implemented client-side state caching and data deduplication using React Query, reducing total page data transfer overhead by 40% to 60%",
      "Designed a comprehensive 16-table relational PostgreSQL schema for real-time asset tracking, parts inventory, audit history, and role-based access control",
    ],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2024 \u2013 Present",
    location: "Remote",
    type: "Freelance",
    highlights: [
      "Conceptualize and build end-to-end web applications for clients, managing the complete product lifecycle from UI wireframing to database scaling and production hosting",
      "Deploy production-ready frontend designs to Netlify and Vercel with integrated automated CI/CD pipelines hooked into GitHub repositories",
      "Incorporate strict web security strategies including environment variable segregation and role-based client protections",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Indira Gandhi National Open University",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "In Progress",
    details: "Delhi, India",
  },
  {
    institution: "Expert Academy Dwarka",
    degree: "Diploma in Programming",
    period: "April 2024 \u2013 December 2025",
    grade: "A+",
    details: "Delhi, India",
  },
  {
    institution: "Govt. Co-Ed School, Patrachar Vidyalaya",
    degree: "High School \u2014 Science Stream",
    period: "Graduated 2024",
    grade: "78%",
    details: "GTB Nagar, Delhi",
  },
];

export const activities: Activity[] = [
  {
    title: "FraudShield",
    role: "Team Lead & Core Developer",
    event: "Smart India Hackathon (Team SAMOSA)",
    year: "2025",
    description:
      "Led a technical squad in constructing FraudShield, an intelligent identification engine focused on identifying irregularities and strengthening security protocols for transactions.",
  },
  {
    title: "Software Engineering Frameworks",
    role: "Technical Presenter",
    event: "DevXpo Exhibition \u2014 NSUT",
    year: "2025",
    description:
      "Selected to showcase bespoke software engineering frameworks and system designs to industry specialists, highlighting practical expertise in end-to-end development.",
  },
];

export const interests: Interest[] = [
  {
    name: "Linux & Systems",
    description:
      "Deeply exploring the Linux ecosystem with a focus on writing native system-level applications and configuring custom environments.",
  },
  {
    name: "Game Development",
    description:
      "Building and optimizing performance-driven native games for Linux using C/C++ and graphics frameworks.",
  },
  {
    name: "Future Tech",
    description:
      "Real-time synchronization (Supabase Realtime), mobile PWA wrapper architectures, and GPS hardware tracking API integrations.",
  },
  {
    name: "Plant Care",
    description:
      "Gardening and digital workspace workflow automation.",
  },
];
