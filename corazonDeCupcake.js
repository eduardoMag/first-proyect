const express = require('express');
const app = express();

//middleware
app.use(express.static(__dirname + '/public'));

//set up for handlebars view engine
const handlebars = require('express-handlebars').create({ defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//port
app.set('port', process.env.PORT || 3000);

//routes
// app.get('/', (req, res)=>{res.render('home');});
app.get('/comming', (req, res)=>{
  res.render('comming-soon', {layout:null});
});
app.get('/', (req, res) =>{
  res.render('home');
});
app.get('/test', (req, res) =>{
  res.render('test');
});

// 404 catch-all handler (middleware)
app.use((req, res, next) => {
  res.status(404);
  res.render('404');
});

// 500 error handler (middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate' );
});
