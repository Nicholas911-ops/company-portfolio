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
                content = document.getElementById('testimonials-section').innerHTML;
                initializeSwiper(); // Initialize Swiper only for testimonials
                break;
            case 'faqs':
                content = 'faqs-section';
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
            case 'chandeliers':
                content = 'chandeliers-section'; // Added chandeliers section
                break;
            case 'floodlights':
                content = 'floodlights-section'; // Added floodlights section
                break;
            case 'wallbrackets':
                content = 'wallbrackets-section'; // Added wallbrackets section
                break;
            case 'led-panel-lights':
                content = 'led-panel-lights-section'; // Added LED panel lights section
                break;
            case 'moon-lights':
                content = 'moon-lights-section'; // Added moon lights section
                break;
            case 'pendant-lights':
                content = 'pendant-lights-section'; // Added pendant lights section
                break;
            case 'showers':
                content = 'showers-section'; // Added showers section
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
        const section = document.getElementById(content);
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

    // Use event delegation for dropdown items
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', function(event) {
            const item = event.target.closest('.dropdown-item'); // Find the clicked dropdown item
            if (item) {
                event.preventDefault(); // Prevent the default action
                const page = item.getAttribute("data-page");
                if (page) {
                    loadContent(page); // Load content for products
                } else {
                    const link = item.getAttribute("href"); // Handle support links
                    if (link) {
                        window.open(link, '_blank'); // Open in a new tab for support
                    }
                }
            }
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

    // Event listener for "Get Started" button
    const getStartedBtn = document.getElementById('get-started-btn');

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('home');  // Load the "home" content
        });
    }

    // Use event delegation to handle clicks on dynamically generated buttons
    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'viewMoreFabricationsBtn') { // Removed space
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('meter-boxes');  // Load the corresponding page content into #contentContainer
        }
       
        if (event.target && event.target.id === 'viewMoreCookerSocketsBtn') { // Ensure ID is correct
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('sockets-switches');  // Load the corresponding page content into #contentContainer
        }

        if (event.target && event.target.id === 'viewMoreFullMoonlightsBtn') { // Ensure ID is correct
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('moon-lights');  // Load the corresponding page content into #contentContainer
        }

        if (event.target && event.target.id === 'viewMoreWallBracketsBtn') { // Ensure ID is correct
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('wallbrackets');  // Load the corresponding page content into #contentContainer
        }

        if (event.target && event.target.id === 'viewMoreChangeoverSwitchessBtn') { // Ensure ID is correct
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('sockets-switches');  // Load the corresponding page content into #contentContainer
        }

        if (event.target && event.target.id === 'viewFloodlightsBtn') { // Ensure ID is correct
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('floodlights');  // Load the corresponding page content into #contentContainer
        }

        if (event.target && event.target.id === 'viewMorePanelLightsBtn') { // Ensure ID is correct
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('led-panel-lights');  // Load the corresponding page content into #contentContainer
        }

        if (event.target && event.target.id === 'viewMoreCablesBtn') { // Ensure ID is correct
            event.preventDefault();  // Prevent default anchor behavior
            loadContent('cables');  // Load the corresponding page content into #contentContainer
        }

    });

// Function to initialize Swiper
function initializeSwiper() {
    // Initialize Swiper for the testimonials slider
    const swiper = new Swiper('.testimonials-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 9000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

});
