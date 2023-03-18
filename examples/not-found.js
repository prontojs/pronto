import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  ctx.end("Found!");
});

server.any("/*", (ctx) => {
  ctx.writeStatus("404 Not Found").end("404 Not Found");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});