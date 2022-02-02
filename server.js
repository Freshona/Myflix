/*Variable Declarations Setup*/

const http = require('http'),/* imports the HTTP Module*/
      fs = require('fs') /* imports file system module*/
      url = require('url');/*imports url module*/

 /*server creation*/
http.createServer((request, response) => {
  let addr = request.url /* this gets the url from the request module*/
  q = url.parse(addr, true),
  filePath =''; /*this stores the path of the file*/

  /*the log of recent requests to server*/
  fs.appendFile('log.txt', 'URL; ' + addr + '\nTimestamp: ' + new Date() + 
   '\n\n', (err) => {
     if (err) {
       console.log(err);
     }else {
       console.log('Added to log');
     }

   });
if (q.pathname.includes('documentation')) { /* q is where the parsed URL is stored*/
    filePath = (__dirname + 'documentation.html');
}else {
  filepath = 'index.html';
}
 /*file server module*/ 
 fs.readFile(filePath, (err, data) => { /*fs knows which file to grab based on what is passed as it's first argument*/
   if (err) {
     throw err;
   }
 }
 )

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('data');
  response.end();
}).listen(8080);

console.log('My first ever Node test server is running on Port 8080.');