const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertDistance = (valor: number, unity: string, convertion:string):number => {
    const fromIndex = units.indexOf(unity);
    const toIndex = units.indexOf(convertion);
    const exponent = toIndex - fromIndex
    return valor * Math.pow(10, exponent);
}