const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/data', (req,res) => {
    var list =  {
      todos: [
        {todo: "Cook dinner", description:"Burgers and fries", id: 1, show:true},
        {todo: "Do laundry", description:"Yup", id: 2, show:true}
      ],
      index: true,
      size: 2,
      showPopUp: true,
      text: ""
    };
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
    res.send("test");
});

app.listen(port);
