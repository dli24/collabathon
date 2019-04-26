const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;


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
});

app.get('/subscribe', (req,res)=>{
    res.sendFile("views/subscribe.html",{ root: __dirname});
});

app.get('/dashboards', (req, res)=>{
  res.sendFile("views/dashboards.html", { root: __dirname});
});



app.get('/api/users', (req,res)=>{
  db.User.find((err, user)=>{
    res.json(user)
  });
});

app.get('/api/users/:id', (req,res)=>{
  db.User.findById(req.params.id, (err, user)=>{
    res.json(user)
  });

});


app.post('/api/users', (req, res)=>{
  const newUser = new db.User({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email
  })
  db.User.create(newUser, (err, newUsers)=>{
      const error = []

    if (!req.body.first){
      error.push({message: 'Please enter your First name'})
    }
    if (!req.body.last){
      error.push({message: 'Please enter your Last name'})
    }
    if (!req.body.email){
      error.push({message: 'Please enter your Email'})
    }
      res.json(newUsers)
  })
})

app.put('/api/users/:id', (req, res)=>{
  db.User.findByIdAndUpdate(req.params.id, req.body, (err, updateUser)=>{
    res.json(updateUser)
  })
})

app.delete('/api/users/:id', (req, res)=>{
  db.User.findByIdAndDelete(req.params.id, (err, deleteUser)=>{
    res.json(deleteUser)
  })
})






app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
