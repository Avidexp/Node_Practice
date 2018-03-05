var http = require('http');

http.createServer(function(req, res){ // function is an event listener. When http server is created it runs the function 

    res.writeHead(200, { 'content-Type' : 'text/plain' });
    res.end('Hello wWorld! This is a web server sending a request!\n'); // meand its done and is the last thing it is sending 
}).listen(1337, '127.0.0.1');// port, and ip address. Since local it would be localhost. localhost:1337. 


// http://localhost:1337/ says "Hello world!"



