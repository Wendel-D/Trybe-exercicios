const fs = require('fs').promises;
const path = require('path');

async function readMoviesData() {
    try {
        const data = await fs.readFile(path.resolve(__dirname, '../../data/movies.json'));
        const movies = JSON.parse(data)
        console.log(movies);
        return movies;
    } catch (error) {
        console.error(`erro na leitura do arquivo ${error}`);
    }
}

readMoviesData();

module.exports = {
    readMoviesData,
};