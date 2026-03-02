const express = require('express');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Welcome to Express Server");
});

app.get('/about', (req, res) => {
    res.send("About Page using Express");
});

app.get('/contact', (req, res) => {
    res.send("Contact Page");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Express Server running at http://localhost:${PORT}`);
});