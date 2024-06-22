const http = require('http');
const port = process.env.PORT || 3000;
const serverName = process.env.SERVER_NAME || 'Server';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const requestHanlder = async (req, res) => {
    await sleep(1000);
    res.end(`Hello from ${serverName}`);
}

const server = http.createServer(requestHanlder);

server.listen(port, () => {
    console.log(`${serverName} is running on port ${port}`);
})