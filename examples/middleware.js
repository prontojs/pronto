import Pronto from "../index.js";

const server = new Pronto();

// middleware 1
server.use("/", (ctx, next) => {
  ctx.writeStatus("200 OK");
  ctx.writeHeader("Middleware-1", "Hello from Middleware 1");
  next();
});

// middleware 2
server.use("/", (ctx, next) => {
  ctx.writeHeader("Middleware-2", "Hello from Middleware 2");
  next();
});

// add as many handlers as you want
server.get("/", (ctx, next) => {
  ctx.write("Hello");
  next();
}, (ctx) => {
  ctx.end(", world!");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});