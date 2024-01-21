const divs = $("div");
console.log(divs)
const h2s = $("h2")
console.log(h2s)
const titulo = $("#titulo")
console.log(titulo)
const paragrafo = $('#paragrafo')
console.log(paragrafo)
const elementsMarginTop2 = $(".mt-02")
console.log(elementsMarginTop2)



const input = $("#input")
console.log(input)

function alterarHtml() {
    titulo.text(input.val()) 
    //titulo.textContent= "Novo Titulosssssssss"
    titulo.css('color','ac4389')

    for(let element of elementsMarginTop2)
    {
        $(element).addClass('mt-4') 

    }
    input.val("")

    const novoP = document.createElement('p')
    novoP.textContent = "elemento criato com js"
    paragrafo.after(novoP)
}

