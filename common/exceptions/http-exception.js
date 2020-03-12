class HttpException extends Error {
  constructor(status, message) {
    super(message);

    this.status = status;
  }

  toJSON() {
    return {
      status: this.status,
      message: this.message
    };
  }
}

module.exports = HttpException;
