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

var _CoursesSection = require('./sections/CoursesSection.js');

var _CongressesSection = require('./sections/CongressesSection.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */
require("bootstrap");


var pageTpl = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('div', { className: 'black-screen' }),
    _react2.default.createElement(_InfoSection.InfoSection, { id: 'section-infosection', className: 'first-section' }),
    _react2.default.createElement(_SkillsSection.SkillsSection, { id: 'section-skillssection' }),
    _react2.default.createElement(_ProjectSection.ProjectSection, { id: 'section-projectssection' }),
    _react2.default.createElement(_ExperienceSection.ExperienceSection, { id: 'section-experiencesection' }),
    _react2.default.createElement(_EducationSection.EducationSection, { id: 'section-educationsection' }),
    _react2.default.createElement(_Certifications.Certifications, { id: 'section-certificationssection' }),
    _react2.default.createElement(_CongressesSection.CongressesSection, { id: 'section-congressessection' }),
    _react2.default.createElement(_CoursesSection.CoursesSection, { id: 'section-coursessection', className: 'last-section' })
);

_reactDom2.default.render(pageTpl, document.getElementById("jsx-app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL3JlYWN0L2FsbC5qc3giXSwibmFtZXMiOlsicmVxdWlyZSIsInBhZ2VUcGwiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBWEE7QUFDQUEsUUFBUSxXQUFSOzs7QUFZQSxJQUFJQyxVQUNKO0FBQUE7QUFBQTtBQUVJLDJDQUFLLFdBQVUsY0FBZixHQUZKO0FBR0ksa0NBQUMsd0JBQUQsSUFBYSxJQUFHLHFCQUFoQixFQUFzQyxXQUFVLGVBQWhELEdBSEo7QUFJSSxrQ0FBQyw0QkFBRCxJQUFlLElBQUcsdUJBQWxCLEdBSko7QUFLSSxrQ0FBQyw4QkFBRCxJQUFnQixJQUFHLHlCQUFuQixHQUxKO0FBTUksa0NBQUMsb0NBQUQsSUFBbUIsSUFBRywyQkFBdEIsR0FOSjtBQU9JLGtDQUFDLGtDQUFELElBQWtCLElBQUcsMEJBQXJCLEdBUEo7QUFRSSxrQ0FBQyw4QkFBRCxJQUFnQixJQUFHLCtCQUFuQixHQVJKO0FBU0ksa0NBQUMsb0NBQUQsSUFBbUIsSUFBRywyQkFBdEIsR0FUSjtBQVVJLGtDQUFDLDhCQUFELElBQWdCLElBQUcsd0JBQW5CLEVBQTRDLFdBQVUsY0FBdEQ7QUFWSixDQURBOztBQWlCQUMsbUJBQVNDLE1BQVQsQ0FBZ0JGLE9BQWhCLEVBQXdCRyxTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQXhCIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IGVzdmVyc2lvbjogNiAqL1xucmVxdWlyZShcImJvb3RzdHJhcFwiKTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UHJvamVjdFNlY3Rpb259IGZyb20gJy4vc2VjdGlvbnMvUHJvamVjdFNlY3Rpb24uanMnO1xuaW1wb3J0IHtTa2lsbHNTZWN0aW9ufSBmcm9tICcuL3NlY3Rpb25zL1NraWxsc1NlY3Rpb24uanMnO1xuaW1wb3J0IHtJbmZvU2VjdGlvbn0gZnJvbSAnLi9zZWN0aW9ucy9JbmZvU2VjdGlvbi5qcyc7XG5pbXBvcnQge0V4cGVyaWVuY2VTZWN0aW9ufSBmcm9tICcuL3NlY3Rpb25zL0V4cGVyaWVuY2VTZWN0aW9uLmpzJztcbmltcG9ydCB7RWR1Y2F0aW9uU2VjdGlvbn0gZnJvbSAnLi9zZWN0aW9ucy9FZHVjYXRpb25TZWN0aW9uLmpzJztcbmltcG9ydCB7Q2VydGlmaWNhdGlvbnN9IGZyb20gJy4vc2VjdGlvbnMvQ2VydGlmaWNhdGlvbnMuanMnO1xuaW1wb3J0IHtDb3Vyc2VzU2VjdGlvbn0gZnJvbSAnLi9zZWN0aW9ucy9Db3Vyc2VzU2VjdGlvbi5qcyc7XG5pbXBvcnQge0NvbmdyZXNzZXNTZWN0aW9ufSBmcm9tICcuL3NlY3Rpb25zL0NvbmdyZXNzZXNTZWN0aW9uLmpzJztcblxudmFyIHBhZ2VUcGwgPSAoXG48ZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibGFjay1zY3JlZW5cIj48L2Rpdj5cbiAgICA8SW5mb1NlY3Rpb24gaWQ9XCJzZWN0aW9uLWluZm9zZWN0aW9uXCIgY2xhc3NOYW1lPVwiZmlyc3Qtc2VjdGlvblwiLz5cbiAgICA8U2tpbGxzU2VjdGlvbiBpZD1cInNlY3Rpb24tc2tpbGxzc2VjdGlvblwiLz5cbiAgICA8UHJvamVjdFNlY3Rpb24gaWQ9XCJzZWN0aW9uLXByb2plY3Rzc2VjdGlvblwiLz5cbiAgICA8RXhwZXJpZW5jZVNlY3Rpb24gaWQ9XCJzZWN0aW9uLWV4cGVyaWVuY2VzZWN0aW9uXCIvPlxuICAgIDxFZHVjYXRpb25TZWN0aW9uIGlkPVwic2VjdGlvbi1lZHVjYXRpb25zZWN0aW9uXCIvPlxuICAgIDxDZXJ0aWZpY2F0aW9ucyBpZD1cInNlY3Rpb24tY2VydGlmaWNhdGlvbnNzZWN0aW9uXCIvPlxuICAgIDxDb25ncmVzc2VzU2VjdGlvbiBpZD1cInNlY3Rpb24tY29uZ3Jlc3Nlc3NlY3Rpb25cIiAvPlxuICAgIDxDb3Vyc2VzU2VjdGlvbiBpZD1cInNlY3Rpb24tY291cnNlc3NlY3Rpb25cIiBjbGFzc05hbWU9XCJsYXN0LXNlY3Rpb25cIi8+XG5cbjwvZGl2PlxuXG4pO1xuXG5SZWFjdERPTS5yZW5kZXIocGFnZVRwbCxkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzeC1hcHBcIikpO1xuIl19