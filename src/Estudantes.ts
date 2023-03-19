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

  get matricula() { return this._matrícula }
  get nome() { return this._nome }
  get notaMatematica() { return this._notaMatematica }
  get notaPortugues() { return this._notaPortugues }
  get notaGeografia() { return this._notaGeografia }
  get notaIngles() { return this._notaIngles }
  get trabMatematica() { return this._trabMatematica }
  get trabPortugues() { return this._trabPortugues }


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
    return soma;
  }

  avg() {
    const soma = this._notaGeografia + this._notaIngles + this._notaMatematica + this._notaPortugues + this._trabMatematica + this._trabPortugues;
    return (soma / 6)
  }

}