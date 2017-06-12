'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _title = require('../components/title');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  max-width: 640px;\n  margin: 3rem auto 4rem;\n'], ['\n  display: block;\n  max-width: 640px;\n  margin: 3rem auto 4rem;\n']);

var HeaderContainer = _styledComponents2.default.header(_templateObject);

var Header = function Header(props) {
  return _react2.default.createElement(HeaderContainer, null, _react2.default.createElement(_title2.default, null, _react2.default.createElement('a', { href: '/', rel: 'home' }, 'Brandon Roeder')));
};

exports.default = Header;