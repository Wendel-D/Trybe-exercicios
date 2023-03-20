class Data {
    private _dia: number;
    private _mes: string | number;
    private _ano: number;

    constructor(dia: number, mes: string | number, ano: number) {
        const dateStr = `${ano}-${mes}-${dia}`

        if (new Date(dateStr).getDate() !== dia) {
            this._dia = 1;
            this._mes = 1;
            this._ano = 1900;
        } else {
            this._dia = dia;
            this._mes = mes;
            this._ano = ano;
        }
    }

    get dia() { return this._dia }
    get mes() { return this._mes }
    get ano() { return this._ano }

    set dia(dia: number) { this._dia = dia }
    set mes(mes: string | number) { this._mes = mes }
    set ano(ano: number) { this._ano = ano }
}

