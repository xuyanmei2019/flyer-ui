/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1fo8tqzulf = function () {
    var path = 'C:\\dev\\flyer-ui\\components\\table\\src\\main.vue',
        hash = '2d955abaaf0fac9ea224825b330e830a8d4ca77e',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\dev\\flyer-ui\\components\\table\\src\\main.vue',
        statementMap: {
            '0': {
                start: {
                    line: 38,
                    column: 8
                },
                end: {
                    line: 40,
                    column: 9
                }
            },
            '1': {
                start: {
                    line: 44,
                    column: 23
                },
                end: {
                    line: 44,
                    column: 25
                }
            },
            '2': {
                start: {
                    line: 45,
                    column: 12
                },
                end: {
                    line: 49,
                    column: 13
                }
            },
            '3': {
                start: {
                    line: 46,
                    column: 16
                },
                end: {
                    line: 48,
                    column: 18
                }
            },
            '4': {
                start: {
                    line: 50,
                    column: 12
                },
                end: {
                    line: 50,
                    column: 23
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 37,
                        column: 4
                    },
                    end: {
                        line: 37,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 37,
                        column: 11
                    },
                    end: {
                        line: 41,
                        column: 5
                    }
                },
                line: 37
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 43,
                        column: 8
                    },
                    end: {
                        line: 43,
                        column: 9
                    }
                },
                loc: {
                    start: {
                        line: 43,
                        column: 22
                    },
                    end: {
                        line: 51,
                        column: 9
                    }
                },
                line: 43
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0
        },
        f: {
            '0': 0,
            '1': 0
        },
        b: {},
        _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tableColumn = __webpack_require__(4);

var _tableColumn2 = _interopRequireDefault(_tableColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'FlyTable',
    components: {
        TableColumn: _tableColumn2.default
    },
    data: function data() {
        cov_1fo8tqzulf.f[0]++;
        cov_1fo8tqzulf.s[0]++;

        return {
            columns: []
        };
    },

    computed: {
        richColumns: function richColumns() {
            cov_1fo8tqzulf.f[1]++;

            var cols = (cov_1fo8tqzulf.s[1]++, []);
            cov_1fo8tqzulf.s[2]++;
            for (var i = 0; i < 10; i++) {
                cov_1fo8tqzulf.s[3]++;

                cols.push({
                    title: '' + ['标题', 'title'][Math.round(Math.random())] + i
                });
            }
            cov_1fo8tqzulf.s[4]++;
            return cols;
        }
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1lt2dhqcw3 = function () {
    var path = 'C:\\dev\\flyer-ui\\src\\index.js',
        hash = 'd87a64935d078f52b0b248f9175739e7b13a2065',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\dev\\flyer-ui\\src\\index.js',
        statementMap: {
            '0': {
                start: {
                    line: 2,
                    column: 19
                },
                end: {
                    line: 4,
                    column: 1
                }
            },
            '1': {
                start: {
                    line: 5,
                    column: 16
                },
                end: {
                    line: 9,
                    column: 1
                }
            },
            '2': {
                start: {
                    line: 6,
                    column: 4
                },
                end: {
                    line: 8,
                    column: 6
                }
            },
            '3': {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 48
                }
            },
            '4': {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 14,
                    column: 1
                }
            },
            '5': {
                start: {
                    line: 16,
                    column: 0
                },
                end: {
                    line: 16,
                    column: 39
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 5,
                        column: 16
                    },
                    end: {
                        line: 5,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 25
                    },
                    end: {
                        line: 9,
                        column: 1
                    }
                },
                line: 5
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 6,
                        column: 23
                    },
                    end: {
                        line: 6,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 36
                    },
                    end: {
                        line: 8,
                        column: 5
                    }
                },
                line: 6
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0
        },
        f: {
            '0': 0,
            '1': 0
        },
        b: {},
        _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _table = __webpack_require__(2);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = (cov_1lt2dhqcw3.s[0]++, [_table2.default]);
