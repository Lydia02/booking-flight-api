const express = require('express');
const {json} = require('express');
const connect = require('./config/database');
const flightRoute = require("./router/flightRoutes");
connect();

const app = express();
app.use(json());
app.use("/flight", flightRoute);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.send('MongoDb flight');
})

app.listen(3000, () => console.log(`serving on port ${PORT}`));