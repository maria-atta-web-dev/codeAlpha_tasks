// Image Gallery Data - High Quality Images
const images = [
    // Nature Category
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        title: 'Mystic Mountains',
        category: 'nature',
        description: 'Sunset over the Himalayas'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
        title: 'Enchanted Forest',
        category: 'nature',
        description: 'Misty morning in the woods'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
        title: 'Sunrise Serenity',
        category: 'nature',
        description: 'Golden rays through trees'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80',
        title: 'Waterfall Dreams',
        category: 'nature',
        description: 'Cascading waters in paradise'
    },
    // City Category
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
        title: 'City Lights',
        category: 'city',
        description: 'Downtown at midnight'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
        title: 'Urban Jungle',
        category: 'city',
        description: 'Modern architecture'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80',
        title: 'Metropolis',
        category: 'city',
        description: 'City that never sleeps'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80',
        title: 'Skyline View',
        category: 'city',
        description: 'Urban landscape'
    },
    // Technology Category
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
        title: 'Tech Hub',
        category: 'technology',
        description: 'Modern workspace'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',
        title: 'Cyber Setup',
        category: 'technology',
        description: 'Gaming paradise'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
        title: 'Digital Age',
        category: 'technology',
        description: 'Future of computing'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
        title: 'Server Room',
        category: 'technology',
        description: 'Cloud infrastructure'
    },
    // Architecture Category
    {
        id: 13,
        src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&q=80',
        title: 'Modern Design',
        category: 'architecture',
        description: 'Contemporary building'
    },
    {
        id: 14,
        src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80',
        title: 'Geometric Shapes',
        category: 'architecture',
        description: 'Architectural patterns'
    },
    {
        id: 15,
        src: 'https://images.unsplash.com/photo-1431576901776-53927b3e8c10?w=600&q=80',
        title: 'Historic Charm',
        category: 'architecture',
        description: 'Old meets new'
    },
    // Art Category
    {
        id: 16,
        src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
        title: 'Abstract Art',
        category: 'art',
        description: 'Colorful expression'
    },
    {
        id: 17,
        src: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80',
        title: 'Street Art',
        category: 'art',
        description: 'Urban creativity'
    },
    {
        id: 18,
        src: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&q=80',
        title: 'Digital Art',
        category: 'art',
        description: 'Modern masterpiece'
    }
];

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxTitle = document.querySelector('.lightbox-title');
const lightboxCategory = document.querySelector('.lightbox-category');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMore');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const preloader = document.querySelector('.preloader');
const navbar = document.querySelector('.navbar');

// State
let currentIndex = 0;
let currentFilter = 'all';
let filteredImages = [...images];
let displayedCount = 9; // Show 9 images initially

// Custom Cursor
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Gallery
function initGallery() {
    displayImages(images.slice(0, displayedCount));
    setupEventListeners();
    startCounterAnimation();
}

// Display Images
function displayImages(imagesArray) {
    galleryGrid.innerHTML = '';
    imagesArray.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
        galleryItem.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
    });
}

// Create Gallery Item
function createGalleryItem(image, index) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.dataset.index = index;
    div.dataset.category = image.category;
    
    div.innerHTML = `
        <img src="${image.src}" alt="${image.title}" loading="lazy">
        <div class="gallery-item-overlay">
            <h3>${image.title}</h3>
            <p><i class="fas fa-tag"></i> ${image.category}</p>
        </div>
    `;
    
    div.addEventListener('click', () => openLightbox(index));
    return div;
}

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    const image = filteredImages[index];
    
    lightboxImg.src = image.src;
    lightboxTitle.textContent = image.title;
    lightboxCategory.textContent = `Category: ${image.category}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update image counter
    updateImageCounter();
}

// Close Lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Stop autoplay if playing
    if (window.autoplayManager && window.autoplayManager.isPlaying) {
        window.autoplayManager.stopAutoplay();
    }
}

// Navigate Images
function navigateImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % filteredImages.length;
    } else {
        currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    const image = filteredImages[currentIndex];
    lightboxImg.src = image.src;
    lightboxTitle.textContent = image.title;
    lightboxCategory.textContent = `Category: ${image.category}`;
    
    // Update image counter
    updateImageCounter();
}

// Update Image Counter
function updateImageCounter() {
    const currentIndexSpan = document.getElementById('currentImageIndex');
    const totalImagesSpan = document.getElementById('totalImages');
    
    if (currentIndexSpan) {
        currentIndexSpan.textContent = currentIndex + 1;
    }
    if (totalImagesSpan) {
        totalImagesSpan.textContent = filteredImages.length;
    }
}

// Filter Images
function filterImages(category) {
    currentFilter = category;
    
    if (category === 'all') {
        filteredImages = [...images];
    } else {
        filteredImages = images.filter(img => img.category === category);
    }
    
    displayImages(filteredImages.slice(0, displayedCount));
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    
    // Update total images in counter
    updateImageCounter();
}

// Load More Images
function loadMoreImages() {
    displayedCount += 6;
    displayImages(filteredImages.slice(0, displayedCount));
    
    if (displayedCount >= filteredImages.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Counter Animation
function startCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.dataset.target;
            const count = +counter.innerText;
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Smooth Scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterImages(btn.dataset.filter);
        });
    });
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreImages);
    }
    
    // Lightbox controls
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', () => navigateImage('prev'));
    document.querySelector('.lightbox-next').addEventListener('click', () => navigateImage('next'));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateImage('prev');
                break;
            case 'ArrowRight':
                navigateImage('next');
                break;
            case ' ':
                e.preventDefault();
                if (window.autoplayManager) {
                    window.autoplayManager.toggleAutoplay();
                }
                break;
        }
    });
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(anchor.getAttribute('href'));
        });
    });
    
    // Menu toggle for mobile
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        e.target.reset();
    });
    
    // Hover effect on links for cursor
    document.querySelectorAll('a, button, .gallery-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);