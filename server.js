
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;
const db             = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, {});
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})


//const server = http.listen(8080, function() {
//    console.log('listening on *:8080');
