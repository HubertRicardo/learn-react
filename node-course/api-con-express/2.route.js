const http = require("node:http");

// este es un ejemplo con http bruto sin usar un framework
const processRequest = (req, res) => {
  const { method, url } = req;
  switch (method) {
    case "GET":
      switch (url) {
        case "/":
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>Mi pagina</h1>");
      }
      break;

    default:
      break;
  }
};

const server = http.createServer(processRequest);

//aqui se llama para que aparesca
server.listen(1234, () => {
  console.log("Server listening on port http://localhost:1234");
});
