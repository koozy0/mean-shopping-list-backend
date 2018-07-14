require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const { db, options } = require('./config/mongoDB');

// Connect to MongoDB
mongoose
  .connect(
    db,
    options
  )
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Mount Routes
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}...`));
