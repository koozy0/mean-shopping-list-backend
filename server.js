require('dotenv').config();

const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/mongoDB');

// Connect to MongoDB
mongoose
  .connect(...db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Mount Routes
app.use(require('./routes/routes'));

// Port Config
const port = process.env.PORT || 3000;

// Mount Server
app.listen(port, () => console.log(`Server started on port ${port}...`));
