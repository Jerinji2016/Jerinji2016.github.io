// Portfolio Data - Migrated from original portfolio with enhancements

const portfolioData = {
    // Personal Information
    personal: {
        name: "Jerin P Jimmy",
        title: "Full Stack Developer & Creative Technologist",
        email: "jerinji2016@gmail.com",
        linkedin: "https://www.linkedin.com/in/jerin-p-jimmy/",
        github: "https://github.com/Jerinji2016",
        telegram: "https://t.me/Jerinji2016",

        bio: "Passionate developer with expertise in mobile and web technologies. I love creating innovative solutions that bridge the gap between functionality and user experience. Always exploring new technologies and pushing the boundaries of what's possible in digital development."
    },

    // Skills and Technologies
    skills: [
        // Frameworks
        {
            id: "flutter",
            name: "Flutter",
            category: "Frameworks",
            description: "Cross-platform mobile development",
            color: "#02569b",
            icon: "fas fa-mobile-alt"
        },
        {
            id: "nextjs",
            name: "Next.js",
            category: "Frameworks",
            description: "React framework for production",
            color: "#000000",
            icon: "fas fa-layer-group"
        },
        {
            id: "nestjs",
            name: "Nest.js",
            category: "Frameworks",
            description: "Progressive Node.js framework",
            color: "#e0234e",
            icon: "fas fa-server"
        },
        {
            id: "flask",
            name: "Flask",
            category: "Frameworks",
            description: "Lightweight Python web framework",
            color: "#000000",
            icon: "fas fa-flask"
        },
        {
            id: "hugo",
            name: "Hugo",
            category: "Frameworks",
            description: "Fast static site generator",
            color: "#ff4088",
            icon: "fas fa-bolt"
        },

        // Languages
        {
            id: "dart",
            name: "Dart",
            category: "Languages",
            description: "Client-optimized language for apps",
            color: "#0175c2",
            icon: "fas fa-code"
        },
        {
            id: "go",
            name: "Go",
            category: "Languages",
            description: "Fast, reliable, and efficient language",
            color: "#00add8",
            icon: "fas fa-code"
        },
        {
            id: "android",
            name: "Native Android",
            category: "Languages",
            description: "Native Android development",
            color: "#3ddc84",
            icon: "fas fa-robot"
        },
        {
            id: "javascript",
            name: "JavaScript",
            category: "Languages",
            description: "Dynamic programming language",
            color: "#f7df1e",
            icon: "fas fa-code"
        },
        {
            id: "typescript",
            name: "TypeScript",
            category: "Languages",
            description: "Typed superset of JavaScript",
            color: "#3178c6",
            icon: "fas fa-file-code"
        },
        {
            id: "java",
            name: "Java",
            category: "Languages",
            description: "Enterprise applications, Android",
            color: "#ed8b00",
            icon: "fas fa-coffee"
        },
        {
            id: "php",
            name: "PHP",
            category: "Languages",
            description: "Server-side scripting language",
            color: "#777bb4",
            icon: "fas fa-code"
        },
        {
            id: "python",
            name: "Python",
            category: "Languages",
            description: "Versatile programming language",
            color: "#3776ab",
            icon: "fas fa-code"
        },
        {
            id: "ruby",
            name: "Ruby",
            category: "Languages",
            description: "Dynamic, object-oriented language",
            color: "#cc342d",
            icon: "fas fa-gem"
        },
        {
            id: "bash",
            name: "Bash Scripts",
            category: "Languages",
            description: "Shell scripting and automation",
            color: "#4eaa25",
            icon: "fas fa-terminal"
        },
        {
            id: "cpp",
            name: "C/C++",
            category: "Languages",
            description: "System programming, algorithms",
            color: "#00599c",
            icon: "fas fa-code"
        },

        // Databases
        {
            id: "sqlite",
            name: "SQLite",
            category: "Databases",
            description: "Lightweight embedded database",
            color: "#003b57",
            icon: "fas fa-database"
        },
        {
            id: "postgresql",
            name: "PostgreSQL",
            category: "Databases",
            description: "Advanced open source database",
            color: "#336791",
            icon: "fas fa-database"
        },
        {
            id: "mongodb",
            name: "MongoDB",
            category: "Databases",
            description: "NoSQL document database",
            color: "#47a248",
            icon: "fas fa-leaf"
        },
        {
            id: "firebase",
            name: "Firebase GCP",
            category: "Databases",
            description: "Google Cloud Platform services",
            color: "#ffca28",
            icon: "fas fa-fire"
        },

        // Tools
        {
            id: "git",
            name: "Git",
            category: "Tools",
            description: "Version control system",
            color: "#f05032",
            icon: "fas fa-code-branch"
        },
        {
            id: "fastlane",
            name: "Fastlane",
            category: "Tools",
            description: "Mobile app deployment automation",
            color: "#00d4aa",
            icon: "fas fa-rocket"
        },
        {
            id: "figma",
            name: "Figma",
            category: "Tools",
            description: "Collaborative design tool",
            color: "#f24e1e",
            icon: "fas fa-pencil-ruler"
        }
    ],

    // Projects Portfolio - Categorized by Experience
    projects: {
        funProjects: [
            {
                id: "polyrhythms",
                title: "Polyrhythms",
                description: "Interactive polyrhythm visualization tool that demonstrates the simultaneous use of multiple rhythms. Educational and mesmerizing visual experience exploring musical theory through code.",
                technologies: ["JavaScript", "HTML", "CSS", "Firebase"],
                category: "Web Application",
                status: "Deployed",
                features: [
                    "Real-time polyrhythm visualization",
                    "Educational content about musical theory",
                    "Interactive web interface",
                    "Responsive design"
                ],
                color: "#FF6B6B",
                icon: "fas fa-music",
                liveDemo: "https://polyrhythms-40384.web.app/",
                github: "https://github.com/Jerinji2016/polyrhythms",
                techStack: "JavaScript (70.7%), HTML (16.8%), CSS (12.5%)"
            },
            {
                id: "xo-game",
                title: "XO Game",
                description: "Modern Tic Tac Toe game featuring stunning glassmorphic UI design. Cross-platform Flutter app with smooth animations and modern aesthetics.",
                technologies: ["Flutter", "Dart", "Firebase"],
                category: "Mobile App",
                status: "Deployed",
                features: [
                    "Glassmorphic/Neomorphic UI design",
                    "Cross-platform (Android, iOS, Web, Desktop)",
                    "Smooth animations and modern aesthetics",
                    "Upcoming: AI opponent, multiplayer modes"
                ],
                color: "#4ECDC4",
                icon: "fas fa-gamepad",
                liveDemo: "https://tic-tac-toe-d159d.web.app/",
                github: "https://github.com/Jerinji2016/xo_game",
                techStack: "Dart (45.8%), C++ (27.0%), CMake (22.2%)"
            },
            {
                id: "nasa-gallery",
                title: "NASA Gallery App",
                description: "Beautiful gallery app showcasing NASA's stunning space imagery and data. Cross-platform mobile application with NASA API integration.",
                technologies: ["Flutter", "Dart", "NASA API"],
                category: "Mobile App",
                status: "Completed",
                features: [
                    "NASA API integration",
                    "Cross-platform mobile app",
                    "Image gallery with space content",
                    "4 releases with continuous updates"
                ],
                color: "#45B7D1",
                icon: "fas fa-rocket",
                github: "https://github.com/Jerinji2016/NASA-Gallery-App-Flutter",
                techStack: "Dart (37.1%), C++ (27.7%), CMake (24.8%)"
            },
            {
                id: "yodo",
                title: "Yodo - Todo App",
                description: "Elegant todo application with Firebase backend and dark theme support. Features real-time sync and beautiful UI design.",
                technologies: ["Flutter", "Dart", "Firebase"],
                category: "Mobile App",
                status: "Completed",
                features: [
                    "Firebase authentication & real-time database",
                    "Dark theme UI",
                    "Cross-platform support",
                    "Task management with categories"
                ],
                color: "#96CEB4",
                icon: "fas fa-check-circle",
                github: "https://github.com/Jerinji2016/Yodo",
                techStack: "Dart (55.9%), C++ (20.4%), CMake (16.8%)"
            },
            {
                id: "data-entry",
                title: "Data-Entry System",
                description: "Complete full-stack CRUD demonstration using Ember.js, Starlette, and Flutter. Showcases modern web and mobile development practices.",
                technologies: ["Flutter", "Ember.js", "Starlette", "MongoDB"],
                category: "Full-Stack",
                status: "Completed",
                features: [
                    "Frontend: Ember.js web app + Flutter mobile app",
                    "Backend: Starlette (Python) API",
                    "Database: MongoDB",
                    "RESTful API design"
                ],
                color: "#F7DC6F",
                icon: "fas fa-database",
                github: "https://github.com/Jerinji2016/Data-Entry",
                techStack: "Dart (53.5%), JavaScript (24.4%), Python (5.9%)"
            }
        ],
        projectsThatMadeMeCry: [
            {
                id: "fdawg",
                title: "FDAWG - Flutter Development Assistant",
                description: "Comprehensive CLI tool and web interface for Flutter project management. Complex multi-language architecture with extensive features for Flutter developers.",
                technologies: ["Go", "JavaScript", "HTML", "SCSS"],
                category: "Developer Tool",
                status: "Completed",
                features: [
                    "CLI Commands: Environment management, asset organization",
                    "Web Interface: Modern responsive UI for project management",
                    "Asset Management: Automatic categorization and migration",
                    "Cross-platform: App naming across all platforms"
                ],
                color: "#E74C3C",
                icon: "fas fa-tools",
                github: "https://github.com/Jerinji2016/fdawg",
                techStack: "Go (48.4%), JavaScript (29.0%), HTML (13.3%)",
                whyItMadeMeCry: "Complex multi-language architecture, extensive CLI commands, web server integration"
            },
            {
                id: "grpc-template",
                title: "gRPC Template",
                description: "Production-ready gRPC backend template with authentication and database integration. Complete Go backend architecture with modern practices.",
                technologies: ["Go", "gRPC", "JWT", "PostgreSQL"],
                category: "Backend Template",
                status: "Completed",
                features: [
                    "Authentication: JWT-based auth system",
                    "Database: PostgreSQL with GORM",
                    "Logging: Structured logging with Logrus",
                    "Template: Ready-to-use for new projects"
                ],
                color: "#8E44AD",
                icon: "fas fa-server",
                github: "https://github.com/Jerinji2016/grpc-template",
                techStack: "Go (100%)",
                whyItMadeMeCry: "Complex backend architecture, authentication flows, database management"
            },
            {
                id: "infinite-scroll-view",
                title: "Infinite Scroll View Package",
                description: "Flutter package for infinite scrolling widgets with complex scroll mechanics. Published on pub.dev with comprehensive testing.",
                technologies: ["Flutter", "Dart", "Package Development"],
                category: "Flutter Package",
                status: "Published",
                features: [
                    "Published Package: Available on pub.dev",
                    "Infinite Scrolling: Bidirectional infinite scroll",
                    "Controller Support: Custom page controllers",
                    "CI/CD: Automated testing and publishing"
                ],
                color: "#3498DB",
                icon: "fas fa-infinity",
                github: "https://github.com/Jerinji2016/infinite_scroll_view",
                techStack: "Dart (40.3%), C++ (27.0%), CMake (23.7%)",
                whyItMadeMeCry: "Complex scroll physics, infinite pagination logic, package publishing"
            },
            {
                id: "mbc-entrance-mock",
                title: "MBC Entrance Mock Exam",
                description: "Complete online examination system for college entrance mock tests. Complex exam logic with timer management and admin panel.",
                technologies: ["PHP", "JavaScript", "CSS", "SCSS"],
                category: "Web Application",
                status: "Deployed",
                features: [
                    "Exam System: Timed examinations with question pools",
                    "Admin Panel: Question management and difficulty settings",
                    "User Management: Registration and authentication",
                    "Real-time Timer: JavaScript-based exam timer"
                ],
                color: "#F39C12",
                icon: "fas fa-graduation-cap",
                github: "https://github.com/Jerinji2016/MBC-Entrance-Mock",
                techStack: "CSS (47.5%), SCSS (21.6%), JavaScript (12.0%)",
                whyItMadeMeCry: "Complex exam logic, timer management, question randomization, admin panel"
            },
            {
                id: "emed",
                title: "eMed",
                description: "QR Code Medical Prescription Sharing Application. Healthcare data security and medical workflow complexity made this challenging.",
                technologies: ["Java", "Android", "Firebase", "QR Code API"],
                category: "Mobile App",
                status: "Completed",
                features: [
                    "QR Code prescription sharing",
                    "Patient medical history",
                    "Doctor-patient communication",
                    "Secure data encryption"
                ],
                color: "#27AE60",
                icon: "fas fa-heartbeat",
                techStack: "Java (Android)",
                whyItMadeMeCry: "Healthcare data security, QR code generation/scanning, medical workflow complexity"
            },
            {
                id: "dr-med",
                title: "Dr Med",
                description: "Comprehensive healthcare application connecting patients with medical experts. Complex medical workflows and real-time consultation features.",
                technologies: ["Flutter", "Dart", "Node.js", "Firebase"],
                category: "Mobile App",
                status: "Completed",
                features: [
                    "Expert medical consultations",
                    "Health tips and advice",
                    "Drug reaction reporting",
                    "Online medical courses"
                ],
                color: "#9B59B6",
                icon: "fas fa-user-md",
                techStack: "Flutter/Dart, Node.js, Firebase",
                whyItMadeMeCry: "Complex medical workflows, real-time consultation features, healthcare compliance"
            }
        ]
    },

    // Contact Information
    contact: [
        {
            type: "email",
            value: "jerinji2016@gmail.com",
            featherIcon: "mail",
            ionIcon: "mail-outline",
            unicode: "✉",
            link: "mailto:jerinji2016@gmail.com",
            label: "Email"
        },
        {
            type: "linkedin",
            value: "Jerin P Jimmy",
            featherIcon: "linkedin",
            ionIcon: "logo-linkedin",
            unicode: "💼",
            link: "https://www.linkedin.com/in/jerin-jimmy-998679180/",
            label: "LinkedIn"
        },
        {
            type: "github",
            value: "Jerinji2016",
            featherIcon: "github",
            ionIcon: "logo-github",
            unicode: "🐙",
            link: "https://github.com/Jerinji2016",
            label: "GitHub"
        },
        {
            type: "telegram",
            value: "@Jerinji2016",
            featherIcon: "send",
            ionIcon: "send-outline",
            unicode: "✈",
            link: "https://t.me/Jerinji2016",
            label: "Telegram"
        }
    ]
};

// Utility functions for data manipulation
const portfolioUtils = {
    getSkillsByCategory: (category) => {
        return portfolioData.skills.filter(skill => skill.category === category);
    },

    getAllProjects: () => {
        return [...portfolioData.projects.funProjects, ...portfolioData.projects.projectsThatMadeMeCry];
    },

    getProjectsByStatus: (status) => {
        const allProjects = portfolioUtils.getAllProjects();
        return allProjects.filter(project => project.status === status);
    },

    getProjectsByCategory: (categoryType) => {
        if (categoryType === 'fun') {
            return portfolioData.projects.funProjects;
        } else if (categoryType === 'cry') {
            return portfolioData.projects.projectsThatMadeMeCry;
        }
        return portfolioUtils.getAllProjects();
    },

    getSkillCount: () => {
        return portfolioData.skills.length;
    },

    getProjectCount: () => {
        return portfolioUtils.getAllProjects().length;
    },

    getProjectsByTechnology: (tech) => {
        const allProjects = portfolioUtils.getAllProjects();
        return allProjects.filter(project =>
            project.technologies.some(technology =>
                technology.toLowerCase().includes(tech.toLowerCase())
            )
        );
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioData, portfolioUtils };
}
