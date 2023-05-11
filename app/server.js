const http = require("http");

const server = http.createServer((req, res) => {
  const urlPath = req.url;
    res.end(`You reached ${urlPath}`);
});

server.listen(3000);