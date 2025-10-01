require("dotenv").config()
let express = require("express");
let app = express();
let port = 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/login", (req, res) => {
  res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Card Example</title>
  <style>
    /* General Body Styles */
    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(120deg, #89f7fe, #66a6ff);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    /* Card Container */
    .card {
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      width: 300px;
      padding: 30px;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    /* Hover Effect */
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 30px rgba(0,0,0,0.3);
    }

    /* Card Title */
    .card h2 {
      color: #333;
      margin-bottom: 10px;
    }

    /* Card Description */
    .card p {
      color: #666;
      font-size: 14px;
      line-height: 1.5;
    }

    /* Button */
    .card button {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      background-color: #66a6ff;
      color: white;
      border-radius: 10px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s;
    }

    .card button:hover {
      background-color: #89f7fe;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Random Card</h2>
    <p>This is a simple random card with hover effects. You can put anything here: text, images, buttons.</p>
    <button>Click Me</button>
  </div>
</body>
</html>

        `);
});

app.listen(process.env.PORT, () => {
  console.log(`Port running on ${process.env.PORT}`);
});
