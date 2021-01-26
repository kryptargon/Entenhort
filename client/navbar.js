const nav = document.getElementById('navbar')
const navButton = document.getElementById('navbtn')
const closeButton = document.getElementById('topButton')

navButton.addEventListener('click', () => openNav());
closeButton.addEventListener('click', () => closeNav());

function openNav() {
    nav.style.width = '16rem';
}
function closeNav() {
    nav.style.width = '0';
}
