const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

//comming soon page

//404 page

//500 page

app.listen(app.get('port'), function(){
  console.log('Express started on http:localhost: '+app.get('port')+'; press Ctrl-C to terminate.');
});
