var express = require('express');

var server = express();
server.use('/', express.static('dist'));
server.set('port', (process.env.PORT || 5000))

server.listen(server.get('port'), function(port) {
  console.log("Express static server started. Listening on port ", server.get('port'));
});
/*
if(process.env.NODE_ENV === 'production') {
  server.listen(80, function(port) {
    console.log("Express static server started. Listening at port 80");
  });
}
else {
  server.listen(8080, function(port) {
    console.log("Express static server started. Listening at port 8080");
  });
}
*/
