//Hamburger menu function
function hamburger() {
    ver menu =document.getElementById("menu-links");
    if(menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        
    } else {
        menu.style.display = "block";
    }
}