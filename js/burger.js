const button = document.querySelector(".menuLine");

const element = document.querySelector(".menuLine")
let color = window.getComputedStyle(element).visibility;

button.onclick = function () {
const element = document.getElementsByClassName('menuSublist')[0]

    element.style.visibility =  element.style.visibility === 'visible' ? 'hidden' : 'visible'
    
}

//const link = document.querySelector(".menuLine");

//link.onclick = function () {
//   document.getElementsByClassName('menuSublist')[0].style.visibility = "hidden";
// }