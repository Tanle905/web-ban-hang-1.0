const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navLinks = $$('.nav-link')
navLinks.forEach(navLink=> navLink.classList.add('text-white'))

const body = $('body');
const signUp = $('#sign-up');
const login = $$('#login');
const merchantdiseImgs = $$('.merchandise .card-body')
console.log(merchantdiseImgs)
merchantdiseImgs.forEach(merchantdiseImg=> merchantdiseImg.classList.add('merchandise-img'))