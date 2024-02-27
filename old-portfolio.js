const express = require('express');
const path = require('path');

const app = express();
const PORT = 7070;

process.env.NODE_ENV = 'production';

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, '')));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);

  (async () => {
    try {
      const open = (await import('open')).default;
      await open(`http://localhost:${PORT}`);
    } catch (error) {
      console.error('Error importing/opening browser:', error);
    }
  })();


});
