(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Factorio!</p>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/csvloader/csvloader.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/csvloader/csvloader.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>First, choose a CSV file.</p>\n\n<form (submit)=\"processForm()\">\n    <input type=\"file\" name=\"fileIn\" [(ngModel)]=\"form.fileIn\" observeFiles />\n    <button *ngIf=\"form.fileIn != undefined\" type=\"submit\">\n        Parse!\n    </button>\n</form>\n\n<p *ngIf=\"recipeBank.recipes.length\">{{recipeBank.recipes.length}} recipes successfully loaded</p>\n\n<button *ngIf=\"recipeBank.recipes.length\" [routerLink]=\"['/cruncher']\">Proceed!</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/numbercruncher/numbercruncher.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/numbercruncher/numbercruncher.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 *ngIf=\"recipeBank.recipes.length < 1\">NO CSV LOADED</h1>\n\n<p>Select final product and number to create per second:</p>\n<input type=\"text\" [(ngModel)]=\"selection\" value=\"\">\n<input type=\"number\" [(ngModel)]=\"selectAmount\" value=\"1\">\n<span *ngIf=\"searchRecipe(selection) != undefined\">For one machine, choose {{getCraftSpeed(searchRecipe(selection))/searchRecipe(selection).time}}</span>\n<br>\n<button (click)=\"firstDomino(selection)\">Calculate!</button>\n\n<br>\n<label for=\"assemblyChoice\">Assembly Machine\n    <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" name=\"assemblyChoice\" [(ngModel)]=\"assemblyChoice\">\n</label>\n<span>{{assemblyChoice}}</span>\n<br>\n<label for=\"furnaceChoice\">Furnace\n    <input type=\"range\" min=\"1\" max=\"2\" value=\"2\" name=\"furnaceChoice\" [(ngModel)]=\"furnaceChoice\">\n</label>\n<span>{{furnaceChoice}}</span>\n<br>\n<label for=\"drillChoice\">Mining Drill\n    <input type=\"range\" min=\"1\" max=\"2\" value=\"2\" name=\"drillChoice\" [(ngModel)]=\"drillChoice\">\n</label>\n<span>{{drillChoice}}</span>\n\n<p *ngFor=\"let item of crunchResult\">{{item.name}} : {{item.quantity}}</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/FileInputValueAccessor.ts":
/*!*******************************************!*\
  !*** ./src/app/FileInputValueAccessor.ts ***!
  \*******************************************/
/*! exports provided: FileInputValueAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputValueAccessor", function() { return FileInputValueAccessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var FileInputValueAccessor_1;




// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var noop = () => {
    // ...
};
let FileInputValueAccessor = FileInputValueAccessor_1 = class FileInputValueAccessor {
    // I initialize the file-input value accessor service.
    constructor(elementRef) {
        this.elementRef = elementRef;
        // CAUTION: These will be called by Angular when rendering the View.
        this.onChangeCallback = noop;
        this.onTouchedCallback = noop;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I handle changes to the file input element value made by the user. Instead of
    // pushing the "value," I push the underlying File or File[] references to the
    // calling context.
    handleChange(files) {
        // If the input is set to allow MULTIPLE files, then always push an ARRAY of
        // files through to the calling context (even if it is empty).
        // --
        // NOTE: We are using Array.from() in order to create a proper Array from the
        // Array-like FileList collection.
        if (this.elementRef.nativeElement.multiple) {
            this.onChangeCallback(Array.from(files));
            // If the input is set to allow only a SINGLE file, then let's only push the
            // first file in the collection (or NULL if no file is available).
        }
        else {
            this.onChangeCallback(files.length ? files[0] : null);
        }
    }
    // I register the callback to be invoked when the value of the file input element
    // has been changed by the user.
    registerOnChange(callback) {
        this.onChangeCallback = callback;
    }
    // I register the callback to be invoked when the file input element has been
    // "touched" by the user.
    registerOnTouched(callback) {
        this.onTouchedCallback = callback;
    }
    // I set the disabled property of the file input element.
    setDisabledState(isDisabled) {
        this.elementRef.nativeElement.disabled = isDisabled;
    }
    // I set the value property of the file input element.
    // --
    // CAUTION: Only a limited set of values can be used on file inputs.
    writeValue(value) {
        if (value instanceof FileList) {
            this.elementRef.nativeElement.files = value;
        }
        else if (Array.isArray(value) && !value.length) {
            this.elementRef.nativeElement.files = null;
        }
        else if (value === null) {
            this.elementRef.nativeElement.files = null;
        }
        else {
            // Since we cannot manually construct a FileList instance, we have to ignore
            // any attempt to push a non-FileList instance into the input.
            if (console && console.warn && console.log) {
                console.warn("Ignoring attempt to assign non-FileList to input[type=file].");
                console.log("Value:", value);
            }
        }
    }
};
FileInputValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FileInputValueAccessor = FileInputValueAccessor_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
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
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: FileInputValueAccessor_1,
                multi: true
                // NOTE: I _believe_ that because I am using Ahead-of-Time (AoT) compiling in
                // this demo, I don't need to use the forwardRef() wrapper to reference the
                // Class that hasn't been defined yet.
            }
        ]
    })
], FileInputValueAccessor);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _numbercruncher_numbercruncher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numbercruncher/numbercruncher.component */ "./src/app/numbercruncher/numbercruncher.component.ts");
/* harmony import */ var _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./csvloader/csvloader.component */ "./src/app/csvloader/csvloader.component.ts");





