const app = require("./server/app");
const express = require("express");
const chalk = require("chalk");

// Client
var distDir = __dirname + "/dist/";
app.use("/", express.static(distDir));

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server Running on port ${chalk.green(`${port}`)}`)
})
