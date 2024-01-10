const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = 5000;

const mongodbUri = require("./config/db.config");
const userRoute = require("./routes/user.routes");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(cors());

userRoute(app);

app.listen(PORT, () => {
  mongoose.connect(mongodbUri).then(
    () => {
      console.log("mongodb connected");
    },
    (err) => {
      console.log("error to connect mongodb", err);
    }
  );

  console.log("server started", PORT);
});
