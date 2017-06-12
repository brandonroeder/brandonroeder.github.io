'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('../components/page');

var _page2 = _interopRequireDefault(_page);

var _reactTwitterWidgets = require('react-twitter-widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_page2.default, null, _react2.default.createElement('p', null, 'I am a iOS engineer focused on making awesome apps. I attended ', _react2.default.createElement('a', { href: 'https://www.utdallas.edu', rel: 'external nofollow' }, 'The University of Texas at Dallas'), ' where I majored in Software Engineering.'), _react2.default.createElement('p', null, 'My email is ', _react2.default.createElement('a', { href: 'mailto:brandonsroeder@gmail.com' }, 'brandonsroeder@gmail.com'), '. Feel free to check out my ', _react2.default.createElement('a', { href: '/static/resume.pdf' }, 'resume'), ', ', _react2.default.createElement('a', { href: 'https://www.github.com/brandonroeder', rel: 'external nofollow' }, 'Github'), ', or ', _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/brandonroeder', rel: 'external nofollow' }, 'LinkedIn'), '.'), _react2.default.createElement(_reactTwitterWidgets.Follow, { username: 'brandonscott', options: { size: "large" } }));
};