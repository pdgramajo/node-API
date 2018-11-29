import express from 'express';
import path from 'path';

const app = express();

app.post('/api/auth', (req, res) => {
    res.status(400).json({ errors: { global: 'invalid credentials' } });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 8035;
app.listen(PORT, () => console.log('running in it port: ', PORT));