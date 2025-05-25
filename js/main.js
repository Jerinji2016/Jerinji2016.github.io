// Main Portfolio JavaScript - Handles UI interactions and content population

class PortfolioApp {
    constructor() {
        this.currentSection = 'home';
        this.isLoading = true;
        this.cursor = null;

        this.init();
    }

    init() {
        console.log('PortfolioApp initializing...');

        // Hide loading screen first
        this.hideLoading();

        // Then setup other components
        this.setupCustomCursor();
        this.setupNavigation();
        this.populateContent();
        this.setupScrollEffects();

        console.log('PortfolioApp initialization complete');
    }

    setupCustomCursor() {
        this.cursor = document.getElementById('cursor');

        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
        });

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cta-button');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.classList.add('hover');
            });

            element.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('hover');
            });
        });
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.navigateToSection(targetId);
            });
        });

        // Smooth scroll for CTA button
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToSection('projects');
            });
        }
    }

    navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            this.currentSection = sectionId;
            this.updateActiveNavLink(sectionId);
        }
    }

    updateActiveNavLink(sectionId) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    populateContent() {
        try {
            if (typeof portfolioData === 'undefined') {
                console.error('portfolioData is not defined - skipping content population');
                return;
            }

            console.log('portfolioData loaded:', portfolioData);
            console.log('portfolioUtils loaded:', portfolioUtils);

            this.populateAboutSection();
            this.populateSkillsSection();
            this.populateProjectsSection();
            this.populateContactSection();

            console.log('All sections populated successfully');
        } catch (error) {
            console.error('Error populating content:', error);
            console.error('Error stack:', error.stack);
            // Continue anyway - don't let content population errors block the loading screen
        }
    }

    populateAboutSection() {
        const aboutContent = document.getElementById('about-content');
        if (!aboutContent) {
            console.error('About content element not found');
            return;
        }
        const { personal } = portfolioData;

        aboutContent.innerHTML = `
            <div class="about-grid">
                <div class="about-text">
                    <p class="about-bio">${personal.bio}</p>
                    <div class="about-stats">
                        <div class="stat">
                            <span class="stat-number">${portfolioData.projects.length}</span>
                            <span class="stat-label">Projects Completed</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${portfolioData.skills.length}</span>
                            <span class="stat-label">Technologies</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${portfolioUtils.getSkillProficiencyAverage()}%</span>
                            <span class="stat-label">Avg. Proficiency</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    populateSkillsSection() {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) {
            console.error('Skills container element not found');
            return;
        }
        const skillCategories = [...new Set(portfolioData.skills.map(skill => skill.category))];
        let skillsHTML = '<div class="skills-grid">';

        skillCategories.forEach(category => {
            const categorySkills = portfolioUtils.getSkillsByCategory(category);
            skillsHTML += `
                <div class="skill-category">
                    <h3 class="category-title">${category}</h3>
                    <div class="skills-list">
                        ${categorySkills.map(skill => `
                            <div class="skill-item" data-skill="${skill.id}">
                                <div class="skill-header">
                                    <i class="${skill.icon}"></i>
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-percentage">${skill.proficiency}%</span>
                                </div>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%; background-color: ${skill.color}"></div>
                                </div>
                                <p class="skill-description">${skill.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        skillsHTML += '</div>';
        skillsContainer.innerHTML = skillsHTML;

        this.animateSkillBars();
    }

    populateProjectsSection() {
        console.log('Starting populateProjectsSection...');
        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) {
            console.error('Projects container element not found');
            return;
        }

        console.log('Projects container found, projects data:', portfolioData.projects);

        // Create projects HTML
        let projectsHTML = '<div class="projects-grid">';

        portfolioData.projects.forEach(project => {
            projectsHTML += `
                <div class="project-card" data-project="${project.id}">
                    <div class="project-header">
                        <div class="project-icon" style="color: ${project.color}">
                            <i class="${project.icon}"></i>
                        </div>
                        <div class="project-status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</div>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-features">
                        <h4>Key Features:</h4>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });

        projectsHTML += '</div>';
        projectsContainer.innerHTML = projectsHTML;

        // Add animation classes to make projects visible
        setTimeout(() => {
            const projectCards = projectsContainer.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.classList.add('animate');
            });
        }, 100);

        console.log('Projects section populated successfully');

    }

    populateContactSection() {
        console.log('Starting populateContactSection...');
        const contactContent = document.getElementById('contact-content');
        if (!contactContent) {
            console.error('Contact content element not found');
            return;
        }

        console.log('Contact content found, contact data:', portfolioData.contact);

        // Create contact HTML
        let contactHTML = '<div class="contact-grid"><div class="contact-info">';
        contactHTML += '<p class="contact-intro">Ready to bring your ideas to life? Let\'s connect and create something amazing together!</p>';
        contactHTML += '<div class="contact-methods">';

        portfolioData.contact.forEach(contact => {
            contactHTML += `
                <a href="${contact.link}" class="contact-method" target="_blank" rel="noopener noreferrer">
                    <div class="contact-icon">
                        <i class="${contact.icon}"></i>
                    </div>
                    <div class="contact-details">
                        <span class="contact-label">${contact.label}</span>
                        <span class="contact-value">${contact.value}</span>
                    </div>
                </a>
            `;
        });

        contactHTML += '</div></div></div>';
        contactContent.innerHTML = contactHTML;

        // Add animation classes to make contact methods visible
        setTimeout(() => {
            const contactMethods = contactContent.querySelectorAll('.contact-method');
            contactMethods.forEach(method => {
                method.classList.add('animate');
            });
        }, 100);

        console.log('Contact section populated successfully');
    }

    animateSkillBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillItems = entry.target.querySelectorAll('.skill-item');
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            const progressBar = item.querySelector('.skill-progress');
                            const skillId = item.dataset.skill;
                            const skill = portfolioData.skills.find(s => s.id === skillId);
                            if (skill && progressBar) {
                                progressBar.style.width = `${skill.proficiency}%`;
                                progressBar.style.transition = 'width 1s ease-in-out';
                            }
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    setupScrollEffects() {
        // Intersection Observer for section animations
        const sections = document.querySelectorAll('.section, .hero');

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.currentSection = entry.target.id;
                    this.updateActiveNavLink(entry.target.id);
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    hideLoading() {
        // Hide immediately for testing
        const loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('hidden');
            console.log('Loading screen hidden');
        } else {
            console.error('Loading element not found');
        }
        this.isLoading = false;
    }

    // Note: Styles have been moved to Sass files
    // All styling is now handled by the compiled CSS from sass/main.scss
}

// PortfolioApp class is initialized from the HTML script tag
