const decoder = new TextDecoder();

export default class Context {
  constructor(res, req) {
    this.res = res;
    this.req = req;

    this.aborted = false;
    this.res.onAborted(() => {
      this.aborted = true;
    });
  }

  get method() {
    return this.req.getMethod();
  }

  get path() {
    return this.req.getUrl();
  }

  get querystring() {
    return this.req.getQuery();
  }

  get ip() {
    const arrayBuffer = this.res.getRemoteAddressAsText();

    return decoder.decode(arrayBuffer);
  }

  getHeader(key) {
    return this.req.getHeader(key);
  }

  getQuery(key) {
    return this.req.getQuery(key);
  }

  getParameter(index) {
    return this.req.getParameter(index);
  }

  writeHeader(key, value) {
    this.res.writeHeader(key, value);

    return this;
  }

  writeStatus(status) {
    this.res.writeStatus(status);

    return this;
  }

  write(chunk) {
    if (this.aborted) {
      return;
    }

    return this.res.write(chunk);
  }

  end(body, closeConnection) {
    if (this.aborted) {
      return;
    }
    
    this.res.end(body, closeConnection);

    return this;
  }

  cork(cb) {
    this.res.cork(cb);

    return this;
  }

  json(obj) {
    const json = JSON.stringify(obj);

    return this
      .header("Content-Type", "application/json")
      .end(json);
  }

  resume() {
    return this.res.resume();
  }

  pause() {
    return this.res.pause();
  }

  close() {
    return this.res.close();
  }
}