const routes = [
    { path: 'csv', component: _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_4__["CsvloaderComponent"] },
    { path: 'cruncher', component: _numbercruncher_numbercruncher_component__WEBPACK_IMPORTED_MODULE_3__["NumbercruncherComponent"] },
    { path: '', component: _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_4__["CsvloaderComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'FactorioRatioEngine';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-csv-parser */ "./node_modules/ngx-csv-parser/fesm2015/ngx-csv-parser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _numbercruncher_numbercruncher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./numbercruncher/numbercruncher.component */ "./src/app/numbercruncher/numbercruncher.component.ts");
/* harmony import */ var _FileInputValueAccessor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FileInputValueAccessor */ "./src/app/FileInputValueAccessor.ts");
/* harmony import */ var _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./csvloader/csvloader.component */ "./src/app/csvloader/csvloader.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _numbercruncher_numbercruncher_component__WEBPACK_IMPORTED_MODULE_7__["NumbercruncherComponent"],
            _FileInputValueAccessor__WEBPACK_IMPORTED_MODULE_8__["FileInputValueAccessor"],
            _csvloader_csvloader_component__WEBPACK_IMPORTED_MODULE_9__["CsvloaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_csv_parser__WEBPACK_IMPORTED_MODULE_4__["NgxCsvParserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/csvloader/csvloader.component.css":
/*!***************************************************!*\
  !*** ./src/app/csvloader/csvloader.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NzdmxvYWRlci9jc3Zsb2FkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/csvloader/csvloader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/csvloader/csvloader.component.ts ***!
  \**************************************************/
/*! exports provided: CsvloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvloaderComponent", function() { return CsvloaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-csv-parser */ "./node_modules/ngx-csv-parser/fesm2015/ngx-csv-parser.js");
/* harmony import */ var _recipebank_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipebank.service */ "./src/app/recipebank.service.ts");




