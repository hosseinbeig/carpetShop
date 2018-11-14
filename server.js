const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// bodyParser middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const auth = require('./routes/api/auth');
const admin = require('./routes/api/admin');
const shop = require('./routes/api/shop');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MDB Connected !!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello from nodemon'));

// Use Routes
app.use('/api/auth', auth);
app.use('/api/admin', admin);
app.use('/api/shop', shop);

// Page not found allways at the bottom
app.use((req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
