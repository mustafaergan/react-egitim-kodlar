"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    var _this;

    _classCallCheck(this, Counter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this));
    _this.onIncrease = _this.onIncrease.bind(_assertThisInitialized(_this));
    _this.onDecrease = _this.onDecrease.bind(_assertThisInitialized(_this));
    _this.state = {
      count: 1
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "onDecrease",
    value: function onDecrease() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "onIncrease",
    value: function onIncrease() {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      }, function () {
        console.log('arttır!', _this2.state.count);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "Hello React"), React.createElement("p", null, "Current Count: ", this.state.count), React.createElement("button", {
        onClick: this.onDecrease
      }, "Azalt"), React.createElement("button", {
        onClick: this.onIncrease
      }, "Artt\u0131r"));
    }
  }]);

  return Counter;
}(React.Component);

var root = document.getElementById('app');
ReactDOM.render(React.createElement(Counter, null), root);
