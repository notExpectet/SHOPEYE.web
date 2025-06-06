const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Use EJS for templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory product storage
const products = [];

app.get('/', (req, res) => {
  res.render('index', { products });
});

app.post('/products', (req, res) => {
  const { name, price, description } = req.body;
  if (name && price) {
    products.push({ name, price, description });
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
