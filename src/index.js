import express from 'express';
import path from 'path';
import auth from './routes/auth';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/api/auth',auth);
// app.post('/api/auth', (req, res) => {
//     res.status(400).json({ errors: { global: 'invalid credentials' } });
// });

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('running in it port: ', PORT));