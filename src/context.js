const decoder = new TextDecoder();

export default class Context {
  constructor(res, req) {
    this.res = res;
    this.req = req;


  }

  get ip() {
    const arrayBuffer = this.response.getRemoteAddressAsText();

    return decoder.decode(arrayBuffer);
  }

  get method() {
    return this.req.getMethod();
  }

  get url() {
    return this.req.getUrl();
  }

  set yield(val) {
    return this.req.setYield(val);
  }

  close() {
    return this.res.close();
  }

  write(chunk) {


    return this.res.write(chunk);
  }

  end(body, closeConnection) {

    
    this.res.end(body, closeConnection);

    return this;
  }

  json(obj) {
    const json = JSON.stringify(obj);

    return this
      .header("Content-Type", "application/json")
      .end(json);
  }

  header(key, value) {
    this.res.writeHeader(key, value);

    return this;
  }

  status(status) {
    this.res.writeStatus(status);

    return this;
  }
}