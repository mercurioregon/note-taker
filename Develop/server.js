const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require ("fs")

const path = require("path")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use("/api",apiRoutes)
app.use("/", htmlRoutes)

app.listen(3000, ()=>{console.log ("Server started")} )
