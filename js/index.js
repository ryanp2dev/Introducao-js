const olaMundo = "Ola mundo, Introdução a js"
console.log(olaMundo)

console.log("Inicio");
console.log(`Data da gravação da aula ${new Date()}`);
console.log("fim");

function mensagem1() {
    alert(texto)
};

function mensagem(mensagem){
    prompt(mensagem)
}

function mensagemFinal(mensagem) {
    console.log(mensagem)
}

const texto = mensagem();


const verdadeiro  = true
const naoVerdadeiro = !verdadeiro

const tudo = verdadeiro || naoVerdadeiro 

mensagemFinal("Verdadeiro ", verdadeiro)
mensagemFinal(`Nao verdadeiro`,naoVerdadeiro)
mensagemFinal("ffds",tudo)
