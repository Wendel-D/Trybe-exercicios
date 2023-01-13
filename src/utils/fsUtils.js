const fs = require('fs').promises;
const path = require('path');

async function readMoviesData() {
    try {
        const data = await fs.readFile(path.resolve(__dirname, '../../data/movies.json'));
        const movies = JSON.parse(data)
        return movies;
    } catch (error) {
        console.error(`erro na leitura do arquivo ${error}`);
    }
}

async function writeMoviesData(newMovie) {
    try {
        const oldMovies = await readMoviesData();
        newMovieWithId = {id: Date.now() , ...newMovie}
        const allMovies = JSON.stringify([...oldMovies, newMovieWithId])
        await fs.writeFile(path.resolve(__dirname, '../../data/movies.json'), allMovies)
        return newMovieWithId;
    } catch (error) {
        console.error(`erro na escrita do arquivo ${error}`);
    }
}

async function updateMovieData(id, updateMovieData) {
    try {
        const oldMovie = await readMoviesData();
        const updatedMovie = {id, ...updateMovieData};
    
        const newMovie = oldMovie.reduce((movieList, currentMovie) => {
            if (currentMovie.id === updatedMovie.id) return [...movieList, updatedMovie];
            return [...movieList, currentMovie]
        }, []);
    
        const updateData = JSON.stringify(newMovie)
        await fs.writeFile(path.resolve(__dirname, '../../data/movies.json'),updateData)
        return updateData;
        
    } catch (error) {
        console.error(`erro na escrita do arquivo ${error}`);
    }
}

async function deleteMovieData(id) {
    const oldMovie = await readMoviesData();
    const deletedMovie = oldMovie.filter((e) => e.id !== id);
    const updateData = JSON.stringify(deletedMovie)
    try {
        await fs.writeFile(path.resolve(__dirname, '../../data/movies.json'),updateData)
        console.log(`deletou a missão com o id: ${id}`);
    } catch (error) {
        console.error(`erro no delete do arquivo ${error}`);
    }
}

module.exports = {
    readMoviesData,
    writeMoviesData,
    updateMovieData,
    deleteMovieData
};