const express = require('express');
const app = express();
const path = require('path');

app.use('/axios', express.static(__dirname + '/node_modules/axios/dist/'))
   .use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
   .use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
})
   .get('/form', function(req, res) {
      res.sendFile(path.join(__dirname + '/form.html'));
   })
   .post('/form', function(err, res, next) {
      res.send('<strong>Response From nodeJS Server </strong>');
   });

app.listen(3000, function() {
   // console.log('Running');
});
