import Pronto from "../index.js";

const server = new Pronto();

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, beatae. Officiis, molestias? Dolorem in sit officia, dolorum iste distinctio repudiandae doloremque beatae recusandae dignissimos non error ratione? Mollitia, earum laborum?
  </p>
</body>
</html>
`;

server.get("/", (ctx) => {
  ctx.html(html);
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});