const express = require ('express');
 const bodyParser = require('body-parser');
const mongoose = require ('mongoose');        
const approuter = require ('./Router/router');
const { json } = require('body-parser');
const cors =require('cors');




const hostname = 'localhost';
const port = 6003;


const app = express();

app.use(cors());
app.options('*', cors());


app.use(bodyParser.json()); 


app.use('/' , approuter);



//CLOUD CONNECTION

mongoose.connect('mongodb+srv://Radha_24:radha1998@cluster0.hkwaq.mongodb.net/foodviraam?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
        console.log("Connection has been created.....")
    });
}).catch(err => {
    console.log(err);
})