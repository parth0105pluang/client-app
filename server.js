const express = require('express');
const app = express();
const axios = require('axios');
const port = 8000;
var appKey = "Hello-App";
var cors = require('cors');
app.use(cors());
app.get('/:token', (req, res) => {
    token = req.params.token;
  const url = `http://localhost:3000/user/validate/${appKey}/${token}`;
  axios.post(url,{
    "appName":"google"
  })
  .then(response => {
    console.log(response.data.user);
    res.status(200).send({
      message:"Signed Up!!"
  })
  })
  .catch(error => {
    console.log(error);
  });
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})