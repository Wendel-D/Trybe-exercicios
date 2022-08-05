  //7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
  const { uppercase } = require('./exercicios');

  it('uppercase "test" to equal "TEST"', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  //EXERCICIO 9
  
  // Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require('./exercicios');

// describe('A função getPokemonDetails', () => {
//   it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
//     getPokemonDetails()
//   });

//   it('retorna um pokémon que existe no banco de dados', () => {
//     // Escreva aqui seu código
//   });
// });