const navbarToggler = document.querySelector('.navbar-toggler');
const btnClose = document.querySelector('.btn-close');
const navBarMenu = document.getElementById('navbarMenu');
const imageMockups = document.getElementById('image-mockups');



navbarToggler.addEventListener('click', () => {
btnClose.classList.toggle('d-none'); 
navbarToggler.classList.toggle('d-none');
imageMockups.classList.add('d-none');
});

btnClose.addEventListener('click', () => {
navBarMenu.classList.remove('show'); 
btnClose.classList.toggle('d-none'); 
navbarToggler.classList.toggle('d-none');
 imageMockups.classList.remove('d-none')

});
