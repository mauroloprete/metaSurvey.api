const mongose = require('mongoose')

mongose.connect('mongodb://db_mongo/mydatabase')
    .then(
        db  => console.log('Conectado a la base de datos',db.connection.host)
    )
    .catch(
        err => console.error(err)
    );