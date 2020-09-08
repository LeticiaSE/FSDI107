var express = require('express');
var server = express();

/******************************************************* */
/** Server Configuration  */
/** win: ctrl + p
 *  mac: cmd  + p   */
/******************************************************* */

// render HTML from endpoints
var ejs = require('ejs');
const bodyParser = require('body-parser');
server.set('views', __dirname + "/public");
server.engine('html', ejs.renderFile);
server.set('view engine', ejs);

//server STATIC files (js, css, img,pdf, docs...)
server.use(express.static(__dirname + "/public"));

//body-parser to read payload (ajax data) directly to object
var bparser = require('body-parser');
server.use(bparser.json());

/******************************************************* */
/** Web Server   */
/******************************************************* */

// THIS IS AN ENDPOINT
server.get('/', function (req, res) {
    res.render("index.html");
});

server.get('/admin', function (req, res) {
    res.render('admin.html');
})

server.get('/about', function (req, res) {
    res.render('about.html');
})

server.get('/contact', function (req, res) {
    res.send("<h1 style='color:blue;'> Contact </h1>");
});

/******************************************************* */
/** REST API   */
/******************************************************* */

var data = [];
var cnt = 1;

server.post('/api/items', function (req, res) {
    // code here to save the items

    var item = req.body;

    if (!item.price) {
        res.status(400); //bad request
        res.send("Price is requiere on the Item");
    } else {
        data.push(item);

        item.id = cnt;

        cnt += 1; //cnt = cnt + 1; OR  //cnt++; (no soportado por Phyton)

        item.status = 'Saved...!!';

        res.status(201); //created
        res.json(item);
    }
});

server.get('/test/1', (req, res) => {
    // solve the problem and reply with the result
    // data
    var nums = [81, 3, 1, 543, -2, 53, -28, 897123, 1, 2, -9487745, 99];

    // problem: find the greatest number in the array
    // your code:


    // result
    res.send("Res: " + 3);
});

server.get('/test/2', (req, res) => {
    // solve the problem and reply with the result
    // data
    var nums = [81, 3, 1, 543, -2, 53, -28, 897123, 1, 2, -9487745, 99];

    // problem: return back only positive numbers (USING filter fn)
    // your code:


    // result
    res.send("Res: " + 3);
});

server.listen(8080, function () {
    console.log("server running at http://localhost:8080");
});

//ES6
//map
//filter
//arrow function


//REST API

//Mongo DB and Mongoose

/**
3 formas de responder 
send = TextDecoder
status 
con json
*/