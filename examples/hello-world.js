import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  ctx.end("Hello, world!");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});