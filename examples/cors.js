import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  ctx.end("Hello, world!");
});

server.post("/", (ctx) => {
  ctx.writeHeader("test", "test");
  ctx.writeStatus("201 Created");
  ctx.end("Hello, from POST handler!");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});

function cors(options) {
  return function(ctx, next) {
    ctx.writeHeader("Access-Control-Allow-Origin", options.origin);
    console.log("ye");

    if (ctx.method == "options") {
      ctx.writeHeader("Access-Control-Allow-Headers", options.headers);
      ctx.writeStatus("204");
      ctx.end();
      return;
    }

    next();
  }
}
