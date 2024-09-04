/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/sportpass', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/sportpass/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/
const { PKPass } = require("passkit-generator");
const fs = require("file-system")

app.post('/sportpass', function(req, res) {
  // Add your code here
    PKPass.from({
        model:"./model/CustomSport.pass",
        certificates:{
          wwdr: fs.fs.readFileSync("./certs/wwdr4.pem"),
          signerCert: fs.fs.readFileSync("./certs/tallyapppasscrt.pem"),
          signerKey: fs.fs.readFileSync("./certs/passkey.pem"),
          signerKeyPassphrase: "inthemaking22"
        }
      },
      {
        authenticationToken : "vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc",
        webServiceURL : "https://ggufxi55nk.execute-api.us-east-1.amazonaws.com/tallyapp/sportpass",
        serialNumber: "PASS-213213",
        description: "SMA Guard Pass",
        logoText: "SMA Guardians",
        foregroundColor: req.body.foregroundColor,
        backgroundColor: req.body.backgroundColor
      }
    )
    .then(async(newPass) => {
      console.log("in THEN");
      console.log(newPass);
        newPass.primaryFields.push(
          {
            key: "primary",
            label:"Name:",
            value: req.body.name
          }
        )
        newPass.setBarcodes(req.body.barcode);
        console.log("getting ready to get newPass.getAsBuffer")
        const bufferedData = newPass.getAsBuffer();
        fs.writeFileSync("new.pkpass", bufferedData);
        res.json({success: 'post call succeed!', url: req.url, body: req.body})

    })














});

app.post('/sportpass/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/sportpass', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/sportpass/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/sportpass', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/sportpass/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
