
/** Server */
const express = require('express');
const cors = require('cors');
//const path = require('path');
var fs = require('fs');

const routes = express.Router();

/** App */
const app = express();

/** Middlewares */
app.use(cors()); /** Segurança de Api */
app.use(express.json()); /*Informar que a requisição a ser usada será de json*/

/** Rotas */
routes.get('/', async (req, res) => {

  // fs.readFile('./news-g1.json', 'utf8', function (err, data) {
  //   if (err) throw err; // we'll not consider error handling for now
  //   var obj = JSON.parse(data);

  //   res.json({
  //     data: obj
  //   })
  // });

});

module.exports = app;


