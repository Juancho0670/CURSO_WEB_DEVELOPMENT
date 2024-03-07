import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  var laBanda = req.body.street+req.body.pet
  res.send("<h1>My Favorite Band Name Is</h1><h3>"+laBanda+"</h3>" )
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
