const router = require('express').Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get all Items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.sendStatus(500);
  }
});

// @route   POST api/items/
// @desc    Create an Item
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newItem = await new Item({ name: req.body.name }).save();
    res.json(newItem);
  } catch (err) {
    res.sendStatus(500);
  }
});

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    const removed = await item.remove();
    if (removed) res.json({ success: true });
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
