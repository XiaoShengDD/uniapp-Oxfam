(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!************************************!*\
  !*** D:/1111/qymall/Oxfam/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 204));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 205));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 209));\n\n\nvar _uviewUi = _interopRequireDefault(__webpack_require__(/*! uview-ui */ 216));\n__webpack_require__(/*! uview-ui/theme.scss */ 242);\n\n\nvar _utils = _interopRequireDefault(__webpack_require__(/*! @/common/utils.js */ 243));\n\nvar _nodata = _interopRequireDefault(__webpack_require__(/*! @/components/nodata.vue */ 244));\n\n\n\nvar _services = __webpack_require__(/*! @/services */ 249);\n\n\n\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! @/config/index.js */ 252));\n\n\nvar _lib = _interopRequireDefault(__webpack_require__(/*! @/common/lib.js */ 253));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.prototype.$store = _store.default; // uview\n_vue.default.use(_uviewUi.default); // 公共方法\n_vue.default.prototype.$utils = _utils.default;_vue.default.use(_nodata.default);_vue.default.component('nodata', _nodata.default); // 请求\n_vue.default.prototype.$appserve = _services.AppServices; // 上传图片地址\n_vue.default.prototype.$up_img = _index.default.up_img; // 是否连接网络\n_vue.default.prototype.$lib = _lib.default;_vue.default.config.productionTip = false;_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJwcm90b3R5cGUiLCIkc3RvcmUiLCJzdG9yZSIsInVzZSIsInVWaWV3IiwiJHV0aWxzIiwidXRpbHMiLCJub2RhdGEiLCJjb21wb25lbnQiLCIkYXBwc2VydmUiLCJBcHBTZXJ2aWNlcyIsIiR1cF9pbWciLCJjb25maWciLCJ1cF9pbWciLCIkbGliIiwibGliIiwicHJvZHVjdGlvblRpcCIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQW1CO0FBQ25COztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTs7OztBQUlBOzs7OztBQUtBOzs7QUFHQSxtRix3bkNBcEJBQSxhQUFJQyxTQUFKLENBQWNDLE1BQWQsR0FBdUJDLGNBQXZCLEMsQ0FDQTtBQUdBSCxhQUFJSSxHQUFKLENBQVFDLGdCQUFSLEUsQ0FDQTtBQUVBTCxhQUFJQyxTQUFKLENBQWNLLE1BQWQsR0FBdUJDLGNBQXZCLENBRUFQLGFBQUlJLEdBQUosQ0FBUUksZUFBUixFQUNBUixhQUFJUyxTQUFKLENBQWMsUUFBZCxFQUF3QkQsZUFBeEIsRSxDQUNBO0FBSUFSLGFBQUlDLFNBQUosQ0FBY1MsU0FBZCxHQUEwQkMscUJBQTFCLEMsQ0FDQTtBQUVBWCxhQUFJQyxTQUFKLENBQWNXLE9BQWQsR0FBd0JDLGVBQU9DLE1BQS9CLEMsQ0FDQTtBQUVBZCxhQUFJQyxTQUFKLENBQWNjLElBQWQsR0FBcUJDLFlBQXJCLENBR0FoQixhQUFJYSxNQUFKLENBQVdJLGFBQVgsR0FBMkIsS0FBM0IsQ0FDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSXBCLFlBQUo7QUFDUmtCLFlBRFEsRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbi8vIHZ1ZXhcclxuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnO1xyXG5WdWUucHJvdG90eXBlLiRzdG9yZSA9IHN0b3JlXHJcbi8vIHV2aWV3XHJcbmltcG9ydCB1VmlldyBmcm9tIFwidXZpZXctdWlcIjtcclxuaW1wb3J0ICd1dmlldy11aS90aGVtZS5zY3NzJztcclxuVnVlLnVzZSh1Vmlldyk7XHJcbi8vIOWFrOWFseaWueazlVxyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIkAvY29tbW9uL3V0aWxzLmpzXCI7XHJcblZ1ZS5wcm90b3R5cGUuJHV0aWxzID0gdXRpbHNcclxuaW1wb3J0IG5vZGF0YSBmcm9tICdAL2NvbXBvbmVudHMvbm9kYXRhLnZ1ZSdcclxuVnVlLnVzZShub2RhdGEpXHJcblZ1ZS5jb21wb25lbnQoJ25vZGF0YScsIG5vZGF0YSk7XHJcbi8vIOivt+axglxyXG5pbXBvcnQge1xyXG5cdEFwcFNlcnZpY2VzXHJcbn0gZnJvbSBcIkAvc2VydmljZXNcIjtcclxuVnVlLnByb3RvdHlwZS4kYXBwc2VydmUgPSBBcHBTZXJ2aWNlcztcclxuLy8g5LiK5Lyg5Zu+54mH5Zyw5Z2AXHJcbmltcG9ydCBjb25maWcgZnJvbSBcIkAvY29uZmlnL2luZGV4LmpzXCI7XHJcblZ1ZS5wcm90b3R5cGUuJHVwX2ltZyA9IGNvbmZpZy51cF9pbWc7XHJcbi8vIOaYr+WQpui/nuaOpee9kee7nFxyXG5pbXBvcnQgbGliIGZyb20gXCJAL2NvbW1vbi9saWIuanNcIjtcclxuVnVlLnByb3RvdHlwZS4kbGliID0gbGliXHJcblxyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************!*\
  !*** D:/1111/qymall/Oxfam/pages.json ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@dcloudio/webpack-uni-pages-loader/lib/index.js):\nError: uni-app-compiler: Unexpected number in JSON at position 312\n    at parseJson (D:\\迅雷下载\\HBuilderX.3.1.2.20210206.full\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\uni-cli-shared\\lib\\json.js:20:13)\n    at parseManifestJson (D:\\迅雷下载\\HBuilderX.3.1.2.20210206.full\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\uni-cli-shared\\lib\\manifest.js:32:10)\n    at Object.module.exports (D:\\迅雷下载\\HBuilderX.3.1.2.20210206.full\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\webpack-uni-pages-loader\\lib\\index-new.js:53:24)\n    at Object.module.exports (D:\\迅雷下载\\HBuilderX.3.1.2.20210206.full\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\webpack-uni-pages-loader\\lib\\index.js:57:35)");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
    options._scopeId = 'data-v-' + scopeId
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


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 29);

/***/ }),
/* 29 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 30);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 30 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 205 */
/*!************************************!*\
  !*** D:/1111/qymall/Oxfam/App.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 206);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDbU07QUFDbk0sZ0JBQWdCLDJNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjIwNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50c1xudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL+i/hembt+S4i+i9vS9IQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///205\n");

/***/ }),
/* 206 */
/*!*************************************************************!*\
  !*** D:/1111/qymall/Oxfam/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 207);\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStwQixDQUFnQixpckJBQUcsRUFBQyIsImZpbGUiOiIyMDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL+i/hembt+S4i+i9vS9IQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL+i/hembt+S4i+i9vS9IQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL+i/hembt+S4i+i9vS9IQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4v6L+F6Zu35LiL6L29L0hCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///206\n");

/***/ }),
/* 207 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/1111/qymall/Oxfam/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 208)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FIQTtBQUlBO0FBQ0E7QUFDQSxHQU5BO0FBT0E7QUFDQTtBQUNBLEdBVEEsRSIsImZpbGUiOiIyMDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKTtcclxuXHR9LFxyXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKTtcclxuXHR9LFxyXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKTtcclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblx0Lyog5rOo5oSP6KaB5YaZ5Zyo56ys5LiA6KGM77yM5ZCM5pe257uZc3R5bGXmoIfnrb7liqDlhaVsYW5nPVwic2Nzc1wi5bGe5oCnICovXG5cdEBpbXBvcnQgXCJ1dmlldy11aS9pbmRleC5zY3NzXCI7XHJcblx0XG48L3N0eWxlPlxyXG48c3R5bGU+XHJcblx0QGltcG9ydCB1cmwoXCIuL2NvbW1vbi9hbmltYXRlLm1pbi5jc3NcIik7XHJcblx0QGltcG9ydCB1cmwoXCIuL3N0YXRpYy9jc3Mvc3R5bGUuc2Nzc1wiKTtcclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///207\n");

/***/ }),
/* 208 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 209 */
/*!*******************************************!*\
  !*** D:/1111/qymall/Oxfam/store/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 204));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 210));\nvar _nim = _interopRequireDefault(__webpack_require__(/*! ./modules/nim */ 212));\nvar _message = _interopRequireDefault(__webpack_require__(/*! ./modules/message */ 213));\nvar _sdk = _interopRequireDefault(__webpack_require__(/*! ./modules/sdk */ 214));\nvar _mags_updata = _interopRequireDefault(__webpack_require__(/*! ./modules/mags_updata */ 215));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n// 底部菜单选择\n\n_vue.default.use(_vuex.default);var _default =\n\nnew _vuex.default.Store({\n  modules: {\n    nim: _nim.default,\n    msg: _message.default,\n    sdk: _sdk.default,\n    mags_updata: _mags_updata.default } });exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsIm5pbSIsIm1zZyIsInNkayIsIm1hZ3NfdXBkYXRhIl0sIm1hcHBpbmdzIjoidUZBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlHO0FBQ0E7O0FBRUFBLGFBQUlDLEdBQUosQ0FBUUMsYUFBUixFOztBQUVlLElBQUlBLGNBQUtDLEtBQVQsQ0FBZTtBQUM3QkMsU0FBTyxFQUFFO0FBQ1JDLE9BQUcsRUFBSEEsWUFEUTtBQUVSQyxPQUFHLEVBQUhBLGdCQUZRO0FBR1JDLE9BQUcsRUFBSEEsWUFIUTtBQUlSQyxlQUFXLEVBQVhBLG9CQUpRLEVBRG9CLEVBQWYsQyIsImZpbGUiOiIyMDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuaW1wb3J0IG5pbSBmcm9tICcuL21vZHVsZXMvbmltJztcclxuaW1wb3J0IG1zZyBmcm9tICcuL21vZHVsZXMvbWVzc2FnZSc7XHJcbmltcG9ydCBzZGsgZnJvbSAnLi9tb2R1bGVzL3Nkayc7XHJcbmltcG9ydCBtYWdzX3VwZGF0YSBmcm9tICcuL21vZHVsZXMvbWFnc191cGRhdGEnO1xyXG4vLyDlupXpg6joj5zljZXpgInmi6lcclxuXHJcblZ1ZS51c2UoVnVleClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRtb2R1bGVzOiB7XHJcblx0XHRuaW0sXHJcblx0XHRtc2csXHJcblx0XHRzZGssXHJcblx0XHRtYWdzX3VwZGF0YVxyXG5cdH0sXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///209\n");

