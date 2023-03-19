import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  ctx.send("Hello, world!");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});