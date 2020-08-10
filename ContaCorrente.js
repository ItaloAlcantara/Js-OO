export class ContaCorrente{
    agencia;
    _cliente;

    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente)
            this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente
    }
    sacar(valor){
        if(valor >0 && valor<=this._saldo)
            return this._saldo -= valor;

    }

    depositar(valor){
        if(valor > 0)
            return this._saldo =+ valor;
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
