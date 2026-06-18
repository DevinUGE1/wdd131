/*W06 Project by Devin Gamboa Enciso*/

// Get current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

const galleryItems = [
    {
        id: "lomo-saltado",
        name: "Lomo Saltado",
        description: "One of Peru's most famous dishes, made with stir-fried beef, onions, tomatoes, and crispy fries.",
        image: "https://www.gastronomia.com.br/wp-content/uploads/2024/09/gastronomia-peruana-pratos-tipicos-para-experimentar-em-sua-viagem-ao-peru.jpg"
    },
    {
        id: "ceviche",
        name: "Ceviche",
        description: "Fresh fish marinated in lime juice with onions, chili peppers, and traditional Peruvian seasonings.",
        image: "https://www.machupicchuterra.com/wp-content/uploads/ceviche-peru.jpg"
    },
    {
        id: "causa",
        name: "Causa Rellena",
        description: "A traditional Peruvian dish made with layers of seasoned yellow potatoes filled with chicken, tuna, or seafood.",
        image: "https://www.machupicchuterra.com/wp-content/uploads/causa-rellena.jpg"
    },
    {
        id: "huancaina",
        name: "Papa a la Huancaína",
        description: "Boiled potatoes served with a creamy and slightly spicy yellow pepper cheese sauce.",
        image: "https://www.machupicchuterra.com/wp-content/uploads/papa-huancaina.jpg"
    },
    {
        id: "pollo",
        name: "Pollo a la Brasa",
        description: "Peru's famous rotisserie chicken, marinated with special spices and roasted to perfection.",
        image: "https://www.machupicchuterra.com/wp-content/uploads/pollo-brasa.jpg"
    },
    {
        id: "anticuchos",
        name: "Anticuchos",
        description: "Traditional grilled skewers, typically made with marinated beef heart and served with potatoes.",
        image: "https://www.machupicchuterra.com/wp-content/uploads/anticuchos.jpg"
    },
    {
        id: "chaufa",
        name: "Arroz Chaufa",
        description: "Peruvian-style fried rice influenced by Chinese cuisine, prepared with rice, vegetables, eggs, and meat.",
        image: "https://static.wixstatic.com/media/9755d8_a1a612def03a4b3e885d421ec3edf0c6~mv2.png"
    },
    {
        id: "aji-gallina",
        name: "Ají de Gallina",
        description: "Shredded chicken served in a rich, creamy sauce made with yellow peppers, milk, bread, and cheese.",
        image: "https://i0.wp.com/cupofthings.com/wp-content/uploads/2014/02/aj%C3%AD-de-gallina2.jpg"
    },
    {
        id: "juane",
        name: "Juane de Gallina",
        description: "A traditional dish from the Peruvian Amazon made with rice, chicken, eggs, and spices wrapped in bijao leaves.",
        image: "https://aventuras.pe/blog/wp-content/uploads/2022/12/juane-de-gallina.png"
    }
];

// Reusable function to create the HTML for a single card
function createCard(item) {
    return `
        <article class="gallery-card">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </article>
    `;
}

// Function for the full menu page
function displayGallery() {
    const gallery = document.querySelector("#gallery");
    if (!gallery) return; 
    
    galleryItems.forEach(item => {
        gallery.innerHTML += createCard(item);
    });
}

// Function for the home page (shows only 3 featured items)
function displayFeatured() {
    const featured = document.querySelector("#featured");
    if (!featured) return; 
    
    const featuredItems = galleryItems.slice(0, 3);
    featuredItems.forEach(item => {
        featured.innerHTML += createCard(item);
    });
}

// Form Handling (for contact.html)
function handleForm() {
    const form = document.querySelector("#reservationForm");
    const confirmationMsg = document.querySelector("#confirmation");
    
    if (!form) return; 
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const nameInput = document.querySelector("#name").value;
        confirmationMsg.textContent = `Thank you, ${nameInput}! Your reservation request has been received.`;
        form.reset(); 
    });
}

// Local Storage Visit Counter (for index.html)
function handleVisitCounter() {
    const visitCounter = document.querySelector("#visitCounter");
    if (!visitCounter) return;

    let numVisits = Number(window.localStorage.getItem("siteVisits")) || 0;
    
    if (numVisits === 0) {
        visitCounter.textContent = "Welcome! This is your first time exploring our menu.";
    } else {
        visitCounter.textContent = `Welcome back! You have visited us ${numVisits} times.`;
    }
    
    numVisits++;
    localStorage.setItem("siteVisits", numVisits);
}

// Navigation Hamburger Menu
function handleMobileMenu() {
    const menuButton = document.querySelector('#menu-toggle');
    const navigation = document.querySelector('header nav');

    if (!menuButton || !navigation) return;

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        
        // Change icon based on open status
        if (navigation.classList.contains('open')) {
            menuButton.textContent = '✖'; 
        } else {
            menuButton.textContent = '☰';
        }
    });
}

// Initialize everything when the DOM loads
document.addEventListener("DOMContentLoaded", () => {
    displayGallery();
    displayFeatured();
    handleForm();
    handleVisitCounter();
    handleMobileMenu(); 
});