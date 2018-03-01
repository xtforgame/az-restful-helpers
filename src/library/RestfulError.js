export default class RestfulError {
  static rejectWith = (...args) => {
    return Promise.reject(new RestfulError(...args));
  };

  static koaThrowWith = (ctx, ...args) => {
    let error = new RestfulError(...args)
    return error.koaThrow(ctx);
  };

  constructor(_status = 500, _message = '', _error){
    let status = _status;
    let message = _message;
    let error = _error;
    if(typeof status === 'object'){
      ({
        status = 500,
        message,
        error,
      } = status);
    }
    this.status = status;
    this.message = message;
    this.error = error;
  }

  koaThrow(ctx){
    let message = this.message;
    if (typeof message !== 'string') {
      message = JSON.stringify(this.message);
    }
    return ctx.throw(this.status, {
      message,
      expose: true,
      restfulError: this,
    });
  }
}
