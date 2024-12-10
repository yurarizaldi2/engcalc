const express = require('express');
const Data = require('../models/Save');
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const documents = req.body.data;
    await Data.insertMany(documents);
    res.status(200).json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Failed to save data." });
  }
});


router.get('/:iduser/:idinfo', async (req, res) => {
  const { iduser, idinfo } = req.params;

  try {
      // Filter berdasarkan userId dan idinfo
      const posts = await Data.find({ iduser, idinfo });

      // Kirim respons berupa JSON
      res.json(posts);
  } catch (error) {
      // Tangani error jika ada
      res.status(500).json({ error: 'Failed to fetch posts' });
  }
});




module.exports = router;