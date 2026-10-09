const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  level: { type: Number, required: true, min: 1, max: 100 },
  nature: { type: String, required: true }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

app.get('/', (req, res) => {
  res.send('Pokemon server is running!');
});

app.get('/api/pokemon', async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve Pokemon.' });
  }
});

app.post('/api/pokemon', async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    const savedPokemon = await pokemon.save();
    res.status(201).json(savedPokemon);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to save Pokemon.' });
  }
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(PORT, () => {
      console.log('Server running at http://localhost:' + PORT);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });