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

var _Navbar = require('./widgets/Navbar.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */
require("bootstrap");


var pageTpl = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Navbar.Navbar, null),
    _react2.default.createElement(
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
    )
);

_reactDom2.default.render(pageTpl, document.getElementById("jsx-app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL3JlYWN0L2FsbC5qc3giXSwibmFtZXMiOlsicmVxdWlyZSIsInBhZ2VUcGwiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBWkE7QUFDQUEsUUFBUSxXQUFSOzs7QUFhQSxJQUFJQyxVQUNKO0FBQUE7QUFBQTtBQUNJLGtDQUFDLGNBQUQsT0FESjtBQUVJO0FBQUE7QUFBQTtBQUVJLCtDQUFLLFdBQVUsY0FBZixHQUZKO0FBR0ksc0NBQUMsd0JBQUQsSUFBYSxJQUFHLHFCQUFoQixFQUFzQyxXQUFVLGVBQWhELEdBSEo7QUFJSSxzQ0FBQyw0QkFBRCxJQUFlLElBQUcsdUJBQWxCLEdBSko7QUFLSSxzQ0FBQyw4QkFBRCxJQUFnQixJQUFHLHlCQUFuQixHQUxKO0FBTUksc0NBQUMsb0NBQUQsSUFBbUIsSUFBRywyQkFBdEIsR0FOSjtBQU9JLHNDQUFDLGtDQUFELElBQWtCLElBQUcsMEJBQXJCLEdBUEo7QUFRSSxzQ0FBQyw4QkFBRCxJQUFnQixJQUFHLCtCQUFuQixHQVJKO0FBU0ksc0NBQUMsb0NBQUQsSUFBbUIsSUFBRywyQkFBdEIsR0FUSjtBQVVJLHNDQUFDLDhCQUFELElBQWdCLElBQUcsd0JBQW5CLEVBQTRDLFdBQVUsY0FBdEQ7QUFWSjtBQUZKLENBREE7O0FBbUJBQyxtQkFBU0MsTUFBVCxDQUFnQkYsT0FBaEIsRUFBd0JHLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBeEIiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5yZXF1aXJlKFwiYm9vdHN0cmFwXCIpO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtQcm9qZWN0U2VjdGlvbn0gZnJvbSAnLi9zZWN0aW9ucy9Qcm9qZWN0U2VjdGlvbi5qcyc7XG5pbXBvcnQge1NraWxsc1NlY3Rpb259IGZyb20gJy4vc2VjdGlvbnMvU2tpbGxzU2VjdGlvbi5qcyc7XG5pbXBvcnQge0luZm9TZWN0aW9ufSBmcm9tICcuL3NlY3Rpb25zL0luZm9TZWN0aW9uLmpzJztcbmltcG9ydCB7RXhwZXJpZW5jZVNlY3Rpb259IGZyb20gJy4vc2VjdGlvbnMvRXhwZXJpZW5jZVNlY3Rpb24uanMnO1xuaW1wb3J0IHtFZHVjYXRpb25TZWN0aW9ufSBmcm9tICcuL3NlY3Rpb25zL0VkdWNhdGlvblNlY3Rpb24uanMnO1xuaW1wb3J0IHtDZXJ0aWZpY2F0aW9uc30gZnJvbSAnLi9zZWN0aW9ucy9DZXJ0aWZpY2F0aW9ucy5qcyc7XG5pbXBvcnQge0NvdXJzZXNTZWN0aW9ufSBmcm9tICcuL3NlY3Rpb25zL0NvdXJzZXNTZWN0aW9uLmpzJztcbmltcG9ydCB7Q29uZ3Jlc3Nlc1NlY3Rpb259IGZyb20gJy4vc2VjdGlvbnMvQ29uZ3Jlc3Nlc1NlY3Rpb24uanMnO1xuaW1wb3J0IHtOYXZiYXJ9IGZyb20gJy4vd2lkZ2V0cy9OYXZiYXIuanMnO1xuXG52YXIgcGFnZVRwbCA9IChcbjxkaXY+XG4gICAgPE5hdmJhci8+XG4gICAgPGRpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYWNrLXNjcmVlblwiPjwvZGl2PlxuICAgICAgICA8SW5mb1NlY3Rpb24gaWQ9XCJzZWN0aW9uLWluZm9zZWN0aW9uXCIgY2xhc3NOYW1lPVwiZmlyc3Qtc2VjdGlvblwiLz5cbiAgICAgICAgPFNraWxsc1NlY3Rpb24gaWQ9XCJzZWN0aW9uLXNraWxsc3NlY3Rpb25cIi8+XG4gICAgICAgIDxQcm9qZWN0U2VjdGlvbiBpZD1cInNlY3Rpb24tcHJvamVjdHNzZWN0aW9uXCIvPlxuICAgICAgICA8RXhwZXJpZW5jZVNlY3Rpb24gaWQ9XCJzZWN0aW9uLWV4cGVyaWVuY2VzZWN0aW9uXCIvPlxuICAgICAgICA8RWR1Y2F0aW9uU2VjdGlvbiBpZD1cInNlY3Rpb24tZWR1Y2F0aW9uc2VjdGlvblwiLz5cbiAgICAgICAgPENlcnRpZmljYXRpb25zIGlkPVwic2VjdGlvbi1jZXJ0aWZpY2F0aW9uc3NlY3Rpb25cIi8+XG4gICAgICAgIDxDb25ncmVzc2VzU2VjdGlvbiBpZD1cInNlY3Rpb24tY29uZ3Jlc3Nlc3NlY3Rpb25cIiAvPlxuICAgICAgICA8Q291cnNlc1NlY3Rpb24gaWQ9XCJzZWN0aW9uLWNvdXJzZXNzZWN0aW9uXCIgY2xhc3NOYW1lPVwibGFzdC1zZWN0aW9uXCIvPlxuXG4gICAgPC9kaXY+XG48L2Rpdj5cbik7XG5cblJlYWN0RE9NLnJlbmRlcihwYWdlVHBsLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianN4LWFwcFwiKSk7XG4iXX0=