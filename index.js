const express = require('express');
const app = express();
const path = require('node:path');
const port = 8080;

app.set("views",path.join(__dirname,'views'));
app.set("view engine","ejs");

app.use(express.urlencoded({extended: true}));




const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get('/',(req,res)=>{
    res.render('index',{messages:messages})
})

app.get('/new',(req,res)=>{
    res.render('form');
});

app.post('/new', (req,res)=>{
    const authorname = req.body.authorName;
    const messageText = req.body.message;

    messages.push({text: messageText,user:authorname, added:new Date()});

    res.redirect("/")
})


app.listen(port,()=>{
    console.log(`you are listening on port ${port}`);
})