cov_1lt2dhqcw3.s[1]++;
var install = function install(Vue) {
    cov_1lt2dhqcw3.f[0]++;
    cov_1lt2dhqcw3.s[2]++;

    components.forEach(function (component) {
        cov_1lt2dhqcw3.f[1]++;
        cov_1lt2dhqcw3.s[3]++;

        Vue.component(component.name, component);
    });
};
cov_1lt2dhqcw3.s[4]++;
module.exports = {
    version: '1.0.0',
    Table: _table2.default,
    install: install
};

cov_1lt2dhqcw3.s[5]++;
module.exports.default = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_bszc259c4 = function () {
  var path = 'C:\\dev\\flyer-ui\\components\\table\\index.js',
      hash = '80ad679e47f50fcbb33f26d93c18a20be24203ac',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\dev\\flyer-ui\\components\\table\\index.js',
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(3);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04c05e67_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(6);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04c05e67_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04c05e67_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components\\table\\src\\main.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04c05e67", Component.options)
  } else {
    hotAPI.reload("data-v-04c05e67", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1cspwl5thk = function () {
    var path = 'C:\\dev\\flyer-ui\\components\\table\\src\\table-column.js',
        hash = '1b129e392f75001aa77b72ba5ae913c6f44cea60',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: 'C:\\dev\\flyer-ui\\components\\table\\src\\table-column.js',
        statementMap: {
            '0': {
                start: {
                    line: 29,
                    column: 8
                },
                end: {
                    line: 29,
                    column: 29
                }
            },
            '1': {
                start: {
                    line: 32,
                    column: 8
                },
                end: {
                    line: 32,
                    column: 55
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 28,
                        column: 4
                    },
                    end: {
                        line: 28,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 28,
                        column: 12
                    },
                    end: {
                        line: 30,
                        column: 5
                    }
                },
                line: 28
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 31,
                        column: 4
                    },
                    end: {
                        line: 31,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 31,
                        column: 22
                    },
                    end: {
                        line: 33,
                        column: 5
                    }
                },
                line: 31
            }
        },
        branchMap: {},
        s: {
            '0': 0,
            '1': 0
        },
        f: {
            '0': 0,
            '1': 0
        },
        b: {},
        _coverageSchema: 'd34fc3e6b8297bcde183f5492bcb8fcb36775295'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'FlyTableName',
    props: {
        type: {
            type: String,
            default: 'default' // radio || checkout || default || expand
        },
        prop: String,
        label: String,
        labelClassName: String,
        className: String,
        colspan: Number,
        rowspan: Number,
        headerAlign: String,
        align: String,
        formatter: Function,
        minWidth: String,
        width: String,
        columnKey: String,
        sortable: Boolean,
        sortBy: String,
        sortOrders: String,
        sortMehtod: Function,
        filters: Array,
        filterMultiple: Boolean,
        filterMehtod: Function
    },
    render: function render() {
        var h = arguments[0];
        cov_1cspwl5thk.f[0]++;
        cov_1cspwl5thk.s[0]++;

        return h('div', ['1']);
    },
    renderError: function renderError(h, err) {
        cov_1cspwl5thk.f[1]++;
        cov_1cspwl5thk.s[1]++;

        return h('pre', { style: { color: 'red' } }, err.stack);
    }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", [
    _c("div", { staticClass: "fly-table" }, [
      _c("div", { staticClass: "fly-table-toolbar" }),
      _vm._v(" "),
      _c("div", { staticClass: "fly-table-header" }, [
        _c("table", [
          _c(
            "thead",
            _vm._l(_vm.richColumns, function(column, index) {
              return _c("td", { key: index }, [_vm._v(_vm._s(column.title))])
            })
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "fly-table-body" }, [
        _c("table", [
          _c("tbody", [
            _c(
              "tr",
              _vm._l(_vm.richColumns, function(column, index) {
                return _c("table-column", { key: index }, [
                  _vm._v(_vm._s(column.title) + ">")
                ])
              })
            ),
            _vm._v(" "),
            _c("tr", [_c("td", { attrs: { colspan: "10" } }, [_vm._v("ad")])])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "fly-table-footer" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04c05e67", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);