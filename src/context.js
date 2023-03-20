export default class Context {
  constructor(res, req) {
    this.res = res;
    this.req = req;
    this.aborted = false;
  }

  setYield(y) {
    return this.req.setYield(y);
  }

  getMethod() {
    return this.req.getMethod();
  }

  getCaseSensitiveMethod() {
    return this.req.getCaseSensitiveMethod();
  }

  getUrl() {
    return this.req.getUrl();
  }

  getHeader(key) {
    return this.req.getHeader(key);
  }

  forEachHeader(cb) {
    return this.req.forEach(cb);
  }

  getQuery(key) {
    return this.req.getQuery(key);
  }

  getParameter(index) {
    return this.req.getParameter(index);
  }

  getProxiedRemoteAddress() {
    return this.res.getProxiedRemoteAddress();
  }

  getProxiedRemoteAddressAsText() {
    return this.res.getProxiedRemoteAddressAsText();
  }

  getRemoteAddress() {
    return this.res.getRemoteAddress();
  }

  getRemoteAddressAsText() {
    return this.res.getRemoteAddressAsText();
  }

  getWriteOffset() {
    return this.res.getWriteOffset();
  }

  onAborted(handler) {
    this.res.onAborted(handler);

    return this;
  }

  onData(handler) {
    this.res.onData(handler);

    return this;
  }

  onWritable(handler) {
    this.res.onWritable(handler);

    return this;
  }

  trackAbort() {
    this.res.onAborted(() => {
      this.aborted = true;
    });

    return this;
  }

  cork(cb) {
    this.res.cork(cb);

    return this;
  }

  writeStatus(status) {
    this.res.writeStatus(status);

    return this;
  }

  writeHeader(key, value) {
    this.res.writeHeader(key, value);

    return this;
  }

  write(chunk) {
    return this.res.write(chunk);
  }

  end(body, closeConnection) {
    this.res.end(body, closeConnection);

    return this;
  }

  tryEnd(fullBodyOrChunk, totalSize) {
    return this.res.tryEnd(fullBodyOrChunk, totalSize);
  }

  json(obj) {
    const str = JSON.stringify(obj);
    this.res.writeHeader("Content-Type", "application/json");
    this.res.end(str);

    return this;
  }

  html(str) {
    this.res.writeHeader("Content-Type", "text/html; charset=utf-8");
    this.res.end(str);

    return this;
  }

  upgrade(userData, secWebSocketKey, secWebSocketProtocol, secWebSocketExtensions, context) {
    this.res.upgrade(userData, secWebSocketKey, secWebSocketProtocol, secWebSocketExtensions, context);
  }

  resume() {
    this.res.resume();
  }

  pause() {
    this.res.pause();
  }

  close() {
    this.res.close();

    return this;
  }
}