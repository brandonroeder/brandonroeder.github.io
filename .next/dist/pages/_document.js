'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      // Hack to prevent unstyled flash with styled-components.
      // From https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, null));
      var styleTags = sheet.getStyleElement();
      return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('title', null, 'Brandon Roeder'), _react2.default.createElement('link', { rel: 'author', type: 'text/plain', href: '/humans.txt' }), _react2.default.createElement('meta', { property: 'og:site_name', content: 'Brandon Roeder' }), _react2.default.createElement('meta', { property: 'og:title', content: 'Brandon Roeder' }), _react2.default.createElement('meta', { property: 'og:type', content: 'profile' }), _react2.default.createElement('meta', { property: 'og:locale', content: 'en_US' }), _react2.default.createElement('link', { rel: 'canonical', href: 'http://brandonsroeder.com' }), _react2.default.createElement('meta', { property: 'og:url', content: 'http://brandonsroeder.com' }), _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }), _react2.default.createElement('meta', { property: 'profile:first_name', content: 'Brandon' }), _react2.default.createElement('meta', { property: 'profile:last_name', content: 'Roeder' }), _react2.default.createElement('meta', { property: 'profile:gender', content: 'male' }), _react2.default.createElement('meta', { property: 'profile:username', content: 'brandonscott' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cloud.typography.com/619254/777982/css/fonts.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/base.css' }), styleTags), _react2.default.createElement('body', null, _react2.default.createElement('div', { className: 'root' }, main), _react2.default.createElement(_document.NextScript, null)));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;