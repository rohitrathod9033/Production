import express from "express";
import { createRequire } from "module"; // add this for require in ESM
const require = createRequire(import.meta.url);
const instaData = require("./Data.json"); // <-- use require here
let app = express();
let port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/:username", (req, res) => {
  console.log(instaData);
  let {username} = req.params;
  return final =  instaData.find((ele) => {
    ele.username === username;
  })
  res.render("profile", {data : final});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
