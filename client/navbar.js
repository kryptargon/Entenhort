const nav = document.getElementById('navbar')
const navButton = document.getElementById('navbtn')
const closeButton = document.getElementById('topButton')

navButton.addEventListener('click', () => {
    // openNav()
    nav.style.width = '16rem';
});

closeButton.addEventListener('click', () => closeNav());

function closeNav() {
    nav.style.width = '0';
}
