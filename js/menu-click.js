const navBarElement = document.querySelector("#nav-bar");

const menuToggle = () => {
    let cssLinkElement = document.querySelector("link");

    if (cssLinkElement.href === "http://localhost:3000/css/landing-page-combined-menu-down.css") {
        cssLinkElement.href = "/css/landing-page-combined.css";
        const menuElement = document.querySelector("#menu");
        menuElement.remove();

    } else {
        cssLinkElement.href = "/css/landing-page-combined-menu-down.css";

        const headerElement = document.querySelector("#header");
        const menuElement =
        `<div id="menu" class="box">
        MENU
        </div>`;
        headerElement.insertAdjacentHTML("afterend", menuElement);

    }

}

navBarElement.addEventListener('click', menuToggle);