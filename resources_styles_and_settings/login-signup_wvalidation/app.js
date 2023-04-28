// const express = require ('express');
// const bodyParser = require ('body-parser');
// const request = require ('request');

// const app = express();

// app.use(express.static ('public'));

// app.use(bodyParser.urlencoded ({
//     extended:true
// }));

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/login-signup_validation.html')
// })

// app.post('/', function(req,res) {
//     var email = req.body.email;
//     var password = req.body.password;
//     var conPassword = req.body.conpass;
//     console.log(email, password, conPassword);
// })

// app.listen(3000, function (){
//     console.log('');

// })


// ===============================================

const express = require ("express");
const bodyParser = require ("body-parser");
const request = require ("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req , res) {
 res.sendFile(__dirname + "/login-signup_validation.html");
});


app.post("/", function(req, res){
    var email = req.body.email;
    var conPass = req.body.conPass;
    var password = req.body.password;
   
    console.log(email, password, conPass);

})

app.listen(3000, function(){
    console.log("Server is running on port 3000");

})