class Cliente {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    get nome() {
        console.log(this._nome);
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome;
    }
}

class Pedido {
    private _cliente: Cliente;
    private _consumidos: Item[];
    private _pagamento: string;
    private _desconto = 0;

    constructor(cliente: Cliente, consumidos: Item[], pagamento: string) {
        this._cliente = cliente;
        this._consumidos = consumidos;
        this._pagamento = pagamento;
    }

    get cliente() {
        console.log(this._cliente);
        return this._cliente
    }
    get consumidos() {
        console.log(this._consumidos);
        return this._consumidos;
    }
    get pagamento() {
        console.log(this._pagamento);
        return this._pagamento
    }
    get desconto() {
        console.log(this._desconto);
        return this._desconto;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }
    set consumidos(consumidos: Item[]) {
        this._consumidos = consumidos;
    }
    set pagamento(pagamento: string) {
        this._pagamento = pagamento;
    }
    set desconto(desconto: number) {
        this._desconto = desconto;
    }
}

class Item {
    private _nome: string;
    private _preco: number;

    constructor(nome: string, preco: number) {
        this._nome = nome;
        this._preco = preco;
    }

    get nome() {
        console.log(this._nome);
        return this._nome
    }
    get preco() {
        console.log(this._preco);
        return this._preco;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    set preco(preco:number) {
        this._preco = preco;
    }
}