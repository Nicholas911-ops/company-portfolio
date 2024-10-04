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

    // Add event listener for the "Get Started" button
    getStartedBtn.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default anchor behavior
        loadPageContent('home');  // Load the "home" page content
    });

    // Swiper initialization
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

    // Example data for each subcategory
    const lightingProducts = {
        'full-moon-lights': [
        {
            name: 'Full Moon Light',
            description: 'A stylish, energy-efficient LED light designed to enhance modern interior spaces.',
            image: 'images/fullmoonlights.jpg',
        },
        {
            name: 'Small Full Moon',
            description: 'Compact and efficient LED for smaller spaces, offering balanced and soft lighting.',
            image: 'images/smallfullmoon.jpg',
        },
        {
            name: 'Optonica 72W',
            description: 'High-power 72W LED, ideal for large rooms needing bright, expansive illumination.',
            image: 'images/SQUARE CEILING LIGHT WHITE (1).png',
        },
        {
            name: 'No.9 Full Moon',
            description: 'Sleek and minimalistic LED light, perfect for modern homes requiring bright, uniform lighting.',
            image: 'images/no.9fullmoon.png',
        },
        {
            name: 'Optonica Full Moon',
            description: 'An energy-saving full moon LED with a stylish design, great for both home and office spaces.',
            image: 'images/Optonicafullmoon.jpg',
        },
        {
            name: 'Half Moon',
            description: 'A half-circle LED that offers soft ambient lighting, perfect for hallways or mood lighting.',
            image: 'images/Halfmoon.jpg',
        }
    ],

    'wall-brackets': [
        {
            name: 'Modern Wall Bracket',
            description: 'Stylish modern design for living room walls.',
            image: 'images/wallbracket1.jpg',
        },
        {
            name: 'Antique Wall Bracket',
            description: 'Elegant antique design for home decoration.',
            image: 'images/wallbracket2.jpg',
        }
    ],
    'surface-panels': [
        {
            name: 'Slim Surface Panel',
            description: 'Ultra-slim panel for stylish ceilings.',
            image: 'images/surfacepanel1.jpg',
        },
        {
            name: 'Square Surface Panel',
            description: 'Bright square panel for kitchens and offices.',
            image: 'images/surfacepanel2.jpg',
        }
    ]
};

// Example data for Conduit & Fittings subcategories
const conduitSubcategoryProducts = {
    'View-More': [
        {
            name: '20mm Conduit Everest ',
            description: 'A 20mm conduit pipe , providing superior strength and electrical insulation, ideal for long-lasting installations.',
            image: 'images/20mm Conduit Everest.jpg',
        },
        {
            name: '25mm Conduit Everest ',
            description: 'A durable 25mm  conduit for enhanced protection and easy installation in commercial or residential buildings.',
            image: 'images/25 mm Conduit Everest.jpg',
        },
        {
            name: '32mm Conduit Everest ',
            description: '32mm conduit  for secure and robust wiring systems, ensuring seamless and protective connections.',
            image: 'images/32 Conduit Everest.jpg',
        },
        {
            name: '50mm Conduit Everest ',
            description: 'A heavy-duty 50mm conduit for large-scale installations, designed for smooth and efficient directional conduit setups.',
            image: 'images/50mm Conduit Everest.jpg',
        }
    ],

};

 // Separate display functions for each product type
 function displayLightingProducts(subcategory) {
    const productContainer = document.getElementById('lightingProducts');
    productContainer.innerHTML = '';
    const products = lightingProducts[subcategory];
    if (products) {
        products.forEach(product => {
            const productCard = `<div class="col-md-4 mb-4"><div class="card"><img src="${product.image}" alt="${product.name}" class="card-img-top"><div class="card-body"><h5 class="card-title">${product.name}</h5><p class="card-text">${product.description}</p></div></div></div>`;
            productContainer.innerHTML += productCard;
        });
    } else {
        productContainer.innerHTML = '<p>No products found for this subcategory.</p>';
    }
}

function displayConduitProducts(subcategory) {
    const productContainer = document.getElementById('conduitProducts');
    productContainer.innerHTML = '';
    const products = conduitProducts[subcategory];
    if (products) {
        products.forEach(product => {
            const productCard = `<div class="col-md-4 mb-4"><div class="card"><img src="${product.image}" alt="${product.name}" class="card-img-top"><div class="card-body"><h5 class="card-title">${product.name}</h5><p class="card-text">${product.description}</p></div></div></div>`;
            productContainer.innerHTML += productCard;
        });
    } else {
        productContainer.innerHTML = '<p>No products found for this subcategory.</p>';
    }
}

// Proper window load handling
window.onload = function() {
    displayLightingProducts('full-moon-lights');
    displayConduitProducts('View-More');
};

});
