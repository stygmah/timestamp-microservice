const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());

console.log(new Date(984528000));


app.get('/:date',(req,res)=>{
  var date = req.params.date;
  if(!isNaN(date)){
    date = parseInt(date);
  }
  
  var newDate= new Date(date);
  var returnDate = {
    textDate: null,
    unixTimeStamp: null
  }
  
  console.log("date: "+date);
  console.log("New Date: "+newDate);
  console.log(newDate=="Invalid Date");
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
  
