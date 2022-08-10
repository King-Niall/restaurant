import img from './rest.jpg';

export default function pageLoad() {
    const header = document.createElement("h1");
    const image = document.createElement("img");
    const para = document.createElement("p");

    header.innerHTML = "Au Contraire de la Restaurant";
    image.src = img;
    image.classList.add("rest-image");
    para.innerHTML = "A beautiful restaurant for the most classy individual!";
    
    
    content.append(header);
    content.append(image);
    content.append(para);

}
