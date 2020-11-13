'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Square = function (_React$Component) {
  _inherits(Square, _React$Component);

  function Square() {
    _classCallCheck(this, Square);

    return _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).apply(this, arguments));
  }

  _createClass(Square, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'button',
        { className: 'square', onClick: function onClick() {
            return _this2.props.onClick();
          } },
        this.props.value
      );
    }
  }]);

  return Square;
}(_react2.default.Component);

var Board = function (_React$Component2) {
  _inherits(Board, _React$Component2);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'renderSquare',
    value: function renderSquare(i) {
      var _this4 = this;

      return _react2.default.createElement(Square, { value: this.props.squares[i], onClick: function onClick() {
          return _this4.props.onClick(i);
        } });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(0),
          this.renderSquare(1),
          this.renderSquare(2)
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(3),
          this.renderSquare(4),
          this.renderSquare(5)
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(6),
          this.renderSquare(7),
          this.renderSquare(8)
        )
      );
    }
  }]);

  return Board;
}(_react2.default.Component);

var Game = function (_React$Component3) {
  _inherits(Game, _React$Component3);

  function Game() {
    _classCallCheck(this, Game);

    var _this5 = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

    _this5.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
    return _this5;
  }

  _createClass(Game, [{
    key: 'handleClick',
    value: function handleClick(i) {

      var history = this.state.history.slice();
      var latest = { squares: null };
      latest.squares = history[history.length - 1].squares.slice();
      latest.squares[i] = this.state.xIsNext ? "X" : "O";

      this.setState({ history: history.concat([latest]), xIsNext: !this.state.xIsNext, stepNumber: this.state.stepNumber + 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var winner = calculateWinner(current.squares);
      var status = void 0;
      if (winner) {
        status = "Winner is : " + winner;
      } else {
        status = "Next move is: " + (this.state.xIsNext ? "X" : "O");
      }
      var moves = history.map(function (squares, index) {
        var desc = index ? "Move # " + index : "Beggining of Game";
        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick() {
                return _this6.jumpTo(index);
              } },
            desc
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'game' },
        _react2.default.createElement(
          'div',
          { className: 'game-board' },
          _react2.default.createElement(Board, { onClick: function onClick(i) {
              return _this6.handleClick(i);
            }, squares: current.squares })
        ),
        _react2.default.createElement(
          'div',
          { className: 'game-info' },
          _react2.default.createElement(
            'div',
            null,
            status
          ),
          _react2.default.createElement(
            'ol',
            null,
            moves
          )
        )
      );
    }
  }, {
    key: 'jumpTo',
    value: function jumpTo(index) {

      this.setState({
        stepNumber: index,
        xIsNext: index % 2 ? false : true
      });
    }
  }]);

  return Game;
}(_react2.default.Component);

// ========================================

_reactDom2.default.render(_react2.default.createElement(Game, null), document.getElementById('container'));

function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzL3JlYWN0L3RpYy5qc3giXSwibmFtZXMiOlsiU3F1YXJlIiwicHJvcHMiLCJvbkNsaWNrIiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkJvYXJkIiwiaSIsInNxdWFyZXMiLCJyZW5kZXJTcXVhcmUiLCJHYW1lIiwic3RhdGUiLCJoaXN0b3J5IiwiQXJyYXkiLCJmaWxsIiwic3RlcE51bWJlciIsInhJc05leHQiLCJzbGljZSIsImxhdGVzdCIsImxlbmd0aCIsInNldFN0YXRlIiwiY29uY2F0IiwiY3VycmVudCIsIndpbm5lciIsImNhbGN1bGF0ZVdpbm5lciIsInN0YXR1cyIsIm1vdmVzIiwibWFwIiwiaW5kZXgiLCJkZXNjIiwianVtcFRvIiwiaGFuZGxlQ2xpY2siLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsaW5lcyIsImEiLCJiIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR01BLE07Ozs7Ozs7Ozs7OzZCQUNPO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBUSxXQUFVLFFBQWxCLEVBQTJCLFNBQVM7QUFBQSxtQkFBTSxPQUFLQyxLQUFMLENBQVdDLE9BQVgsRUFBTjtBQUFBLFdBQXBDO0FBQ0csYUFBS0QsS0FBTCxDQUFXRTtBQURkLE9BREY7QUFLRDs7OztFQVBnQkMsZ0JBQU1DLFM7O0lBVW5CQyxLOzs7Ozs7Ozs7OztpQ0FFU0MsQyxFQUFHO0FBQUE7O0FBQ2QsYUFBTyw4QkFBQyxNQUFELElBQVEsT0FBTyxLQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJELENBQW5CLENBQWYsRUFBc0MsU0FBUztBQUFBLGlCQUFLLE9BQUtOLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkssQ0FBbkIsQ0FBTDtBQUFBLFNBQS9DLEdBQVA7QUFDRDs7OzZCQUdROztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFm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LE1BQWU3QixRQUFROEIsQ0FBUixDQUE3QixJQUEyQzlCLFFBQVE2QixDQUFSLE1BQWU3QixRQUFRK0IsQ0FBUixDQUE5RCxFQUEwRTtBQUN4RSxhQUFPL0IsUUFBUTZCLENBQVIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFPLElBQVA7QUFDRCIsImZpbGUiOiJ0aWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cblxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNxdWFyZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljaygpfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlclNxdWFyZShpKSB7XG4gICAgICByZXR1cm4gPFNxdWFyZSB2YWx1ZT17dGhpcy5wcm9wcy5zcXVhcmVzW2ldfSBvbkNsaWNrPXsoKT0+IHRoaXMucHJvcHMub25DbGljayhpKX0vPjtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMCl9XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMSl9XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgzKX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg0KX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg1KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDYpfVxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDcpfVxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKXtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBoaXN0b3J5OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcXVhcmVzOiBBcnJheSg5KS5maWxsKG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RlcE51bWJlciA6IDAsXG4gICAgICAgIHhJc05leHQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhpKXtcblxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKCk7XG4gICAgICAgIGNvbnN0IGxhdGVzdCA9IHtzcXVhcmVzOiBudWxsfTtcbiAgICAgICAgbGF0ZXN0LnNxdWFyZXMgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoLTFdLnNxdWFyZXMuc2xpY2UoKTtcbiAgICAgICAgbGF0ZXN0LnNxdWFyZXNbaV0gPSB0aGlzLnN0YXRlLnhJc05leHQ/IFwiWFwiIDogXCJPXCI7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGlzdG9yeSA6IGhpc3RvcnkuY29uY2F0KFsgbGF0ZXN0IF0pLCB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0LCBzdGVwTnVtYmVyOiB0aGlzLnN0YXRlLnN0ZXBOdW1iZXIgKyAxfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W3RoaXMuc3RhdGUuc3RlcE51bWJlcl07XG4gICAgICBjb25zdCB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcbiAgICAgIGxldCBzdGF0dXM7XG4gICAgICBpZih3aW5uZXIpe1xuICAgICAgICBzdGF0dXMgPSBcIldpbm5lciBpcyA6IFwiICsgd2lubmVyO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHN0YXR1cyA9IFwiTmV4dCBtb3ZlIGlzOiBcIiArICh0aGlzLnN0YXRlLnhJc05leHQ/IFwiWFwiIDogXCJPXCIpXG4gICAgICB9XG4gICAgICBjb25zdCBtb3ZlcyA9IGhpc3RvcnkubWFwKChzcXVhcmVzLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjID0gaW5kZXggPyBcIk1vdmUgIyBcIiArIGluZGV4IDogXCJCZWdnaW5pbmcgb2YgR2FtZVwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gdGhpcy5qdW1wVG8oaW5kZXgpfT57ZGVzY308L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKVxuICAgICAgfSk7XG5cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWJvYXJkXCI+XG4gICAgICAgICAgICA8Qm9hcmQgb25DbGljaz17KGkpID0+IHRoaXMuaGFuZGxlQ2xpY2soaSl9IHNxdWFyZXM9e2N1cnJlbnQuc3F1YXJlc30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2PntzdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICA8b2w+e21vdmVzfTwvb2w+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBqdW1wVG8oaW5kZXgpe1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdGVwTnVtYmVyOiBpbmRleCxcbiAgICAgICAgICB4SXNOZXh0IDogKGluZGV4ICUgMiA/IGZhbHNlIDogIHRydWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEdhbWUgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gICk7XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpIHtcbiAgICBjb25zdCBsaW5lcyA9IFtcbiAgICAgIFswLCAxLCAyXSxcbiAgICAgIFszLCA0LCA1XSxcbiAgICAgIFs2LCA3LCA4XSxcbiAgICAgIFswLCAzLCA2XSxcbiAgICAgIFsxLCA0LCA3XSxcbiAgICAgIFsyLCA1LCA4XSxcbiAgICAgIFswLCA0LCA4XSxcbiAgICAgIFsyLCA0LCA2XSxcbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xuICAgICAgaWYgKHNxdWFyZXNbYV0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tiXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2NdKSB7XG4gICAgICAgIHJldHVybiBzcXVhcmVzW2FdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuIl19