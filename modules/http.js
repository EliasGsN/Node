const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end("<h1>home page</h1>");
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'John Doe',
                email: 'john@doe.com',
            },
            {
                name: 'John Smith',
                email: 'john@smith.com',
            }
        ];
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});