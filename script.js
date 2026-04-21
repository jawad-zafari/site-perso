//MASQUER LE CHARGEMENT ---
window.addEventListener('load', function() {
    let loader = document.querySelector('.preloader');
    
    setTimeout(function() {
        loader.classList.add("hidden");
    }, 400);
});
