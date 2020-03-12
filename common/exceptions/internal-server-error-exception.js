const HttpException = require('./http-exception');

class InternalServerErrorException extends HttpException {
  constructor() {
    super(500, 'Internal Server Error');
  }
}

module.exports = InternalServerErrorException;
