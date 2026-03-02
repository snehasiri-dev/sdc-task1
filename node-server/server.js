const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end("Welcome to Node.js Server");
    }
    else if (req.url === '/about') {
        res.end("About Page");
    }
    else {
        res.end("Page Not Found");
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Node Server running at http://localhost:${PORT}`);
});