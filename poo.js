class Pessoa {
    constructor (nome,idade){
        this.nome = nome
        this.idade = idade
    }
}


const pessoa1 = new Pessoa("Ryan",21)
console.log(pessoa1.nome,pessoa1.idade)

const pessoa2 = new Pessoa("Maria",18)
console.log(pessoa2.nome,pessoa2.idade)


class Aluno extends Pessoa {
    constructor (nome,idade,matricula){
        super(nome,idade);
        this.matricula = matricula;
    }
}

const aluno = new Aluno("Ryan pAdilha","25-02-2002","jfkdsjfksdjf")
console.log(aluno.nome,aluno.matricula)
