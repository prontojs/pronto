import Pronto from "../index.js";

const server = new Pronto();

// async await
server.get("/", async (ctx) => {
  const message = await asyncIo();
  ctx.end(message);
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});

// simulate async io by yielding to the event loop
function asyncIo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 50);
  });
}