let CsvloaderComponent = class CsvloaderComponent {
    constructor(csvparser, recipeBank) {
        this.csvparser = csvparser;
        this.recipeBank = recipeBank;
        this.csvRecords = [];
        this.form = {
            fileIn: null
        };
    }
    ngOnInit() {
    }
    processForm() {
        this.parsley(this.form.fileIn);
    }
    parsley(inpoot) {
        //reset everything in case this isn't the first time
        this.csvRecords = [];
        this.recipeBank.recipes = [];
        //parse dat file
        this.csvparser.parse(inpoot, { header: false, delimiter: '@' })
            .pipe().subscribe((result) => {
            this.csvRecords = result;
            let newRow = [];
            for (let row of this.csvRecords) {
                newRow = [];
                //turn all single quotes to double quotes for JSON format, then parse data
                for (let item of row) {
                    item = item.replace(/'/g, '"');
                    newRow.push(item);
                }
                newRow[3] = JSON.parse(newRow[3]);
                //if not a resource, parse ingredients and products, cast numbers, then push to recipes
                if (row[1] != "No Ingredients") {
                    //parse and cast ingredients
                    newRow[1] = JSON.parse(newRow[1]);
                    for (let key in newRow[1]) {
                        newRow[1][key] = Number(newRow[1][key]);
                    }
                    //parse and cast products
                    newRow[2] = JSON.parse(newRow[2]);
                    for (let key in newRow[2]) {
                        newRow[2][key] = Number(newRow[2][key]);
                    }
                    //make time its own property and banish it from ingredients
                    newRow[4] = newRow[1]["Time"];
                    delete newRow[1]["Time"];
                    //push to recipes
                    this.recipeBank.recipes.push({ name: newRow[0], ingredients: newRow[1], products: newRow[2], data: newRow[3], time: newRow[4] });
                }
                //push resources to resources
                else {
                    //this.resources.push({name: newRow[0], data: newRow[3]});
                    if (newRow[3]["Mining time"] != undefined) {
                        this.recipeBank.recipes.push({ name: newRow[0], ingredients: {}, products: { [newRow[0]]: 1 }, data: newRow[3], time: newRow[3]["Mining time"] * 2 });
                    }
                    else {
                        this.recipeBank.recipes.push({ name: newRow[0], ingredients: {}, products: { [newRow[0]]: 1 }, data: newRow[3], time: 1 });
                    }
                }
            }
            //manually add oil processing...
            this.recipeBank.recipes.push({ name: "Advanced Oil Processing", ingredients: { "Crude oil": 100, "Water": 50 }, products: { "Heavy oil": 25, "Light oil": 45, "Petroleum gas": 55 }, data: { "Produced by": "Oil refinery" }, time: 5 });
            //this.printRecipes();
        }, (error) => {
            console.log('Error', error);
        });
        //this isn't missing a bracket, this function is just indented weird for readability
    }
    //for debugging
    printRecipes() {
        for (let recipe of this.recipeBank.recipes) {
            //console.log (recipe.name + ": " + recipe.time/this.getCraftSpeed(recipe));
        }
    }
};
CsvloaderComponent.ctorParameters = () => [
    { type: ngx_csv_parser__WEBPACK_IMPORTED_MODULE_2__["NgxCsvParser"] },
    { type: _recipebank_service__WEBPACK_IMPORTED_MODULE_3__["RecipebankService"] }
];
CsvloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-csvloader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./csvloader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/csvloader/csvloader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./csvloader.component.css */ "./src/app/csvloader/csvloader.component.css")).default]
    })
], CsvloaderComponent);



/***/ }),

/***/ "./src/app/numbercruncher/numbercruncher.component.css":
/*!*************************************************************!*\
  !*** ./src/app/numbercruncher/numbercruncher.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL251bWJlcmNydW5jaGVyL251bWJlcmNydW5jaGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/numbercruncher/numbercruncher.component.ts":
/*!************************************************************!*\
  !*** ./src/app/numbercruncher/numbercruncher.component.ts ***!
  \************************************************************/
/*! exports provided: NumbercruncherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbercruncherComponent", function() { return NumbercruncherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipebank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipebank.service */ "./src/app/recipebank.service.ts");



