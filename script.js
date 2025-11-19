// Configuration - Update these with your information
const CONFIG = {
    githubUsername: 'obiudeze',
    email: 'your.email@example.com',
    linkedIn: 'https://linkedin.com/in/obiudeze',
    twitter: 'https://twitter.com/obiudeze',
    profileImageUrl: 'https://via.placeholder.com/250', // Replace with your profile image URL
    aboutMe: {
        // You can customize this in the HTML or here
    }
};

// GitHub API Configuration
const GITHUB_API = {
    baseUrl: 'https://api.github.com',
    username: CONFIG.githubUsername,
    reposEndpoint: `/users/${CONFIG.githubUsername}/repos`,
    userEndpoint: `/users/${CONFIG.githubUsername}`
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    updateCurrentYear();
    updateContactInfo();
    updateProfileImage();
    fetchGitHubRepos();
});

// Mobile Navigation Toggle
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Update current year in footer
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Update contact information
function updateContactInfo() {
    const emailLink = document.getElementById('emailLink');
    const linkedInLink = document.getElementById('linkedInLink');
    const twitterLink = document.getElementById('twitterLink');

    if (emailLink) {
        emailLink.href = `mailto:${CONFIG.email}`;
        emailLink.textContent = CONFIG.email;
    }

    if (linkedInLink) {
        linkedInLink.href = CONFIG.linkedIn;
    }

    if (twitterLink) {
        twitterLink.href = CONFIG.twitter;
    }
}

// Update profile image
function updateProfileImage() {
    const profileImage = document.getElementById('profileImage');
    if (profileImage && CONFIG.profileImageUrl) {
        profileImage.src = CONFIG.profileImageUrl;
        profileImage.onerror = function() {
            // Fallback if image fails to load
            this.src = 'https://via.placeholder.com/250';
        };
    }
}

// Fetch GitHub repositories
async function fetchGitHubRepos() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;

    try {
        // Show loading state
        projectsGrid.innerHTML = `
            <div class="project-card skeleton">
                <div class="skeleton-content"></div>
            </div>
            <div class="project-card skeleton">
                <div class="skeleton-content"></div>
            </div>
            <div class="project-card skeleton">
                <div class="skeleton-content"></div>
            </div>
        `;

        // Fetch user info to get avatar
        const userResponse = await fetch(`${GITHUB_API.baseUrl}${GITHUB_API.userEndpoint}`);
        if (userResponse.ok) {
            const userData = await userResponse.json();
            if (userData.avatar_url && !CONFIG.profileImageUrl.includes('placeholder')) {
                const profileImage = document.getElementById('profileImage');
                if (profileImage) {
                    profileImage.src = userData.avatar_url;
                }
            }
        }

        // Fetch repositories
        const response = await fetch(`${GITHUB_API.baseUrl}${GITHUB_API.reposEndpoint}?sort=updated&per_page=12`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();
        
        // Filter out forks and sort by updated date
        const filteredRepos = repos
            .filter(repo => !repo.fork && !repo.archived)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 12); // Limit to 12 most recent

        if (filteredRepos.length === 0) {
            projectsGrid.innerHTML = `
                <div class="no-projects">
                    <p>No public repositories found. Check back soon!</p>
                </div>
            `;
            return;
        }

        // Render projects
        projectsGrid.innerHTML = filteredRepos.map(repo => createProjectCard(repo)).join('');

    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        projectsGrid.innerHTML = `
            <div class="error-message">
                <p>Unable to load projects at the moment. Please try again later.</p>
                <p style="font-size: 0.9rem; color: var(--text-light); margin-top: 0.5rem;">
                    Error: ${error.message}
                </p>
            </div>
        `;
    }
}

// Create project card HTML
function createProjectCard(repo) {
    const description = repo.description || 'No description available';
    const language = repo.language || 'Other';
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    const topics = repo.topics || [];
    
    // Get topics/tags (limit to 3)
    const tags = topics.slice(0, 3).map(topic => 
        `<span class="project-tag">${topic}</span>`
    ).join('');
    
    // Add language as a tag if no topics
    const displayTags = tags || `<span class="project-tag">${language}</span>`;

    return `
        <div class="project-card">
            <div class="project-header">
                <div>
                    <h3 class="project-title">${escapeHtml(repo.name)}</h3>
                </div>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" 
                   class="project-link" aria-label="View ${repo.name} on GitHub">
                    🔗
                </a>
            </div>
            <p class="project-description">${escapeHtml(description)}</p>
            <div class="project-footer">
                <div class="project-stats">
                    <span>⭐ ${stars}</span>
                    <span>🍴 ${forks}</span>
                </div>
                <div class="project-tags">
                    ${displayTags}
                </div>
            </div>
        </div>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-md)';
    }

    lastScroll = currentScroll;
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

