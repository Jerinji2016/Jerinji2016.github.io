// Portfolio Data - Migrated from original portfolio with enhancements

const portfolioData = {
    // Personal Information
    personal: {
        name: "Jerin P Jimmy",
        title: "Full Stack Developer & Creative Technologist",
        email: "jerinji2016@gmail.com",
        phone: "+91 7012788627",
        github: "https://github.com/Jerinji2016",
        telegram: "https://t.me/Jerinji2016",
        instagram: "https://www.instagram.com/_jerin98_/",
        bio: "Passionate developer with expertise in mobile and web technologies. I love creating innovative solutions that bridge the gap between functionality and user experience. Always exploring new technologies and pushing the boundaries of what's possible in digital development."
    },

    // Skills and Technologies
    skills: [
        {
            id: "javascript",
            name: "JavaScript",
            category: "Frontend",
            proficiency: 85,
            description: "Modern ES6+, React, Node.js",
            color: "#f7df1e",
            icon: "fab fa-js-square"
        },
        {
            id: "flutter",
            name: "Flutter",
            category: "Mobile",
            proficiency: 80,
            description: "Cross-platform mobile development",
            color: "#02569b",
            icon: "fas fa-mobile-alt"
        },
        {
            id: "java",
            name: "Java",
            category: "Backend",
            proficiency: 85,
            description: "Enterprise applications, Android",
            color: "#ed8b00",
            icon: "fab fa-java"
        },
        {
            id: "html_css",
            name: "HTML/CSS",
            category: "Frontend",
            proficiency: 70,
            description: "Responsive design, animations",
            color: "#e34f26",
            icon: "fab fa-html5"
        },
        {
            id: "php",
            name: "PHP",
            category: "Backend",
            proficiency: 60,
            description: "Server-side development",
            color: "#777bb4",
            icon: "fab fa-php"
        },
        {
            id: "mysql",
            name: "MySQL",
            category: "Database",
            proficiency: 90,
            description: "Database design and optimization",
            color: "#4479a1",
            icon: "fas fa-database"
        },
        {
            id: "firebase",
            name: "Firebase",
            category: "Cloud",
            proficiency: 65,
            description: "Real-time databases, authentication",
            color: "#ffca28",
            icon: "fas fa-fire"
        },
        {
            id: "git",
            name: "Git",
            category: "Tools",
            proficiency: 60,
            description: "Version control, collaboration",
            color: "#f05032",
            icon: "fab fa-git-alt"
        },
        {
            id: "python",
            name: "Python",
            category: "Backend",
            proficiency: 30,
            description: "Data analysis, automation",
            color: "#3776ab",
            icon: "fab fa-python"
        },
        {
            id: "cpp",
            name: "C/C++",
            category: "Systems",
            proficiency: 60,
            description: "System programming, algorithms",
            color: "#00599c",
            icon: "fas fa-code"
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
            icon: "fas fa-envelope",
            link: "mailto:jerinji2016@gmail.com",
            label: "Email"
        },
        {
            type: "phone",
            value: "+91 7012788627",
            icon: "fas fa-phone",
            link: "tel:+917012788627",
            label: "Phone"
        },
        {
            type: "github",
            value: "Jerinji2016",
            icon: "fab fa-github",
            link: "https://github.com/Jerinji2016",
            label: "GitHub"
        },
        {
            type: "telegram",
            value: "@Jerinji2016",
            icon: "fab fa-telegram",
            link: "https://t.me/Jerinji2016",
            label: "Telegram"
        },
        {
            type: "instagram",
            value: "@_jerin98_",
            icon: "fab fa-instagram",
            link: "https://www.instagram.com/_jerin98_/",
            label: "Instagram"
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
    
    getSkillProficiencyAverage: () => {
        const total = portfolioData.skills.reduce((sum, skill) => sum + skill.proficiency, 0);
        return Math.round(total / portfolioData.skills.length);
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
