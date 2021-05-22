const mysql = require('mysql');

const conexion = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'futbol'
});

conexion.connect((error)=>{
    if(error){
        console.error('Error de conexion: '+error);
        return;
    }
    console.log('Conexion exitosa');
});

module.exports = conexion;