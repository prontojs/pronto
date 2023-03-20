import Pronto from "../index.js";

const server = new Pronto();

// preflight
server.options("/*", (ctx) => {
  ctx.writeStatus("204 No Content");

  ctx.writeHeader("Access-Control-Allow-Origin", "*");
  ctx.writeHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  ctx.writeHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH");
  ctx.writeHeader("Access-Control-Max-Age", "86400");

  ctx.end();
});

server.get("/", (ctx) => {
  ctx.writeStatus("200 OK");

  ctx.writeHeader("Access-Control-Allow-Origin", "*");

  ctx.end("Hello, world!");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});