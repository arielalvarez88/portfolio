'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ProjectSection = require('./sections/ProjectSection.js');

var _SkillsSection = require('./sections/SkillsSection.js');

var _InfoSection = require('./sections/InfoSection.js');

var _ExperienceSection = require('./sections/ExperienceSection.js');

var _EducationSection = require('./sections/EducationSection.js');

var _Certifications = require('./sections/Certifications.js');

var _Courses = require('./sections/Courses.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */
require("bootstrap");


var pageTpl = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_InfoSection.InfoSection, { id: 'section-infosection' }),
    _react2.default.createElement(_SkillsSection.SkillsSection, { id: 'section-skillssection' }),
    _react2.default.createElement(_ProjectSection.ProjectSection, { id: 'section-projectssection' }),
    _react2.default.createElement(_ExperienceSection.ExperienceSection, { id: 'section-experiencesection' }),
    _react2.default.createElement(_EducationSection.EducationSection, { id: 'section-educationsection' }),
    _react2.default.createElement(_Certifications.Certifications, { id: 'section-certificationssection' }),
    _react2.default.createElement(_Courses.Courses, { id: 'section-coursessection' })
);

_reactDom2.default.render(pageTpl, document.getElementById("jsx-app"));