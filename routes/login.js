var express = require('express');
var router = express.Router();

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
*/

// Function to handle the root path
router.get('/validate', async function(req, res) {

  // Access the provided 'page' and 'limt' query parameters
  let page = req.query.page;
  let limit = req.query.limit;

  let articles = await Article.findAll().paginate({page: page, limit: limit}).exec();

  // Return the articles to the rendering engine
  res.render('index', {
      articles: articles
  });
});


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

module.exports = router;