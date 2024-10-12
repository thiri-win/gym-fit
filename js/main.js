const toggle = document.querySelector("#toggle");
const navItem = document.querySelector(".nav-item");
toggle.onclick = function() {
    navItem.classList.toggle('active')
}

const dropdown = document.querySelector(".dropdown")
const dropdownMenu = document.querySelector(".dropdown-menu")
dropdown.onclick = function() {
    dropdownMenu.classList.toggle('active')
}

const nav = document.querySelector("nav")
window.onscroll = function () {
    if(window.scrollY > 150) {
        nav.classList.add('bg')
    } else {
        nav.classList.remove('bg')
    }
    if(window.scrollY > 500) {
        up.classList.add('active')
    } else {
        up.classList.remove('active')
    }
}

const up = document.querySelector("#up")
up.onclick = function() {
    window.scrollTo(0,0)
}