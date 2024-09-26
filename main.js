document.addEventListener("DOMContentLoaded", function() {
    function loadContent(page) {
        let content = '';  // Variable to hold the section ID based on the page

        // Identify the corresponding section based on the clicked nav item
        switch (page) {
            case 'home':
                content = 'home-section';
                break;
            case 'about':
                content = 'about-section';
                break;
            case 'testimonials':
                content = 'testimonials-section';
                break;
            case 'faqs':
                content = 'faqs-section';
                break;
            case 'lighting-accessories':
                content = 'lighting-accessories-section';
                break;
            case 'meter-boxes':
                content = 'meter-boxes-section';
                break;
            case 'sockets-switches':
                content = 'sockets-switches-section';
                break;
            case 'cables':
                content = 'cables-section'; // Added cables section
                break;
            case 'conduit-and-fittings':
                content = 'conduit-and-fittings-section'; // Added conduit and fittings section
                break;
            case 'padlocks':
                content = 'padlocks-section'; // Added padlocks section
                break;
            default:
                content = 'home-section';  // Default to home section if no match
        }
        

        // Clear the content container
        const container = document.getElementById("contentContainer");
        container.innerHTML = '';  // Clear existing content

        // Find the section to append
        const section = document.getElementById(page + '-section');
        if (section) {
            // Clone the section
            const clonedSection = section.cloneNode(true);
            clonedSection.style.display = 'block';  // Ensure the cloned section is displayed
            container.appendChild(clonedSection);  // Append the cloned section to the content container
        }
    }

    // Add click event listeners to each nav-link to load the corresponding content
    document.querySelectorAll(".nav-link").forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent the default anchor behavior

            const page = this.getAttribute("data-page");  // Get the page attribute from the clicked nav item
            loadContent(page);  // Load and display the corresponding section content
        });
    });

    // Handle clicks on dropdown items for the Portfolio dropdown
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent the default anchor behavior

            const page = this.getAttribute("data-page");  // Get the page attribute from the clicked dropdown item
            if (page) {
                loadContent(page);  // Your function to load content
            }
        });
    });

    // Handle clicks on dropdown items for the Customer Support dropdown
    document.querySelectorAll(".dropdown-item").forEach(item => {
        // No need to prevent default for links like phone, WhatsApp, and email
        // These should open external applications or services as usual
        item.addEventListener("click", function(event) {
            // You can add any custom logic here if needed
            // For instance, logging click events or handling analytics
        });
    });

      
    // Nav link active class handling
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

});

 document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper('.testimonials-slider', {
            loop: true,  // Loop through slides
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,  // Auto-slide every 5 seconds
                disableOnInteraction: false,  // Continue autoplay after interaction
            },
            slidesPerView: 1,  // One testimonial at a time
            spaceBetween: 20,  // Space between slides
        });
    });