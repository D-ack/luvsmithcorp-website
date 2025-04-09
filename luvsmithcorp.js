/**
 * Luvsmith Corp Website JavaScript
 * Custom JS for the Luvsmith Corp website
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        const backToTopButton = document.getElementById('backToTop');
        if (backToTopButton) {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        }
    }
    
    // Initial call to set correct state
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Skip if it's the back to top  {
            e.preventDefault();
            
            // Skip if it's the back to top button
            if (this.getAttribute('href') === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Parallax effect for hero section
    const parallaxBg = document.querySelector('.parallax-bg');
    
    if (parallaxBg) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    }
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Initial call and add scroll event listener for animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Mobile menu close on click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
    
    // Earnings Calculator
    const connectsInput = document.getElementById('connects-input');
    const calculateBtn = document.getElementById('calculate-btn');
    const monthlyEarnings = document.getElementById('monthly-earnings');
    const tenDayEarnings = document.getElementById('ten-day-earnings');
    const levelResult = document.getElementById('level-result');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const connects = parseInt(connectsInput.value);
            let monthly = 0;
            let level = 0;
            
            // Calculate monthly earnings
            if (connects >= 800) {
                monthly = 20;
                level = 10;
            } else if (connects >= 600) {
                monthly = 18;
                level = 9;
            } else if (connects >= 500) {
                monthly = 16;
                level = 8;
            } else if (connects >= 400) {
                monthly = 14;
                level = 8;
            } else if (connects >= 300) {
                monthly = 12;
                level = 7;
            } else if (connects >= 200) {
                monthly = 10;
                level = 6;
            } else if (connects >= 151) {
                monthly = 8;
                level = 6;
            } else if (connects >= 101) {
                monthly = 6;
                level = 5;
            } else if (connects >= 61) {
                monthly = 4;
                level = 4;
            } else if (connects >= 31) {
                monthly = 3;
                level = 3;
            } else if (connects >= 11) {
                monthly = 2;
                level = 2;
            } else if (connects >= 5) {
                monthly = 1;
                level = 1;
            }
            
            // Display results
            monthlyEarnings.textContent = `$${monthly.toFixed(2)}`;
            tenDayEarnings.textContent = `$${(monthly / 3).toFixed(2)}`;
            levelResult.textContent = level;
        });
    }
    
    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    
    if (forms.length > 0) {
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                form.classList.add('was-validated');
            }, false);
        });
    }
    
    // WhatsApp redirect
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            window.open('https://wa.me/+2349123032034?text=I%20want%20to%20join%20Luvsmith%20Corp%20network!', '_blank');
        });
    }
    
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    let bootstrap; // Declare bootstrap variable
    if (tooltipTriggerList.length) {
        bootstrap = window.bootstrap; // Assign the bootstrap object from the window
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});