var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('http');
var fs = require('fs');


// require more modules/folders here!
var statusCode = 200;

exports.handleRequest = function (req, res) {
  fs.readFile('/Users/student/Desktop/2015-11-web-historian/web/public/index.html', function(err, html){
    if(err){
      throw err;
    }
    console.log(req.url)

    if (req.method === "GET" && req.url === '/www.google.com') {
      res.end('google');
    }else if(req.method === "GET" && req.url === '/arglebargle'){
      statusCode = 404;
      res.writeHead(statusCode, archive.headers);
      res.end();
    }else if(req.method ==="GET"){
      res.write(html);
      res.end();
    }

        //check if the url is in the list
          //if it is not, add the url to the list addUrlToList
  })

};
