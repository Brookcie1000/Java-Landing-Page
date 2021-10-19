const navBarElement = document.querySelector("#nav-bar");

const menuToggle = () => {
    let cssLinkElement = document.querySelector("link");
    let menuElement = null;

    if (cssLinkElement.href === "http://localhost:3000/css/landing-page-combined-menu-down.css") {
        cssLinkElement.href = "/css/landing-page-combined.css";
        menuElement = document.querySelector("#menu");
        menuElement.remove();

    } else {
        cssLinkElement.href = "/css/landing-page-combined-menu-down.css";

        const headerElement = document.querySelector("#header");
        menuElement = document.createElement("div");
        menuElement.id = "menu";
        menuElement.className = "box";
        const menuListElement
        
        for(let i = 0; i < allHeaders.length; i++){
            menuElement.innerHTML = "<ul>"
        }

        `<div id="menu" class="box">
        MENU
        </div>`;
        headerElement.insertAdjacentHTML("afterend", menuElement);

    }

}

/* Scan all headers to prepare for menu click */
const sectionList = document.querySelectorAll(".section");

/* Wait for click on menu */
navBarElement.addEventListener('click', menuToggle);
