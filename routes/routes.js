var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
    response.sendFile("index.html");
});

// GET typingSpeedPage
app.get("/typingSpeed", function (req,res) {
        res.sendFile("\typingSpeed.html");
    });

module.exports = router;