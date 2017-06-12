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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width: 640px;\n  margin: 0 auto;\n  font-size: 0.9em;\n  text-align: center;\n  margin: 2rem auto;\n  color: #aaa;\n\n  a {\n    color: #aaa;\n\n    &:hover {\n      color: #0881b3;\n    }\n  }\n'], ['\n  max-width: 640px;\n  margin: 0 auto;\n  font-size: 0.9em;\n  text-align: center;\n  margin: 2rem auto;\n  color: #aaa;\n\n  a {\n    color: #aaa;\n\n    &:hover {\n      color: #0881b3;\n    }\n  }\n']);

var FooterContainer = _styledComponents2.default.footer(_templateObject);

var Footer = function Footer(props) {
  return _react2.default.createElement(FooterContainer, null, _react2.default.createElement('p', null, '\xA9 2017 ', _react2.default.createElement('a', { href: '/', rel: 'home' }, 'Brandon Roeder')));
};

exports.default = Footer;