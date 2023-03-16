export default class Pronto {
  constructor();

  get(pattern: String, handler: (req, res) => void): this;

  listen(port: number, cb: (socket) => void): this;

  close(socket: number): this;
}