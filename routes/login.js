var express = require('express');
//var router = express.Router();

//Para el método GET
var bodyParser = require('body-parser');
var url = require('url');
var querystring = require('querystring');
var Article = require('./models').Article; 

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Function to handle the root path
app.get('/', async function(req, res) {

  // Access the provided 'page' and 'limt' query parameters
  let page = req.query.page;
  let limit = req.query.limit;

  let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

  // Return the articles to the rendering engine
  res.render('index', {
      articles: articles
  });
});

let server = app.listen(8080, function() {
  console.log('Server is listening on port 8080')
});

/*
//Para el método POST
let bd = {
  'usuario': 'abc',
  'contrasenia': '123'
}
*/

/*
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
*/

/*
//Para el método POST
router.post('/validate', function (req, res, next) {
  let usuario = req.body.user;
  let contrasenia = req.body.password;

  console.log("usuario: ", usuario)
  console.log("contraseña: ", contrasenia)

  //Validación
  if (usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {
    res.redirect('/');
  } else {
    res.redirect('/login')
  }

});
*/