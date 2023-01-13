const express = require('express');
const { readMoviesData, writeMoviesData, updateMovieData, deleteMovieData } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

async function main () {
    const movies = await readMoviesData();
    return movies
}

app.get('/movies', async (req, res) => {
    const filmes = await main();
    return res.status(200).json({ filmes })
});

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const filmes = await main();
    const filmeById = filmes.find((e) => e.id === Number(id))
    return res.status(200).json({ filmeById });
})

app.post('/movies', async (req, res) => {
    const novoFilme = {...req.body};
    console.log(novoFilme);
    const filmes = await writeMoviesData(novoFilme)
    return res.status(201).json(filmes);
});

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const updateMovieDatas = req.body;
    const movie = await updateMovieData(Number(id), updateMovieDatas);
    return  res.status(201).json({ movie: movie });
})

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;
    await deleteMovieData(Number(id))

    return res.status(204).end();
})

module.exports = app;