const divs = document.getElementsByTagName("div");
console.log(divs)
const h2s = document.getElementsByTagName("h2")
console.log(h2s)
const titulo = document.getElementById("titulo")
console.log(titulo)
const paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)
const elementsMarginTop2 = document.getElementsByClassName("mt-02")
console.log(elementsMarginTop2)



const input = document.getElementById("input")
console.log(input)

function alterarHtml() {
    titulo.textContent = input.value
    //titulo.textContent= "Novo Titulosssssssss"
    titulo.style.color="ac4389"

    for(let element of elementsMarginTop2)
    {
        element.className = 'mt-4'

    }
    input.value = ''

    const novoP = document.createElement('p')
    novoP.textContent = "elemento criato com js"
    paragrafo.parentNode.appendChild(novoP)
}

