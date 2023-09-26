const server = require("./config/server");
const express = require("express");
const app = express();
const routes = require("./modules/controllers/routes");

app.use("/", routes);

app.listen(server.port, () => {
    console.log(`the server started on port ${server.port}`);
});
