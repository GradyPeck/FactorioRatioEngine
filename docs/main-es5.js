function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    __webpack_exports__["default"] = "<p>Factorio!</p>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cruncherframe/cruncherframe.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cruncherframe/cruncherframe.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCruncherframeCruncherframeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"crunchers\">\n    <app-numbercruncher *ngFor=\"let cruncher of crunchy; let i=index; last as isLast\" \n    [crunchID]=\"i\"\n    [lasty]=\"isLast\"\n    (removeMe)=\"removeCruncher($event)\"\n    (calculate)=\"updateTotal($event.id, $event.results)\"\n    ></app-numbercruncher>\n    <button id=\"addCruncher\" (click)=\"addCruncher()\">+</button>\n</div>\n<div *ngIf=\"crunchy.length > 1\">\n    <p>Grand Totals:</p>\n    <p *ngFor=\"let total of grandTotal\">{{total.name}} : {{tooly.dec2frac(total.quantity)}}</p>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/csvloader/csvloader.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/csvloader/csvloader.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCsvloaderCsvloaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>First, choose a CSV file.</p>\n\n<form (submit)=\"processForm()\">\n    <input type=\"file\" name=\"fileIn\" [(ngModel)]=\"form.fileIn\" observeFiles />\n    <button *ngIf=\"form.fileIn != undefined\" type=\"submit\">\n        Parse!\n    </button>\n</form>\n\n<p *ngIf=\"recipeBank.recipes.length\">{{recipeBank.recipes.length}} recipes successfully loaded</p>\n\n<button *ngIf=\"recipeBank.recipes.length\" [routerLink]=\"['/cruncher']\">Proceed!</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/numbercruncher/numbercruncher.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/numbercruncher/numbercruncher.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNumbercruncherNumbercruncherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- this should never display -->\n<h1 *ngIf=\"recipeBank.recipes.length < 1\">NO CSV LOADED</h1>\n\n<button id=\"removeButton\" *ngIf=\"lasty && crunchID > 0\" (click)=\"removeMe.emit(crunchID)\">-</button>\n\n<div id=\"selectors\">\n    <p id=\"greeting\">Select final product and number to create per second:</p>\n\n    <label class=\"selector\">Final Product: \n        <input class=\"textInput\" type=\"text\" [(ngModel)]=\"selection\" value=\"\" (keyup)=\"selectionKey($event.key)\">\n    </label>\n    <!-- *ngIf=\"selection && searchRecipe(selection) != undefined\" -->\n    <div id=\"amountSelectors\">\n        <label class=\"selector\">Desired Items/Second: \n            <input class=\"numberInput\" type=\"number\" [(ngModel)]=\"selectAmountItems\" (input)=\"EqualizeInputs('I')\" (keyup.enter)=\"firstDomino(selection)\">\n        </label>\n        \n        <label class=\"selector\" >Desired Machines to Occupy: \n            <input class=\"numberInput\" type=\"number\" [(ngModel)]=\"selectAmountMachines\" (input)=\"EqualizeInputs('M')\" (keyup.enter)=\"firstDomino(selection)\">\n        </label>\n    </div>\n    <!-- *ngIf=\"selectAmountItems && selection && searchRecipe(selection) != undefined\" -->\n    <button class=\"selector\" (click)=\"firstDomino(selection)\">Calculate!</button>\n</div>\n\n<!-- Search Results -->\n<div *ngIf=\"selection && searchRecipe(selection) == undefined\" id=searchResults>\n    <div *ngFor=\"let match of filterRecipes(selection); let i=index\">\n        <button style=\"background-color:red;\" *ngIf=\"i == selectedResult; else elseBlock\"  (click)=\"selection=match\">{{match}}\n        </button>\n        <ng-template #elseBlock>\n            <button (click)=\"selection=match\">{{match}}</button>\n        </ng-template>\n    </div>\n</div>\n\n<div *ngIf=\"false\">\n    <label for=\"assemblyChoice\">Assembly Machine\n        <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" name=\"assemblyChoice\" [(ngModel)]=\"assemblyChoice\">\n    </label>\n    <span>{{assemblyChoice}}</span>\n    <br>\n    <label for=\"furnaceChoice\">Furnace\n        <input type=\"range\" min=\"1\" max=\"2\" value=\"2\" name=\"furnaceChoice\" [(ngModel)]=\"furnaceChoice\">\n    </label>\n    <span>{{furnaceChoice}}</span>\n    <br>\n    <label for=\"drillChoice\">Mining Drill\n        <input type=\"range\" min=\"1\" max=\"2\" value=\"2\" name=\"drillChoice\" [(ngModel)]=\"drillChoice\">\n    </label>\n    <span>{{drillChoice}}</span>\n</div>\n\n<p *ngFor=\"let item of crunchResult\">{{item.name}} : {{tooly.dec2frac(item.quantity)}}</p>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resultbutton/resultbutton.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resultbutton/resultbutton.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResultbuttonResultbuttonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>resultbutton works!</p>\n";
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
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
  "./src/app/FileInputValueAccessor.ts":
  /*!*******************************************!*\
    !*** ./src/app/FileInputValueAccessor.ts ***!
    \*******************************************/

  /*! exports provided: FileInputValueAccessor */

  /***/
  function srcAppFileInputValueAccessorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileInputValueAccessor", function () {
      return FileInputValueAccessor;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var FileInputValueAccessor_1; // ----------------------------------------------------------------------------------- //
    // ----------------------------------------------------------------------------------- //

    var noop = function noop() {// ...
    };

    var FileInputValueAccessor = FileInputValueAccessor_1 = /*#__PURE__*/function () {
      // I initialize the file-input value accessor service.
      function FileInputValueAccessor(elementRef) {
        _classCallCheck(this, FileInputValueAccessor);

        this.elementRef = elementRef; // CAUTION: These will be called by Angular when rendering the View.

        this.onChangeCallback = noop;
        this.onTouchedCallback = noop;
      } // ---
      // PUBLIC METHODS.
      // ---
      // I handle changes to the file input element value made by the user. Instead of
      // pushing the "value," I push the underlying File or File[] references to the
      // calling context.


      _createClass(FileInputValueAccessor, [{
        key: "handleChange",
        value: function handleChange(files) {
          // If the input is set to allow MULTIPLE files, then always push an ARRAY of
          // files through to the calling context (even if it is empty).
          // --
          // NOTE: We are using Array.from() in order to create a proper Array from the
          // Array-like FileList collection.
          if (this.elementRef.nativeElement.multiple) {
            this.onChangeCallback(Array.from(files)); // If the input is set to allow only a SINGLE file, then let's only push the
            // first file in the collection (or NULL if no file is available).
          } else {
            this.onChangeCallback(files.length ? files[0] : null);
          }
        } // I register the callback to be invoked when the value of the file input element
        // has been changed by the user.

      }, {
        key: "registerOnChange",
        value: function registerOnChange(callback) {
          this.onChangeCallback = callback;
        } // I register the callback to be invoked when the file input element has been
        // "touched" by the user.

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(callback) {
          this.onTouchedCallback = callback;
        } // I set the disabled property of the file input element.

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.elementRef.nativeElement.disabled = isDisabled;
        } // I set the value property of the file input element.
        // --
        // CAUTION: Only a limited set of values can be used on file inputs.

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value instanceof FileList) {
            this.elementRef.nativeElement.files = value;
          } else if (Array.isArray(value) && !value.length) {
            this.elementRef.nativeElement.files = null;
          } else if (value === null) {
            this.elementRef.nativeElement.files = null;
          } else {
            // Since we cannot manually construct a FileList instance, we have to ignore
            // any attempt to push a non-FileList instance into the input.
            if (console && console.warn && console.log) {
              console.warn("Ignoring attempt to assign non-FileList to input[type=file].");
              console.log("Value:", value);
            }
          }
        }
      }]);

      return FileInputValueAccessor;
    }();

    FileInputValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    FileInputValueAccessor = FileInputValueAccessor_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "input[type=file][ngModel][observeFiles]",
      host: {
        "(blur)": "onTouchedCallback()",
        "(change)": "handleChange( $event.target.files )"
      },
      // By overriding the NG_VALUE_ACCESSOR dependency-injection token at this level of
      // the component tree / hierarchical injectors, we are effectively replacing the
      // DefaultValueAccessor for this Input Element context. As such, when Angular looks
      // for a ControlValueAccessor implementation in the local dependency-injection
      // container, it will only find this one - the one that looks at the "FileList"
      // property, not the "value" property.
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: FileInputValueAccessor_1,
        multi: true // NOTE: I _believe_ that because I am using Ahead-of-Time (AoT) compiling in
        // this demo, I don't need to use the forwardRef() wrapper to reference the
        // Class that hasn't been defined yet.

      }]
    })], FileInputValueAccessor);
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
    /* harmony import */


    var _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./csvloader/csvloader.component */
    "./src/app/csvloader/csvloader.component.ts");
    /* harmony import */


    var _check_csv_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./check-csv.guard */
    "./src/app/check-csv.guard.ts");
    /* harmony import */


    var _cruncherframe_cruncherframe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cruncherframe/cruncherframe.component */
    "./src/app/cruncherframe/cruncherframe.component.ts");

    var routes = [{
      path: 'csv',
      component: _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_3__["CsvloaderComponent"]
    }, {
      path: 'cruncher',
      component: _cruncherframe_cruncherframe_component__WEBPACK_IMPORTED_MODULE_5__["CruncherframeComponent"],
      canActivate: [_check_csv_guard__WEBPACK_IMPORTED_MODULE_4__["CheckCsvGuard"]]
    }, {
      path: '',
      component: _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_3__["CsvloaderComponent"]
    }];

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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'FactorioRatioEngine';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
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


    var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-csv-parser */
    "./node_modules/ngx-csv-parser/fesm2015/ngx-csv-parser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _numbercruncher_numbercruncher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./numbercruncher/numbercruncher.component */
    "./src/app/numbercruncher/numbercruncher.component.ts");
    /* harmony import */


    var _FileInputValueAccessor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./FileInputValueAccessor */
    "./src/app/FileInputValueAccessor.ts");
    /* harmony import */


    var _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./csvloader/csvloader.component */
    "./src/app/csvloader/csvloader.component.ts");
    /* harmony import */


    var _my_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./my-filter.pipe */
    "./src/app/my-filter.pipe.ts");
    /* harmony import */


    var _cruncherframe_cruncherframe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./cruncherframe/cruncherframe.component */
    "./src/app/cruncherframe/cruncherframe.component.ts");
    /* harmony import */


    var _resultbutton_resultbutton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./resultbutton/resultbutton.component */
    "./src/app/resultbutton/resultbutton.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _numbercruncher_numbercruncher_component__WEBPACK_IMPORTED_MODULE_7__["NumbercruncherComponent"], _FileInputValueAccessor__WEBPACK_IMPORTED_MODULE_8__["FileInputValueAccessor"], _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_9__["CsvloaderComponent"], _my_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["MyFilterPipe"], _cruncherframe_cruncherframe_component__WEBPACK_IMPORTED_MODULE_11__["CruncherframeComponent"], _resultbutton_resultbutton_component__WEBPACK_IMPORTED_MODULE_12__["ResultbuttonComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/check-csv.guard.ts":
  /*!************************************!*\
    !*** ./src/app/check-csv.guard.ts ***!
    \************************************/

  /*! exports provided: CheckCsvGuard */

  /***/
  function srcAppCheckCsvGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckCsvGuard", function () {
      return CheckCsvGuard;
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
    /* harmony import */


    var _recipebank_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipebank.service */
    "./src/app/recipebank.service.ts");

    var CheckCsvGuard = /*#__PURE__*/function () {
      function CheckCsvGuard(recipeBank, router) {
        _classCallCheck(this, CheckCsvGuard);

        this.recipeBank = recipeBank;
        this.router = router;
      }

      _createClass(CheckCsvGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return this.checkCsv();
        }
      }, {
        key: "checkCsv",
        value: function checkCsv() {
          if (this.recipeBank.recipes.length > 0) {
            return true;
          } else {
            this.router.navigate(['/csv']);
            return false;
          }
        }
      }]);

      return CheckCsvGuard;
    }();

    CheckCsvGuard.ctorParameters = function () {
      return [{
        type: _recipebank_service__WEBPACK_IMPORTED_MODULE_3__["RecipebankService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CheckCsvGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CheckCsvGuard);
    /***/
  },

  /***/
  "./src/app/cruncherframe/cruncherframe.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/cruncherframe/cruncherframe.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCruncherframeCruncherframeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#crunchers {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\napp-numbercruncher {\r\n    margin: 5px;\r\n    padding: 10px;\r\n    position: relative;\r\n    border: solid black 1px;\r\n}\r\n\r\n#addCruncher {\r\n    height: 30px;\r\n    width: 30px;\r\n    position: relative;\r\n    top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3J1bmNoZXJmcmFtZS9jcnVuY2hlcmZyYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY3J1bmNoZXJmcmFtZS9jcnVuY2hlcmZyYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3J1bmNoZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5hcHAtbnVtYmVyY3J1bmNoZXIge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuXHJcbiNhZGRDcnVuY2hlciB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cruncherframe/cruncherframe.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/cruncherframe/cruncherframe.component.ts ***!
    \**********************************************************/

  /*! exports provided: CruncherframeComponent */

  /***/
  function srcAppCruncherframeCruncherframeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CruncherframeComponent", function () {
      return CruncherframeComponent;
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


    var _toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../toolkit */
    "./src/toolkit.ts");

    var CruncherframeComponent = /*#__PURE__*/function () {
      function CruncherframeComponent() {
        _classCallCheck(this, CruncherframeComponent);

        //local name for toolkit for the template to use
        this.tooly = _toolkit__WEBPACK_IMPORTED_MODULE_2__["toolkit"];
        this.crunchy = [0];
        this.crunchers = [[]];
      }

      _createClass(CruncherframeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCruncher",
        value: function addCruncher() {
          this.crunchers.push([]);
          this.crunchy.push(0);
        } //most of this code is currently unused

        /*it was for removing ANY calculator, not just the last one, but when one was removed the DISPLAYED
          calculators wouldn't reflect the removal - the LAST would disappear and the "removed" one would remain
          visually in place while the DATA was updated correctly and the grand total changed accordingly.
        */

      }, {
        key: "removeCruncher",
        value: function removeCruncher(toWhack) {
          this.crunchy.splice(toWhack, 1);

          for (var i = toWhack; i < this.crunchers.length - 1; i++) {
            this.crunchers[i] = this.crunchers[i + 1];
          }

          this.crunchers.pop();
          this.updateTotal(-1);
        }
      }, {
        key: "updateTotal",
        value: function updateTotal(id, newResults) {
          console.log("updating total: " + id);
          this.grandTotal = [];
          if (id != -1) this.crunchers.splice(id, 1, newResults); //for each array of denseings in crunchers

          for (var i = 0; i < this.crunchers.length; i++) {
            //for each denseing in the array of denseings
            for (var z = 0; z < this.crunchers[i].length; z++) {
              var found = false; //for each denseIng in grandtotal;

              var _iterator = _createForOfIteratorHelper(this.grandTotal),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var thingy = _step.value;

                  if (thingy.name == this.crunchers[i][z].name) {
                    thingy.quantity = thingy.quantity + this.crunchers[i][z].quantity;
                    found = true;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!found) {
                //construct a new densIng so you don't accidentally make an alias instead of a copy
                this.grandTotal.push({
                  name: this.crunchers[i][z].name,
                  quantity: this.crunchers[i][z].quantity
                });
              }
            }
          }
        }
      }]);

      return CruncherframeComponent;
    }();

    CruncherframeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cruncherframe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cruncherframe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cruncherframe/cruncherframe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cruncherframe.component.css */
      "./src/app/cruncherframe/cruncherframe.component.css"))["default"]]
    })], CruncherframeComponent);
    /***/
  },

  /***/
  "./src/app/csvloader/csvloader.component.css":
  /*!***************************************************!*\
    !*** ./src/app/csvloader/csvloader.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCsvloaderCsvloaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NzdmxvYWRlci9jc3Zsb2FkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/csvloader/csvloader.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/csvloader/csvloader.component.ts ***!
    \**************************************************/

  /*! exports provided: CsvloaderComponent */

  /***/
  function srcAppCsvloaderCsvloaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CsvloaderComponent", function () {
      return CsvloaderComponent;
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


    var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-csv-parser */
    "./node_modules/ngx-csv-parser/fesm2015/ngx-csv-parser.js");
    /* harmony import */


    var _recipebank_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../recipebank.service */
    "./src/app/recipebank.service.ts");

    var CsvloaderComponent = /*#__PURE__*/function () {
      function CsvloaderComponent(csvparser, recipeBank) {
        _classCallCheck(this, CsvloaderComponent);

        this.csvparser = csvparser;
        this.recipeBank = recipeBank;
        this.csvRecords = [];
        this.form = {
          fileIn: null
        };
      }

      _createClass(CsvloaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "processForm",
        value: function processForm() {
          this.parsley(this.form.fileIn);
        }
      }, {
        key: "parsley",
        value: function parsley(inpoot) {
          var _this = this;

          //reset everything in case this isn't the first time
          this.csvRecords = [];
          this.recipeBank.recipes = []; //parse dat file

          this.csvparser.parse(inpoot, {
            header: false,
            delimiter: '@'
          }).pipe().subscribe(function (result) {
            _this.csvRecords = result;
            var newRow = [];

            var _iterator2 = _createForOfIteratorHelper(_this.csvRecords),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var row = _step2.value;
                newRow = []; //turn all single quotes to double quotes for JSON format, then parse data

                var _iterator3 = _createForOfIteratorHelper(row),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var item = _step3.value;
                    item = item.replace(/'/g, '"');
                    newRow.push(item);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                newRow[3] = JSON.parse(newRow[3]); //if not a resource, parse ingredients and products, cast numbers, then push to recipes

                if (row[1] != "No Ingredients") {
                  //parse and cast ingredients
                  newRow[1] = JSON.parse(newRow[1]);

                  for (var key in newRow[1]) {
                    newRow[1][key] = Number(newRow[1][key]);
                  } //parse and cast products


                  newRow[2] = JSON.parse(newRow[2]);

                  for (var _key in newRow[2]) {
                    newRow[2][_key] = Number(newRow[2][_key]);
                  } //make time its own property and banish it from ingredients


                  newRow[4] = newRow[1]["Time"];
                  delete newRow[1]["Time"]; //push to recipes

                  _this.recipeBank.recipes.push({
                    name: newRow[0],
                    ingredients: newRow[1],
                    products: newRow[2],
                    data: newRow[3],
                    time: newRow[4]
                  });
                } //push resources to resources
                else {
                    //this.resources.push({name: newRow[0], data: newRow[3]});
                    if (newRow[3]["Mining time"] != undefined) {
                      _this.recipeBank.recipes.push({
                        name: newRow[0],
                        ingredients: {},
                        products: _defineProperty({}, newRow[0], 1),
                        data: newRow[3],
                        time: newRow[3]["Mining time"] * 2
                      });
                    } else {
                      _this.recipeBank.recipes.push({
                        name: newRow[0],
                        ingredients: {},
                        products: _defineProperty({}, newRow[0], 1),
                        data: newRow[3],
                        time: 1
                      });
                    }
                  }
              } //manually add oil processing...

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this.recipeBank.recipes.push({
              name: "Advanced Oil Processing",
              ingredients: {
                "Crude oil": 100,
                "Water": 50
              },
              products: {
                "Heavy oil": 25,
                "Light oil": 45,
                "Petroleum gas": 55
              },
              data: {
                "Produced by": "Oil refinery"
              },
              time: 5
            }); //this.printRecipes();

          }, function (error) {
            console.log('Error', error);
          }); //this isn't missing a bracket, this function is just indented weird for readability
        } //for debugging

      }, {
        key: "printRecipes",
        value: function printRecipes() {
          var _iterator4 = _createForOfIteratorHelper(this.recipeBank.recipes),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {//console.log (recipe.name + ": " + recipe.time/this.getCraftSpeed(recipe));

              var recipe = _step4.value;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }]);

      return CsvloaderComponent;
    }();

    CsvloaderComponent.ctorParameters = function () {
      return [{
        type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_2__["NgxCsvParser"]
      }, {
        type: _recipebank_service__WEBPACK_IMPORTED_MODULE_3__["RecipebankService"]
      }];
    };

    CsvloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-csvloader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./csvloader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/csvloader/csvloader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./csvloader.component.css */
      "./src/app/csvloader/csvloader.component.css"))["default"]]
    })], CsvloaderComponent);
    /***/
  },

  /***/
  "./src/app/my-filter.pipe.ts":
  /*!***********************************!*\
    !*** ./src/app/my-filter.pipe.ts ***!
    \***********************************/

  /*! exports provided: MyFilterPipe */

  /***/
  function srcAppMyFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyFilterPipe", function () {
      return MyFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyFilterPipe = /*#__PURE__*/function () {
      function MyFilterPipe() {
        _classCallCheck(this, MyFilterPipe);
      }

      _createClass(MyFilterPipe, [{
        key: "transform",
        value: function transform(value, filterString) {
          //console.log(value);
          if (!filterString) {
            return value;
          }

          var matches = [];

          var _iterator5 = _createForOfIteratorHelper(value),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var vally = _step5.value;

              if (vally.name.toUpperCase().includes(filterString.toUpperCase())) {
                //console.log(vally);
                matches.push(vally.name);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return matches;
        }
      }]);

      return MyFilterPipe;
    }();

    MyFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'myFilter'
    })], MyFilterPipe);
    /***/
  },

  /***/
  "./src/app/numbercruncher/numbercruncher.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/numbercruncher/numbercruncher.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNumbercruncherNumbercruncherComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#searchResults {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#greeting {\r\n    margin: 0px auto;\r\n}\r\n\r\n#selectors {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nlabel {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.numberInput {\r\n    max-width: 100px;\r\n    text-indent: 0.3em;\r\n}\r\n\r\n.textInput {\r\n    flex: 1;\r\n    text-indent: 0.3em;\r\n}\r\n\r\n.selector {\r\n    margin-top: 10px;\r\n}\r\n\r\n#amountSelectors {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 0px;\r\n}\r\n\r\n#removeButton {\r\n    float: right;\r\n    position: absolute;\r\n    left: 361px;\r\n    top: 60px;\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnVtYmVyY3J1bmNoZXIvbnVtYmVyY3J1bmNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbnVtYmVyY3J1bmNoZXIvbnVtYmVyY3J1bmNoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hSZXN1bHRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jZ3JlZXRpbmcge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuI3NlbGVjdG9ycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLm51bWJlcklucHV0IHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWluZGVudDogMC4zZW07XHJcbn1cclxuXHJcbi50ZXh0SW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHRleHQtaW5kZW50OiAwLjNlbTtcclxufVxyXG5cclxuLnNlbGVjdG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNhbW91bnRTZWxlY3RvcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbiNyZW1vdmVCdXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzYxcHg7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/numbercruncher/numbercruncher.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/numbercruncher/numbercruncher.component.ts ***!
    \************************************************************/

  /*! exports provided: NumbercruncherComponent */

  /***/
  function srcAppNumbercruncherNumbercruncherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumbercruncherComponent", function () {
      return NumbercruncherComponent;
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


    var _recipebank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../recipebank.service */
    "./src/app/recipebank.service.ts");
    /* harmony import */


    var _toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../toolkit */
    "./src/toolkit.ts");

    var NumbercruncherComponent = /*#__PURE__*/function () {
      function NumbercruncherComponent(recipeBank) {
        _classCallCheck(this, NumbercruncherComponent);

        this.recipeBank = recipeBank; //a local name for the toolkit class for the template to use

        this.tooly = _toolkit__WEBPACK_IMPORTED_MODULE_3__["toolkit"];
        this.removeMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.calculate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selection = "";
        this.selectedResult = -1;
        this.assemblyChoice = 2;
        this.furnaceChoice = 2;
        this.drillChoice = 2;
        this.crunchResult = [];
        this.chosenMachines = {
          //always "chosen"
          "Centrifuge": 1,
          "Chemical plant": 1,
          "Oil refinery": 1,
          "Nuclear reactor": 1,
          "Pumpjack": 1,
          "Offshore pump": 1,
          "Rocket silo": 1
        };
      }

      _createClass(NumbercruncherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chooseMachines();
        }
      }, {
        key: "searchRecipe",
        value: function searchRecipe(selecty) {
          var _iterator6 = _createForOfIteratorHelper(this.recipeBank.recipes),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var recipe = _step6.value;

              for (var prod in recipe.products) {
                if (prod.toUpperCase() === selecty.toUpperCase()) {
                  return recipe;
                }
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return null;
        }
      }, {
        key: "recurseRecipe",
        value: function recurseRecipe(recipe, dRate) {
          if (recipe === null) {
            //this shouldn't happen anymore. If it does you probably have no data loaded. 
            console.log("nullreturn");
            return [];
          }

          var totalIngrees = [];

          for (var ingy in recipe.ingredients) {
            //raw rate at which recipe demands ingredient
            var demandRate = recipe.ingredients[ingy]; //multiply by the overall demand to get current demand rate

            demandRate = demandRate * dRate;
            var ingyRecipe = this.searchRecipe(ingy);

            if (ingyRecipe != null) {
              //divide the demandRate over the batch size of ingredient's recipe
              demandRate = demandRate / ingyRecipe.products[ingy]; //demandRate is multiplied by time to yield number of machines

              totalIngrees.push({
                name: ingy,
                quantity: demandRate * (ingyRecipe.time / this.getCraftSpeed(ingyRecipe))
              }); //cue up the next layer

              totalIngrees.push.apply(totalIngrees, _toConsumableArray(this.recurseRecipe(ingyRecipe, demandRate)));
            } else {
              //catch raw resources and broken things
              totalIngrees.push({
                name: ingy,
                quantity: demandRate
              });
            }
          }

          return totalIngrees;
        }
      }, {
        key: "firstDomino",
        value: function firstDomino(searchTerm) {
          //set up chosenMachines
          this.chooseMachines(); //obnoxiously extract the correct form of the search term so I can use it in the next step

          var topRecipe = this.searchRecipe(searchTerm);

          for (var product in topRecipe.products) {
            if (product.toUpperCase() == searchTerm.toUpperCase()) {
              searchTerm = product;
            }
          } //kick off the recursion with a fake recipe so the top layer gets included in the results


          var ary = this.recurseRecipe({
            name: "fake",
            ingredients: _defineProperty({}, searchTerm, 1),
            products: {},
            data: {},
            time: 1
          }, this.selectAmountItems); //#region ObjectConsolidation

          /* object-based result consolidation (Bring back if you want an ary object)
          consolidate results
          let newAry = {};
          for (let thingy of ary) {
            if(newAry[thingy.name] == undefined) {
              newAry[thingy.name] = thingy.quantity;
            }
            else {
              newAry[thingy.name] = newAry[thingy.name] + thingy.quantity;
            }
          }*/
          //#endregion
          //consolidate results

          for (var i = 0; i < ary.length; i++) {
            for (var z = i + 1; z < ary.length; z++) {
              if (ary[i].name == ary[z].name) {
                //add result b to result a
                ary[i].quantity = ary[i].quantity + ary[z].quantity; //remove result b

                ary.splice(z, 1); //back up the index to avoid skipping

                z--;
              }
            }
          } //round everything to the nearest meaningful place to fix floating point errors   


          var _iterator7 = _createForOfIteratorHelper(ary),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var item = _step7.value;
              item.quantity = _toolkit__WEBPACK_IMPORTED_MODULE_3__["toolkit"].fixFloat(item.quantity);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          this.calculate.emit({
            id: this.crunchID,
            results: ary
          });
          this.crunchResult = ary;
        }
      }, {
        key: "getCraftSpeed",
        value: function getCraftSpeed(recipe) {
          var producedBy = recipe.data["Produced by"];

          for (var i = 0; i < producedBy.length; i++) {
            if (producedBy[i] == "Crafting#Manual crafting") {
              producedBy.splice(i, 1);
              i--;
            }
          }

          for (var producer in this.chosenMachines) {
            if (producedBy.includes(producer)) {
              return this.chosenMachines[producer];
            }
          }
        }
      }, {
        key: "chooseMachines",
        value: function chooseMachines() {
          //set to only invariable values
          this.chosenMachines = {
            "Centrifuge": 1,
            "Chemical plant": 1,
            "Oil refinery": 1,
            "Nuclear reactor": 1,
            "Pumpjack": 1,
            "Offshore pump": 1,
            "Rocket silo": 1
          };

          switch (this.assemblyChoice) {
            case 1:
              this.chosenMachines["Assembling machine 1"] = 0.5;
              break;

            case 2:
              this.chosenMachines["Assembling machine 2"] = 0.75;
              break;

            case 3:
              this.chosenMachines["Assembling machine 3"] = 1.25;
              break;
          }

          switch (this.furnaceChoice) {
            case 1:
              this.chosenMachines["Stone furnace"] = 1;
              break;

            case 2:
              this.chosenMachines["Steel furnace"] = 2;
              break;
          }

          switch (this.drillChoice) {
            case 1:
              this.chosenMachines["Burner mining drill"] = 1;
              break;

            case 2:
              this.chosenMachines["Electric mining drill"] = 2;
              break;
          }
        }
      }, {
        key: "EqualizeInputs",
        value: function EqualizeInputs(modi) {
          var inQuestion = this.searchRecipe(this.selection); //obnoxiously extract the correct form of the search term so I can use it in the next step

          for (var product in inQuestion.products) {
            if (product.toUpperCase() == this.selection.toUpperCase()) {
              this.selection = product;
            }
          }

          if (inQuestion == null) {
            return;
          }

          if (modi == 'I') {
            this.selectAmountMachines = this.selectAmountItems / (this.getCraftSpeed(inQuestion) * inQuestion.products[this.selection] / inQuestion.time);
          } else if (modi == 'M') {
            this.selectAmountItems = this.selectAmountMachines * (this.getCraftSpeed(inQuestion) * inQuestion.products[this.selection] / inQuestion.time);
          }
        }
        /*MOTHBALLED FOR NOW
        //used when numbercrunchers are removed from the frame's list, so they appear to "move over" correctly
        public shiftMe (productIn: string, rateIn: number) {
          this.selectAmountItems = rateIn;
          this.firstDomino(productIn);
        }*/
        //this would just be an alternate mode for searchRecipe, but I want to improve it eventually to do close matches

      }, {
        key: "filterRecipes",
        value: function filterRecipes(searchTerm) {
          var resulty = [];

          var _iterator8 = _createForOfIteratorHelper(this.recipeBank.recipes),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var recipe = _step8.value;

              for (var prod in recipe.products) {
                if (prod.toUpperCase().includes(searchTerm.toUpperCase())) {
                  resulty.push(recipe.name);
                }
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          return resulty;
        }
      }, {
        key: "selectionKey",
        value: function selectionKey(keyIn) {
          if (this.selection == "") {
            this.selectedResult = -1;
          }

          switch (keyIn) {
            case "ArrowUp":
              this.selectedResult = Math.max(-1, this.selectedResult - 1);
              break;

            case "ArrowDown":
              this.selectedResult = Math.min(this.filterRecipes(this.selection).length - 1, this.selectedResult + 1);
              break;

            case "Enter":
              if (this.selectedResult >= 0) {
                this.selection = this.filterRecipes(this.selection)[this.selectedResult];
              }

              break;

            default:
              this.selectedResult = -1;
              break;
          }
        }
      }]);

      return NumbercruncherComponent;
    }();

    NumbercruncherComponent.ctorParameters = function () {
      return [{
        type: _recipebank_service__WEBPACK_IMPORTED_MODULE_2__["RecipebankService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NumbercruncherComponent.prototype, "crunchID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NumbercruncherComponent.prototype, "lasty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NumbercruncherComponent.prototype, "removeMe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NumbercruncherComponent.prototype, "calculate", void 0);
    NumbercruncherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-numbercruncher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./numbercruncher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/numbercruncher/numbercruncher.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./numbercruncher.component.css */
      "./src/app/numbercruncher/numbercruncher.component.css"))["default"]]
    })], NumbercruncherComponent);
    /***/
  },

  /***/
  "./src/app/recipebank.service.ts":
  /*!***************************************!*\
    !*** ./src/app/recipebank.service.ts ***!
    \***************************************/

  /*! exports provided: RecipebankService */

  /***/
  function srcAppRecipebankServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipebankService", function () {
      return RecipebankService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecipebankService = function RecipebankService() {
      _classCallCheck(this, RecipebankService);

      this.recipes = [];
    };

    RecipebankService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RecipebankService);
    /***/
  },

  /***/
  "./src/app/resultbutton/resultbutton.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/resultbutton/resultbutton.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResultbuttonResultbuttonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGJ1dHRvbi9yZXN1bHRidXR0b24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/resultbutton/resultbutton.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/resultbutton/resultbutton.component.ts ***!
    \********************************************************/

  /*! exports provided: ResultbuttonComponent */

  /***/
  function srcAppResultbuttonResultbuttonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultbuttonComponent", function () {
      return ResultbuttonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResultbuttonComponent = /*#__PURE__*/function () {
      function ResultbuttonComponent() {
        _classCallCheck(this, ResultbuttonComponent);
      }

      _createClass(ResultbuttonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultbuttonComponent;
    }();

    ResultbuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resultbutton',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resultbutton.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resultbutton/resultbutton.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resultbutton.component.css */
      "./src/app/resultbutton/resultbutton.component.css"))["default"]]
    })], ResultbuttonComponent);
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/toolkit.ts":
  /*!************************!*\
    !*** ./src/toolkit.ts ***!
    \************************/

  /*! exports provided: toolkit */

  /***/
  function srcToolkitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toolkit", function () {
      return toolkit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var toolkit = /*#__PURE__*/function () {
      function toolkit() {
        _classCallCheck(this, toolkit);
      }

      _createClass(toolkit, null, [{
        key: "fixFloat",
        //round floats that differ from a shorter decimal by a very small amount (ie, errors)
        value: function fixFloat(toFix) {
          for (var places = 1; places < 5; places++) {
            var fewPlaces = Math.round(toFix * Math.pow(10, places)) / Math.pow(10, places); //Rounds out differences lesser than the threshold value set in isClose

            if (toolkit.isClose(toFix, fewPlaces)) {
              //console.log(`${fewPlaces} : ${toFix} @ ${places}`);
              return fewPlaces;
            }
          }

          return toFix;
        } //convert simple fractions to mixed number form - for display only

        /*replaced by dec2frac
        public static fractionalize(toFix: number): string {
            let leftSide = Math.trunc(toFix);
            for (let i = 2; i <= 1000; i++) {
                for (let z = 1; z <= 999; z++) {
                    if (z >= i) { break; }
                    if (toolkit.isClose(toFix - leftSide, z / i)) {
                        if (leftSide == 0) {
                            return `${z}/${i}`;
                        }
                        else {
                            return `${leftSide} + ${z}/${i}`;
                        }
                    }
                }
            }
            return String(toFix);
        }*/
        //convert all decimals to fractions

      }, {
        key: "dec2frac",
        value: function dec2frac(d) {
          var df = 1;
          var top = 1;
          var bot = 1;
          var lefty = Math.trunc(d);
          d = d - lefty;
          if (d == 0) return lefty; //adds a margin of tolerance to handle floating point errors

          while (!toolkit.isClose(d, df)) {
            bot++;
            if (df < d) top++;
            df = top / bot;
          }

          if (lefty) return "".concat(lefty, " + ").concat(top, "/").concat(bot);else return "".concat(top, "/").concat(bot);
        } //this function largely exists so I can automatically use the same arbitrary threshold consistently

      }, {
        key: "isClose",
        value: function isClose(num1, num2) {
          //threshold is the arbitrary number of significant digits to check
          var threshold = 0.0000001;

          if (Math.abs(num1 - num2) < threshold) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return toolkit;
    }();
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
    /*! C:\Users\grand\Desktop\Workspace\MiscGoop\FactorioRatioEngine\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map