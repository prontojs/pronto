import Pronto from "../index.js";

const server = new Pronto();

server.get("/", (req, res) => {
  // Get remote address
  const ip = res.ip;
  res.write(`Remote Address: ${ip}\n`);

  

  return res.end();
});

server.listen(3000, () => {
  console.log("ok");
});