/***/ }),
/* 210 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 211)))

/***/ }),
/* 211 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 212 */
/*!*************************************************!*\
  !*** D:/1111/qymall/Oxfam/store/modules/nim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /*\r\n                                                                                                     \t存储聊天基本信息\r\n                                                                                                     */var _default =\n{\n  namespaced: true,\n  state: function state() {return {\n      nim: \"\" //存储聊天基本信息nim\n    };},\n  actions: {\n    setNim: function setNim(_ref)\n\n\n\n\n    {var commit = _ref.commit,state = _ref.state;var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},nim = _ref2.nim;\n      commit('setNim', nim);\n    } },\n\n  mutations: {\n    setNim: function setNim(state, nim) {\n      state.nim = nim;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9uaW0uanMiXSwibmFtZXMiOlsibmFtZXNwYWNlZCIsInN0YXRlIiwibmltIiwiYWN0aW9ucyIsInNldE5pbSIsImNvbW1pdCIsIm11dGF0aW9ucyJdLCJtYXBwaW5ncyI6IndGQUFBOzs7QUFHZTtBQUNkQSxZQUFVLEVBQUUsSUFERTtBQUVkQyxPQUFLLEVBQUUseUJBQU87QUFDYkMsU0FBRyxFQUFFLEVBRFEsQ0FDSjtBQURJLEtBQVAsRUFGTztBQUtkQyxTQUFPLEVBQUU7QUFDUkMsVUFEUTs7Ozs7QUFNQSxTQUpQQyxNQUlPLFFBSlBBLE1BSU8sQ0FIUEosS0FHTyxRQUhQQSxLQUdPLGlGQUFKLEVBQUksQ0FEUEMsR0FDTyxTQURQQSxHQUNPO0FBQ1BHLFlBQU0sQ0FBQyxRQUFELEVBQVdILEdBQVgsQ0FBTjtBQUNBLEtBUk8sRUFMSzs7QUFlZEksV0FBUyxFQUFFO0FBQ1ZGLFVBRFUsa0JBQ0hILEtBREcsRUFDSUMsR0FESixFQUNTO0FBQ2xCRCxXQUFLLENBQUNDLEdBQU4sR0FBWUEsR0FBWjtBQUNBLEtBSFMsRUFmRyxFIiwiZmlsZSI6IjIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblx05a2Y5YKo6IGK5aSp5Z+65pys5L+h5oGvXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lc3BhY2VkOiB0cnVlLFxyXG5cdHN0YXRlOiAoKSA9PiAoe1xyXG5cdFx0bmltOiBcIlwiLCAvL+WtmOWCqOiBiuWkqeWfuuacrOS/oeaBr25pbVxyXG5cdH0pLFxyXG5cdGFjdGlvbnM6IHtcclxuXHRcdHNldE5pbSh7XHJcblx0XHRcdGNvbW1pdCxcclxuXHRcdFx0c3RhdGVcclxuXHRcdH0sIHtcclxuXHRcdFx0bmltXHJcblx0XHR9ID0ge30pIHtcclxuXHRcdFx0Y29tbWl0KCdzZXROaW0nLCBuaW0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHRzZXROaW0oc3RhdGUsIG5pbSkge1xyXG5cdFx0XHRzdGF0ZS5uaW0gPSBuaW07XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///212\n");

/***/ }),
/* 213 */
/*!*****************************************************!*\
  !*** D:/1111/qymall/Oxfam/store/modules/message.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /*\r\n                                                                                                     \t存储消息基本信息\r\n                                                                                                     */var _default =\n{\n  namespaced: true,\n  state: function state() {return {\n      msg: [] //存储聊天基本信息nim\n    };},\n  actions: {\n    setMsg: function setMsg(_ref)\n\n\n\n\n    {var commit = _ref.commit,state = _ref.state;var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},msg = _ref2.msg;\n      commit('setMsg', msg);\n    } },\n\n  mutations: {\n    setMsg: function setMsg(state, msg) {\n      state.msg = msg;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbIm5hbWVzcGFjZWQiLCJzdGF0ZSIsIm1zZyIsImFjdGlvbnMiLCJzZXRNc2ciLCJjb21taXQiLCJtdXRhdGlvbnMiXSwibWFwcGluZ3MiOiJ3RkFBQTs7O0FBR2U7QUFDZEEsWUFBVSxFQUFFLElBREU7QUFFZEMsT0FBSyxFQUFFLHlCQUFPO0FBQ2JDLFNBQUcsRUFBRSxFQURRLENBQ0o7QUFESSxLQUFQLEVBRk87QUFLZEMsU0FBTyxFQUFFO0FBQ1JDLFVBRFE7Ozs7O0FBTUEsU0FKUEMsTUFJTyxRQUpQQSxNQUlPLENBSFBKLEtBR08sUUFIUEEsS0FHTyxpRkFBSixFQUFJLENBRFBDLEdBQ08sU0FEUEEsR0FDTztBQUNQRyxZQUFNLENBQUMsUUFBRCxFQUFXSCxHQUFYLENBQU47QUFDQSxLQVJPLEVBTEs7O0FBZWRJLFdBQVMsRUFBRTtBQUNWRixVQURVLGtCQUNISCxLQURHLEVBQ0lDLEdBREosRUFDUztBQUNsQkQsV0FBSyxDQUFDQyxHQUFOLEdBQVlBLEdBQVo7QUFDQSxLQUhTLEVBZkcsRSIsImZpbGUiOiIyMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5cdOWtmOWCqOa2iOaBr+WfuuacrOS/oeaBr1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZXNwYWNlZDogdHJ1ZSxcclxuXHRzdGF0ZTogKCkgPT4gKHtcclxuXHRcdG1zZzogW10sIC8v5a2Y5YKo6IGK5aSp5Z+65pys5L+h5oGvbmltXHJcblx0fSksXHJcblx0YWN0aW9uczoge1xyXG5cdFx0c2V0TXNnKHtcclxuXHRcdFx0Y29tbWl0LFxyXG5cdFx0XHRzdGF0ZVxyXG5cdFx0fSwge1xyXG5cdFx0XHRtc2dcclxuXHRcdH0gPSB7fSkge1xyXG5cdFx0XHRjb21taXQoJ3NldE1zZycsIG1zZyk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRtdXRhdGlvbnM6IHtcclxuXHRcdHNldE1zZyhzdGF0ZSwgbXNnKSB7XHJcblx0XHRcdHN0YXRlLm1zZyA9IG1zZztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///213\n");

/***/ }),
/* 214 */
/*!*************************************************!*\
  !*** D:/1111/qymall/Oxfam/store/modules/sdk.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; /*\r\n                                                                                                     \t存储聊天基本信息\r\n                                                                                                     */var _default =\n{\n  namespaced: true,\n  state: function state() {return {\n      sdk: \"\" //存储聊天基本信息nim\n    };},\n  actions: {\n    setSdk: function setSdk(_ref)\n\n\n\n\n    {var commit = _ref.commit,state = _ref.state;var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},sdk = _ref2.sdk;\n      commit('setSdk', sdk);\n    } },\n\n  mutations: {\n    setSdk: function setSdk(state, sdk) {\n      state.sdk = sdk;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9zZGsuanMiXSwibmFtZXMiOlsibmFtZXNwYWNlZCIsInN0YXRlIiwic2RrIiwiYWN0aW9ucyIsInNldFNkayIsImNvbW1pdCIsIm11dGF0aW9ucyJdLCJtYXBwaW5ncyI6IndGQUFBOzs7QUFHZTtBQUNkQSxZQUFVLEVBQUUsSUFERTtBQUVkQyxPQUFLLEVBQUUseUJBQU87QUFDYkMsU0FBRyxFQUFFLEVBRFEsQ0FDSjtBQURJLEtBQVAsRUFGTztBQUtkQyxTQUFPLEVBQUU7QUFDUkMsVUFEUTs7Ozs7QUFNQSxTQUpQQyxNQUlPLFFBSlBBLE1BSU8sQ0FIUEosS0FHTyxRQUhQQSxLQUdPLGlGQUFKLEVBQUksQ0FEUEMsR0FDTyxTQURQQSxHQUNPO0FBQ1BHLFlBQU0sQ0FBQyxRQUFELEVBQVdILEdBQVgsQ0FBTjtBQUNBLEtBUk8sRUFMSzs7QUFlZEksV0FBUyxFQUFFO0FBQ1ZGLFVBRFUsa0JBQ0hILEtBREcsRUFDSUMsR0FESixFQUNTO0FBQ2xCRCxXQUFLLENBQUNDLEdBQU4sR0FBWUEsR0FBWjtBQUNBLEtBSFMsRUFmRyxFIiwiZmlsZSI6IjIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblx05a2Y5YKo6IGK5aSp5Z+65pys5L+h5oGvXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lc3BhY2VkOiB0cnVlLFxyXG5cdHN0YXRlOiAoKSA9PiAoe1xyXG5cdFx0c2RrOiBcIlwiLCAvL+WtmOWCqOiBiuWkqeWfuuacrOS/oeaBr25pbVxyXG5cdH0pLFxyXG5cdGFjdGlvbnM6IHtcclxuXHRcdHNldFNkayh7XHJcblx0XHRcdGNvbW1pdCxcclxuXHRcdFx0c3RhdGVcclxuXHRcdH0sIHtcclxuXHRcdFx0c2RrXHJcblx0XHR9ID0ge30pIHtcclxuXHRcdFx0Y29tbWl0KCdzZXRTZGsnLCBzZGspO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHRzZXRTZGsoc3RhdGUsIHNkaykge1xyXG5cdFx0XHRzdGF0ZS5zZGsgPSBzZGs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///214\n");

/***/ }),
/* 215 */
/*!*********************************************************!*\
  !*** D:/1111/qymall/Oxfam/store/modules/mags_updata.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMTUuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///215\n");

/***/ }),
/* 216 */
/*!***********************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 217));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 218));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 222));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 223));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 224));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 225));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 226));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 227));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 228));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 229));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 230));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 220));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 219));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 231));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 221));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 232));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 233));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 234));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 235));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 236));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 237);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 238));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 239));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 240));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 241));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {__f__("warn", str, " at node_modules/uview-ui/index.js:13");}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 208)["default"]))

/***/ }),
/* 217 */
/*!**********************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };

/***/ }),
/* 218 */
/*!************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/request/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 219));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 221));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;

/***/ }),
/* 219 */
/*!*****************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 220));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 220 */
/*!*****************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/deepClone.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 221 */
/*!************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/test.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),
/* 222 */
/*!*******************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/queryParams.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),
/* 223 */
/*!*************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/route.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;

/***/ }),
/* 224 */
/*!******************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),
/* 225 */
/*!****************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 224));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),
/* 226 */
/*!*********************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 227 */
/*!************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/guid.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 228 */
/*!*************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/color.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),
/* 229 */
/*!*****************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/type2icon.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),
/* 230 */
/*!*******************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/randomArray.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 231 */
/*!***************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/addUnit.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 221));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),
/* 232 */
/*!**************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/random.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 233 */
/*!************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/trim.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 234 */
/*!*************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/toast.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;

/***/ }),
/* 235 */
/*!*****************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/getParent.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 236 */
/*!***************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/$parent.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),
/* 237 */
/*!***********************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/sys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}

/***/ }),
/* 238 */
/*!****************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/debounce.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 239 */
/*!****************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/function/throttle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),
/* 240 */
/*!************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/config/config.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-12-17
var version = '1.8.3';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),
/* 241 */
/*!************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/libs/config/zIndex.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 242 */
/*!*************************************************************!*\
  !*** D:/1111/qymall/Oxfam/node_modules/uview-ui/theme.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 243 */
