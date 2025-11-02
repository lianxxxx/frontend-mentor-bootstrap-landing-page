const navbarToggler = document.querySelector(' .navbar-toggler'); //hamburger button
const btnClose = document.querySelector('.btn-close')             //close button
const navBarMenu = document.getElementById('navbarMenu');         //navbar menu
const navLink = document.querySelectorAll('.navbar-nav .nav-link');//nav links
const imageMockups = document.getElementById('image-mockups');     //image mockups section


// Open navbar when the toggler button is clicked
navbarToggler.addEventListener('click', () => {
btnClose.classList.toggle('d-none'); 
navbarToggler.classList.toggle('d-none');
});

// Close navbar when the close button is clicked
btnClose.addEventListener('click', () => {
navBarMenu.classList.remove('show'); 
btnClose.classList.toggle('d-none'); 
navbarToggler.classList.toggle('d-none');
imageMockups.classList.remove('d-none')

});

// Close navbar when a nav link is clicked
navLink.forEach(n => n.addEventListener('click', () => {
navBarMenu.classList.remove('show'); 
btnClose.classList.add('d-none'); 
navbarToggler.classList.remove('d-none');
imageMockups.classList.remove('d-none');
}));
