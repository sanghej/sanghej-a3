// random number generator REST Service
// your name
// import required module
var express = require("express");
const cors = require('cors');
var app = express();

app.use(cors());

// define a route using a callback function that will be invoked
// when the user makes a HTTP request to the root of the folder (URL)
// display some information about the REST Service
app.get('/', function (req, res) {
    res.status(200);
    res.send("<h1>This REST service will do some basic math functions.</h1>");
    console.log("a request has been processed in / (root) ");
});

//randomize a number up to a max of 1000
app.get('/random', function(req, res) {
    const result = Math.floor(Math.random() * 1000);
    console.log("/random     request is made...");
    res.json({ "result" : result });
});

//add two given numbers together
app.get('/add/:num1/:num2', function(req, res) {
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    if (isNaN(num1) || isNaN(num2))
    {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }

    const result = Number(num1) + Number(num2);
    res.json({ "result" : result });
});

//subtract two given numbers together
app.get('/subt/:num1/:num2', function(req, res) {
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    if (isNaN(num1) || isNaN(num2))
    {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }

    const result = Number(num1) - Number(num2);
    res.json({ "result" : result });
});

//multiply two given numbers together
app.get('/mult/:num1/:num2', function(req, res) {
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    if (isNaN(num1) || isNaN(num2))
    {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }

    const result = Number(num1) * Number(num2);
    res.json({ "result" : result });
});

//divide two given numbers together
app.get('/div/:num1/:num2', function(req, res) {
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    if (isNaN(num1) || isNaN(num2))
    {
        res.status(400);
        res.json({error: "bad request"});
        return ;
    }

    const result = Number(num1) / Number(num2);
    res.json({ "result" : result });
});

// enable a port to listen to incoming HTTP requests
app.listen(3000, function () {
    console.log("API version 1.0.0 is running on port 3000");
});