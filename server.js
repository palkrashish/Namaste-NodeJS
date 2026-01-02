const http = require("node:http");
const server = http.createServer(function (req, res) {
    /** If you want change some url  */
  if (req.url === "/getSecretData") {
    res.end("There is no secret Data");
  }
  res.end("Hello - Ashish");
});

server.listen(8080);
