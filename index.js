const express = require("express")
const dotenv = require('dotenv')
const mongoose = require("mongoose")
//const bodyParser = require('body-parser');
const cors = require("cors")   // access api in frontend
const apiRoute = require('./routes/api_routes')
const app = express()
dotenv.config();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("App running successfuly");
  });

const PORT = "5002"
app.listen(PORT, () => 
    {console.log(`Server is up an running at http://localhost:${PORT}`)}
)

mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser:true},
    () => console.log("Database Connected")
)

//to set the content type to json postman
app.use(express.json(),cors())
// send msg for ur localhost
app.use("/", apiRoute)