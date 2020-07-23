function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Navbar -->\n<nav class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"http://www.cagri.tk/\">Cagri TURK</a>\n\n    <ul class=\"nav justify-content-end\">\n        <li *ngFor = \"let item of menuItems\" class=\"nav-item\">\n            <a class=\"{{item.class}}\" href=\"{{item.href}}\" target=\"{{item.target}}\" (click)=\"setActivePage(item.name)\">{{item.name}}</a>\n        </li>\n      </ul>\n</nav> \n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 col-md-10\">\n            <app-home *ngIf=\"activePage=='Home'\"></app-home>\n            <app-home *ngIf=\"activePage=='GitHub'\"></app-home>\n            <app-home *ngIf=\"activePage=='About'\"></app-home>\n            <app-todo-list *ngIf=\"activePage=='TodoList'\"></app-todo-list>\n        </div>\n        <div class=\"col-12 col-md-2\">\n            <div class=\"card\" style=\"width: 24rem; margin-top: 4pt\">\n                <img class=\"card-img-top\" src=\"https://avatars1.githubusercontent.com/u/16518350?s=400&v=4\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Çağrı TÜRK </h5>\n                  <p class=\"card-text\">Software Developer</p>\n                  <div>\n                      <ul class=\"social-network social-circle\">\n                        <li><a href=\"https://github.com/cagritrk\" target= \"_blank\" class=\"icoGitHub\" title=\"Github\"><i class=\"fa fa-github\"></i></a></li>\n                        <li><a href=\"https://linkedin.com/in/cagriturk\" target= \"_blank\" class=\"icoLinkedin\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                      </ul>\n                    </div>\n                </div>\n              </div>\n        </div>\n\n      </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"card-header\">\n    About this page\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">This page using Angular !</h5>\n    <p class=\"card-text\">I made this wepsite using Angular 8 and Docker.</p>\n\n    <h5 class=\"card-title\">That's the Dockerfile</h5>\n    <pre>\n        <code>\n# stage 1\nFROM node:latest as node\nWORKDIR /app\nCOPY . .\nRUN npm install\nRUN npm run build —- —-prod\n\n\n# stage 2\nFROM nginx:alpine\nCOPY --from=node /app/dist/cagri.tk /usr/share/nginx/html\n        </code>\n    </pre>\n    <a href=\"https://github.com/cagritrk/cagri.tk\" class=\"btn btn-primary\">Go to repo of this website.</a>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo-list/todo-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo-list/todo-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoListTodoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        Todo List App\n    </div>\n    <div class=\"card-body\">\n        <h2>Todo List</h2>\n        <div>\n            <span>{{remaining()}} of {{todos.length}} remaining</span>\n    \n            <ul class=\"list-group\">\n                <li class=\"list-group-item\" *ngFor=\"let todo of todos\">\n                    <input type=\"checkbox\" [(ngModel)] = 'todo.done'>\n                    <span class=\"done-{{todo.done}}\"> {{todo.text}}</span>\n                    [ <a (click)=\"deleteRow(todo)\">delete</a> ]\n                </li>\n            </ul>\n            \n            <form (ngSubmit)=\"addTodo(newTodo.value); newTodo.value = '';\" >\n                <div class=\"input-group\">\n                    <input #newTodo type=\"text\" class=\"form-control\" placeholder=\"add new todo here\" minlength=\"3\">\n                </div>\n           </form>\n        </div>\n        \n    </div>\n    <div class=\"card-body\">\n        <a href=\"#\" class=\"card-link\" (click)=\"archive()\">Delete All Completed</a>\n        <a href=\"#\" class=\"card-link\" (click)=\"deleteAll()\">Delete All</a>\n        <a href=\"#\" [href]=\"downloadFile()\" class=\"card-link e2e-trusted-url\" download=\"To Do List.txt\">Download as a text file</a>\n    </div>\n    <div class=\"card-body\">\n        <a type=\"button\" class=\"btn btn-primary\" href=\"https://github.com/cagritrk/cagri.tk/tree/master/Files/AngularJS_TodoList\">I also create AngularJS version of this project. Click here if you want to see</a>\n    </div>\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul.social-network {\n\tlist-style: none;\n\tdisplay: inline;\n\tmargin-left:0 !important;\n\tpadding: 0;\n}\nul.social-network li {\n\tdisplay: inline;\n\tmargin: 0 5px;\n}\n.social-network a.icoGitHub:hover {\n\tbackground-color:#3B5998;\n}\n.social-network a.icoLinkedin:hover {\n\tbackground-color:#007bb7;\n}\n.social-network a.icoGitHub:hover i, .social-network a.icoLinkedin:hover i {\n\tcolor:#fff;\n}\na.socialIcon:hover, .socialHoverClass {\n\tcolor:#44BCDD;\n}\n.social-circle li a {\n\tdisplay:inline-block;\n\tposition:relative;\n\tmargin:0 auto 0 auto;\n\tborder-radius:50%;\n\ttext-align:center;\n\twidth: 50px;\n\theight: 50px;\n\tfont-size:20px;\n\tbackground-color: #D3D3D3;\n}\n.social-circle li i {\n\tmargin:0;\n\tline-height:50px;\n\ttext-align: center;\n}\n.social-circle li a:hover i, .triggeredHover {\n\t-moz-transform: rotate(360deg);\n\t-webkit-transform: rotate(360deg);\n\t-ms--transform: rotate(360deg);\n\ttransform: rotate(360deg);\n\t-webkit-transition: all 0.2s;\n\ttransition: all 0.2s;\n}\n.social-circle i {\n\tcolor: #fff;\n\t-webkit-transition: all 0.8s;\n\ttransition: all 0.8s;\n}\n.card {\n\tmargin: 0 auto; /* Added */\n\tfloat: none; /* Added */\n\tmargin-bottom: 10px; /* Added */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixVQUFVO0FBQ1g7QUFDQTtDQUNDLGVBQWU7Q0FDZixhQUFhO0FBQ2Q7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FHcEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGNBQWM7Q0FDZCx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLFFBQVE7Q0FDUixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsNEJBQTRCO0NBSTVCLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0MsV0FBVztDQUNYLDRCQUE0QjtDQUk1QixvQkFBb0I7QUFDckI7QUFFQTtDQUNDLGNBQWMsRUFBRSxVQUFVO0NBQzFCLFdBQVcsRUFBRSxVQUFVO0NBQ3ZCLG1CQUFtQixFQUFFLFVBQVU7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLnNvY2lhbC1uZXR3b3JrIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0ZGlzcGxheTogaW5saW5lO1xuXHRtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDA7XG59XG51bC5zb2NpYWwtbmV0d29yayBsaSB7XG5cdGRpc3BsYXk6IGlubGluZTtcblx0bWFyZ2luOiAwIDVweDtcbn1cblxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvR2l0SHViOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjojM0I1OTk4O1xufVxuXG4uc29jaWFsLW5ldHdvcmsgYS5pY29MaW5rZWRpbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IzAwN2JiNztcbn1cblxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvR2l0SHViOmhvdmVyIGksIC5zb2NpYWwtbmV0d29yayBhLmljb0xpbmtlZGluOmhvdmVyIGkge1xuXHRjb2xvcjojZmZmO1xufVxuXG5hLnNvY2lhbEljb246aG92ZXIsIC5zb2NpYWxIb3ZlckNsYXNzIHtcblx0Y29sb3I6IzQ0QkNERDtcbn1cblxuLnNvY2lhbC1jaXJjbGUgbGkgYSB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0bWFyZ2luOjAgYXV0byAwIGF1dG87XG5cdC1tb3otYm9yZGVyLXJhZGl1czo1MCU7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czo1MCU7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0d2lkdGg6IDUwcHg7XG5cdGhlaWdodDogNTBweDtcblx0Zm9udC1zaXplOjIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNEM0QzRDM7XG59XG4uc29jaWFsLWNpcmNsZSBsaSBpIHtcblx0bWFyZ2luOjA7XG5cdGxpbmUtaGVpZ2h0OjUwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNvY2lhbC1jaXJjbGUgbGkgYTpob3ZlciBpLCAudHJpZ2dlcmVkSG92ZXIge1xuXHQtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0LW1zLS10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycztcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5zb2NpYWwtY2lyY2xlIGkge1xuXHRjb2xvcjogI2ZmZjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC44cztcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC44cztcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuOHM7XG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC44cztcblx0dHJhbnNpdGlvbjogYWxsIDAuOHM7XG59XG5cbi5jYXJkIHtcblx0bWFyZ2luOiAwIGF1dG87IC8qIEFkZGVkICovXG5cdGZsb2F0OiBub25lOyAvKiBBZGRlZCAqL1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBBZGRlZCAqL1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.activePage = 'Home';
        this.menuItems = [{
          class: 'nav-link active',
          href: '#',
          name: 'Home',
          id: 0
        }, {
          class: 'nav-link',
          href: '#',
          name: 'TodoList',
          id: 1
        }, {
          class: 'nav-link',
          href: '#',
          name: 'About',
          id: 2
        }, {
          class: 'nav-link',
          href: 'https://github.com/cagritrk',
          name: 'GitHub',
          target: "_blank",
          id: 3
        }, {
          class: 'nav-link',
          href: 'mailto:haliscagri@gmail.com',
          name: 'Contact',
          id: 4
        }];
      }

      _createClass(AppComponent, [{
        key: "setActivePage",
        value: function setActivePage(name) {
          this.activePage = name;
          console.log("Active page is :" + this.activePage);
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./todo-list/todo-list.component */
    "./src/app/todo-list/todo-list.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/todo-list/todo-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/todo-list/todo-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoListTodoListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".done-true {\n    text-decoration: line-through;\n    color: grey;\n  }\n  \n  .list-group {\n      margin-bottom: 4px;\n  }\n  \n  .card {\n      margin-top: 5%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7RUFDYjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtNQUNJLGNBQWM7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9uZS10cnVlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuICBcbiAgLmxpc3QtZ3JvdXAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todo-list/todo-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/todo-list/todo-list.component.ts ***!
    \**************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var TodoListComponent =
    /*#__PURE__*/
    function () {
      function TodoListComponent(domSanitizer) {
        _classCallCheck(this, TodoListComponent);

        this.domSanitizer = domSanitizer;
        this.todos = [];
        this.todos.push(new Task('Visit cagri.tk', true));
        this.todos.push(new Task('build your version of this app'));
      }

      _createClass(TodoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addTodo",
        value: function addTodo(todoText) {
          this.todos.push(new Task(todoText, false));
        }
      }, {
        key: "remaining",
        value: function remaining() {
          var count = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var todo = _step.value;
              count += todo.done ? 0 : 1;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return count;
        }
      }, {
        key: "archive",
        value: function archive() {
          var oldTodos = this.todos;
          this.todos = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = oldTodos[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var todo = _step2.value;
              if (!todo.done) this.todos.push(todo);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          if (confirm("This action will delete all records! Are you sure ?")) this.todos = [];
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(todo) {
          var index = this.todos.indexOf(todo);

          if (index > -1) {
            this.todos.splice(index, 1);
          }
        }
      }, {
        key: "downloadFile",
        value: function downloadFile() {
          var now = new Date().toString();
          var dataFile = "data:text/plain;charset=UTF-8,";
          dataFile += "TodoList\n";
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.todos[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var todo = _step3.value;
              dataFile += todo.done ? "- [Done] " : "- ";
              dataFile += todo.text + "\n";
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          dataFile += "\n" + encodeURIComponent(now);
          dataFile += "\nThank you for visiting cagri.tk :)";
          return this.domSanitizer.bypassSecurityTrustUrl(dataFile);
        }
      }]);

      return TodoListComponent;
    }();

    TodoListComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo-list/todo-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo-list.component.css */
      "./src/app/todo-list/todo-list.component.css")).default]
    })], TodoListComponent);

    var Task = function Task(text, done) {
      _classCallCheck(this, Task);

      this.text = text;
      this.done = done || false;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/cagriturk/Desktop/cagri.tk/cagri.tk/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map