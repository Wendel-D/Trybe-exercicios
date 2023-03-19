class Estudantes {
  private _matrícula: number;
  private _nome: string;
  private _notaMatematica: number;
  private _notaPortugues: number;
  private _notaGeografia: number;
  private _notaIngles: number;
  private _trabMatematica: number;
  private _trabPortugues: number;

  constructor(
    matricula: number,
    nome: string,
    notaMatematica: number,
    notaPortugues: number,
    notaGeografia: number,
    notaIngles: number,
    trabMatematica: number,
    trabPortugues: number,
  ) {
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
    return this._matrícula
  }
  get nome() {
    console.log(this._nome);
    return this._nome
  }
  get notaMatematica() {
    console.log(this._notaMatematica);

    return this._notaMatematica
  }
  get notaPortugues() {
    console.log(this._notaPortugues);

    return this._notaPortugues
  }
  get notaGeografia() {
    console.log(this._notaGeografia);

    return this._notaGeografia
  }
  get notaIngles() {

    console.log(this._notaIngles);
    return this._notaIngles
  }
  get trabMatematica() {
    console.log(this._trabMatematica);
    return this._trabMatematica
  }
  get trabPortugues() {
    console.log(this._trabPortugues);
    return this._trabPortugues
  }


  set matricula(matricula: number) {
    this._matrícula = matricula;
  }
  set nome(nome: string) {
    this._nome = nome;
  }
  set notaMatematica(notaMatematica: number) {
    this._notaMatematica = notaMatematica;
  }
  set notaPortugues(notaPortugues: number) {
    this._notaPortugues = notaPortugues;
  }
  set notaGeografia(notaGeografia: number) {
    this._notaGeografia = notaGeografia;
  }
  set notaIngles(notaIngles: number) {
    this._notaIngles = notaIngles;
  }
  set trabMatematica(trabMatematica: number) {
    this._trabMatematica = trabMatematica;
  }
  set trabPortugues(trabPortugues: number) {
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

const wendel = new Estudantes(1, 'Wendel', 10, 9, 3, 4, 5, 10);

wendel.avg()
wendel.sum()
wendel.matricula
wendel.nome
wendel.notaMatematica
