 const express = require("express");
 const app = express();
 
const DIST_FOLDER = '/dist';

app.use('/static', express.static(__dirname + DIST_FOLDER)); 

app.get("/", function(req, res) {
    res.sendFile( __dirname + DIST_FOLDER + '/index.html');
});
 
const port = 3001;
app.listen(port, function() {
    console.log("Listening on " + port);
});
