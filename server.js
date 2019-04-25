const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// View Engine
app.set('view engine', 'ejs');
//Database
const db = require('./models');


// ------------------------- MIDDLEWARE -------------------------------- //
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
// Parse URL Encoded Form Data
app.use(bodyParser.urlencoded({extended: true}));
// Parse JSON Data
app.use(bodyParser.json());

// Serve Public Directory
app.use(express.static(__dirname + '/public'));

// ========================ROUTE====================================//

app.get('/', (req,res)=>{
    res.sendFile("views/index.html", { root: __dirname });
})

app.get('/subscribe', (req,res)=>{
    res.sendFile("views/subscribe.html",{ root: __dirname});
})











app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
