import express, { urlencoded } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';
import methodOverride from "method-override";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(methodOverride('_method'));
app.use(urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Alice",
    content: "This is my first post!",
  },
  {
    id: uuidv4(),
    username: "Bob",
    content: "Hello everyone!",
  },
  {
    id: uuidv4(),
    username: "Charlie",
    content: "Wishing you all a great day!",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id == id);
  res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((post) => post.id == id);
  post.content = newContent;
  res.redirect("/posts");
});

app.post("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.filter((post) => post.id != id);
  res.render("edit.ejs", {post});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
