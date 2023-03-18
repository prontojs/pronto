import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  ctx.header("Connection", "Keep-Alive");
  return ctx.end("Hello, world!", false);
});

server.listen(3000, (socket) => {
  console.log("http://localhost:3000");
});