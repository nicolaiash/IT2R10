$(document).ready(function() {

    // 1. LOGIN & PERSONALIZATION (Requirement: val(), text())
    $('#custom-login-form').on('submit', function(e) {
        e.preventDefault();
        const userName = $('#visitor-input').val();
        
        if (userName) {
            $('#welcome-msg').text("Welcome, " + userName + "!");
            // jQuery Animation Requirement
            $('#login-overlay').fadeOut(800, function() {
                $('#resume-content').fadeIn(500);
            });
        }
    });

    // 2. CONTACT FORM VALIDATION (Module 4 Requirement: Vanilla JS)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const emailValue = document.querySelector('#email').value;
            if (!emailValue.includes('@')) {
                alert("Error: Please enter a valid email address.");
                e.preventDefault();
            } else {
                alert("Success: Your message has been sent!");
                e.preventDefault(); // Prevents actual submission for demo
            }
        });
    }

    // 3. JQUERY: ADD SKILL (Requirement: append())
    $('#add-skill-btn').on('click', function() {
        let newSkill = prompt("Enter a new technical skill:");
        if (newSkill) {
            // Requirement: Create and Append
            $('<li>' + newSkill + '</li>').hide().appendTo('#skills-list').fadeIn(600);
        }
    });

    // 4. JQUERY: HIRE ME POP-UP (Bonus Innovation)
    $('#hire-me-btn').on('click', function() {
        $('#hire-me-panel').slideDown(400); // Uses slideDown animation
    });
    $('#close-panel').on('click', function() {
        $('#hire-me-panel').fadeOut(300);
    });

    // 5. JQUERY: DARK MODE TOGGLE (Bonus Innovation)
    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-theme');
        // Update button text based on theme state
        if ($('body').hasClass('dark-theme')) {
            $(this).text('☀️ Light Mode');
        } else {
            $(this).text('🌙 Dark Mode');
        }
    });

    // 6. JQUERY: SKILL HIGHLIGHT (Requirement: toggleClass())
    $('#skills-list').on('click', 'li', function() {
        $(this).toggleClass('highlight-card');
    });

});