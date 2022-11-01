const mongose = require('mongoose')

mongose.connect(
    'mongodb://db_mongo/mydatabase',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(
        db  => console.log('Conectado a la base de datos',db.connection.host)
    )
    .catch(
        err => console.error('error')
    );