var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};


// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(cb) { 
  fs.readFile(exports.paths['list'], 'utf8', function(err, data){
    if (err){
      throw err;
    } else {
      var result = data.split("\n");
      cb(result);
    }
  })
}


exports.isUrlInList = function(url, callback) {
  //console.log(callback(true))
  fs.readFile(exports.paths['list'], 'utf8', function(err, data){
    if(data.indexOf(url) !== -1){
      callback();
      return true;
    }else{
      callback();
      return false;
    }
  });
};

exports.addUrlToList = function(url,callback) {
  // fs.readFile(exports.paths['list'], 'utf8', function(err, data){
  //   console.log(data);
  //   console.log(url);
    fs.appendFile(exports.paths['list'], url, 'utf8',function(){
      callback();
    });
};

exports.isUrlArchived = function(url, callback) {
 fs.readdir(exports.paths['archivedSites'], function(err, files){
    if(err){
      console.log('error')
      return false;
    }else{
      callback(files)
      return true;
    }
 });
};

exports.downloadUrls = function(array) {
  _.each(array, function(url){
    fs.writeFile(exports.paths.archivedSites+"/"+url,"test");
  });
};
