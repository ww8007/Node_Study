const express = require('express');

// db 관련
const db = require('./models');

// DB authentication
db.sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.then(() => {
    console.log('DB Sync complete.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

const app = express();
const port = 3000;


app.get('/', function(req,res){
    res.send('first app');
});

app.listen( port, function(){
    console.log('Express listening on port', port);
});