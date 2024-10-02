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

let tr = document.createElement("tr")

let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")

th1.textContent = "Name"
th2.textContent = "Age"
th3.textContent = "Gender"

tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

let table1 = document.getElementById("table1")

table1.appendChild(tr)