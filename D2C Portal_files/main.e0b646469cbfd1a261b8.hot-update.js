webpackHotUpdate("main",{

/***/ "./src/pages/ViewedFilingsPage.js":
/*!****************************************!*\
  !*** ./src/pages/ViewedFilingsPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");








var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/ViewedFilingsPage.js";








var ViewedFilingsPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ViewedFilingsPage, _Component);

  function ViewedFilingsPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ViewedFilingsPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ViewedFilingsPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: [],
      filter: [],
      numberItems: "All",
      availableFormTypes: [],
      formdropdownOpen: false,
      numberdropdownOpen: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_13__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/api/stats/getRecentlyViewedFilingData', config).then(function (res) {
                var searches = res.data;

                if (searches && searches.data.length && !_this.state.filter.length) {
                  _this.setState({
                    data: searches.data,
                    availableFormTypes: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(searches.data.map(function (a) {
                      return a.formType;
                    }))),
                    filter: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(searches.data.map(function (a) {
                      return a.formType;
                    }))),
                    defaultData: false
                  });
                }
              }).catch(function (error) {
                console.log('ERROR. Could not get recent searches.');
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewedFilingsPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getDataFromDb();

              case 2:
                _context2.t0 = setInterval;
                _context2.next = 5;
                return this.getDataFromDb;

              case 5:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1, 10000);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          availableFormTypes = _this$state.availableFormTypes,
          numberItems = _this$state.numberItems;
      var numberFilter = ["All", 5, 10, 25, 50, 100];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Viewed Filings"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFormTypes);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "All"), availableFormTypes.map(function (formType) {
        var badgeColor = "primary";
        var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_12__["filings"]);

        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: formType,
          onClick: function onClick() {
            return _this2.handleFilterClick([formType]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, formType, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
          color: badgeColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, formType));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "d-flex flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["Filings"], {
        data: data,
        filter: filter,
        number: numberItems,
        apiRoute: 'sec',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), !data.length ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          minHeight: "100px"
        },
        className: "d-flex flex-row align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "No Recently Viewed Filings")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "fit-content",
          margin: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["NavLink"], {
        to: "/secfilings",
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Find Recent Filings")))) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })));
    }
  }]);

  return ViewedFilingsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ViewedFilingsPage);

/***/ })

})
//# sourceMappingURL=main.e0b646469cbfd1a261b8.hot-update.js.map