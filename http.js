const http = require("http");
// first parameter is the incoming request. Second Response is what we are sending back,
// req can be seen as a giant object after we stop the server with control c here, and then refresh the page since it is waiting for a request.
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(`<h1> Oops! </h1>`);
});

// what port we are listening to
server.listen(5001);
