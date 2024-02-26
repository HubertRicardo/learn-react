const http = require("node:http");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  if (req.url === "/") {
    res.statusCode = 200; //ok
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Welcome my initial web</h1>");
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.setHeader = ("Content-Type", "text/plain; charset=utf-8");
    res.end("<h1>Contacto</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

//listen server in that port
server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
