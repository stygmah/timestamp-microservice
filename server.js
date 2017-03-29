const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());


app.get('/:date',(req,res)=>{
  //convert to int if Unix timestamp
  if(!isNaN(req.params.date)){
    date = parseInt(date);
  }else{
    var date = req.params.date;
  }
  //convert to new date
  var newDate= new Date(date);
  var returnDate = {
    textDate: null,
    unixTimeStamp: null
  }
  //check if valid and then if unix timestamp or date text, convert after the
  //missing one
  if(!(newDate=="Invalid Date")){
    if(isNaN(req.params.date)){
      //text date
      returnDate.textDate = date;
      returnDate.unixTimeStamp = newDate.getTime()/1000;
    }else{
      //unix timestamp
      returnDate.textDate = newDate;
      returnDate.unixTimeStamp = date;
    }
  }
  //send the response
  res.send(JSON.stringify(returnDate));
});



app.listen(port, ()=>{
  console.log('server listening on port ',port);
});
  
