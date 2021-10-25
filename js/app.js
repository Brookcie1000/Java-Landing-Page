/* Create seperate working document to compile sections together */
const docFrag = document.createDocumentFragment();

/* Scan all section headers to prepare for menu click */
const sectionList = document.querySelectorAll(".section h1");

/* Set active state function */
const setActiveStateOnClick = (num) => {
    if (document.querySelector(".active")) {
        document.querySelector(".active").classList.remove("active");
        setActiveStateOnClick(num);

    } else {
        const activeDiv = document.getElementById(`section-${num}`);
        const activeButton = document.getElementById(`button-${num}`)
        activeDiv.classList.add("active");
        activeButton.classList.add("active-menu");

    }
    

}

/* Set active on Scroll */
const setActiveStateOnScroll = () => {
    let activeDiv = document.getElementsByClassName("section active")[0];
    let activeDivPreSibling = activeDiv.previousElementSibling;
    let activeDivNxtSibling = activeDiv.nextElementSibling;
    if (activeDivNxtSibling !== null && activeDivNxtSibling.getBoundingClientRect().top < window.screen.height) {
        activeDiv = activeDivNxtSibling;
        if (document.querySelector(".active-menu") !== null){
            document.querySelector(".active-menu").classList.remove("active-menu");

        }
        document.getElementsByClassName("section active")[0].classList.remove("active");
        activeDiv.classList.add("active");
            
    } else if (activeDivPreSibling !== null && activeDivPreSibling.getBoundingClientRect().bottom > 0) {
        activeDiv = activeDivPreSibling;
        if (document.querySelector(".active-menu") !== null){
            document.querySelector(".active-menu").classList.remove("active");

        }
        document.getElementsByClassName("section active")[0].classList.remove("active-menu");
        activeDiv.classList.add("active");

    }

}

/* Scroll into view function */
const scrollToSection = (num) => {
    const idToScollTo = document.getElementById(`section-${num}`);
    idToScollTo.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'

    });
    
}

/* Create list items of the sections */
for(let i = 0; i < sectionList.length; i++) {
    const listItemElement = document.createElement("li");
    const listItemElementText = document.createElement("button");
    listItemElementText.id = `button-${(i+1)}`
    listItemElementText.setAttribute("onclick",`scrollToSection(${(i+1)}); setActiveStateOnClick(${(i+1)})`);
    listItemElementText.innerText = sectionList[i].innerText;
    listItemElement.appendChild(listItemElementText);
    docFrag.appendChild(listItemElement);

}

/* Create the ready menu div item */
let menuElement = document.createElement("div");
menuElement.id = "menu";
menuElement.className = "box";
const menuElementList = document.createElement("ul");
menuElementList.appendChild(docFrag);
menuElement.appendChild(menuElementList);

const menuToggle = () => {
    let cssLinkElement = document.querySelector("link");

    if (document.querySelector("#menu")) {
        menuElement = document.querySelector("#menu");
        menuElement.remove();

    } else {
        const headerElement = document.querySelector("#header");
        headerElement.insertAdjacentElement("afterend", menuElement);

    }

}

/* Assign nav-bar element on page */
const navBarElement = document.querySelector("#nav-bar");

/* Wait for click on menu */
navBarElement.addEventListener('click', menuToggle);

/* Wait for scolling to change active section */
document.addEventListener("scroll", setActiveStateOnScroll);
