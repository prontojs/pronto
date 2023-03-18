import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  return ctx.cork(() => {
    ctx.status("200 OK");
    ctx.end("Hello, world!");
  });
});

server.listen(3000, (socket) => {
  console.log("http://localhost:3000");
});