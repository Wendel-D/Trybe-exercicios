"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudantes = void 0;
class Estudantes {
    constructor(matricula, nome, notaMatematica, notaPortugues, notaGeografia, notaIngles, trabMatematica, trabPortugues) {
        this._matrícula = matricula;
        this._nome = nome;
        this._notaMatematica = notaMatematica;
        this._notaPortugues = notaPortugues;
        this._notaGeografia = notaGeografia;
        this._notaIngles = notaIngles;
        this._trabMatematica = trabMatematica;
        this._trabPortugues = trabPortugues;
    }
    get matricula() {
        console.log(this._matrícula);
        return this._matrícula;
    }
    get nome() {
        console.log(this._nome);
        return this._nome;
    }
    get notaMatematica() {
        console.log(this._notaMatematica);
        return this._notaMatematica;
    }
    get notaPortugues() {
        console.log(this._notaPortugues);
        return this._notaPortugues;
    }
    get notaGeografia() {
        console.log(this._notaGeografia);
        return this._notaGeografia;
    }
    get notaIngles() {
        console.log(this._notaIngles);
        return this._notaIngles;
    }
    get trabMatematica() {
        console.log(this._trabMatematica);
        return this._trabMatematica;
    }
    get trabPortugues() {
        console.log(this._trabPortugues);
        return this._trabPortugues;
    }
    set matricula(matricula) {
        this._matrícula = matricula;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set notaMatematica(notaMatematica) {
        this._notaMatematica = notaMatematica;
    }
    set notaPortugues(notaPortugues) {
        this._notaPortugues = notaPortugues;
    }
    set notaGeografia(notaGeografia) {
        this._notaGeografia = notaGeografia;
    }
    set notaIngles(notaIngles) {
        this._notaIngles = notaIngles;
    }
    set trabMatematica(trabMatematica) {
        this._trabMatematica = trabMatematica;
    }
    set trabPortugues(trabPortugues) {
        this._trabPortugues = trabPortugues;
    }
    sum() {
        const soma = this._notaGeografia + this._notaIngles + this._notaMatematica + this._notaPortugues + this._trabMatematica + this._trabPortugues;
        console.log(soma);
    }
    avg() {
        const soma = this._notaGeografia + this._notaIngles + this._notaMatematica + this._notaPortugues + this._trabMatematica + this._trabPortugues;
        console.log(soma / 6);
    }
}
exports.Estudantes = Estudantes;
