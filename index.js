var http = require('http');

const PORT=8080;

function handleRequest(request, response){
    console.log("Request received");
    setTimeout(function() {
      console.log('Request served');
      response.end('Hello World');
    }, 300);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
