const decoder = new TextDecoder();

export default class Context {
  constructor(res, req) {
    // uws response and request
    this.res = res;
    this.req = req;

    // track aborted
    this.aborted = false;
    this.res.onAborted(() => {
      this.aborted = true;
    });

    this.status = "200 OK";
    this.headers = new Map();
  }

  getMethod() {
    return this.req.getMethod();
  }

  getUrl() {
    return this.req.getUrl();
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

  getRemoteAddress() {
    const arrayBuffer = this.res.getRemoteAddressAsText();

    return decoder.decode(arrayBuffer);
  }

  setHeader(key, value) {
    this.headers.set(key, value);

    return this;
  }

  setStatus(status) {
    this.status = status;

    return this;
  }

  send(body) {
    this.res.cork(() => {
      this.res.writeStatus(this.status);

      for (const [key, value] of this.headers) {
        this.res.writeHeader(key, value);
      }

      this.res.end(body);
    });
  }

  json(obj) {
    const json = JSON.stringify(obj);

    this.res.cork(() => {
      this.res.writeHeader("Content-Type", "application/json");
      this.res.end(json);
    });
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