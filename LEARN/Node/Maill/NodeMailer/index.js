// server.js
const http = require('http');
const routing = require('./Routing.js');

const server = http.createServer((req, res) => {
    routing(req, res)
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
