const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));//
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

require("./microservices/IpLookUp/IpFn.js")(app);
require("./microservices/emailer/nodeMailer.js")(app);
// require("./microservices/chat/chat.js")(app);
//dynamoDB

  app.listen(PORT, () =>{
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });