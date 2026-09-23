document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Logic
    const navItems = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.content-section');
    const headerTitle = document.querySelector('.top-header h2');

    const sectionTitles = {
        'dashboard': 'Overview',
        'roadmap': 'Career Roadmap',
        'skills': 'Skills & Proficiency'
    };

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');

            // Get target section id
            const targetId = item.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.classList.add('active');
                
                // Re-trigger animations in the section
                const animatedElements = targetSection.querySelectorAll('.progress-bar-fill, .circular-progress');
                animatedElements.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; // trigger reflow
                    el.style.animation = null; 
                });
            }

            // Update header title
            headerTitle.textContent = sectionTitles[targetId];
            
            // Re-run circular progress animation if dashboard is selected
            if(targetId === 'dashboard') {
                animateCircularProgress();
            }
        });
    });

    // 2. Circular Progress Animation
    function animateCircularProgress() {
        const circularProgress = document.querySelector('.circular-progress');
        const progressValue = document.querySelector('.progress-value');
        
        if(!circularProgress || !progressValue) return;

        let progressStartValue = 0;
        let progressEndValue = parseInt(circularProgress.getAttribute('data-progress'), 10) || 0;
        let speed = 20;
        
        // Reset
        circularProgress.style.background = `conic-gradient(var(--bg-secondary) 360deg, var(--bg-secondary) 0deg)`;
        progressValue.textContent = '0%';

        if(progressEndValue === 0) return;

        let progress = setInterval(() => {
            progressStartValue++;
            
            progressValue.textContent = `${progressStartValue}%`;
            
            // Calculate gradient string based on theme variable --accent-primary
            // Since we can't easily get the computed variable value for the gradient in JS without extra code,
            // we'll use a hardcoded color that matches our theme (#8b5cf6 = rgb(139, 92, 246))
            circularProgress.style.background = `conic-gradient(#8b5cf6 ${progressStartValue * 3.6}deg, var(--bg-secondary) 0deg)`;

            if (progressStartValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    }

    // Run animation on initial load
    setTimeout(animateCircularProgress, 300);

    // 3. Optional: Add interactive mock notifications
    const bellIcon = document.querySelector('.fa-bell').parentElement;
    bellIcon.addEventListener('click', () => {
        bellIcon.style.transform = 'scale(0.9)';
        setTimeout(() => {
            bellIcon.style.transform = 'scale(1)';
            alert('You have 2 new milestone notifications!');
        }, 150);
    });
});
