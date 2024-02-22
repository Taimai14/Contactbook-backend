const express = require("express");
const cors = require("cors");

const app = express();
const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => [
  res.send({ message: "Welcome to contacct book application." }),
]);

app.use("/api/contacts", contactsRouter);

module.exports = app;
