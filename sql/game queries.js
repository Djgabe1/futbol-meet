exports.listGames = () =>{
    return 'SELECT * FROM games'
};

exports.gameById = (id) =>{
    return `SELECT * FROM games WHERE id= '${id}'`
};

exports.gameCreate = (game) =>{
    return `INSERT INTO games (Place, Address, Mode, Players, DataTime) VALUES('${game.Place}', '${game.Address}', '${game.Mode}', '${game.Players}', '${game.DataTime}')`
};

exports.editGames = (game, id)=>{
    return `UPDATE games SET Place='${game.Place}', Address='${game.Address}', Mode='${game.Mode}', Players='${game.Players}', DataTime='${game.DataTime}' WHERE id='${id}'`
};

exports.gameDelete = (id) =>{
    return`DELETE FROM games WHERE id='${id}'`
};