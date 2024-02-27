const http = require('http');

const serverAddress = '127.0.0.1'; // Use a descriptive name
const portNumber = 3000; // Consider using `const`

function main() {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello from Node.js server!</h1> <p>This is a simple sentence.</p>');
    });

    server.listen(portNumber, serverAddress, () => {
        console.log(`Server running at http://${serverAddress}:${portNumber}/`);
    });
}

main();