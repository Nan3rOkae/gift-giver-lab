class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(message) {
    super();
    this.message = message || "Bad request";
    this.status = 400;
  }
}

class NotFoundError extends ExpressError {
  constructor(message) {
    super();
    this.message = message || "Not Found";
    this.status = 404;
  }
}

exports.BadRequestError = BadRequestError;
exports.NotFoundError = NotFoundError;
