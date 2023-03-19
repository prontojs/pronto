import Pronto from "../index.js";

const server = new Pronto();

server.options("/*", (ctx) => {
  ctx.end("Hello from OPtions");
});

server.get("/", (ctx) => {
  ctx.end("Hello, from GET route!");
});

server.post("/", (ctx) => {
  ctx.writeStatus("201 Created");
  ctx.end("Hello, from POST route!");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});