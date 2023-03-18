import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  return ctx.end("Hello, world!");
});

server.listen(3000, () => {
  console.log("ok");
});