function toggleMenu() {
    const nav = document.querySelector("#hamburger-nav")
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    nav.classList.toggle("open")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}