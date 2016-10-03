var phantom = require('phantom');

// var html = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>Simple Map<\/title>\r\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\r\n    <meta charset=\"utf-8\">\r\n    <style>\r\n      html, body {\r\n        height: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n      }\r\n      #map {\r\n        height: 100%;\r\n      }\r\n    <\/style>\r\n  <\/head>\r\n  <body>\r\n    <div id=\"map\"><\/div>\r\n    <script>\r\n      var map;\r\n      function initMap() {\r\n        map = new google.maps.Map(document.getElementById(\'map\'), {\r\n          center: {lat: 12, lng: 34},\r\n          zoom: 8\r\n        });\r\n\r\n      }\r\n\r\n\r\n    <\/script>\r\n    <script src=\"https:\/\/maps.googleapis.com\/maps\/api\/js?key=AIzaSyB6sVoe47_S28PcPgp3Yg-j83XYYwc8TD4\r\n&callback=initMap\"\r\n    async defer><\/script>\r\n  <\/body>\r\n<\/html>";


var sitepage = null;
var phInstance = null;

phantom.create()
  .then(instance => {
      phInstance = instance;
      console.log("fire");
      return instance.createPage();
  })
  .then(page => {
      sitepage = page;
      sitepage.property('viewportSize',{
        width: 1920,
        height: 1080
      });
      sitepage.open('foo.html');
    })
  .then(status => {
    // setTimeout(function(){
    //   return sitepage.renderBase64('PNG');
    // },
    // 3000);
    return sitepage.renderBase64('PNG');
  })
  .then(base64 => {
      console.log("base64: " + base64);
      phInstance.exit();
  })


console.log("done");
