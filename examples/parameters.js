import Pronto from "../index.js";

const server = new Pronto();

server.get("/:name", (ctx) => {
  const name = ctx.getParameter(0);
  ctx.end(`Hello, ${name}!`);
});

server.listen(3000, () => {
  console.log("http://localhost:3000/kim");
});