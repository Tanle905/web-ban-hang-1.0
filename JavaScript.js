const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navLinks = $$('.nav-link')
navLinks.forEach(navLink=> navLink.classList.add('text-white'))

const body = $('body');
const signUp = $('#sign-up');
const login = $$('#login');
const merchandises = $$('.card img')
merchandises.forEach(merchandise => merchandise.onclick = ()=> window.location.assign('https://tanle905.github.io/'))

const tooltipContents = $$('.tooltip-content')
tooltipContents.forEach(tooltipContent => tooltipContent.onclick = ()=> window.location.assign('https://tanle905.github.io/'))

