var btnUno = document.querySelector("#btnUno")
var btnDos = document.querySelector("#btnDos")

// B O T O N    D O S
btnDos.addEventListener("click", () => {
    for (let i = 0; i <= 100; i = i + 5) {
        console.log(i)
    }
})

// B O T O N     U N O 
btnUno.addEventListener("click", () => {
    for (let i = 1; i < 10; i++) {
        console.log(i)

        /* "i++" es lo mismo que i = i + 1 pero abreviado*/
    }
})
