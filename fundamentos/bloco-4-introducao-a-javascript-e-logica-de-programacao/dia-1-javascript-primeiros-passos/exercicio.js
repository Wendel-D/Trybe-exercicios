let a = 1;
let b = 2;
let c = 3;

// EXERCICIO 1

const sum = a + b;

const sub = a - b;

const mult = a * b;

const div = a / b;

const mod = a % b;

// EXERCICIO 2

if (a > b) {
    console.log(a);
}else{
    console.log(b);
}
// EXERCICIO 3

if (a > b && a > c) {
    console.log(a);
}else if (b > a && b > c){
    console.log(b);
}else{
    console.log(c);
}

// EXERCICIO 4

if (a === 0) {
    console.log("zero");
}else if (a > 0) {
    console.log("positive");
}else {
    console.log("negative");
}

// EXERCICIO 5

let ang1 = -100;
let ang2 = -80;
let ang3 = 0;

if (ang1 + ang2 + ang3 === 180) {
    console.log(true);
}else if (ang1 + ang2 + ang3 < 0) {
    console.log(false);
}
else {
    console.log(false);
}

// EXERCICIO 6

function peca(param) {
    if (param.toLowerCase() === "peão") {
        return "movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal.\n" +
         "Ao contrário das outras peças, o peão não pode mover-se para trás.";
    }else if (param.toLowerCase() === "torre") {
        return "movimenta-se em direção reta pelas colunas ou fileiras."
    }else if (param.toLowerCase() === "cavalo") {
        return "movimenta-se sempre em 'L',ou seja,duas casas para frente e uma para a esquerda ou direita.\n" +
        "O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias."
    }else if (param.toLowerCase() === "bispo") {
        return "Movimenta-se em diagonal"
    }else if (param.toLowerCase() === "dama"  || param.toLowerCase() === "rainha") {
        return "É a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo,\n" +
        "ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor."
    }else if (param.toLowerCase() === "rei"){
        return "move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance."
    }
}

console.log(peca("Rainha"));

// EXERCICIO 7

function nota(porcentagem) {
    if (porcentagem > 100 || porcentagem < 0) {
        return "Nota incorreta";
    }else if (porcentagem < 50) {
        return "F";
    }else if (porcentagem >= 90) {
        return "A";
    }else if (porcentagem >= 80) {
        return "B";
    }else if (porcentagem >= 70) {
        return "C";
    }else if (porcentagem >= 60) {
        return "D";
    }else if (porcentagem >= 50) {
        return "E"
    }
}

console.log(nota(50));

// EXERCICIO 8

const n1 = 5;
const n2 = 2;
const n3 = 9;

if (n1  % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    console.log(true);;
}else {
    console.log(false);;
}

// EXERCICIO 9

const n4 = 4;
const n5 = 5;
const n6 = 6;

if (n4  % 2 === 1 || n5 % 2 === 1 || n6 % 2 === 1) {
    console.log(true);
}else {
    console.log(false);
}

// EXERCICIO 10

const valueP = 80;
const valueV = 100;
if (valueP < 0 || valueV < 0) {
    console.log('valor incorreto');
}else{
let produtoImposto = valueP * 1.20;
let lucro = (valueV - produtoImposto) * 1000;
console.log(lucro);
}

//EXERCICIO 11

const salario = 1500;

const aliquiotaInss1 = 0.08;
const aliquiotaInss2 = 0.09;
const aliquiotaInss3 = 0.11;
const aliquiotaInss4 = 570.88;

const aliquiotaIR1 = 0.075;
const aliquiotaIR2 = 0.15;
const aliquiotaIR3 = 0.225;
const aliquiotaIR4 = 0.275;

const calcSalarioLiquido = (salario) => {
    let descontoInss;
    let valorIR;
    if (salario <= 1556.94) {
        descontoInss = salario * aliquiotaInss1;
    } else if (salario <= 2594.92) {
        descontoInss = salario * aliquiotaInss2;
    } else if (salario <= 5189.82) {
        descontoInss = salario * aliquiotaInss3;
    } else if (salario > 5189.92) {
        descontoInss = aliquiotaInss4;
    }
    let salarioBase = salario - descontoInss;
    if (salarioBase <= 1903.98) {
        valorIR = 0;
    }else if (salarioBase <= 2826.65) {
        valorIR = (salarioBase * aliquiotaIR1) - 142.80;
    } else if (salarioBase <= 3751.05) {
        valorIR = (salarioBase * aliquiotaIR2) - 354.80;
    } else if (salarioBase <= 4664.68) {
        valorIR = (salarioBase * aliquiotaIR3) - 636.13;
    } else if (salarioBase > 4664.68) {
        valorIR = (salarioBase * aliquiotaIR4) - 869.36;
    }
    let salarioLiquido = salarioBase - valorIR;
    return salarioLiquido;
}
console.log(calcSalarioLiquido(salario));