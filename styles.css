// Run this with: node app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname)); // serve HTML & CSS

// Sample menu data
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
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  }
];

// API Routes
app.get('/menu', (req, res) => {
  res.json(menu);
});

app.post('/contact', (req, res) => {
  console.log("Contact message:", req.body);
  res.json({ message: "Thanks for contacting CAFÉE! We'll reply soon ☕" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(🚀 CAFÉE running on http://localhost:${PORT}));
