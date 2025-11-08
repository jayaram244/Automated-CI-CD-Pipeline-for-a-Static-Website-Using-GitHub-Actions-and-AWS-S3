// Run this with: node app.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

const menu = [
  {
    name: "Espresso",
    price: 120,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    name: "Cappuccino",
    price: 150,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87"
  },
  {
    name: "Latte",
    price: 170,
    image: "https://images.unsplash.com/photo-1510626176961-4b37d6afc5e3"
  }
];

app.get("/menu", (req, res) => {
  res.json(menu);
});

app.post("/contact", (req, res) => {
  console.log("Contact message received:", req.body);
  res.json({ message: "Your message was received, thank you for reaching CAFÉE ☕" });
});

app.listen(3000, () => console.log("⚡ CAFÉE high-tech site running on http://localhost:3000"));
