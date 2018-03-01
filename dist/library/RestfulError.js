'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RestfulError = (_temp = _class = function () {
  function RestfulError() {
    var _status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

    var _message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var _error = arguments[2];

    _classCallCheck(this, RestfulError);

    var status = _status;
    var message = _message;
    var error = _error;
    if ((typeof status === 'undefined' ? 'undefined' : _typeof(status)) === 'object') {
      var _status2 = status;
      var _status2$status = _status2.status;
      status = _status2$status === undefined ? 500 : _status2$status;
      message = _status2.message;
      error = _status2.error;
    }
    this.status = status;
    this.message = message;
    this.error = error;
  }

  _createClass(RestfulError, [{
    key: 'koaThrow',
    value: function koaThrow(ctx) {
      var message = this.message;
      if (typeof message !== 'string') {
        message = JSON.stringify(this.message);
      }
      return ctx.throw(this.status, {
        message: message,
        expose: true,
        restfulError: this
      });
    }
  }]);

  return RestfulError;
}(), _class.rejectWith = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Promise.reject(new (Function.prototype.bind.apply(RestfulError, [null].concat(args)))());
}, _class.koaThrowWith = function (ctx) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var error = new (Function.prototype.bind.apply(RestfulError, [null].concat(args)))();
  return error.koaThrow(ctx);
}, _temp);
exports.default = RestfulError;