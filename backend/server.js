const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const whatsappRouts = require('./routes/whatsappRouts')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB




mongoose.connect('mongodb+srv://rohitsamasi555:4f9revkfNy2nj4rD@cluster0.hhil8o2.mongodb.net/myapp').then(
  console.log("connected")
)

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api',whatsappRouts)

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
