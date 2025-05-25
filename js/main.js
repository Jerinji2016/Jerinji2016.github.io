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

        // Setup components first
        this.setupCustomCursor();
        this.setupNavigation();
        this.populateContent();
        this.setupScrollEffects();

        // Hide loading screen after content is populated
        setTimeout(() => {
            this.hideLoading();
        }, 500);

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

                // Close mobile menu if open
                this.closeMobileNav();
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

        // Mobile navigation toggle
        this.setupMobileNavigation();
    }

    setupMobileNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navOverlay = document.getElementById('nav-overlay');

        if (navToggle && navOverlay) {
            navToggle.addEventListener('click', () => {
                this.toggleMobileNav();
            });

            // Close mobile nav when clicking outside
            navOverlay.addEventListener('click', (e) => {
                if (e.target === navOverlay) {
                    this.closeMobileNav();
                }
            });

            // Close mobile nav on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
                    this.closeMobileNav();
                }
            });
        }
    }

    toggleMobileNav() {
        const navToggle = document.getElementById('nav-toggle');
        const navOverlay = document.getElementById('nav-overlay');

        if (navToggle && navOverlay) {
            const isActive = navOverlay.classList.contains('active');

            if (isActive) {
                this.closeMobileNav();
            } else {
                this.openMobileNav();
            }
        }
    }

    openMobileNav() {
        const navToggle = document.getElementById('nav-toggle');
        const navOverlay = document.getElementById('nav-overlay');

        if (navToggle && navOverlay) {
            navToggle.classList.add('active');
            navOverlay.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');

            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        }
    }

    closeMobileNav() {
        const navToggle = document.getElementById('nav-toggle');
        const navOverlay = document.getElementById('nav-overlay');

        if (navToggle && navOverlay) {
            navToggle.classList.remove('active');
            navOverlay.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');

            // Restore body scroll
            document.body.style.overflow = '';
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
                            <span class="stat-number">${portfolioUtils.getProjectCount()}</span>
                            <span class="stat-label">Projects Completed</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${portfolioData.skills.length}</span>
                            <span class="stat-label">Technologies</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">4</span>
                            <span class="stat-label">Categories</span>
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
            const categorySkills = portfolioData.skills.filter(skill => skill.category === category);
            const categoryClass = category.toLowerCase().replace(/\s+/g, '-');

            skillsHTML += `
                <div class="skill-category ${categoryClass}">
                    <h3 class="category-title">${category}</h3>
                    <div class="skills-list">
                        ${categorySkills.map(skill => `
                            <div class="skill-item" data-skill="${skill.id}">
                                <div class="skill-header">
                                    <i class="${skill.icon}" style="color: ${skill.color}"></i>
                                    <span class="skill-name">${skill.name}</span>
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
    }

    populateProjectsSection() {
        console.log('Starting populateProjectsSection...');
        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) {
            console.error('Projects container element not found');
            return;
        }

        console.log('Projects container found, projects data:', portfolioData.projects);

        // Create categorized projects HTML
        let projectsHTML = '<div class="projects-categories">';

        // Fun Projects Section
        projectsHTML += `
            <div class="project-category fun-projects">
                <div class="category-header">
                    <h3 class="category-title">🎮 Fun Projects</h3>
                    <p class="category-subtitle">"The ones that brought joy and creativity"</p>
                </div>
                <div class="projects-grid">
                    ${this.renderProjectCards(portfolioData.projects.funProjects, 'fun')}
                </div>
            </div>
        `;

        // Projects That Made Me Cry Section
        projectsHTML += `
            <div class="project-category cry-projects">
                <div class="category-header">
                    <h3 class="category-title">😭 Projects That Made Me Cry</h3>
                    <p class="category-subtitle">"The ones that tested my sanity but made me stronger"</p>
                </div>
                <div class="projects-grid">
                    ${this.renderProjectCards(portfolioData.projects.projectsThatMadeMeCry, 'cry')}
                </div>
            </div>
        `;

        projectsHTML += '</div>';
        projectsContainer.innerHTML = projectsHTML;

        // Add animation classes to make projects visible
        setTimeout(() => {
            const projectCards = projectsContainer.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 100);
            });
        }, 200);

        // Add click handlers for project cards
        this.setupProjectCardHandlers();

        // Initialize icons with fallback
        this.initializeProjectIcons();

        console.log('Projects section populated successfully');
    }

    renderProjectCards(projects, categoryType) {
        return projects.map(project => {
            const headerLinksHTML = this.generateHeaderLinks(project);

            // Truncate description to one line (approximately 100 characters)
            const shortDescription = project.description.length > 100
                ? project.description.substring(0, 100) + '...'
                : project.description;

            return `
                <div class="project-card" data-project="${project.id}" data-category="${categoryType}">
                    <div class="project-header">
                        <div class="project-icon" style="color: ${project.color}">
                            <i class="${project.icon}"></i>
                        </div>
                        <div class="project-header-actions">
                            ${headerLinksHTML}
                            <div class="project-status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</div>
                        </div>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${shortDescription}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    generateHeaderLinks(project) {
        let linksHTML = '';

        if (project.github) {
            linksHTML += `
                <a href="${project.github}" class="header-link github-link" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                    <i class="fa-brands fa-github" data-fallback="🐙"></i>
                </a>
            `;
        }

        if (project.liveDemo) {
            linksHTML += `
                <a href="${project.liveDemo}" class="header-link live-demo" target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <i class="fa-solid fa-arrow-up-right-from-square" data-fallback="🔗"></i>
                </a>
            `;
        }

        return linksHTML;
    }

    setupProjectCardHandlers() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't open panel if clicking on header links
                if (e.target.closest('.header-link')) {
                    return;
                }

                const projectId = card.getAttribute('data-project');
                const categoryType = card.getAttribute('data-category');
                this.openProjectDetailPanel(projectId, categoryType);
            });
        });
    }

    openProjectDetailPanel(projectId, categoryType) {
        const project = this.getProjectById(projectId, categoryType);
        if (!project) return;

        // Create detail panel if it doesn't exist
        let detailPanel = document.getElementById('project-detail-panel');
        if (!detailPanel) {
            detailPanel = document.createElement('div');
            detailPanel.id = 'project-detail-panel';
            detailPanel.className = 'project-detail-panel';
            document.body.appendChild(detailPanel);
        }

        // Generate panel content
        const cryReasonHTML = categoryType === 'cry' && project.whyItMadeMeCry ?
            `<div class="detail-cry-reason">
                <h4>Why it made me cry:</h4>
                <p>${project.whyItMadeMeCry}</p>
            </div>` : '';

        detailPanel.innerHTML = `
            <div class="detail-panel-content">
                <div class="detail-header">
                    <div class="detail-icon" style="color: ${project.color}">
                        <i class="${project.icon}"></i>
                    </div>
                    <h2 class="detail-title">${project.title}</h2>
                    <button class="detail-close" aria-label="Close detail panel">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="detail-body">
                    <div class="detail-description">
                        <h3>About this project</h3>
                        <p>${project.description}</p>
                    </div>

                    <div class="detail-features">
                        <h3>Key Features</h3>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="detail-tech">
                        <h3>Technologies Used</h3>
                        <div class="detail-tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>

                    ${cryReasonHTML}

                    <div class="detail-links">
                        ${project.github ? `<a href="${project.github}" class="detail-link github" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> View on GitHub</a>` : ''}
                        ${project.liveDemo ? `<a href="${project.liveDemo}" class="detail-link live-demo" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
                    </div>
                </div>
            </div>
        `;

        // Show panel with animation
        setTimeout(() => {
            detailPanel.classList.add('active');
        }, 10);

        // Add close handler
        const closeBtn = detailPanel.querySelector('.detail-close');
        closeBtn.addEventListener('click', () => this.closeProjectDetailPanel());

        // Close on backdrop click
        detailPanel.addEventListener('click', (e) => {
            if (e.target === detailPanel) {
                this.closeProjectDetailPanel();
            }
        });

        // Close on escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                this.closeProjectDetailPanel();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    closeProjectDetailPanel() {
        const detailPanel = document.getElementById('project-detail-panel');
        if (detailPanel) {
            detailPanel.classList.remove('active');
            setTimeout(() => {
                detailPanel.remove();
            }, 300);
        }
    }

    getProjectById(projectId, categoryType) {
        const projects = categoryType === 'fun'
            ? portfolioData.projects.funProjects
            : portfolioData.projects.projectsThatMadeMeCry;

        return projects.find(project => project.id === projectId);
    }

    initializeProjectIcons() {
        // Check if Font Awesome icons are loading properly, if not use fallbacks
        setTimeout(() => {
            const projectIcons = document.querySelectorAll('.header-link i[data-fallback]');
            console.log('Found project icons:', projectIcons.length);

            projectIcons.forEach((icon, index) => {
                console.log(`Checking icon ${index}:`, icon.className);

                // Check if the icon is properly rendered by Font Awesome
                const computedStyle = window.getComputedStyle(icon, '::before');
                const content = computedStyle.getPropertyValue('content');

                console.log(`Icon ${index} content:`, content);

                // If Font Awesome isn't working (content is 'none' or empty), use fallback
                if (!content || content === 'none' || content === '""' || content === 'normal') {
                    const fallback = icon.getAttribute('data-fallback');
                    if (fallback) {
                        console.log(`Using fallback for icon ${index}:`, fallback);
                        icon.innerHTML = fallback;
                        icon.style.fontFamily = 'inherit';
                        icon.style.fontSize = '1.1rem'; // Match the CSS font size
                        icon.style.display = 'flex';
                        icon.style.alignItems = 'center';
                        icon.style.justifyContent = 'center';
                    }
                } else {
                    console.log(`Font Awesome working for icon ${index}`);
                }
            });
        }, 1000); // Give Font Awesome more time to load
    }

    populateContactSection() {
        console.log('Starting populateContactSection...');
        const contactContent = document.getElementById('contact-content');
        if (!contactContent) {
            console.error('Contact content element not found');
            return;
        }

        console.log('Contact content found, contact data:', portfolioData.contact);

        // Create contact HTML with icon buttons and tooltips
        let contactHTML = '<div class="contact-grid">';
        contactHTML += '<p class="contact-intro">Ready to bring your ideas to life? Let\'s connect and create something amazing together!</p>';
        contactHTML += '<div class="contact-methods">';

        portfolioData.contact.forEach(contact => {
            contactHTML += `
                <a href="${contact.link}" class="contact-method" target="_blank" rel="noopener noreferrer" data-contact="${contact.type}">
                    <div class="contact-icon" data-feather="${contact.featherIcon}" data-ion="${contact.ionIcon}" data-unicode="${contact.unicode}"></div>
                    <div class="contact-tooltip">
                        ${contact.label}: ${contact.value}
                        <div class="tooltip-arrow"></div>
                    </div>
                </a>
            `;
        });

        contactHTML += '</div>';

        // Add availability status (optional)
        contactHTML += '<div class="availability-status">Available for new projects</div>';

        contactHTML += '</div>';
        contactContent.innerHTML = contactHTML;

        // Add animation classes to make contact methods visible
        setTimeout(() => {
            const contactMethods = contactContent.querySelectorAll('.contact-method');
            contactMethods.forEach(method => {
                method.classList.add('animate');
            });

            // Initialize icons with fallback system
            this.initializeIcons();
        }, 100);

        console.log('Contact section populated successfully');
    }

    initializeIcons() {
        const icons = document.querySelectorAll('.contact-icon');

        // Try Feather Icons first
        if (typeof feather !== 'undefined') {
            console.log('Using Feather Icons');
            feather.replace();
            return;
        }

        // Fallback to Ionicons
        icons.forEach(icon => {
            const ionIcon = icon.getAttribute('data-ion');
            const unicode = icon.getAttribute('data-unicode');

            if (ionIcon) {
                console.log('Using Ionicons for:', ionIcon);
                icon.innerHTML = `<ion-icon name="${ionIcon}"></ion-icon>`;
                return;
            }

            // Final fallback to Unicode
            if (unicode) {
                console.log('Using Unicode fallback for:', unicode);
                icon.innerHTML = unicode;
                icon.style.fontFamily = 'inherit';
                icon.style.fontSize = 'inherit';
                icon.style.display = 'flex';
                icon.style.alignItems = 'center';
                icon.style.justifyContent = 'center';
            }
        });
    }



    setupScrollEffects() {
        // Simple and reliable scroll-based navigation detection
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                this.updateNavigationOnScroll();
            }, 50); // Reduced timeout for more responsive detection
        });

        // Initial call to set the correct active section on page load
        setTimeout(() => {
            this.updateNavigationOnScroll();
        }, 100);
    }

    updateNavigationOnScroll() {
        const sections = document.querySelectorAll('.section, .hero');
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;

        let activeSection = null;
        let minDistance = Infinity;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.pageYOffset;
            const sectionCenter = sectionTop + rect.height / 2;
            const distance = Math.abs(scrollPosition - sectionCenter);

            if (distance < minDistance) {
                minDistance = distance;
                activeSection = section;
            }
        });

        if (activeSection && activeSection.id && activeSection.id !== this.currentSection) {
            this.currentSection = activeSection.id;
            this.updateActiveNavLink(activeSection.id);
        }
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
