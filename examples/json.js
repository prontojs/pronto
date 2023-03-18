import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (req, res) => {
  return res.json({
    hello: "world!"
  });
});

server.listen(3000, () => {
  console.log("ok");
});