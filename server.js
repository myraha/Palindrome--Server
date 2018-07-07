
const http = require ('http');//network access
const fs = require('fs')//file system access
const url = require('url')//access to url
//creating server
const server = http.createServer( function(response, res){
  const page = url.parse(response.url).pathname;

  if(page == '/'){
    fs.readFile('index.html', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);// sends html data as a response
      res.end() //always end the response
    });
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data){
      res.write(data);
      res.end();
    });
  }
  else if(page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000)
