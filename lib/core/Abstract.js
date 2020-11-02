'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _nodeSpringUtil = require('./nodeSpringUtil');

var _nodeSpringUtil2 = _interopRequireDefault(_nodeSpringUtil);

var _NodeSpringException = require('../exceptions/NodeSpringException');

var _NodeSpringException2 = _interopRequireDefault(_NodeSpringException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Abstract
                                                                                                                                                           * @calbertts
                                                                                                                                                           */

var Abstract = function Abstract() {
  _classCallCheck(this, Abstract);

  // new.target === Abstract ||   ... removed because need to downgrade to 4.6.0
  if (Object.getPrototypeOf(this.constructor).name === 'Abstract') {
    var noInstantiable = new _NodeSpringException2.default("Cannot construct " + this.constructor.name + " instances directly", this, 1);
    _nodeSpringUtil2.default.throwNodeSpringException(noInstantiable);
  }
};

exports.default = Abstract;
//# sourceMappingURL=Abstract.js.map