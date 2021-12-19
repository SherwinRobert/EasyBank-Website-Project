document.querySelector(".menu-button").addEventListener("click",clicker)

function clicker(){
    console.log("button is pressed")
    document.querySelector(".floating-menu").classList.toggle("translator")
}