"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ListingApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListingApp, _React$Component);

  function ListingApp() {
    var _this;

    _classCallCheck(this, ListingApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListingApp).call(this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      cities: []
    };
    return _this;
  }

  _createClass(ListingApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var citiesStr = sessionStorage.getItem('cities');

      if (citiesStr != undefined) {
        var cities = JSON.parse(citiesStr);
        this.setState(function () {
          return {
            cities: cities
          };
        });
      }
    }
  }, {
    key: "onRemove",
    value: function onRemove(index) {
      var _this2 = this;

      this.setState(function (prevState) {
        var cities = prevState.cities;
        var deletedItem = cities.splice(index, 1);
        return {
          cities: cities
        };
      }, function () {
        var str = JSON.stringify(_this2.state.cities);
        sessionStorage.setItem('cities', str);
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var newCity = e.target.elements.city.value;
      e.target.elements.city.value = '';
      this.setState(function (prevState) {
        var cities = [].concat(_toConsumableArray(prevState.cities), [newCity]);
        return {
          cities: cities
        };
      }, function () {
        var str = JSON.stringify(_this3.state.cities);
        sessionStorage.setItem('cities', str);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(React.Fragment, null, React.createElement("h1", null, "Hello Listing"), React.createElement("div", null, this.state.cities.length > 0 ? React.createElement("ul", null, this.state.cities.map(function (item, index) {
        return React.createElement("li", {
          key: index
        }, item, React.createElement("button", {
          onClick: function onClick() {
            _this4.onRemove(index);
          }
        }, "S\u0130L"));
      })) : React.createElement("p", null, "L\xFCtfen \u015Fehir ekleyin"), React.createElement("form", {
        onSubmit: this.onSubmit
      }, React.createElement("input", {
        placeholder: "\u015Eehir ismi yaz\u0131n..",
        name: "city"
      }), React.createElement("button", null, "Listeye Ekle"))));
    }
  }]);

  return ListingApp;
}(React.Component);

var root = document.getElementById('app');
ReactDOM.render(React.createElement(ListingApp, null), root);
