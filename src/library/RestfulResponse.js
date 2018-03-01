export default class RestfulResponse {
  static resolveWith = (...args) => {
    return Promise.resolve(new RestfulResponse(...args));
  };

  static koaResponseWith = (ctx, ...args) => {
    let error = new RestfulResponse(...args)
    return error.koaResponse(ctx);
  };

  constructor(_status = 200, _body = '', _headers = {}, _data){
    let status = _status;
    let body = _body;
    let headers = _headers;
    let data = _data;
    if(typeof status === 'object'){
      ({
        status = 200,
        body,
        headers = {},
        data,
      } = status);
    }
    this.status = status;
    this.body = body;
    this.headers = headers;
    this.data = data;
  }

  koaResponse(ctx){
    ctx.status = this.status;
    ctx.set(this.headers);
    ctx.restfulResponse = this;
    return ctx.body = this.body;
  }
}
