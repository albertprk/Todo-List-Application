const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

// An api endpoint that returns a short list of items
app.get('/api/getData', (req,res) => {
    var data = {
      todos: [
        {todo: "Cook dinner", description:"Burgers and fries", id: 1, show:true},
        {todo: "Do laundry", description:"Yup", id: 2, show:true}
      ],
      index: true,
      size: 2,
      showPopUp: true,
      text: ""
    };
    res.json(data);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
