const express = require('express');
const app = express(); 
const path = require('path')

app.use(express.static('public'));


/* GET home page. */
app.get('/', function(request, response, next) {
    response.sendFile("index");
});

// GET typingSpeedPage
app.get("/typingspeed", function (request,response) {
        response.sendFile(path.resolve("public/typingSpeedPageMain.html"));
    });

    
    app.listen((process.env.PORT || 5000), function (err) {
        if(err){
            //GET 404 page
    app.get("/typingspeed", function (request,response) {
        response.sendFile(path.resolve("public/404.html"));
    });
        }
    });

module.exports = app;