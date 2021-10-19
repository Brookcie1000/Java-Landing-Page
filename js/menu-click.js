/* Create seperate working document to compile sections together */
const docFrag = document.createDocumentFragment();

/* Scan all section headers to prepare for menu click */
const sectionList = document.querySelectorAll(".section h1");

for(let i = 0; i < sectionList.length; i++) {
    const listItemElement = document.createElement("li");
    listItemElement.innerText = sectionList[i].innerText;
    docFrag.appendChild(listItemElement);
    console.log(docFrag);

}

/* Finalise the ready menu div item */
let menuElement = document.createElement("div");
menuElement.id = "menu";
menuElement.className = "box";
const menuElementList = document.createElement("ul");
menuElementList.appendChild(docFrag);
menuElement.appendChild(menuElementList);

const menuToggle = () => {
    let cssLinkElement = document.querySelector("link");

    if (cssLinkElement.href === "http://localhost:3000/css/landing-page-combined-menu-down.css") {
        cssLinkElement.href = "/css/landing-page-combined.css";
        menuElement = document.querySelector("#menu");
        menuElement.remove();

    } else {
        cssLinkElement.href = "/css/landing-page-combined-menu-down.css";

        const headerElement = document.querySelector("#header");
        headerElement.insertAdjacentElement("afterend", menuElement);

    }

}

/* Assign nav-bar element on page */
const navBarElement = document.querySelector("#nav-bar");

/* Wait for click on menu */
navBarElement.addEventListener('click', menuToggle);
