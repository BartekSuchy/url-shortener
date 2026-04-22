const express = require('express');
const cors = require('cors');
const db = require('./db');
const linksRouter = require('./routes/links');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/:code', (req, res) => {
  const { code } = req.params;

  db.query(
    'SELECT * FROM links WHERE short_code = ?',
    [code],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (rows.length === 0) return res.status(404).send('Link nie istnieje');

      db.query('UPDATE links SET clicks = clicks + 1 WHERE short_code = ?', [code]);

      res.redirect(rows[0].original_url);
    }
  );
});

app.use('/api/links', linksRouter);

app.listen(3001, () => {
  console.log('Serwer działa na http://localhost:3001');
});