export default class Request {
  constructor(request) {
    this.request = request;
  }

  get method() {
    return this.request.getMethod();
  }

  get url() {
    return this.request.getUrl();
  }

  set yield(val) {
    return this.request.setYield(val);
  }

  query(key) {
    return this.request.getHeader(getQuery);
  }

  header(key) {
    return this.request.getHeader(key);
  }

  param(index) {
    return this.request.getParameter(index);
  }
}