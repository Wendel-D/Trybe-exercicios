"use strict";
class Cliente {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        console.log(this._nome);
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
class Pedido {
    constructor(cliente, consumidos, pagamento) {
        this._consumidos = [];
        this._desconto = 0;
        this._cliente = cliente;
        this._consumidos = consumidos;
        this._pagamento = pagamento;
    }
    get cliente() {
        console.log(this._cliente);
        return this._cliente;
    }
    get consumidos() {
        console.log(this._consumidos);
        return this._consumidos;
    }
    get pagamento() {
        console.log(this._pagamento);
        return this._pagamento;
    }
    get desconto() {
        console.log(this._desconto);
        return this._desconto;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    set consumidos(consumidos) {
        this._consumidos = consumidos;
    }
    set pagamento(pagamento) {
        this._pagamento = pagamento;
    }
    set desconto(desconto) {
        this._desconto = desconto;
    }
    total() {
        return this.consumidos
            .reduce((previousValue, item) => {
            const sum = previousValue + item.preco;
            return sum;
        }, 0);
    }
    descontado() {
        return this.total() * (1 - this.desconto);
    }
}
class Item {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }
    get nome() {
        console.log(this._nome);
        return this._nome;
    }
    get preco() {
        console.log(this._preco);
        return this._preco;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set preco(preco) {
        this._preco = preco;
    }
}
