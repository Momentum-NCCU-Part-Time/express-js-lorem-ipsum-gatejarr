const express = require("express");

const app = express();
const cors = require("cors");
const config = { port: process.env.PORT || 3000 };

// middleware
app.use(cors());

// your API route(s) here
app.get("/lorem", (req, res) => {
  const lorem = {
    lorem:
      "Dolor esse cupidatat ipsum commodo ut duis id esse voluptate. Consectetur cupidatat non qui sint amet minim aute aliquip.",
  };
  res.send(lorem);
});

app.get("*", function (req, res) {
  res.status(404).json({ error: "route not found" });
});

// start server
app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
