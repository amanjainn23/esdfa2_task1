const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fa2",{useNewUrlParser:true,useUnifiedTopology:true})
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
const port = 8080;
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.listen(process.env.PORT || port, () => {
console.log("listening 8080...");
});