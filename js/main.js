// Main Portfolio JavaScript - Handles UI interactions and content population

class PortfolioApp {
    constructor() {
        this.currentSection = 'home';
        this.isLoading = true;
        this.cursor = null;
        
        this.init();
    }

    init() {
        this.setupCustomCursor();
        this.setupNavigation();
        this.populateContent();
        this.setupScrollEffects();
        this.hideLoading();
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
        this.populateAboutSection();
        this.populateSkillsSection();
        this.populateProjectsSection();
        this.populateContactSection();
    }

    populateAboutSection() {
        const aboutContent = document.getElementById('about-content');
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

        this.addAboutStyles();
    }

    populateSkillsSection() {
        const skillsContainer = document.getElementById('skills-container');
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
        
        this.addSkillsStyles();
        this.animateSkillBars();
    }

    populateProjectsSection() {
        const projectsContainer = document.getElementById('projects-container');
        
        const projectsHTML = `
            <div class="projects-grid">
                ${portfolioData.projects.map(project => `
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
                `).join('')}
            </div>
        `;
        
        projectsContainer.innerHTML = projectsHTML;
        this.addProjectsStyles();
    }

    populateContactSection() {
        const contactContent = document.getElementById('contact-content');
        
        const contactHTML = `
            <div class="contact-grid">
                <div class="contact-info">
                    <p class="contact-intro">Ready to bring your ideas to life? Let's connect and create something amazing together!</p>
                    <div class="contact-methods">
                        ${portfolioData.contact.map(contact => `
                            <a href="${contact.link}" class="contact-method" target="_blank" rel="noopener noreferrer">
                                <div class="contact-icon">
                                    <i class="${contact.icon}"></i>
                                </div>
                                <div class="contact-details">
                                    <span class="contact-label">${contact.label}</span>
                                    <span class="contact-value">${contact.value}</span>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        contactContent.innerHTML = contactHTML;
        this.addContactStyles();
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
        const sections = document.querySelectorAll('.section');
        
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
        setTimeout(() => {
            const loading = document.getElementById('loading');
            loading.classList.add('hidden');
            this.isLoading = false;
        }, 2000);
    }

    // Style injection methods
    addAboutStyles() {
        const styles = `
            .about-grid { display: grid; gap: 40px; align-items: center; }
            .about-bio { font-size: 18px; line-height: 1.8; margin-bottom: 40px; color: #ccc; }
            .about-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 30px; }
            .stat { text-align: center; padding: 20px; background: rgba(0, 255, 255, 0.1); border-radius: 10px; border: 1px solid rgba(0, 255, 255, 0.3); }
            .stat-number { display: block; font-size: 2.5rem; font-weight: 700; color: #00ffff; font-family: 'Orbitron', monospace; }
            .stat-label { font-size: 14px; color: #aaa; text-transform: uppercase; letter-spacing: 1px; }
        `;
        this.injectStyles('about-styles', styles);
    }

    addSkillsStyles() {
        const styles = `
            .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
            .skill-category { background: rgba(255, 255, 255, 0.05); padding: 30px; border-radius: 15px; border: 1px solid rgba(0, 255, 255, 0.2); }
            .category-title { color: #00ffff; margin-bottom: 20px; font-size: 1.5rem; font-family: 'Orbitron', monospace; }
            .skill-item { margin-bottom: 25px; }
            .skill-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
            .skill-header i { font-size: 20px; margin-right: 10px; }
            .skill-name { flex: 1; font-weight: 600; }
            .skill-percentage { color: #00ffff; font-weight: 700; }
            .skill-bar { height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 4px; overflow: hidden; margin-bottom: 8px; }
            .skill-progress { height: 100%; border-radius: 4px; transition: width 1s ease-in-out; }
            .skill-description { font-size: 14px; color: #aaa; }
        `;
        this.injectStyles('skills-styles', styles);
    }

    addProjectsStyles() {
        const styles = `
            .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 30px; }
            .project-card { background: rgba(255, 255, 255, 0.05); padding: 30px; border-radius: 15px; border: 1px solid rgba(0, 255, 255, 0.2); transition: transform 0.3s ease, box-shadow 0.3s ease; }
            .project-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2); }
            .project-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
            .project-icon { font-size: 2rem; }
            .project-status { padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
            .project-status.completed { background: rgba(76, 175, 80, 0.2); color: #4CAF50; }
            .project-status.in-development { background: rgba(255, 152, 0, 0.2); color: #FF9800; }
            .project-status.deployed { background: rgba(33, 150, 243, 0.2); color: #2196F3; }
            .project-title { font-size: 1.5rem; margin-bottom: 15px; color: #00ffff; font-family: 'Orbitron', monospace; }
            .project-description { line-height: 1.6; margin-bottom: 20px; color: #ccc; }
            .project-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
            .tech-tag { background: rgba(255, 0, 255, 0.2); color: #ff00ff; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: 500; }
            .project-features h4 { color: #00ffff; margin-bottom: 10px; }
            .project-features ul { list-style: none; }
            .project-features li { padding: 5px 0; color: #aaa; position: relative; padding-left: 20px; }
            .project-features li::before { content: '▶'; color: #00ffff; position: absolute; left: 0; }
        `;
        this.injectStyles('projects-styles', styles);
    }

    addContactStyles() {
        const styles = `
            .contact-grid { max-width: 600px; margin: 0 auto; text-align: center; }
            .contact-intro { font-size: 18px; line-height: 1.6; margin-bottom: 40px; color: #ccc; }
            .contact-methods { display: grid; gap: 20px; }
            .contact-method { display: flex; align-items: center; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 15px; border: 1px solid rgba(0, 255, 255, 0.2); text-decoration: none; color: #fff; transition: all 0.3s ease; }
            .contact-method:hover { background: rgba(0, 255, 255, 0.1); transform: translateX(10px); }
            .contact-icon { font-size: 1.5rem; margin-right: 20px; color: #00ffff; width: 40px; }
            .contact-details { text-align: left; }
            .contact-label { display: block; font-size: 14px; color: #aaa; text-transform: uppercase; letter-spacing: 1px; }
            .contact-value { display: block; font-size: 16px; font-weight: 600; color: #fff; }
        `;
        this.injectStyles('contact-styles', styles);
    }

    injectStyles(id, styles) {
        if (!document.getElementById(id)) {
            const styleElement = document.createElement('style');
            styleElement.id = id;
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
        }
    }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
