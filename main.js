let pelement = document.getElementById("p2")

console.log(pelement)

let pelement2 = document.querySelector(".myClass")

console.log(pelement2)

let pelement3 = document.querySelectorAll(".myClass")

console.log(pelement3)

let arrayInputs = document.querySelectorAll("input")

for ( let i = 0; i < arrayInputs.length; i++ ){

    arrayInputs[i].style.display = "block"
    arrayInputs[i].style.marginBottom ="20px"
}