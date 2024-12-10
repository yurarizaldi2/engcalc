const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { name, email, password, nip, divisi } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, nip, divisi, email, password: hashedPassword });

    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Error registering user' });
    }
});

router.get('/:email', async (req, res) => {
    const { email } = req.params;

    const posts = await User.find({ email });
    res.json(posts);
});



// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, 'secretKey');
    res.json({ token });
});

module.exports = router;
