export class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf
    }

    get nome(){
        return this.nome
    }

    set nome(novoNome){
        this.nome = novoNome
    }


    constructor(nome,cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
    
}