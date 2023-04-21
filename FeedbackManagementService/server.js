const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// // MongoDB Configuration
// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/mern-stack';
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// // Routes
// app.use('/api/users', require('./routes/users'));

// Start the Server
app.listen(port, () => console.log(`Server running on port ${port}`));