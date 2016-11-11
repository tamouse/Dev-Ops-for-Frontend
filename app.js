const express = require("express");
const app = express();
 
app.use(express.static('dist')); 

app.get("/", function(req, res) {
    res.sendFile( __dirname + '/dist/index.html');
});
 
const port = 3001;
app.listen(port, function() {
    console.log("Listening on " + port);
});
