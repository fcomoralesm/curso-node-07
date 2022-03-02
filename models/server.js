const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPAth = '/api/usuarios';

        //MDW
        this.middlewares();

        //rutas
        this.routes();
    }

    middlewares(){
        this.app.use(cors())

        //lectura y parseo
        this.app.use( express.json() );

        this.app.use( express.static('public') )
    }

    routes(){
        
        this.app.use(this.usuariosPAth, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor puerto: '+ this.port)
        })
    }

}

module.exports = Server;