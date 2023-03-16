import uws from "uWebSockets.js";

export default class Pronto {
  constructor(options) {
    this.uws = uws.App(options);
  }

  get(pattern, handler) {
    this.uws.get(pattern, handler);

    return this;
  }

  listen(port, cb) {
    this.uws.listen(port, cb);
  }

  close() {
    //uws.us_listen_socket_close(listenSocket);
  }
}