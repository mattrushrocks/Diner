// inject current year in footer
const variableOne = new Date();
document.querySelector('#year').textContent = variableOne.getFullYear();

// new stuff here
function toggleMenu(){
    const primaryNav = document.getElementById("primaryNav");
    const nav = primaryNav ? primaryNav.closest('nav') : null;
    if (nav) nav.classList.toggle("open");
    if (primaryNav) primaryNav.classList.toggle('open');

    const btn = document.getElementById("hamburgerButton");
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));

    // toggle button animation class
    btn.classList.toggle("open");
}

const x = document.getElementById("hamburgerButton");
if (x) x.addEventListener('click', toggleMenu);
