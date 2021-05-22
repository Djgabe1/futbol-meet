
const conexion = require('../sql/database');
const sql = require('../sql/game queries')

exports.getGames = async (req, res)=>{
    try {
        conexion.query(sql.listGames(), (error, response)=>{
            if(error) throw console.error(error);
            if(response.length){
                res.json(response); 
            }
        })
    } catch (error) {
        return res.json(error);
    }
}

exports.getById = async  (req, res)=>{
    let id = req.params.gamesId
    try {
        conexion.query(sql.gameById(id), (error, response)=>{
            if(error) throw console.error(error);
            if(response.length){
                res.json(response); 
            }
        })

    } catch (error) {
        return res.json(error);
    }
}

exports.createGames = async =(req, res)=>{
    let game = req.body;

    try {
        conexion.query(sql.gameCreate(game), (error, response)=>{
            if(error) throw console.error(error);
            if(response){
                res.json({message: 'Game Save'}); 
            }
        } )
    } catch (error) {
        return res.json(error);
    }
};

exports.updateGame = async = (req, res)=>{
    let id = req.params.gamesId;
    let game = req.body;
    try {
        conexion.query(sql.editGames(game, id), (error, response)=>{
            if(error) throw console.error(error);
            if(response){
                res.json({message: 'Game Update'}); 
            }
        } )
    } catch (error) {
        return res.json(error);
    }
}

exports.deleteGame = async = (req, res)=>{
    let id = req.params.gamesId;
    try {
        conexion.query(sql.gameDelete(id), (error, response)=>{
            if(error) throw console.error(error);
            if (response) {
                res.json({message: 'Games Delete'});
            }
        })
    } catch (error) {
        return res.json({message: 'Game Delete'})
    }
}