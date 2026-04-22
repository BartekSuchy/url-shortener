const express = require('express');
const router = express.Router();
const db = require('../db');
const { nanoid } = require('nanoid');

router.post('/', (req, res) => {
  const { original_url } = req.body;
  if (!original_url) return res.status(400).json({ error: 'Podaj URL' });

  const short_code = nanoid(6);

  db.query(
    'INSERT INTO links (original_url, short_code) VALUES (?, ?)',
    [original_url, short_code],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ short_code, original_url });
    }
  );
});

router.get('/', (req, res) => {
  db.query('SELECT * FROM links ORDER BY created_at DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;