/*!********************************************!*\
  !*** D:/1111/qymall/Oxfam/common/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 全局toast提示方法\nfunction toast(title) {\n  uni.showToast({\n    title: title,\n    duration: 2000,\n    icon: 'none',\n    position: \"center\" });\n\n}\n// 全局toast提示方法\nfunction modal(title) {\n  uni.showModal({\n    title: '提示',\n    content: '此功能暂未开放',\n    showCancel: false,\n    confirmText: \"我知道了\",\n    success: function success(res) {\n      if (res.confirm) {\n        // console.log('用户点击确定');\n      } else if (res.cancel) {\n        // console.log('用户点击取消');\n      }\n    } });\n\n}\nmodule.exports = {\n  toast: toast,\n  modal: modal };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3V0aWxzLmpzIl0sIm5hbWVzIjpbInRvYXN0IiwidGl0bGUiLCJ1bmkiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsImljb24iLCJwb3NpdGlvbiIsIm1vZGFsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiY2FuY2VsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDckJDLEtBQUcsQ0FBQ0MsU0FBSixDQUFjO0FBQ2JGLFNBQUssRUFBRUEsS0FETTtBQUViRyxZQUFRLEVBQUUsSUFGRztBQUdiQyxRQUFJLEVBQUUsTUFITztBQUliQyxZQUFRLEVBQUUsUUFKRyxFQUFkOztBQU1BO0FBQ0Q7QUFDQSxTQUFTQyxLQUFULENBQWVOLEtBQWYsRUFBc0I7QUFDckJDLEtBQUcsQ0FBQ00sU0FBSixDQUFjO0FBQ2JQLFNBQUssRUFBRSxJQURNO0FBRWJRLFdBQU8sRUFBRSxTQUZJO0FBR2JDLGNBQVUsRUFBRSxLQUhDO0FBSWJDLGVBQVcsRUFBRSxNQUpBO0FBS2JDLFdBQU8sRUFBRSxpQkFBU0MsR0FBVCxFQUFjO0FBQ3RCLFVBQUlBLEdBQUcsQ0FBQ0MsT0FBUixFQUFpQjtBQUNoQjtBQUNBLE9BRkQsTUFFTyxJQUFJRCxHQUFHLENBQUNFLE1BQVIsRUFBZ0I7QUFDdEI7QUFDQTtBQUNELEtBWFksRUFBZDs7QUFhQTtBQUNEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJqQixPQUFLLEVBQUxBLEtBRGdCO0FBRWhCTyxPQUFLLEVBQUxBLEtBRmdCLEVBQWpCIiwiZmlsZSI6IjI0My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWFqOWxgHRvYXN05o+Q56S65pa55rOVXHJcbmZ1bmN0aW9uIHRvYXN0KHRpdGxlKSB7XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHR0aXRsZTogdGl0bGUsXHJcblx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdGljb246ICdub25lJyxcclxuXHRcdHBvc2l0aW9uOiBcImNlbnRlclwiXHJcblx0fSk7XHJcbn1cclxuLy8g5YWo5bGAdG9hc3Tmj5DnpLrmlrnms5VcclxuZnVuY3Rpb24gbW9kYWwodGl0bGUpIHtcclxuXHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdGNvbnRlbnQ6ICfmraTlip/og73mmoLmnKrlvIDmlL4nLFxyXG5cdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRjb25maXJtVGV4dDogXCLmiJHnn6XpgZPkuoZcIixcclxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHRvYXN0LFxyXG5cdG1vZGFsLFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///243\n");

/***/ }),
/* 244 */
/*!**************************************************!*\
  !*** D:/1111/qymall/Oxfam/components/nodata.vue ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodata.vue?vue&type=template&id=4c6e6f34& */ 245);\n/* harmony import */ var _nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodata.vue?vue&type=script&lang=js& */ 247);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/nodata.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUg7QUFDbkg7QUFDMEQ7QUFDTDs7O0FBR3JEO0FBQ3NNO0FBQ3RNLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ub2RhdGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRjNmU2ZjM0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbm9kYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbm9kYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4v6L+F6Zu35LiL6L29L0hCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9ub2RhdGEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///244\n");

/***/ }),
/* 245 */
/*!*********************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/components/nodata.vue?vue&type=template&id=4c6e6f34& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nodata.vue?vue&type=template&id=4c6e6f34& */ 246);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_template_id_4c6e6f34___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 246 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/1111/qymall/Oxfam/components/nodata.vue?vue&type=template&id=4c6e6f34& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: _vm._$s(1, "sc", "nodata"), attrs: { _i: 1 } }, [
      _c("image", {
        staticClass: _vm._$s(2, "sc", "nodata-icon"),
        attrs: { _i: 2 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "nodata-tips"), attrs: { _i: 3 } },
        [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.title)))]
      )
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 247 */
/*!***************************************************************************!*\
  !*** D:/1111/qymall/Oxfam/components/nodata.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../迅雷下载/HBuilderX.3.1.2.20210206.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nodata.vue?vue&type=script&lang=js& */ 248);\n/* harmony import */ var _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nodata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThxQixDQUFnQixvckJBQUcsRUFBQyIsImZpbGUiOiIyNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL+i/hembt+S4i+i9vS9IQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL+i/hembt+S4i+i9vS9IQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL+i/hembt+S4i+i9vS9IQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbm9kYXRhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi/ov4Xpm7fkuIvovb0vSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4v6L+F6Zu35LiL6L29L0hCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25vZGF0YS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///247\n");

/***/ }),
/* 248 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/1111/qymall/Oxfam/components/nodata.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    title: String },\n\n  data: function data() {\n    return {};\n\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9ub2RhdGEudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0EsaUJBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7OztBQUdBLEdBUkEsRSIsImZpbGUiOiIyNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm5vZGF0YVwiPlxyXG5cdFx0XHQ8aW1hZ2UgY2xhc3M9XCJub2RhdGEtaWNvblwiIHNyYz1cIi9zdGF0aWMvaW1nL2ltYWdlcy9ub2RhdGEucG5nXCIgLz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJub2RhdGEtdGlwc1wiPnt7dGl0bGV9fTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHRpdGxlOiBTdHJpbmdcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4ubm9kYXRhe1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZy10b3A6IDE5MHVweDtcclxuXHR9XHJcblx0Lm5vZGF0YS1pY29ue1xyXG5cdFx0d2lkdGg6IDQwNHVweDtcclxuXHRcdGhlaWdodDogMjk0dXB4O1xyXG5cdH1cclxuXHQubm9kYXRhLXRpcHN7XHJcblx0XHRtYXJnaW4tdG9wOiA0MHVweDtcclxuXHRcdGZvbnQtc2l6ZTogMjh1cHg7XHJcblx0XHRjb2xvcjogIzk5OTtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///248\n");

/***/ }),
/* 249 */
/*!**********************************************!*\
  !*** D:/1111/qymall/Oxfam/services/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });Object.defineProperty(exports, \"AppServices\", { enumerable: true, get: function get() {return _AppServices.default;} });\n\n\nvar _AppServices = _interopRequireDefault(__webpack_require__(/*! ./AppServices */ 250));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc2VydmljZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EseUYiLCJmaWxlIjoiMjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICDmipvlh7ror7fmsYLnmoTmlrnms5VcclxuKi9cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBTZXJ2aWNlcyB9IGZyb20gJy4vQXBwU2VydmljZXMnXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///249\n");

