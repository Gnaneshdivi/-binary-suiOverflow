
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
const { parse } = require("dotenv");
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",router);

const PORT = process.env.PORT || 8080


router.get("/test",async (req,res)=>{
 res.send("Working")
});


    


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
