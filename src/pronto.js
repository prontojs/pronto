import uws from "uWebSockets.js";

export default class Pronto {
  constructor(options) {
    this.uws = uws.App();
    this.middleware = [];
  }

  use(pattern, ...middleware) {
    middleware.forEach((middleware) => {
      this.middleware.push({
        pattern,
        handler: middleware
      });
    });
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

  get(pattern, ...handlers) {
    this.add("get", pattern, handlers);

    return this;
  }

  post(pattern, ...handlers) {
    this.add("post", pattern, handlers);

    return this;
  }

  listen(port, cb) {
    this.uws.listen(port, cb);
  }

  close() {
    //uws.us_listen_socket_close(listenSocket);
  }
}

// creates a chain of handlers
function createHandlerChain(handlers) {
  // the final function that uWS calls
  return function (response, request) {
    let index = 0;

    function next() {
      // get handler
      const handler = handlers[index++];
      // execute
      handler(request, response, next);
    }

    next();
  }
}