let NumbercruncherComponent = class NumbercruncherComponent {
    constructor(recipeBank) {
        this.recipeBank = recipeBank;
        this.selection = "";
        this.selectAmount = 1;
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
    ngOnInit() {
        this.chooseMachines();
    }
    searchRecipe(selecty) {
        for (let recipe of this.recipeBank.recipes) {
            for (let prod in recipe.products) {
                if (prod.toUpperCase() === selecty.toUpperCase()) {
                    return recipe;
                }
            }
        }
        return null;
    }
    recurseRecipe(recipe, dRate) {
        if (recipe === null) {
            //this shouldn't happen anymore. If it does you probably have no data loaded. 
            console.log("nullreturn");
            return [];
        }
        let totalIngrees = [];
        for (let ingy in recipe.ingredients) {
            //raw rate at which recipe demands ingredient
            let demandRate = recipe.ingredients[ingy];
            //multiply by the overall demand to get current demand rate
            demandRate = demandRate * dRate;
            let ingyRecipe = this.searchRecipe(ingy);
            if (ingyRecipe != null) {
                //divide the demandRate over the batch size of ingredient's recipe
                demandRate = demandRate / ingyRecipe.products[ingy];
                //demandRate is multiplied by time to yield number of machines
                totalIngrees.push({ name: ingy, quantity: demandRate * (ingyRecipe.time / this.getCraftSpeed(ingyRecipe)) });
                //cue up the next layer
                totalIngrees.push(...this.recurseRecipe(ingyRecipe, demandRate));
            }
            else {
                //catch raw resources and broken things
                totalIngrees.push({ name: ingy, quantity: demandRate });
            }
        }
        return totalIngrees;
    }
    firstDomino(searchTerm) {
        //set up chosenMachines
        this.chooseMachines();
        //obnoxiously extract the correct form of the search term so I can use it in the next step
        let topRecipe = this.searchRecipe(searchTerm);
        for (let product in topRecipe.products) {
            if (product.toUpperCase() == searchTerm.toUpperCase()) {
                searchTerm = product;
            }
        }
        //kick off the recursion with a fake recipe so the top layer gets included in the results
        let ary = this.recurseRecipe({ name: "fake", ingredients: { [searchTerm]: 1 }, products: {}, data: {}, time: 1 }, this.selectAmount);
        //#region ObjectConsolidation
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
        for (let i = 0; i < ary.length; i++) {
            for (let z = i + 1; z < ary.length; z++) {
                if (ary[i].name == ary[z].name) {
                    //add result b to result a
                    ary[i].quantity = ary[i].quantity + ary[z].quantity;
                    //remove result b
                    ary.splice(z, 1);
                    //back up the index to avoid skipping
                    z--;
                }
            }
        }
        this.crunchResult = ary;
    }
    getCraftSpeed(recipe) {
        let producedBy = recipe.data["Produced by"];
        for (let i = 0; i < producedBy.length; i++) {
            if (producedBy[i] == "Crafting#Manual crafting") {
                producedBy.splice(i, 1);
                i--;
            }
        }
        for (let producer in this.chosenMachines) {
            if (producedBy.includes(producer)) {
                return this.chosenMachines[producer];
            }
        }
    }
    chooseMachines() {
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
};
NumbercruncherComponent.ctorParameters = () => [
    { type: _recipebank_service__WEBPACK_IMPORTED_MODULE_2__["RecipebankService"] }
];
NumbercruncherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-numbercruncher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./numbercruncher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/numbercruncher/numbercruncher.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./numbercruncher.component.css */ "./src/app/numbercruncher/numbercruncher.component.css")).default]
    })
], NumbercruncherComponent);



/***/ }),

/***/ "./src/app/recipebank.service.ts":
/*!***************************************!*\
  !*** ./src/app/recipebank.service.ts ***!
  \***************************************/
/*! exports provided: RecipebankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipebankService", function() { return RecipebankService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipebankService = class RecipebankService {
    constructor() {
        this.recipes = [];
    }
};
RecipebankService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RecipebankService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\grand\Desktop\Workspace\MiscGoop\FactorioRatioEngine\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map