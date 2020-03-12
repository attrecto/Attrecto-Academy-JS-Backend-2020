const HttpException = require('./http-exception');

class NotFoundException extends HttpException {
  constructor() {
    super(404, 'Not Found');
  }
}

module.exports = NotFoundException;
