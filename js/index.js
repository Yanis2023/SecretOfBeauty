
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




// Form Newsletter :
function submitForm(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement
    
    var form = event.target;
    var formData = new FormData(form);
    
    fetch('https://script.google.com/macros/s/AKfycbwWWcoqSOTzOiWlM2MrCWiyv6Hn5kLm4b4DnfQGpW4HhQwsy5AB3pM3NgWaBINitOff/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Afficher un message de succès
            document.getElementById('successMessage').innerText = 'Inscription réussie !';
            document.getElementById('errorMessage').innerText = ''; // Effacer les messages d'erreur précédents
            form.reset(); // Réinitialiser le formulaire
        } else {
            // Afficher un message d'erreur
            document.getElementById('errorMessage').innerText = 'Une erreur est survenue. Veuillez réessayer.';
            document.getElementById('successMessage').innerText = ''; // Effacer les messages de succès précédents
        }
    })
    .catch(error => {
        console.error('Erreur lors de la soumission du formulaire :', error);
        // Afficher un message d'erreur générique
        document.getElementById('errorMessage').innerText = 'Une erreur est survenue. Veuillez réessayer.';
        document.getElementById('successMessage').innerText = ''; // Effacer les messages de succès précédents
    });
}

// Attacher l'événement de soumission au formulaire
document.getElementById('subscriptionForm').addEventListener('submit', submitForm);