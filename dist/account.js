"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function methods(request) {
  return {
    state: null,
    requestStateChange: function () {
      var _requestStateChange = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(method, url, id, data) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return request(method, url, id, data);

              case 2:
                result = _context.sent;

                if (!(result && result.errors)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", result);

              case 5:
                return _context.abrupt("return", this.state = result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestStateChange(_x, _x2, _x3, _x4) {
        return _requestStateChange.apply(this, arguments);
      }

      return requestStateChange;
    }(),
    get: function get() {
      return this.requestStateChange('get', '/account');
    },
    create: function create(data) {
      return this.requestStateChange('post', '/account', data);
    },
    update: function update(data) {
      return this.requestStateChange('put', '/account', data);
    },
    login: function login(email, password) {
      return this.requestStateChange('post', '/account/login', {
        email: email,
        password: password
      });
    },
    logout: function logout() {
      this.state = null;
      return request('post', '/account/logout');
    },
    recover: function recover(data) {
      return request('post', '/account/recover', data);
    },
    getAddresses: function getAddresses(query) {
      return request('get', '/account/addresses', query);
    },
    createAddress: function createAddress(data) {
      return request('post', '/account/addresses', data);
    },
    deleteAddress: function deleteAddress(id) {
      return request('delete', "/account/addresses/".concat(id));
    },
    getCards: function getCards(query) {
      return request('get', '/account/cards', query);
    },
    createCard: function createCard(data) {
      return request('post', '/account/cards', data);
    },
    deleteCard: function deleteCard(id) {
      return request('delete', "/account/cards/".concat(id));
    },
    getOrders: function getOrders(query) {
      return request('get', "/account/orders", query);
    }
  };
}

module.exports = {
  methods: methods
};