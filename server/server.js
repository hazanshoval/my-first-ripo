const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express =require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRout = require("./routs/userRout");
const errorFunction = require("./error/errorFunction");
const app = express();

dotenv.config({path:"./.env"})

app.use(bodyParser.json())
app.use(cors())

app.use("/user",userRout)


app.use(errorFunction)

mongoose
  .connect(process.env.URLTOCONNCTMONGO)
  .then(() => console.log("Successfully connect to MongoDB"))
  .catch((error) => console.log(error));

const port = process.env.PORT;
app.listen(port, () => console.log(`ROCK AND ROLL ON: ${port}`));