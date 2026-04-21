//MASQUER LE CHARGEMENT ---
window.addEventListener('load', function() {
    let loader = document.querySelector('.preloader');
    
    setTimeout(function() {
        loader.classList.add("hidden");
    }, 400);
});

//  GÉRER LE MENU MOBILE ---
let btnMobile = document.querySelector('.mobile-menu');
let links = document.querySelector('.nav-links');

btnMobile.onclick = function() {
    links.classList.toggle('active');
    btnMobile.classList.toggle('active');
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