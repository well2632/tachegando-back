const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.API_PORT;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const establishmentRoute = require("./routes/establishmentRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/establishment", establishmentRoute);
app.use("/order", orderRoute);

// Login

app.listen(port, () => {
  console.log("Servidor iniciado na porta ", port);
});
