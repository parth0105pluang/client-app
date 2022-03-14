const express = require('express');
const app = express();
const axios = require('axios');
const port = 8000;
var appKey = "Hello-App";
var cors = require('cors');
app.use(cors());
app.get('/:token', (req, res) => {
  token = req.params.token;
  const url = `http://localhost:3000/app/validate/${appKey}/${token}`;
  axios.post(url,{
    "appName":"sample"
  })
  .then(response => {
    console.log(response.data.userData);
    res.status(200).send({
      message:"Signed Up!!"
  })
  })
  .catch(error => { 
    if(error.response.status == 404){
      res.status(404).send({
        message:"Wrong Token"
    })
    }
    else{
      res.status(error.response.status).send({
          error
      })
    }
  });
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})