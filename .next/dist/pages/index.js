'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('../components/page');

var _page2 = _interopRequireDefault(_page);

var _heading = require('../components/heading');

var _heading2 = _interopRequireDefault(_heading);

var _subheading = require('../components/subheading');

var _subheading2 = _interopRequireDefault(_subheading);

var _reactTwitterWidgets = require('react-twitter-widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_page2.default, null, _react2.default.createElement(_heading2.default, null, 'Hi, I\'m Brandon'), _react2.default.createElement('p', null, 'I\'m a software engineer living in Austin, TX. I currently work as an iOS Developer at ', _react2.default.createElement('a', { href: 'https://www.malauzai.com', rel: 'external nofollow' }, 'Malauzai Software'), '.'), _react2.default.createElement('p', null, 'I attended ', _react2.default.createElement('a', { href: 'https://www.utdallas.edu', rel: 'external nofollow' }, 'The University of Texas at Dallas'), ' where I majored in Software Engineering.'), _react2.default.createElement('p', null, 'My email is ', _react2.default.createElement('a', { href: 'mailto:brandonsroeder@gmail.com' }, 'brandonsroeder@gmail.com'), '. Feel free to check out my ', _react2.default.createElement('a', { href: '/static/resume.pdf' }, 'resume'), ', ', _react2.default.createElement('a', { href: 'https://www.github.com/brandonroeder', rel: 'external nofollow' }, 'Github'), ', or ', _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/brandonroeder', rel: 'external nofollow' }, 'LinkedIn'), '.'), _react2.default.createElement(_reactTwitterWidgets.Follow, { username: 'brandonscott', options: { size: "large" } }));
};