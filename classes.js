class Usuario {
    constructor (login,senha){
        this.login = login;
        this.senha = senha;
    }

    // comportamento

    validarLogin(){
        return this.login.toString().includes('@') && 
        this.login.toString().includes('.')
        ? 'login valido':
            'login invalido';
        
        
        
    }
}


const usuario01 = new Usuario('Ryabtrabalho2@gmail.com',12334)
console.log(usuario01.login,usuario01.validarLogin(),usuario01.senha)    

class Adiminstrador extends Usuario {
    constructor(login,senha, resumoProfissional){
        super(login,senha);
        this.resumoProfissional = resumoProfissional;
    }
}



const adiminstrador = new Adiminstrador("adminstrador@gmail.com","djebfjebdj","fsfgdshjfgdjhs")

console.log(adiminstrador.login,adiminstrador.validarLogin())
console.log(adiminstrador.senha)
console.log(usuario01.resumoProfissional)