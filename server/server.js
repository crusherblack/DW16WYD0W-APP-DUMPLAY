require("dotenv").config();

const path = require("path");
const express = require("express");
const router = require("./routes");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/v1", router);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);

// SECRET_KEY = asal2ajacuy
