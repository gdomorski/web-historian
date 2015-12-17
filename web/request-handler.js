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
    if (req.method === "GET") {
      res.writeHead(statusCode, archive.headers);
      res.write(html);
      res.end();

      if(req.url === 'google.com'){
        sites.txt

      }  
        //check if the url is in the list
          //if it is not, add the url to the list addUrlToList



    }
  })

};
