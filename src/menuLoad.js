import chickenImg from './mountainchicken.jpg';
import cowImg from './cow.jpg';
import pineappleImg from './pineapple.jpg';

    export default function menuLoad(){   
        const menu = document.createElement("div");
        const title = document.createElement("h1");
        title.innerHTML = "Menu";
        menu.append(title);
        menu.classList.add("menu");
        menu.append(createMenuItem("Milk", "Milk from the cow, not the actual cow even though there's a picture of a cow to the right. The milk is pasturised to actually make it drinkable so don't worry!", cowImg));
        menu.append(createMenuItem("Mountain Chicken", "Some delicious mountain chicken, a delicious delicacy in it's home country. Don't worry, despite it's appearance it won't make you croak!", chickenImg));
        menu.append(createMenuItem("Pineapple", "Pineapple", pineappleImg));
        content.append(menu);
    }

    function createMenuItem(title, desc, imglink) {
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        let itemTitle = document.createElement("div");
        itemTitle.classList.add("item-title");
    
        let itemHeader = document.createElement("h1");

        itemHeader.innerHTML = title;

        let itemPara = document.createElement("p");
    
        itemPara.innerHTML = desc;

        itemTitle.append(itemHeader);
        itemTitle.append(itemPara);
        menuItem.append(itemTitle);
        
        let image = document.createElement("img");
        image.src =  imglink;
    
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
        imageDiv.append(image);
        menuItem.append(imageDiv);
        return menuItem;
    }