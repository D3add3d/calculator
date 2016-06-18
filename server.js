var express = require('express');

var server = express();
server.use('/', express.static('dist'));

server.listen(80, function(port) {
  console.log("Express static server started. Listening at port 80");
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
