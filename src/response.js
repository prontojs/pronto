export default class Response {
  constructor(response) {
    this.response = response;
    this.arborted = false;
  }

  get ip() {
    return this.response.getRemoteAddressAsText();
  }

  resume() {
    return this.response.resume();
  }

  pause() {
    return this.response.pause();
  }

  close() {
    this.response.close();

    return this;
  }

  cork(cb) {
    this.response.cork(cb);

    return this;
  }

  write(chunk) {
    return this.response.write(chunk);
  }

  end(body, closeConnection) {
    this.response.end(body, closeConnection);

    return this;
  }

  header(key, value) {
    this.response.writeHeader(key, value);

    return this;
  }

  status(status) {
    this.response.writeStatus(status);

    return this;
  }

  json(obj) {
    const json = JSON.stringify(obj);

    return this
      .header("Content-Type", "application/json")
      .end(json);
  }

  upgrade() {

    return this.response.upgrade(userData, secWebSocketKey, secWebSocketProtocol, secWebSocketExtensions)
  }
}