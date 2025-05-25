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

    // Projects Portfolio
    projects: [
        {
            id: "emed",
            title: "eMed",
            description: "An innovative Android application that revolutionizes medical communication by enabling doctors to share prescriptions and patients to share medical information through secure QR codes. Features include digital prescription management, patient history tracking, and seamless data sharing.",
            technologies: ["Java", "XML", "Firebase", "QR Code API"],
            category: "Mobile App",
            status: "Completed",
            features: [
                "QR Code prescription sharing",
                "Patient medical history",
                "Doctor-patient communication",
                "Secure data encryption"
            ],
            color: "#4CAF50",
            icon: "fas fa-heartbeat"
        },
        {
            id: "has",
            title: "Hostel Attendance System",
            description: "A comprehensive web application developed for MBCCET, Idukki to streamline hostel attendance management. The system automatically tracks student presence and sends SMS notifications to parents when students are absent, ensuring better communication and safety.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            category: "Web Application",
            status: "Deployed",
            features: [
                "Automated attendance tracking",
                "SMS notifications to parents",
                "Student management dashboard",
                "Attendance reports and analytics"
            ],
            color: "#2196F3",
            icon: "fas fa-school"
        },
        {
            id: "scholarship-exam",
            title: "MBC Scholarship Exam",
            description: "A robust online examination portal specifically designed for MBCCET, Idukki to conduct scholarship examinations for prospective B.Tech students in 2020. Features secure exam environment, automated grading, and comprehensive result management.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            category: "Web Application",
            status: "Completed",
            features: [
                "Secure online examination",
                "Automated grading system",
                "Result management",
                "Anti-cheating measures"
            ],
            color: "#FF9800",
            icon: "fas fa-graduation-cap"
        },
        {
            id: "te-amo",
            title: "Te Amo",
            description: "A modern cross-platform chat application for Android and iOS featuring an innovative UI design and comprehensive messaging capabilities. Currently under active development with continuous feature additions and improvements.",
            technologies: ["Dart", "Flutter", "Node.js", "Firebase"],
            category: "Mobile App",
            status: "In Development",
            features: [
                "Cross-platform compatibility",
                "Real-time messaging",
                "Innovative UI design",
                "Media sharing capabilities"
            ],
            color: "#E91E63",
            icon: "fas fa-comments"
        },
        {
            id: "dr-med",
            title: "Dr MED",
            description: "A comprehensive healthcare Android application connecting patients with medical experts. Features include expert consultations, health tips, adverse drug reaction reporting, and access to online medical courses for continuous health education.",
            technologies: ["Dart", "Flutter", "Node.js", "Firebase"],
            category: "Mobile App",
            status: "Completed",
            features: [
                "Expert medical consultations",
                "Health tips and advice",
                "Drug reaction reporting",
                "Online medical courses"
            ],
            color: "#9C27B0",
            icon: "fas fa-user-md"
        }
    ],

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

    getProjectsByStatus: (status) => {
        return portfolioData.projects.filter(project => project.status === status);
    },

    getSkillCount: () => {
        return portfolioData.skills.length;
    },

    getProjectsByTechnology: (tech) => {
        return portfolioData.projects.filter(project =>
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
