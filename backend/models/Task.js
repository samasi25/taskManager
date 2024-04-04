const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String },
  taskDateTime: { type: Date, required: true },
  userEmail: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);
