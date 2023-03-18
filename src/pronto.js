import uws from "uWebSockets.js";

import Request from "./request.js";
import Response from "./response.js";

export default class Pronto {
  constructor(options) {
    this.uws = uws.App();
    this.middleware = [];
  }

  listen(port, cb) {
    this.uws.listen(port, cb);
  }

  close() {
    //uws.us_listen_socket_close(listenSocket);
  }

  ws(pattern, behavior) {
    this.uws.ws(pattern, behavior);
  }

  use(pattern, ...middleware) {
    middleware.forEach((middleware) => {
      this.middleware.push({
        pattern,
        handler: middleware
      });
    });

    return this;
  }

  add(method, pattern, handlers) {
    // get the middleware which matches the pattern
    const middleware = this.middleware.filter((middleware) => middleware.pattern === pattern);

    // create an array of just the handlers
    const middlewareHandlers = middleware.map((middleware) => middleware.handler);

    // concatenate middleware and handlers
    const allHandlers = middlewareHandlers.concat(handlers);

    // create a function that can call each handler recursively using next()
    const requestHandler = createHandlerChain(allHandlers);

    // add route to uws
    this.uws[method](pattern, requestHandler);

    return this;
  }

  any(pattern, ...handlers) {
    this.add("any", pattern, handlers);

    return this;
  }

  connect(pattern, ...handlers) {
    this.add("connect", pattern, handlers);

    return this;
  }

  del(pattern, ...handlers) {
    this.add("del", pattern, handlers);

    return this;
  }

  get(pattern, ...handlers) {
    this.add("get", pattern, handlers);

    return this;
  }

  head(pattern, ...handlers) {
    this.add("head", pattern, handlers);

    return this;
  }

  options(pattern, ...handlers) {
    this.add("options", pattern, handlers);

    return this;
  }

  patch(pattern, ...handlers) {
    this.add("patch", pattern, handlers);

    return this;
  }

  post(pattern, ...handlers) {
    this.add("post", pattern, handlers);

    return this;
  }

  put(pattern, ...handlers) {
    this.add("put", pattern, handlers);

    return this;
  }

  trace(pattern, ...handlers) {
    this.add("trace", pattern, handlers);

    return this;
  }
}

// creates a chain of handlers
function createHandlerChain(handlers) {
  // the final function that uWS calls
  return function (response, request) {
    let index = 0;

    const req = new Request(request);
    const res = new Response(response);

    function next() {
      // get handler
      const handler = handlers[index++];
      // execute
      handler(req, res, next);
    }

    next();
  }
}