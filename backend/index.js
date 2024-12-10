const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const perhitunganRoutes = require('./routes/perhitungan');
const saveRoutes = require('./routes/save');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/dbPerhintunganEng', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/perhitungan', perhitunganRoutes);
app.use('/api/save', saveRoutes);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
