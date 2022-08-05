//1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// const { it } = require("node:test");

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// //RESPOSTA = A - B - C

// //2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// const planetDistanceFromSun2 = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars2 = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus2 = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter2 = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun2(mars2)); // A
// setTimeout(() => console.log(planetDistanceFromSun2(venus2)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun2(jupiter2)), 2000); // C

// //RESPOSTA = A - C - B 

// //3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => console.log("Returned planet: ", mars), 4000);
// };

// getPlanet(); // imprime Marte depois de 4 segundos

// //4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = (callback) => {
//     setTimeout(() => console.log(getMarsTemperature()), messageDelay())
// };

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// //5 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura.

// const messageDelay2 = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature2 = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature2 = (callback) => {
//     const temperaturaAtual = getMarsTemperature2();
//     setTimeout(() => callback(temperaturaAtual), messageDelay2())
// }

// sendMarsTemperature2(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature2(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// //6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

// const messageDelay3 = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature3 = () => {
//     const maxTemperature = 58;
//     return Math.floor(Math.random() * maxTemperature);
//   }
  
//   const toFahrenheit3 = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
  
//   const temperatureInFahrenheit3 = (temperature) =>
//     console.log(`It is currently ${toFahrenheit3(temperature)}ºF at Mars`);
  
//   const greet3 = (temperature) =>
//     console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
  
//   const handleError = (errorReason) =>
//     console.log(`Error getting temperature: ${errorReason}`);
  
//   // definição da função sendMarsTemperature...
//   const sendMarsTemperature3 = (callback, error) => {
//     const temperaturaAtual = getMarsTemperature3();
//     setTimeout(() => {
//         if (Math.random() * 10 <= 6) {
//         return callback(temperaturaAtual);
//     } else {
//         return error('Robot is busy');
//     }
//     }, messageDelay3());
//   }
//   // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
//   sendMarsTemperature3(temperatureInFahrenheit3, handleError);
  
//   // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
//   sendMarsTemperature3(greet3, handleError);

  //7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

  const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  // it('uppercase "test" to equal "TEST"', (done) => {
  //   uppercase('test', (str) => {
  //     try {
  //       expect(str).toBe('TEST');
  //       done();
  //     } catch (error) {
  //       done(error);
  //     }
  //   });
  // });


  //8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokemon!
//No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle.
//Complete a função handlePokemonSearch de modo que:
//Ao chamar a função getPokemonDetails com um pokémon existente, imprime no console a mensagem com os detalhes deste pokémon.
//Ao chamar a função getPokemonDetails com um pokémon não existente, imprime no console o erro.

// const pokemons = [
//   {
//     name: 'Bulbasaur',
//     type: 'Grama',
//     ability: 'Raio Solar',
//   },
//   {
//     name: 'Charmander',
//     type: 'Fogo',
//     ability: 'Lança Chamas',
//   },
//   {
//     name: 'Squirtle',
//     type: 'Água',
//     ability: 'Jato de Água',
//   },
// ];

// function getPokemonDetails(selectedPokemon, callback) {
//   const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

//   setTimeout(() => {
//     if (foundPokemon === undefined) {
//       return callback(new Error('Não temos esse pokémon para você :('), null);
//     }

//     const { name, type, ability } = foundPokemon;

//     const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

//     callback(null, messageFromProfOak);
//   }, 2000);
// }

// const handlePokemonSearch = (error, message) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(message);
//   }
// };

// getPokemonDetails('Squirtle', handlePokemonSearch);

// //9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.



// //10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// //resposta = 
// // a impressão no console será a seguinte:

// // 1 - beforeEach
// // 1 - test
// // 1 - afterEach
// // 2 - beforeEach
// // 2 - test
// // 2 - afterEach

// resposta correta
// 1 - beforeEach // antes de cada teste
// 1 - test // o teste
// 1 - afterEach // depois de cada teste
// 1 - beforeEach // antes de cada teste
// 2 - beforeEach // antes de cada teste dentro do describe
// 2 - test // o teste dentro do describe
// 2 - afterEach // depois de cada teste dentro do describe
// 1 - afterEach // depois de cada teste

module.exports = (uppercase/*, getPokemonDetails*/);