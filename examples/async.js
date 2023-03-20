import Pronto from "../index.js";

const server = new Pronto();

server.get("/", async (ctx) => {
  ctx.trackAbort();

  const message = await asyncIo();

  if (ctx.aborted) {
    return;
  }

  ctx.end(message);
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});

function asyncIo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 50);
  });
}