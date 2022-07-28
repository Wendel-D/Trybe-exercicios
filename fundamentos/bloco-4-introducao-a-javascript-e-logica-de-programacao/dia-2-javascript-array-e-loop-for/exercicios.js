let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

//EXERCICIO 1

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// EXERCICIO 2

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}console.log(sum);

//EXERCICIO 3

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}   let media = sum / numbers.length

console.log(media);

// EXERCICIO 4

if (media > 20) {
    console.log('valor maior que 20');
}else {
    console.log('valor menor ou igual a 20');
}

// EXERCICIO 5 

let maiorNumero = 0;
for (let i = 0; i < numbers.length; i++) {
    if (maiorNumero < numbers[i]) {
        maiorNumero = numbers[i];
    }
}
console.log(maiorNumero);

