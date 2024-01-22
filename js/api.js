const gatosDiv = $('#gatos')

function obterGato() {
    fetch("https://cataas.com/cat")
    .then(resultado=> resultado.blob())
    .then(blob => {
        console.log(blob)
        const imageObjetctUrl = URL.createObjectURL(blob)

        const image= document.createElement('img')
        image.src= imageObjetctUrl
        gatosDiv.append(image)
    })
    .catch(error => console.log("Erro ao executar API ",error))
    
}

