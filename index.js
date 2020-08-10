import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const client1 = new Cliente();
const client2 = new Cliente();
const client3 = new Cliente();

const conta1 = new ContaCorrente("italo",154456468);
const conta2 = new ContaCorrente("Maria",123);
const conta3 = new ContaCorrente("Italo",789456123);

conta1.agencia = '0001'
conta1.cliente = [client1];

conta2.agencia = "0002"
conta2.cliente = client3

conta1.depositar(1500)
conta2.depositar(0)


conta1.transferir(500,conta2)



console.log(conta1)
console.log(conta2)
console.log(conta3)