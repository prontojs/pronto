import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (ctx) => {
  // Context instance properties
  const ip = ctx.ip;
  const path = ctx.path;
  const method = ctx.method;
  const querystring = ctx.querystring;

  // Context instance methods
  const host = ctx.getHeader("host");
  const agent = ctx.getHeader("user-agent");
  const query = ctx.getQuery("query");

  ctx.end(`
    Agent: ${agent}
    IP: ${ip}
    Method: ${method}
    Host: ${host}
    Path: ${path}
    URL: ${host + path}
    Querystring: ${querystring}
    Query: ${query}
  `);
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});