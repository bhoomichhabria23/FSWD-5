const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.set('json spaces', 0);

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Server!');
});

app.get('/hello', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: 'This is Bhoomi Chhabria' }));
});

app.post('/data', (req, res) => {
    const { name, age } = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: `Received data - Name: ${name}, Age: ${age}` }));
});

app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});