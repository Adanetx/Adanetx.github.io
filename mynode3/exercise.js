var http = require("http");
http.createServer(function(req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(req.url);
        res.end();
    })
    .listen(8080);

/** 
 * I have run the  following 
 * http://localhost:8080/apple  
 * http://localhost:8080/pears 
 * http://localhost:8080/strawberries
 * I found the following value respectivily in my browser
 * / apple
 * /pears
 * /strawberries 
 *  i  
 */