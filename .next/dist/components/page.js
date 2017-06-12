'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _section = require('../components/section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_header2.default, null), _react2.default.createElement(_section2.default, null, props.children), _react2.default.createElement(_footer2.default, null));
};

exports.default = Page;