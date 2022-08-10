import pageLoad from "./pageLoad";
import menuLoad from './menuLoad.js'

export default function navLoad() {
    const buttons = ["Home", "Menu", "Support"];
    const content = document.getElementById("content");
    const nav = document.createElement("nav");
    nav.id = "nav";
    nav.classList.add("nav");

    const navItems = 
        [document.createElement("div"),
        document.createElement("div"), 
        document.createElement("div")];
    
    navItems.forEach(element => {
        element.classList.add("nav-item");
        nav.append(element);
    });

    const navHeaders = 
        [document.createElement("h1"),
        document.createElement("h1"),
        document.createElement("h1")];

    for (let index = 0; index < 3; index++) {
        navItems[index].id = buttons[index];
        navItems[index].append(navHeaders[index]);
        navHeaders[index].innerHTML = buttons[index];   
    }

    navItems[0].onclick = () => {
        content.innerHTML = "";
        navLoad();
        pageLoad();
    }

    navItems[1].onclick = () => {
        content.innerHTML = "";
        navLoad();
        menuLoad();
    }
    
    content.append(nav);
}