const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve .jsx files as JavaScript so Babel standalone can fetch and transpile them
express.static.mime.define({ 'text/javascript': ['jsx'] });

// Relax CSP to allow Babel's in-browser eval/transpilation and CDN scripts
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://fonts.googleapis.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://unpkg.com; " +
    "img-src 'self' data:;"
  );
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/trifecta', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'trifecta.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/portal', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portal.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Midpoint server running on port ${PORT}`);
});

module.exports = app;
