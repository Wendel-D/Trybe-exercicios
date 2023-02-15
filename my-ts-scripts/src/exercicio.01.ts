//Exercício 1
//Temos uma API que começou a ter diversos erros e apresentar bugs frequentes. Como solução, o CTO do time, avaliou que utilizar o Typescript em suas funções, diminuiria um pouco desses problemas.

//Para isso você foi direcionado a modificar as funções abaixo, escritas em Javascript, para que fossem tipadas e executassem sem erros no compilador de Typescript:

//Observação: Não é necessário alterar o valor dos parâmetros passados.

// Dica: utilize o Typescript playground para testar o comportamento de cada função.


const numberInput: number = 7;

const isItAPrime = (param: number) => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

//---------------------------------------------------------------------------//


const emailInput: string = 'email@email.com';

const validateEmailFormat = (param: string): boolean => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))

//---------------------------------------------------------------------------//

const numberList: number[] = [10, 5, 18, 2, 8, 23];

const sortInput = (param:number[]):number[] => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

//---------------------------------------------------------------------------//

type obj = {
    name: string,
    age: number,
}

const peopleInput: obj = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param: obj): string => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

//---------------------------------------------------------------------------//

const ageInput: number = 15;

const isOfLegalAge = (param: number | boolean | string): boolean => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));

//---------------------------------------------------------------------------//

