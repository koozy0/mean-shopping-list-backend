const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get all Items
// @access  Public
router.get('/', async (req, res) => {
  const items = await Item.find().sort({ date: -1 });

  res.json(items);
});

// @route   POST api/items/
// @desc    Create an Item
// @access  Public
router.post('/', async (req, res) => {
  const newItem = new Item({ name: req.body.name }).save();

  res.json(newItem);
});

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public
router.delete('/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  const removed = await item.remove();

  if (removed) res.json({ success: true });
});

module.exports = router;
