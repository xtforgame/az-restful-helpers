'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RestfulResponse = (_temp = _class = function () {
  function RestfulResponse() {
    var _status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

    var _body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var _headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _data = arguments[3];

    _classCallCheck(this, RestfulResponse);

    var status = _status;
    var body = _body;
    var headers = _headers;
    var data = _data;
    if ((typeof status === 'undefined' ? 'undefined' : _typeof(status)) === 'object') {
      var _status2 = status;
      var _status2$status = _status2.status;
      status = _status2$status === undefined ? 200 : _status2$status;
      body = _status2.body;
      var _status2$headers = _status2.headers;
      headers = _status2$headers === undefined ? {} : _status2$headers;
      data = _status2.data;
    }
    this.status = status;
    this.body = body;
    this.headers = headers;
    this.data = data;
  }

  _createClass(RestfulResponse, [{
    key: 'koaResponse',
    value: function koaResponse(ctx) {
      ctx.status = this.status;
      ctx.set(this.headers);
      ctx.restfulResponse = this;
      return ctx.body = this.body;
    }
  }]);

  return RestfulResponse;
}(), _class.resolveWith = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Promise.resolve(new (Function.prototype.bind.apply(RestfulResponse, [null].concat(args)))());
}, _class.koaResponseWith = function (ctx) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var error = new (Function.prototype.bind.apply(RestfulResponse, [null].concat(args)))();
  return error.koaResponse(ctx);
}, _temp);
exports.default = RestfulResponse;