//MASQUER LE CHARGEMENT ---
window.addEventListener('load', function() {
    let loader = document.querySelector('.preloader');
    
    setTimeout(function() {
        loader.classList.add("hidden");
    }, 400);
});

// GÉRER LE MENU MOBILE INTELLIGENT

let btnMobile = document.querySelector('.mobile-menu');
let links = document.querySelector('.nav-links');

// 1. Ouvrir et fermer le menu hamburger avec le bouton principal
    btnMobile.onclick = function(event) {
    event.stopPropagation(); 
    links.classList.toggle('active');
    btnMobile.classList.toggle('active');
};

let allLinks = document.querySelectorAll('.nav-links a');
for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].onclick = function() {
        links.classList.remove('active');
        btnMobile.classList.remove('active');
    };
}

document.onclick = function(event) {
    if (!links.contains(event.target) && !btnMobile.contains(event.target)) {
        links.classList.remove('active');
        btnMobile.classList.remove('active');
    }
};

// CHANGER LA NAVBAR AU SCROLL 
window.onscroll = function() {
    let nav = document.querySelector('.navbar');
    
    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    checkFadeIn();
};

// ANIMATION SIMPLE D'APPARITION ---
function checkFadeIn() {
    let elements = document.querySelectorAll('.fade-in');
    
    for (let i = 0; i < elements.length; i++) {
        let position = elements[i].getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        
        if (position < screenHeight - 100) {
            elements[i].style.animation = 'fadeIn 0.6s ease-in-out forwards';
        }
    }
}