/***/ }),
/* 250 */
/*!****************************************************!*\
  !*** D:/1111/qymall/Oxfam/services/AppServices.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _fetch = _interopRequireDefault(__webpack_require__(/*! ./fetch */ 251));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n{\n  //用户注册\n  userregister: function userregister(data) {\n    return _fetch.default.post('/user/register', _objectSpread({}, data),\n    false, \"\");\n  },\n\n  // 修改用户交易密码\n  transactionpassword: function transactionpassword(data) {\n    return _fetch.default.post('/user/transaction/password', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 修改用户登录密码\n  loginpassword: function loginpassword(data) {\n    return _fetch.default.post('/user/login/password', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 发送验证码sms_biz_type\n  //注册：Register 忘记登录密码：ResetPwd 修改登录密码：ModifyPwd 忘记交易密码：ResetTranPwd 修改交易密码：ModifyTranPwd\n  smscode: function smscode(data) {\n    return _fetch.default.post('/sms/code', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 根据手机号获取用户列表\n  userList: function userList(data) {\n    return _fetch.default.post('/user', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 添加常用地址\n  withdrawaladdressadd: function withdrawaladdressadd(data) {\n    return _fetch.default.post('/withdrawal/address/add', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 添加留言\n  messageboard: function messageboard(data) {\n    return _fetch.default.post('/message/board', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 用户token验证\n  tokencheck: function tokencheck(data) {\n    return _fetch.default.post('/token/check', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 用户充值\n  usdtrecharge: function usdtrecharge(data) {\n    return _fetch.default.post('/recharge', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 用户募捐\n  donation: function donation(data) {\n    return _fetch.default.post('/donation', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 用户提现\n  withdrawal: function withdrawal(data) {\n    return _fetch.default.post('/withdrawal', _objectSpread({}, data),\n    false, \"\");\n  },\n\n  // 用户登录\n  userlogin: function userlogin(data) {\n    return _fetch.default.post('/user/login', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 用户退出登录\n  userlogout: function userlogout(data) {\n    return _fetch.default.post('/user/logout', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取充值二维码和地址\n  donationinfo: function donationinfo(data) {\n    return _fetch.default.post('/donation/info', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取充值二维码和地址\n  rechargeinfo: function rechargeinfo(data) {\n    return _fetch.default.post('/recharge/info', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取募捐记录\n  donationrecord: function donationrecord(data) {\n    return _fetch.default.post('/donation/record', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取币种\n  coin: function coin(data) {\n    return _fetch.default.post('/coin', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取常用地址\n  withdrawaladdress: function withdrawaladdress(data) {\n    return _fetch.default.post('/withdrawal/address', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取我的团队页面内容\n  myteam: function myteam(data) {\n    return _fetch.default.post('/my/team', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取新闻列表以及详情\n  news: function news(data) {\n    return _fetch.default.post('/news', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取用户团队人数\n  myteamcount: function myteamcount(data) {\n    return _fetch.default.post('/my/team/count', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取用户详情\n  userdetail: function userdetail(data) {\n    return _fetch.default.post('/user/detail', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取用户钱包金额\n  userwallet: function userwallet(data) {\n    return _fetch.default.post('/user/wallet', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 获取钱包交易记录\n  walletrecord: function walletrecord(data) {\n    return _fetch.default.post('/wallet/record', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 验证码校验\n  smscodecheck: function smscodecheck(data) {\n    return _fetch.default.post('/sms/code/check', _objectSpread({}, data),\n    false, \"\");\n  },\n\n  //设置交密码\n  settransactionpassword: function settransactionpassword(data) {\n    return _fetch.default.post('/user/transaction/password/set', _objectSpread({}, data),\n    false, \"\");\n  },\n  //获取\n  systemnotice: function systemnotice(data) {\n    return _fetch.default.post('/system/notice', _objectSpread({}, data),\n    false, \"\");\n  },\n  // 总人数\n  usercount: function usercount(data) {\n    return _fetch.default.post('/user/count', _objectSpread({}, data),\n    false, \"\");\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc2VydmljZXMvQXBwU2VydmljZXMuanMiXSwibmFtZXMiOlsidXNlcnJlZ2lzdGVyIiwiZGF0YSIsImZldGNoIiwicG9zdCIsInRyYW5zYWN0aW9ucGFzc3dvcmQiLCJsb2dpbnBhc3N3b3JkIiwic21zY29kZSIsInVzZXJMaXN0Iiwid2l0aGRyYXdhbGFkZHJlc3NhZGQiLCJtZXNzYWdlYm9hcmQiLCJ0b2tlbmNoZWNrIiwidXNkdHJlY2hhcmdlIiwiZG9uYXRpb24iLCJ3aXRoZHJhd2FsIiwidXNlcmxvZ2luIiwidXNlcmxvZ291dCIsImRvbmF0aW9uaW5mbyIsInJlY2hhcmdlaW5mbyIsImRvbmF0aW9ucmVjb3JkIiwiY29pbiIsIndpdGhkcmF3YWxhZGRyZXNzIiwibXl0ZWFtIiwibmV3cyIsIm15dGVhbWNvdW50IiwidXNlcmRldGFpbCIsInVzZXJ3YWxsZXQiLCJ3YWxsZXRyZWNvcmQiLCJzbXNjb2RlY2hlY2siLCJzZXR0cmFuc2FjdGlvbnBhc3N3b3JkIiwic3lzdGVtbm90aWNlIiwidXNlcmNvdW50Il0sIm1hcHBpbmdzIjoidUZBQUEsNkU7QUFDZTtBQUNkO0FBQ0FBLGNBRmMsd0JBRURDLElBRkMsRUFFSztBQUNsQixXQUFPQyxlQUFNQyxJQUFOLENBQVcsZ0JBQVgsb0JBQWtDRixJQUFsQztBQUNKLFNBREksRUFDRyxFQURILENBQVA7QUFFQSxHQUxhOztBQU9kO0FBQ0FHLHFCQVJjLCtCQVFNSCxJQVJOLEVBUVk7QUFDekIsV0FBT0MsZUFBTUMsSUFBTixDQUFXLDRCQUFYLG9CQUE4Q0YsSUFBOUM7QUFDSixTQURJLEVBQ0csRUFESCxDQUFQO0FBRUEsR0FYYTtBQVlkO0FBQ0FJLGVBYmMseUJBYUFKLElBYkEsRUFhTTtBQUNuQixXQUFPQyxlQUFNQyxJQUFOLENBQVcsc0JBQVgsb0JBQXdDRixJQUF4QztBQUNKLFNBREksRUFDRyxFQURILENBQVA7QUFFQSxHQWhCYTtBQWlCZDtBQUNBO0FBQ0FLLFNBbkJjLG1CQW1CTkwsSUFuQk0sRUFtQkE7QUFDYixXQUFPQyxlQUFNQyxJQUFOLENBQVcsV0FBWCxvQkFBNkJGLElBQTdCO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBdEJhO0FBdUJkO0FBQ0FNLFVBeEJjLG9CQXdCTE4sSUF4QkssRUF3QkM7QUFDZCxXQUFPQyxlQUFNQyxJQUFOLENBQVcsT0FBWCxvQkFBeUJGLElBQXpCO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBM0JhO0FBNEJkO0FBQ0FPLHNCQTdCYyxnQ0E2Qk9QLElBN0JQLEVBNkJhO0FBQzFCLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyx5QkFBWCxvQkFBMkNGLElBQTNDO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBaENhO0FBaUNkO0FBQ0FRLGNBbENjLHdCQWtDRFIsSUFsQ0MsRUFrQ0s7QUFDbEIsV0FBT0MsZUFBTUMsSUFBTixDQUFXLGdCQUFYLG9CQUFrQ0YsSUFBbEM7QUFDSixTQURJLEVBQ0csRUFESCxDQUFQO0FBRUEsR0FyQ2E7QUFzQ2Q7QUFDQVMsWUF2Q2Msc0JBdUNIVCxJQXZDRyxFQXVDRztBQUNoQixXQUFPQyxlQUFNQyxJQUFOLENBQVcsY0FBWCxvQkFBZ0NGLElBQWhDO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBMUNhO0FBMkNkO0FBQ0FVLGNBNUNjLHdCQTRDRFYsSUE1Q0MsRUE0Q0s7QUFDbEIsV0FBT0MsZUFBTUMsSUFBTixDQUFXLFdBQVgsb0JBQTZCRixJQUE3QjtBQUNKLFNBREksRUFDRyxFQURILENBQVA7QUFFQSxHQS9DYTtBQWdEZDtBQUNBVyxVQWpEYyxvQkFpRExYLElBakRLLEVBaURDO0FBQ2QsV0FBT0MsZUFBTUMsSUFBTixDQUFXLFdBQVgsb0JBQTZCRixJQUE3QjtBQUNKLFNBREksRUFDRyxFQURILENBQVA7QUFFQSxHQXBEYTtBQXFEZDtBQUNBWSxZQXREYyxzQkFzREhaLElBdERHLEVBc0RHO0FBQ2hCLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyxhQUFYLG9CQUErQkYsSUFBL0I7QUFDSixTQURJLEVBQ0csRUFESCxDQUFQO0FBRUEsR0F6RGE7O0FBMkRkO0FBQ0FhLFdBNURjLHFCQTRESmIsSUE1REksRUE0REU7QUFDZixXQUFPQyxlQUFNQyxJQUFOLENBQVcsYUFBWCxvQkFBK0JGLElBQS9CO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBL0RhO0FBZ0VkO0FBQ0FjLFlBakVjLHNCQWlFSGQsSUFqRUcsRUFpRUc7QUFDaEIsV0FBT0MsZUFBTUMsSUFBTixDQUFXLGNBQVgsb0JBQWdDRixJQUFoQztBQUNKLFNBREksRUFDRyxFQURILENBQVA7QUFFQSxHQXBFYTtBQXFFZDtBQUNBZSxjQXRFYyx3QkFzRURmLElBdEVDLEVBc0VLO0FBQ2xCLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyxnQkFBWCxvQkFBa0NGLElBQWxDO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBekVhO0FBMEVkO0FBQ0FnQixjQTNFYyx3QkEyRURoQixJQTNFQyxFQTJFSztBQUNsQixXQUFPQyxlQUFNQyxJQUFOLENBQVcsZ0JBQVgsb0JBQWtDRixJQUFsQztBQUNKLFNBREksRUFDRyxFQURILENBQVA7QUFFQSxHQTlFYTtBQStFZDtBQUNBaUIsZ0JBaEZjLDBCQWdGQ2pCLElBaEZELEVBZ0ZPO0FBQ3BCLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyxrQkFBWCxvQkFBb0NGLElBQXBDO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBbkZhO0FBb0ZkO0FBQ0FrQixNQXJGYyxnQkFxRlRsQixJQXJGUyxFQXFGSDtBQUNWLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyxPQUFYLG9CQUF5QkYsSUFBekI7QUFDSixTQURJLEVBQ0csRUFESCxDQUFQO0FBRUEsR0F4RmE7QUF5RmQ7QUFDQW1CLG1CQTFGYyw2QkEwRkluQixJQTFGSixFQTBGVTtBQUN2QixXQUFPQyxlQUFNQyxJQUFOLENBQVcscUJBQVgsb0JBQXVDRixJQUF2QztBQUNKLFNBREksRUFDRyxFQURILENBQVA7QUFFQSxHQTdGYTtBQThGZDtBQUNBb0IsUUEvRmMsa0JBK0ZQcEIsSUEvRk8sRUErRkQ7QUFDWixXQUFPQyxlQUFNQyxJQUFOLENBQVcsVUFBWCxvQkFBNEJGLElBQTVCO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBbEdhO0FBbUdkO0FBQ0FxQixNQXBHYyxnQkFvR1RyQixJQXBHUyxFQW9HSDtBQUNWLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyxPQUFYLG9CQUF5QkYsSUFBekI7QUFDSixTQURJLEVBQ0csRUFESCxDQUFQO0FBRUEsR0F2R2E7QUF3R2Q7QUFDQXNCLGFBekdjLHVCQXlHRnRCLElBekdFLEVBeUdJO0FBQ2pCLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyxnQkFBWCxvQkFBa0NGLElBQWxDO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBNUdhO0FBNkdkO0FBQ0F1QixZQTlHYyxzQkE4R0h2QixJQTlHRyxFQThHRztBQUNoQixXQUFPQyxlQUFNQyxJQUFOLENBQVcsY0FBWCxvQkFBZ0NGLElBQWhDO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBakhhO0FBa0hkO0FBQ0F3QixZQW5IYyxzQkFtSEh4QixJQW5IRyxFQW1IRztBQUNoQixXQUFPQyxlQUFNQyxJQUFOLENBQVcsY0FBWCxvQkFBZ0NGLElBQWhDO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBdEhhO0FBdUhkO0FBQ0F5QixjQXhIYyx3QkF3SER6QixJQXhIQyxFQXdISztBQUNsQixXQUFPQyxlQUFNQyxJQUFOLENBQVcsZ0JBQVgsb0JBQWtDRixJQUFsQztBQUNKLFNBREksRUFDRyxFQURILENBQVA7QUFFQSxHQTNIYTtBQTRIZDtBQUNBMEIsY0E3SGMsd0JBNkhEMUIsSUE3SEMsRUE2SEs7QUFDbEIsV0FBT0MsZUFBTUMsSUFBTixDQUFXLGlCQUFYLG9CQUFtQ0YsSUFBbkM7QUFDSixTQURJLEVBQ0csRUFESCxDQUFQO0FBRUEsR0FoSWE7O0FBa0lkO0FBQ0EyQix3QkFuSWMsa0NBbUlTM0IsSUFuSVQsRUFtSWU7QUFDNUIsV0FBT0MsZUFBTUMsSUFBTixDQUFXLGdDQUFYLG9CQUFrREYsSUFBbEQ7QUFDSixTQURJLEVBQ0csRUFESCxDQUFQO0FBRUEsR0F0SWE7QUF1SWQ7QUFDQTRCLGNBeEljLHdCQXdJRDVCLElBeElDLEVBd0lLO0FBQ2xCLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyxnQkFBWCxvQkFBa0NGLElBQWxDO0FBQ0osU0FESSxFQUNHLEVBREgsQ0FBUDtBQUVBLEdBM0lhO0FBNElkO0FBQ0E2QixXQTdJYyxxQkE2SUo3QixJQTdJSSxFQTZJRTtBQUNmLFdBQU9DLGVBQU1DLElBQU4sQ0FBVyxhQUFYLG9CQUErQkYsSUFBL0I7QUFDSixTQURJLEVBQ0csRUFESCxDQUFQO0FBRUEsR0FoSmEsRSIsImZpbGUiOiIyNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnLi9mZXRjaCc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHQvL+eUqOaIt+azqOWGjFxyXG5cdHVzZXJyZWdpc3RlcihkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3VzZXIvcmVnaXN0ZXInLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblxyXG5cdC8vIOS/ruaUueeUqOaIt+S6pOaYk+WvhueggVxyXG5cdHRyYW5zYWN0aW9ucGFzc3dvcmQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoLnBvc3QoJy91c2VyL3RyYW5zYWN0aW9uL3Bhc3N3b3JkJywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOS/ruaUueeUqOaIt+eZu+W9leWvhueggVxyXG5cdGxvZ2lucGFzc3dvcmQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoLnBvc3QoJy91c2VyL2xvZ2luL3Bhc3N3b3JkJywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOWPkemAgemqjOivgeeggXNtc19iaXpfdHlwZVxyXG5cdC8v5rOo5YaM77yaUmVnaXN0ZXIg5b+Y6K6w55m75b2V5a+G56CB77yaUmVzZXRQd2Qg5L+u5pS555m75b2V5a+G56CB77yaTW9kaWZ5UHdkIOW/mOiusOS6pOaYk+Wvhuegge+8mlJlc2V0VHJhblB3ZCDkv67mlLnkuqTmmJPlr4bnoIHvvJpNb2RpZnlUcmFuUHdkXHJcblx0c21zY29kZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3Ntcy9jb2RlJywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOagueaNruaJi+acuuWPt+iOt+WPlueUqOaIt+WIl+ihqFxyXG5cdHVzZXJMaXN0KGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaC5wb3N0KCcvdXNlcicsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDmt7vliqDluLjnlKjlnLDlnYBcclxuXHR3aXRoZHJhd2FsYWRkcmVzc2FkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3dpdGhkcmF3YWwvYWRkcmVzcy9hZGQnLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblx0Ly8g5re75Yqg55WZ6KiAXHJcblx0bWVzc2FnZWJvYXJkKGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaC5wb3N0KCcvbWVzc2FnZS9ib2FyZCcsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDnlKjmiLd0b2tlbumqjOivgVxyXG5cdHRva2VuY2hlY2soZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoLnBvc3QoJy90b2tlbi9jaGVjaycsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDnlKjmiLflhYXlgLxcclxuXHR1c2R0cmVjaGFyZ2UoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoLnBvc3QoJy9yZWNoYXJnZScsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDnlKjmiLfli5/mjZBcclxuXHRkb25hdGlvbihkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL2RvbmF0aW9uJywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOeUqOaIt+aPkOeOsFxyXG5cdHdpdGhkcmF3YWwoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoLnBvc3QoJy93aXRoZHJhd2FsJywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdFxyXG5cdC8vIOeUqOaIt+eZu+W9lVxyXG5cdHVzZXJsb2dpbihkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3VzZXIvbG9naW4nLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblx0Ly8g55So5oi36YCA5Ye655m75b2VXHJcblx0dXNlcmxvZ291dChkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3VzZXIvbG9nb3V0JywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOiOt+WPluWFheWAvOS6jOe7tOeggeWSjOWcsOWdgFxyXG5cdGRvbmF0aW9uaW5mbyhkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL2RvbmF0aW9uL2luZm8nLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblx0Ly8g6I635Y+W5YWF5YC85LqM57u056CB5ZKM5Zyw5Z2AXHJcblx0cmVjaGFyZ2VpbmZvKGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaC5wb3N0KCcvcmVjaGFyZ2UvaW5mbycsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDojrflj5bli5/mjZDorrDlvZVcclxuXHRkb25hdGlvbnJlY29yZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL2RvbmF0aW9uL3JlY29yZCcsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDojrflj5bluIHnp41cclxuXHRjb2luKGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaC5wb3N0KCcvY29pbicsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDojrflj5bluLjnlKjlnLDlnYBcclxuXHR3aXRoZHJhd2FsYWRkcmVzcyhkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3dpdGhkcmF3YWwvYWRkcmVzcycsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDojrflj5bmiJHnmoTlm6LpmJ/pobXpnaLlhoXlrrlcclxuXHRteXRlYW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoLnBvc3QoJy9teS90ZWFtJywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOiOt+WPluaWsOmXu+WIl+ihqOS7peWPiuivpuaDhVxyXG5cdG5ld3MoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoLnBvc3QoJy9uZXdzJywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOiOt+WPlueUqOaIt+WboumYn+S6uuaVsFxyXG5cdG15dGVhbWNvdW50KGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaC5wb3N0KCcvbXkvdGVhbS9jb3VudCcsIHsgLi4uZGF0YVxyXG5cdFx0fSwgZmFsc2UsIFwiXCIpXHJcblx0fSxcclxuXHQvLyDojrflj5bnlKjmiLfor6bmg4VcclxuXHR1c2VyZGV0YWlsKGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaC5wb3N0KCcvdXNlci9kZXRhaWwnLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblx0Ly8g6I635Y+W55So5oi36ZKx5YyF6YeR6aKdXHJcblx0dXNlcndhbGxldChkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3VzZXIvd2FsbGV0JywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOiOt+WPlumSseWMheS6pOaYk+iusOW9lVxyXG5cdHdhbGxldHJlY29yZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3dhbGxldC9yZWNvcmQnLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblx0Ly8g6aqM6K+B56CB5qCh6aqMXHJcblx0c21zY29kZWNoZWNrKGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaC5wb3N0KCcvc21zL2NvZGUvY2hlY2snLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblx0XHJcblx0Ly/orr7nva7kuqTlr4bnoIFcclxuXHRzZXR0cmFuc2FjdGlvbnBhc3N3b3JkKGRhdGEpIHtcclxuXHRcdHJldHVybiBmZXRjaC5wb3N0KCcvdXNlci90cmFuc2FjdGlvbi9wYXNzd29yZC9zZXQnLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblx0Ly/ojrflj5ZcclxuXHRzeXN0ZW1ub3RpY2UoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGZldGNoLnBvc3QoJy9zeXN0ZW0vbm90aWNlJywgeyAuLi5kYXRhXHJcblx0XHR9LCBmYWxzZSwgXCJcIilcclxuXHR9LFxyXG5cdC8vIOaAu+S6uuaVsFxyXG5cdHVzZXJjb3VudChkYXRhKSB7XHJcblx0XHRyZXR1cm4gZmV0Y2gucG9zdCgnL3VzZXIvY291bnQnLCB7IC4uLmRhdGFcclxuXHRcdH0sIGZhbHNlLCBcIlwiKVxyXG5cdH0sXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///250\n");

/***/ }),
/* 251 */
/*!**********************************************!*\
  !*** D:/1111/qymall/Oxfam/services/fetch.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! @/config/index.js */ 252));\n\nvar _utils = _interopRequireDefault(__webpack_require__(/*! @/common/utils.js */ 243));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 204));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var baseUrl = _index.default.baseUrl;\n\n/**\r\n                                                                                                                                                                                      * 请求数据封装方法\r\n                                                                                                                                                                                      * @param method 请求方式 GET POST PUT\r\n                                                                                                                                                                                      * @param url 请求地址（login/login）\r\n                                                                                                                                                                                      * @param data 请求对象\r\n                                                                                                                                                                                      * @param loading 是否展示loading\r\n                                                                                                                                                                                      * @param loadingTitle 展示loading文字\r\n                                                                                                                                                                                      * @returns {Promise<unknown>}\r\n                                                                                                                                                                                      */\nfunction fetch(method, url, data, loading, loadingTitle) {\n  // console.log(url)\n  return new Promise(function (resolve, reject) {\n    //显示加载动画\n    if (loading) {\n      uni.showLoading({\n        title: loadingTitle,\n        mask: true });\n\n    }\n    //获取token\n    var params = {};\n    Object.assign(params, data);\n    // console.log(params)\n    //发起请求\n    uni.request({\n      url: url,\n      method: method,\n      data: params,\n      header: {\n        // 数据被编码为名称/值对\n        \"Content-Type\": \"application/json;charset=UTF-8\",\n        \"user_login_token\": uni.getStorageSync('rescodeUserInfo') ? uni.getStorageSync('rescodeUserInfo').user_login_token : \"\" },\n\n      success: function success(res) {\n        // console.log(123, res, url)\n        var code = res.data.code;\n        var message = res.data.msg;\n        //结束加载动画\n        //统一处理返回值\n        if (loading) {\n          setTimeout(function () {\n            switch (Number(code)) {\n              case 0:\n              case 200:\n                resolve(res.data);\n                break;\n\n              case 10007:\n                _utils.default.toast('您的账号已离线，请重新登录');\n                setTimeout(function () {\n                  uni.navigateTo({\n                    url: \"/pages/login/login\" });\n\n                }, 1500);\n                break;\n              default:\n                _utils.default.toast(\"\".concat(message));\n                break;}\n\n          }, 1500);\n        } else {\n          switch (Number(code)) {\n            case 0:\n            case 200:\n              resolve(res.data);\n              break;\n            case 10007:\n              _utils.default.toast('您的账号已离线，请重新登录');\n              setTimeout(function () {\n                uni.navigateTo({\n                  url: \"/pages/login/login\" });\n\n              }, 1500);\n\n              break;\n            default:\n              _utils.default.toast(\"\".concat(message));\n              break;}\n\n        }\n      },\n      fail: function fail(err) {\n        reject(err);\n        uni.stopPullDownRefresh();\n      },\n      complete: function complete() {\n        setTimeout(function () {\n          uni.stopPullDownRefresh(); //停止下拉刷新动画\t\n        }, 500);\n        if (loading) {\n          setTimeout(function () {\n            uni.hideLoading();\n          }, 1000);\n        }\n      } });\n\n  });\n}var _default =\n{\n  get: function get(url, params, loading, loadingTitle) {\n    return fetch('GET', baseUrl + url, params, loading, loadingTitle);\n  },\n  post: function post(url, params, loading, loadingTitle) {\n    return fetch('POST', baseUrl + url, params, loading, loadingTitle);\n  },\n  put: function put(url, params, loading, loadingTitle) {\n    return fetch('PUT', baseUrl + url, params, loading, loadingTitle);\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc2VydmljZXMvZmV0Y2guanMiXSwibmFtZXMiOlsiYmFzZVVybCIsImNvbmZpZyIsImZldGNoIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImxvYWRpbmciLCJsb2FkaW5nVGl0bGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwicmVxdWVzdCIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwidXNlcl9sb2dpbl90b2tlbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwibWVzc2FnZSIsIm1zZyIsInNldFRpbWVvdXQiLCJOdW1iZXIiLCJ1dGlscyIsInRvYXN0IiwibmF2aWdhdGVUbyIsImZhaWwiLCJlcnIiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiY29tcGxldGUiLCJoaWRlTG9hZGluZyIsImdldCIsInBvc3QiLCJwdXQiXSwibWFwcGluZ3MiOiJ1RkFBQTs7QUFFQTtBQUNBLHVFLDZGQUZBLElBQU1BLE9BQU8sR0FBR0MsZUFBT0QsT0FBdkI7O0FBSUE7Ozs7Ozs7OztBQVNBLFNBQVNFLEtBQVQsQ0FBZUMsTUFBZixFQUF1QkMsR0FBdkIsRUFBNEJDLElBQTVCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsWUFBM0MsRUFBeUQ7QUFDeEQ7QUFDQSxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkM7QUFDQSxRQUFJSixPQUFKLEVBQWE7QUFDWkssU0FBRyxDQUFDQyxXQUFKLENBQWdCO0FBQ2ZDLGFBQUssRUFBRU4sWUFEUTtBQUVmTyxZQUFJLEVBQUUsSUFGUyxFQUFoQjs7QUFJQTtBQUNEO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQUMsVUFBTSxDQUFDQyxNQUFQLENBQWNGLE1BQWQsRUFBc0JWLElBQXRCO0FBQ0E7QUFDQTtBQUNBTSxPQUFHLENBQUNPLE9BQUosQ0FBWTtBQUNYZCxTQUFHLEVBQUhBLEdBRFc7QUFFWEQsWUFBTSxFQUFOQSxNQUZXO0FBR1hFLFVBQUksRUFBRVUsTUFISztBQUlYSSxZQUFNLEVBQUU7QUFDUDtBQUNBLHdCQUFnQixnQ0FGVDtBQUdQLDRCQUFvQlIsR0FBRyxDQUFDUyxjQUFKLENBQW1CLGlCQUFuQixJQUF3Q1QsR0FBRyxDQUFDUyxjQUFKLENBQW1CLGlCQUFuQixFQUFzQ0MsZ0JBQTlFLEdBQWlHLEVBSDlHLEVBSkc7O0FBU1hDLGFBQU8sRUFBRSxpQkFBQUMsR0FBRyxFQUFJO0FBQ2Y7QUFDQSxZQUFJQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ2xCLElBQUosQ0FBU21CLElBQXBCO0FBQ0EsWUFBSUMsT0FBTyxHQUFHRixHQUFHLENBQUNsQixJQUFKLENBQVNxQixHQUF2QjtBQUNBO0FBQ0E7QUFDQSxZQUFJcEIsT0FBSixFQUFhO0FBQ1pxQixvQkFBVSxDQUFDLFlBQU07QUFDaEIsb0JBQVFDLE1BQU0sQ0FBQ0osSUFBRCxDQUFkO0FBQ0MsbUJBQUssQ0FBTDtBQUNBLG1CQUFLLEdBQUw7QUFDQ2YsdUJBQU8sQ0FBQ2MsR0FBRyxDQUFDbEIsSUFBTCxDQUFQO0FBQ0E7O0FBRUQsbUJBQUssS0FBTDtBQUNDd0IsK0JBQU1DLEtBQU4sQ0FBWSxlQUFaO0FBQ0FILDBCQUFVLENBQUMsWUFBTTtBQUNoQmhCLHFCQUFHLENBQUNvQixVQUFKLENBQWU7QUFDZDNCLHVCQUFHLEVBQUUsb0JBRFMsRUFBZjs7QUFHQSxpQkFKUyxFQUlQLElBSk8sQ0FBVjtBQUtBO0FBQ0Q7QUFDQ3lCLCtCQUFNQyxLQUFOLFdBQWVMLE9BQWY7QUFDQSxzQkFoQkY7O0FBa0JBLFdBbkJTLEVBbUJQLElBbkJPLENBQVY7QUFvQkEsU0FyQkQsTUFxQk87QUFDTixrQkFBUUcsTUFBTSxDQUFDSixJQUFELENBQWQ7QUFDQyxpQkFBSyxDQUFMO0FBQ0EsaUJBQUssR0FBTDtBQUNDZixxQkFBTyxDQUFDYyxHQUFHLENBQUNsQixJQUFMLENBQVA7QUFDQTtBQUNELGlCQUFLLEtBQUw7QUFDQ3dCLDZCQUFNQyxLQUFOLENBQVksZUFBWjtBQUNBSCx3QkFBVSxDQUFDLFlBQU07QUFDaEJoQixtQkFBRyxDQUFDb0IsVUFBSixDQUFlO0FBQ2QzQixxQkFBRyxFQUFFLG9CQURTLEVBQWY7O0FBR0EsZUFKUyxFQUlQLElBSk8sQ0FBVjs7QUFNQTtBQUNEO0FBQ0N5Qiw2QkFBTUMsS0FBTixXQUFlTCxPQUFmO0FBQ0Esb0JBaEJGOztBQWtCQTtBQUNELE9BeERVO0FBeURYTyxVQUFJLEVBQUUsY0FBQUMsR0FBRyxFQUFJO0FBQ1p2QixjQUFNLENBQUN1QixHQUFELENBQU47QUFDQXRCLFdBQUcsQ0FBQ3VCLG1CQUFKO0FBQ0EsT0E1RFU7QUE2RFhDLGNBQVEsRUFBRSxvQkFBTTtBQUNmUixrQkFBVSxDQUFDLFlBQVc7QUFDckJoQixhQUFHLENBQUN1QixtQkFBSixHQURxQixDQUNNO0FBQzNCLFNBRlMsRUFFUCxHQUZPLENBQVY7QUFHQSxZQUFJNUIsT0FBSixFQUFhO0FBQ1pxQixvQkFBVSxDQUFDLFlBQU07QUFDaEJoQixlQUFHLENBQUN5QixXQUFKO0FBQ0EsV0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBO0FBQ0QsT0F0RVUsRUFBWjs7QUF3RUEsR0FyRk0sQ0FBUDtBQXNGQSxDO0FBQ2M7QUFDZEMsS0FEYyxlQUNWakMsR0FEVSxFQUNMVyxNQURLLEVBQ0dULE9BREgsRUFDWUMsWUFEWixFQUMwQjtBQUN2QyxXQUFPTCxLQUFLLENBQUMsS0FBRCxFQUFRRixPQUFPLEdBQUdJLEdBQWxCLEVBQXVCVyxNQUF2QixFQUErQlQsT0FBL0IsRUFBd0NDLFlBQXhDLENBQVo7QUFDQSxHQUhhO0FBSWQrQixNQUpjLGdCQUlUbEMsR0FKUyxFQUlKVyxNQUpJLEVBSUlULE9BSkosRUFJYUMsWUFKYixFQUkyQjtBQUN4QyxXQUFPTCxLQUFLLENBQUMsTUFBRCxFQUFTRixPQUFPLEdBQUdJLEdBQW5CLEVBQXdCVyxNQUF4QixFQUFnQ1QsT0FBaEMsRUFBeUNDLFlBQXpDLENBQVo7QUFDQSxHQU5hO0FBT2RnQyxLQVBjLGVBT1ZuQyxHQVBVLEVBT0xXLE1BUEssRUFPR1QsT0FQSCxFQU9ZQyxZQVBaLEVBTzBCO0FBQ3ZDLFdBQU9MLEtBQUssQ0FBQyxLQUFELEVBQVFGLE9BQU8sR0FBR0ksR0FBbEIsRUFBdUJXLE1BQXZCLEVBQStCVCxPQUEvQixFQUF3Q0MsWUFBeEMsQ0FBWjtBQUNBLEdBVGEsRSIsImZpbGUiOiIyNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCJAL2NvbmZpZy9pbmRleC5qc1wiO1xyXG5jb25zdCBiYXNlVXJsID0gY29uZmlnLmJhc2VVcmw7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiQC9jb21tb24vdXRpbHMuanNcIjtcclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG4vKipcclxuICog6K+35rGC5pWw5o2u5bCB6KOF5pa55rOVXHJcbiAqIEBwYXJhbSBtZXRob2Qg6K+35rGC5pa55byPIEdFVCBQT1NUIFBVVFxyXG4gKiBAcGFyYW0gdXJsIOivt+axguWcsOWdgO+8iGxvZ2luL2xvZ2lu77yJXHJcbiAqIEBwYXJhbSBkYXRhIOivt+axguWvueixoVxyXG4gKiBAcGFyYW0gbG9hZGluZyDmmK/lkKblsZXnpLpsb2FkaW5nXHJcbiAqIEBwYXJhbSBsb2FkaW5nVGl0bGUg5bGV56S6bG9hZGluZ+aWh+Wtl1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duPn1cclxuICovXHJcbmZ1bmN0aW9uIGZldGNoKG1ldGhvZCwgdXJsLCBkYXRhLCBsb2FkaW5nLCBsb2FkaW5nVGl0bGUpIHtcclxuXHQvLyBjb25zb2xlLmxvZyh1cmwpXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdC8v5pi+56S65Yqg6L295Yqo55S7XHJcblx0XHRpZiAobG9hZGluZykge1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOiBsb2FkaW5nVGl0bGUsXHJcblx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdC8v6I635Y+WdG9rZW5cclxuXHRcdGNvbnN0IHBhcmFtcyA9IHt9XHJcblx0XHRPYmplY3QuYXNzaWduKHBhcmFtcywgZGF0YSlcclxuXHRcdC8vIGNvbnNvbGUubG9nKHBhcmFtcylcclxuXHRcdC8v5Y+R6LW36K+35rGCXHJcblx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdHVybCxcclxuXHRcdFx0bWV0aG9kLFxyXG5cdFx0XHRkYXRhOiBwYXJhbXMsXHJcblx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdC8vIOaVsOaNruiiq+e8lueggeS4uuWQjeensC/lgLzlr7lcclxuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiLFxyXG5cdFx0XHRcdFwidXNlcl9sb2dpbl90b2tlblwiOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Jlc2NvZGVVc2VySW5mbycpID8gdW5pLmdldFN0b3JhZ2VTeW5jKCdyZXNjb2RlVXNlckluZm8nKS51c2VyX2xvZ2luX3Rva2VuIDogXCJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKDEyMywgcmVzLCB1cmwpXHJcblx0XHRcdFx0bGV0IGNvZGUgPSByZXMuZGF0YS5jb2RlXHJcblx0XHRcdFx0bGV0IG1lc3NhZ2UgPSByZXMuZGF0YS5tc2dcclxuXHRcdFx0XHQvL+e7k+adn+WKoOi9veWKqOeUu1xyXG5cdFx0XHRcdC8v57uf5LiA5aSE55CG6L+U5Zue5YC8XHJcblx0XHRcdFx0aWYgKGxvYWRpbmcpIHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKE51bWJlcihjb2RlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdFx0XHRjYXNlIDIwMDpcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAxMDAwNzpcclxuXHRcdFx0XHRcdFx0XHRcdHV0aWxzLnRvYXN0KCfmgqjnmoTotKblj7flt7Lnprvnur/vvIzor7fph43mlrDnmbvlvZUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9sb2dpbi9sb2dpblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9LCAxNTAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdHV0aWxzLnRvYXN0KGAke21lc3NhZ2V9YClcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCAxNTAwKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKE51bWJlcihjb2RlKSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRcdGNhc2UgMjAwOlxyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgMTAwMDc6XHJcblx0XHRcdFx0XHRcdFx0dXRpbHMudG9hc3QoJ+aCqOeahOi0puWPt+W3suemu+e6v++8jOivt+mHjeaWsOeZu+W9lScpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL2xvZ2luL2xvZ2luXCJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fSwgMTUwMClcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHR1dGlscy50b2FzdChgJHttZXNzYWdlfWApXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOiBlcnIgPT4ge1xyXG5cdFx0XHRcdHJlamVjdChlcnIpO1xyXG5cdFx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7IC8v5YGc5q2i5LiL5ouJ5Yi35paw5Yqo55S7XHRcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdGlmIChsb2FkaW5nKSB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Z2V0KHVybCwgcGFyYW1zLCBsb2FkaW5nLCBsb2FkaW5nVGl0bGUpIHtcclxuXHRcdHJldHVybiBmZXRjaCgnR0VUJywgYmFzZVVybCArIHVybCwgcGFyYW1zLCBsb2FkaW5nLCBsb2FkaW5nVGl0bGUpXHJcblx0fSxcclxuXHRwb3N0KHVybCwgcGFyYW1zLCBsb2FkaW5nLCBsb2FkaW5nVGl0bGUpIHtcclxuXHRcdHJldHVybiBmZXRjaCgnUE9TVCcsIGJhc2VVcmwgKyB1cmwsIHBhcmFtcywgbG9hZGluZywgbG9hZGluZ1RpdGxlKVxyXG5cdH0sXHJcblx0cHV0KHVybCwgcGFyYW1zLCBsb2FkaW5nLCBsb2FkaW5nVGl0bGUpIHtcclxuXHRcdHJldHVybiBmZXRjaCgnUFVUJywgYmFzZVVybCArIHVybCwgcGFyYW1zLCBsb2FkaW5nLCBsb2FkaW5nVGl0bGUpXHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///251\n");

/***/ }),
/* 252 */
/*!********************************************!*\
  !*** D:/1111/qymall/Oxfam/config/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var baseUrl = '';\nbaseUrl = 'http://5.181.150.239:65000/api/oxfam/v1.0';\nvar up_img = baseUrl + '/image/upload';\nmodule.exports = {\n  baseUrl: baseUrl,\n  up_img: up_img };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL2luZGV4LmpzIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJ1cF9pbWciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxPQUFPLEdBQUcsRUFBZDtBQUNBQSxPQUFPLEdBQUcsMkNBQVY7QUFDQSxJQUFNQyxNQUFNLEdBQUdELE9BQU8sR0FBQyxlQUF2QjtBQUNBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJILFNBQU8sRUFBUEEsT0FEZ0I7QUFFaEJDLFFBQU0sRUFBTkEsTUFGZ0IsRUFBakIiLCJmaWxlIjoiMjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGJhc2VVcmwgPSAnJ1xyXG5iYXNlVXJsID0gJ2h0dHA6Ly81LjE4MS4xNTAuMjM5OjY1MDAwL2FwaS9veGZhbS92MS4wJ1xyXG5jb25zdCB1cF9pbWcgPSBiYXNlVXJsKycvaW1hZ2UvdXBsb2FkJ1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRiYXNlVXJsLFxyXG5cdHVwX2ltZ1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///252\n");

/***/ }),
/* 253 */
/*!******************************************!*\
  !*** D:/1111/qymall/Oxfam/common/lib.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! @/config */ 252));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n// import fetch from './fetch';\n// 网络监听\nvar NetWork = {\n  // 网络状态\n  isConnect: false,\n  // 监听网络状态\n  On: function On() {var _this = this;\n    // 获取当前网络状态\n    uni.getNetworkType({\n      success: function success(res) {\n        if (res.networkType !== 'none') {\n          _this.isConnect = true;\n          return;\n        }\n        uni.showToast({\n          icon: \"none\",\n          title: '请先连接网络' });\n\n      } });\n\n    // 监听网络状态变化\n    uni.onNetworkStatusChange(function (res) {\n      _this.isConnect = res.isConnected;\n      if (!res.isConnected) {\n        uni.showToast({\n          icon: \"none\",\n          title: '您目前处于断网状态' });\n\n      }\n    });\n  } };\n\n\n// app更新\nfunction Update(callback) {\n\n  var type = 0;\n  var os = uni.getSystemInfoSync().platform;\n  if (os == 'android') {\n    type = 2;\n  } else {\n    type = 1;\n  }\n  var server = _config.default.baseUrl + \"Index/homePage\"; //检查更新地址  \n  uni.request({\n    url: server,\n    data: { me_id: uni.getStorageSync(\"sj_member_id\") ? uni.getStorageSync(\"sj_member_id\") : '', token: uni.getStorageSync(\"sj_token\") ? uni.getStorageSync(\"sj_token\") : '' },\n    method: 'POST',\n    dataType: 'json',\n    header: {\n      'content-type': 'application/x-www-form-urlencoded' },\n\n    success: function success(res) {\n      // console.log(res.data)\n      var url = res.data.data.app_url;\n      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {\n        // console.log(\"线下版本\",  wgtinfo.version)\n        uni.setStorageSync('dataVersion', wgtinfo.version);\n        var xianshang = Number(res.data.data.database_version_ios.replace(/[.]/g, \"\"));\n        var xianxia = Number(wgtinfo.version.replace(/[.]/g, \"\"));\n        // console.log(\"计算\", res.data.data, xianshang, xianxia)\n        if (xianshang > xianxia) {\n          uni.showModal({ //提醒用户更新\n            title: \"提示\",\n            content: '新版本更新',\n            showCancel: false,\n            success: function success(res1) {\n              __f__(\"log\", res1, url, \" at common/lib.js:69\");\n              plus.runtime.openURL(url);\n            } });\n\n        } else {\n          callback && callback();\n        }\n      });\n    } });\n\n\n}var _default =\n\n{\n  NetWork: NetWork,\n  Update: Update };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 208)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2xpYi5qcyJdLCJuYW1lcyI6WyJOZXRXb3JrIiwiaXNDb25uZWN0IiwiT24iLCJ1bmkiLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJuZXR3b3JrVHlwZSIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsIm9uTmV0d29ya1N0YXR1c0NoYW5nZSIsImlzQ29ubmVjdGVkIiwiVXBkYXRlIiwiY2FsbGJhY2siLCJ0eXBlIiwib3MiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwic2VydmVyIiwicmVxdWVzdCIsImJhc2VVcmwiLCJ1cmwiLCJkYXRhIiwibWVfaWQiLCJnZXRTdG9yYWdlU3luYyIsInRva2VuIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJoZWFkZXIiLCJhcHBfdXJsIiwicGx1cyIsInJ1bnRpbWUiLCJnZXRQcm9wZXJ0eSIsImFwcGlkIiwid2d0aW5mbyIsInNldFN0b3JhZ2VTeW5jIiwidmVyc2lvbiIsInhpYW5zaGFuZyIsIk51bWJlciIsImRhdGFiYXNlX3ZlcnNpb25faW9zIiwicmVwbGFjZSIsInhpYW54aWEiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInJlczEiLCJvcGVuVVJMIl0sIm1hcHBpbmdzIjoib0lBQUEsK0U7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHO0FBQ2Y7QUFDQUMsV0FBUyxFQUFFLEtBRkk7QUFHZjtBQUNBQyxJQUplLGdCQUlWO0FBQ0o7QUFDQUMsT0FBRyxDQUFDQyxjQUFKLENBQW1CO0FBQ2xCQyxhQUFPLEVBQUUsaUJBQUNDLEdBQUQsRUFBUztBQUNqQixZQUFJQSxHQUFHLENBQUNDLFdBQUosS0FBb0IsTUFBeEIsRUFBZ0M7QUFDL0IsZUFBSSxDQUFDTixTQUFMLEdBQWlCLElBQWpCO0FBQ0E7QUFDQTtBQUNERSxXQUFHLENBQUNLLFNBQUosQ0FBYztBQUNiQyxjQUFJLEVBQUUsTUFETztBQUViQyxlQUFLLEVBQUUsUUFGTSxFQUFkOztBQUlBLE9BVmlCLEVBQW5COztBQVlBO0FBQ0FQLE9BQUcsQ0FBQ1EscUJBQUosQ0FBMEIsVUFBQ0wsR0FBRCxFQUFTO0FBQ2xDLFdBQUksQ0FBQ0wsU0FBTCxHQUFpQkssR0FBRyxDQUFDTSxXQUFyQjtBQUNBLFVBQUksQ0FBQ04sR0FBRyxDQUFDTSxXQUFULEVBQXNCO0FBQ3JCVCxXQUFHLENBQUNLLFNBQUosQ0FBYztBQUNiQyxjQUFJLEVBQUUsTUFETztBQUViQyxlQUFLLEVBQUUsV0FGTSxFQUFkOztBQUlBO0FBQ0QsS0FSRDtBQVNBLEdBNUJjLEVBQWhCOzs7QUErQkE7QUFDQSxTQUFTRyxNQUFULENBQWdCQyxRQUFoQixFQUEwQjs7QUFFekIsTUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxNQUFJQyxFQUFFLEdBQUdiLEdBQUcsQ0FBQ2MsaUJBQUosR0FBd0JDLFFBQWpDO0FBQ0EsTUFBSUYsRUFBRSxJQUFJLFNBQVYsRUFBcUI7QUFDcEJELFFBQUksR0FBRyxDQUFQO0FBQ0EsR0FGRCxNQUVPO0FBQ05BLFFBQUksR0FBRyxDQUFQO0FBQ0E7QUFDRCxNQUFJSSxNQUFNLEdBQUdDLGdCQUFRQyxPQUFSLEdBQWtCLGdCQUEvQixDQVR5QixDQVN3QjtBQUNqRGxCLEtBQUcsQ0FBQ2lCLE9BQUosQ0FBWTtBQUNYRSxPQUFHLEVBQUVILE1BRE07QUFFWEksUUFBSSxFQUFFLEVBQUNDLEtBQUssRUFBQ3JCLEdBQUcsQ0FBQ3NCLGNBQUosQ0FBbUIsY0FBbkIsSUFBcUN0QixHQUFHLENBQUNzQixjQUFKLENBQW1CLGNBQW5CLENBQXJDLEdBQTBFLEVBQWpGLEVBQW9GQyxLQUFLLEVBQUN2QixHQUFHLENBQUNzQixjQUFKLENBQW1CLFVBQW5CLElBQWlDdEIsR0FBRyxDQUFDc0IsY0FBSixDQUFtQixVQUFuQixDQUFqQyxHQUFrRSxFQUE1SixFQUZLO0FBR1hFLFVBQU0sRUFBRSxNQUhHO0FBSVhDLFlBQVEsRUFBRSxNQUpDO0FBS1hDLFVBQU0sRUFBRTtBQUNQLHNCQUFnQixtQ0FEVCxFQUxHOztBQVFYeEIsV0FBTyxFQUFFLGlCQUFDQyxHQUFELEVBQVM7QUFDakI7QUFDQSxVQUFJZ0IsR0FBRyxHQUFHaEIsR0FBRyxDQUFDaUIsSUFBSixDQUFTQSxJQUFULENBQWNPLE9BQXhCO0FBQ0FDLFVBQUksQ0FBQ0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCRixJQUFJLENBQUNDLE9BQUwsQ0FBYUUsS0FBdEMsRUFBNkMsVUFBQ0MsT0FBRCxFQUFhO0FBQ3pEO0FBQ0FoQyxXQUFHLENBQUNpQyxjQUFKLENBQW1CLGFBQW5CLEVBQWtDRCxPQUFPLENBQUNFLE9BQTFDO0FBQ0EsWUFBSUMsU0FBUyxHQUFHQyxNQUFNLENBQUNqQyxHQUFHLENBQUNpQixJQUFKLENBQVNBLElBQVQsQ0FBY2lCLG9CQUFkLENBQW1DQyxPQUFuQyxDQUEyQyxNQUEzQyxFQUFtRCxFQUFuRCxDQUFELENBQXRCO0FBQ0EsWUFBSUMsT0FBTyxHQUFHSCxNQUFNLENBQUNKLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkksT0FBaEIsQ0FBd0IsTUFBeEIsRUFBZ0MsRUFBaEMsQ0FBRCxDQUFwQjtBQUNBO0FBQ0EsWUFBSUgsU0FBUyxHQUFHSSxPQUFoQixFQUF5QjtBQUN4QnZDLGFBQUcsQ0FBQ3dDLFNBQUosQ0FBYyxFQUFFO0FBQ2ZqQyxpQkFBSyxFQUFFLElBRE07QUFFYmtDLG1CQUFPLEVBQUUsT0FGSTtBQUdiQyxzQkFBVSxFQUFFLEtBSEM7QUFJYnhDLG1CQUFPLEVBQUUsaUJBQUN5QyxJQUFELEVBQVU7QUFDbEIsMkJBQVlBLElBQVosRUFBaUJ4QixHQUFqQjtBQUNBUyxrQkFBSSxDQUFDQyxPQUFMLENBQWFlLE9BQWIsQ0FBcUJ6QixHQUFyQjtBQUNBLGFBUFksRUFBZDs7QUFTQSxTQVZELE1BVU07QUFDTFIsa0JBQVEsSUFBSUEsUUFBUSxFQUFwQjtBQUNBO0FBQ0QsT0FuQkQ7QUFvQkEsS0EvQlUsRUFBWjs7O0FBa0NBLEM7O0FBRWM7QUFDZGQsU0FBTyxFQUFQQSxPQURjO0FBRWRhLFFBQU0sRUFBTkEsTUFGYyxFIiwiZmlsZSI6IjI1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCJAL2NvbmZpZ1wiO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnLi9mZXRjaCc7XHJcbi8vIOe9kee7nOebkeWQrFxyXG5jb25zdCBOZXRXb3JrID0ge1xyXG5cdC8vIOe9kee7nOeKtuaAgVxyXG5cdGlzQ29ubmVjdDogZmFsc2UsXHJcblx0Ly8g55uR5ZCs572R57uc54q25oCBXHJcblx0T24oKSB7XHJcblx0XHQvLyDojrflj5blvZPliY3nvZHnu5znirbmgIFcclxuXHRcdHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcblx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLm5ldHdvcmtUeXBlICE9PSAnbm9uZScpIHtcclxuXHRcdFx0XHRcdHRoaXMuaXNDb25uZWN0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdHRpdGxlOiAn6K+35YWI6L+e5o6l572R57ucJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdC8vIOebkeWQrOe9kee7nOeKtuaAgeWPmOWMllxyXG5cdFx0dW5pLm9uTmV0d29ya1N0YXR1c0NoYW5nZSgocmVzKSA9PiB7XHJcblx0XHRcdHRoaXMuaXNDb25uZWN0ID0gcmVzLmlzQ29ubmVjdGVkO1xyXG5cdFx0XHRpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+aCqOebruWJjeWkhOS6juaWree9keeKtuaAgScsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG4vLyBhcHDmm7TmlrBcclxuZnVuY3Rpb24gVXBkYXRlKGNhbGxiYWNrKSB7XHJcblxyXG5cdGxldCB0eXBlID0gMFxyXG5cdGxldCBvcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtXHJcblx0aWYgKG9zID09ICdhbmRyb2lkJykge1xyXG5cdFx0dHlwZSA9IDJcclxuXHR9IGVsc2Uge1xyXG5cdFx0dHlwZSA9IDFcclxuXHR9XHJcblx0dmFyIHNlcnZlciA9IHJlcXVlc3QuYmFzZVVybCArIFwiSW5kZXgvaG9tZVBhZ2VcIjsgLy/mo4Dmn6Xmm7TmlrDlnLDlnYAgIFxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogc2VydmVyLFxyXG5cdFx0ZGF0YToge21lX2lkOnVuaS5nZXRTdG9yYWdlU3luYyhcInNqX21lbWJlcl9pZFwiKSA/IHVuaS5nZXRTdG9yYWdlU3luYyhcInNqX21lbWJlcl9pZFwiKSA6ICcnLHRva2VuOnVuaS5nZXRTdG9yYWdlU3luYyhcInNqX3Rva2VuXCIpID8gdW5pLmdldFN0b3JhZ2VTeW5jKFwic2pfdG9rZW5cIikgOiAnJ30sXHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHR9LFxyXG5cdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHRcdFx0bGV0IHVybCA9IHJlcy5kYXRhLmRhdGEuYXBwX3VybFxyXG5cdFx0XHRwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi57q/5LiL54mI5pysXCIsICB3Z3RpbmZvLnZlcnNpb24pXHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdkYXRhVmVyc2lvbicsIHdndGluZm8udmVyc2lvbilcclxuXHRcdFx0XHRsZXQgeGlhbnNoYW5nID0gTnVtYmVyKHJlcy5kYXRhLmRhdGEuZGF0YWJhc2VfdmVyc2lvbl9pb3MucmVwbGFjZSgvWy5dL2csIFwiXCIpKVxyXG5cdFx0XHRcdGxldCB4aWFueGlhID0gTnVtYmVyKHdndGluZm8udmVyc2lvbi5yZXBsYWNlKC9bLl0vZywgXCJcIikpXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLorqHnrpdcIiwgcmVzLmRhdGEuZGF0YSwgeGlhbnNoYW5nLCB4aWFueGlhKVxyXG5cdFx0XHRcdGlmICh4aWFuc2hhbmcgPiB4aWFueGlhKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHsgLy/mj5DphpLnlKjmiLfmm7TmlrBcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi5o+Q56S6XCIsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmlrDniYjmnKzmm7TmlrAnLFxyXG5cdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogKHJlczEpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMxLHVybClcclxuXHRcdFx0XHRcdFx0XHRwbHVzLnJ1bnRpbWUub3BlblVSTCh1cmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHROZXRXb3JrLFxyXG5cdFVwZGF0ZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///253\n");

/***/ })
],[[0,"app-config"]]]);