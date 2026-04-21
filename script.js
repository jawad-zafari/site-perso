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
