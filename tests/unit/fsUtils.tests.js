const { expect } = require('chai');

const { readMoviesData } = require('../../src/utils/fsUtils')

describe('função readMoviesData', () => {
    it('retorna um array', async () => {
        const movies = await readMoviesData();
        expect(movies).to.be.instanceOf(Array);
    })
});