const express = require('express');
const Perhitungan = require('../models/Perhitungan');

const router = express.Router();

// Create Post
router.post('/', async (req, res) => {
    const { userId, content } = req.body;

    const post = new Perhitungan({ userId, content });

    try {
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: 'Error saving post' });
    }
});
// Get Posts by User
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    const posts = await Perhitungan.find({ userId });
    res.json(posts);
});


module.exports = router;
