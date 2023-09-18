const temSubMenu = document.getElementById('temSubMenu');
const timesSubMenu = document.querySelector('.sub-menu');
const menu = document.querySelector('.menu');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const down = document.querySelector('.down');

temSubMenu.addEventListener('click', () => {
    timesSubMenu.classList.toggle("active");
    down.classList.toggle('transform');
})

document.onclick = (e) => {
    if(!temSubMenu.contains(e.target) && !timesSubMenu.contains(e.target)) {
        timesSubMenu.classList.remove("active");
        down.classList.remove('transform');
    }
}

menuOpen.addEventListener('click', () => {
    menu.classList.toggle('menuAtivo');
})

menuClose.addEventListener('click', () => {
    menu.classList.toggle('menuAtivo');
})