const express = require('express');
const app = express();

//static middleware
app.use(express.static(__dirname + '/public'));

//setup handlebars view engine
const handlebars = require('express3-handlebars').create({defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//port
app.set('port', process.env.PORT || 3000);

//comming soon page
app.get('/comming-soon', function(req, res){
  res.render('comming-soon');
});

//home page
app.get('/', function(req, res){
  res.render('home');
});

//404 catch-all handler (middleware)
app.use(function( req, res, next){
  res.status(404);
  res.render('404');
});
//500 error handler (middleware)
app.use(function(req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http:localhost: '+app.get('port')+'; press Ctrl-C to terminate.');
});
