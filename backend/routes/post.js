const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Create Post
router.post('/', async (req, res) => {
    const { userId, content, idinfo, rumus } = req.body;

    const post = new Post({ userId, content, idinfo, rumus });


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

    const posts = await Post.find({ userId });
    res.json(posts);
});


// Delete Posts by User
router.delete('/:_id', async (req, res) => {
    const { _id } = req.params;

    try {
        await Post.deleteMany({ _id });
        res.status(200).json({ message: 'Posts deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Error deleting posts' });
    }
});

module.exports = router;
