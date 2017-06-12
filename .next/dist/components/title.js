'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Landmark Dimensional A\', \'Landmark Dimensional B\', sans-serif;\n  font-size: 66px;\n  line-height: 1em;\n\n  a {\n    color: rgb(246, 41, 29);\n  }\n\n  a, a:hover {\n    border: 0;\n  }\n'], ['\n  font-family: \'Landmark Dimensional A\', \'Landmark Dimensional B\', sans-serif;\n  font-size: 66px;\n  line-height: 1em;\n\n  a {\n    color: rgb(246, 41, 29);\n  }\n\n  a, a:hover {\n    border: 0;\n  }\n']);

var Title = _styledComponents2.default.h1(_templateObject);
exports.default = Title;