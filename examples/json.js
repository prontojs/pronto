import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  return ctx.json({
    hello: "world!"
  });
});

server.listen(3000, (socket) => {
  console.log("http://localhost:3000");
});