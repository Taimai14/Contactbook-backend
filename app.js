const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api.-error");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  return res.status(errot.statusCode || 500).json({
    message: error.message || "Internal Server Error",
  });
});

app.get("/", (req, res) => [
  res.send({ message: "Welcome to contacct book application." }),
]);

app.use("/api/contacts", contactsRouter);

module.exports = app;
