const express = require('express');
const router = express.Router();

const {getGames, getById, createGames, updateGame, deleteGame} = require('../controllers/gamesController');


router.get('/', getGames );
router.get('/:gamesId', getById);
router.post('/create', createGames);
router.post('/update/:gamesId', updateGame);
router.delete('/delete/:gamesId', deleteGame);

module.exports = router;
