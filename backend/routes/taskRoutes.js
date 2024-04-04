const express = require('express');
const Task = require('../models/Task');

const router = express.Router();






// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new task
router.post('/', async (req, res) => {
  const task = new Task({
    taskName: req.body.taskName,
    taskDescription: req.body.taskDescription,
    taskDateTime: req.body.taskDateTime,
    userEmail: req.body.userEmail,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
