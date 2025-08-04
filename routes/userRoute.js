const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/user.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read user data' });
    const users = JSON.parse(data);
    res.json(users);
  });
});

module.exports = router;
