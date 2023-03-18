import Pronto from "../index.js";

const server = new Pronto();

// Middleware 1
server.use("/", (ctx, next) => {
  ctx.header("Test-Header-1", "Middleware 1");
  next();
});

// Middleware 2
server.use("/", (ctx, next) => {
  ctx.header("Test-Header-2", "Middleware 2");
  next();
});

// Add two handlers
server.get("/", (ctx, next) => {
  ctx.write("Hello");
  next();
}, (ctx) => {
  ctx.end(", world!");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});