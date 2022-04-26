"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/chainApi.ts":
/*!*************************!*\
  !*** ./lib/chainApi.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chainApi\": () => (/* binding */ chainApi),\n/* harmony export */   \"getChainNodeInfo\": () => (/* binding */ getChainNodeInfo),\n/* harmony export */   \"getRunningOperationPromises\": () => (/* binding */ getRunningOperationPromises),\n/* harmony export */   \"useGetChainNodeInfoQuery\": () => (/* binding */ useGetChainNodeInfoQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst chainApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://api.cosmos.network\"\n    }),\n    extractRehydrationInfo (action, { reducerPath  }) {\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n    },\n    tagTypes: [],\n    endpoints: (builder)=>({\n            //  getChainLatestBlock: builder.query<any, void>({\n            //  query: () => `/blocks/latest`,\n            //}),\n            getChainNodeInfo: builder.query({\n                query: ()=>`/node_info`\n            })\n        })\n});\n// Export hooks for usage in functional components\nconst { //useGetChainLatestBlockQuery,\nuseGetChainNodeInfoQuery , util: { getRunningOperationPromises  } ,  } = chainApi;\n// export endpoints for use in SSR\nconst { //getChainLatestBlock, \ngetChainNodeInfo  } = chainApi.endpoints;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2hhaW5BcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUU7QUFDNUI7QUFFdEMsTUFBTUcsUUFBUSxHQUFHSCx1RUFBUyxDQUFDO0lBQ2hDSSxTQUFTLEVBQUVILDRFQUFjLENBQUM7UUFDeEJJLE9BQU8sRUFBRSw0QkFBNEI7S0FDdEMsQ0FBQztJQUNGQyxzQkFBc0IsRUFBQ0MsTUFBTSxFQUFFLEVBQUVDLFdBQVcsR0FBRSxFQUFFO1FBQzlDLElBQUlELE1BQU0sQ0FBQ0UsSUFBSSxLQUFLUCx1REFBTyxFQUFFO1lBQzNCLE9BQU9LLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRixXQUFXLENBQUMsQ0FBQztTQUNwQztLQUNGO0lBQ0RHLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFNBQVMsRUFBRSxDQUFDQyxPQUFPLEdBQUssQ0FBQztZQUN6QixtREFBbUQ7WUFDakQsa0NBQWtDO1lBQ2xDLEtBQUs7WUFDTEMsZ0JBQWdCLEVBQUVELE9BQU8sQ0FBQ0UsS0FBSyxDQUFZO2dCQUN6Q0EsS0FBSyxFQUFFLElBQU0sQ0FBQyxVQUFVLENBQUM7YUFDMUIsQ0FBQztTQUNILENBQUM7Q0FDSCxDQUFDLENBQUM7QUFFSCxrREFBa0Q7QUFDM0MsTUFBTSxFQUNYLDhCQUE4QjtBQUM5QkMsd0JBQXdCLEdBQ3hCQyxJQUFJLEVBQUUsRUFBRUMsMkJBQTJCLEdBQUUsS0FDdEMsR0FBR2YsUUFBUSxDQUFDO0FBR2Isa0NBQWtDO0FBQzNCLE1BQU0sRUFDVix1QkFBdUI7QUFDdkJXLGdCQUFnQixHQUNqQixHQUFHWCxRQUFRLENBQUNTLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2xpYi9jaGFpbkFwaS50cz8wZjlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNoYWluQXBpID0gY3JlYXRlQXBpKHtcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7XG4gICAgYmFzZVVybDogXCJodHRwczovL2FwaS5jb3Ntb3MubmV0d29ya1wiLFxuICB9KSxcbiAgZXh0cmFjdFJlaHlkcmF0aW9uSW5mbyhhY3Rpb24sIHsgcmVkdWNlclBhdGggfSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkW3JlZHVjZXJQYXRoXTtcbiAgICB9XG4gIH0sXG4gIHRhZ1R5cGVzOiBbXSxcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgLy8gIGdldENoYWluTGF0ZXN0QmxvY2s6IGJ1aWxkZXIucXVlcnk8YW55LCB2b2lkPih7XG4gICAgLy8gIHF1ZXJ5OiAoKSA9PiBgL2Jsb2Nrcy9sYXRlc3RgLFxuICAgIC8vfSksXG4gICAgZ2V0Q2hhaW5Ob2RlSW5mbzogYnVpbGRlci5xdWVyeTxhbnksIHZvaWQ+KHtcbiAgICAgIHF1ZXJ5OiAoKSA9PiBgL25vZGVfaW5mb2AsXG4gICAgfSksXG4gIH0pLFxufSk7XG5cbi8vIEV4cG9ydCBob29rcyBmb3IgdXNhZ2UgaW4gZnVuY3Rpb25hbCBjb21wb25lbnRzXG5leHBvcnQgY29uc3Qge1xuICAvL3VzZUdldENoYWluTGF0ZXN0QmxvY2tRdWVyeSxcbiAgdXNlR2V0Q2hhaW5Ob2RlSW5mb1F1ZXJ5LFxuICB1dGlsOiB7IGdldFJ1bm5pbmdPcGVyYXRpb25Qcm9taXNlcyB9LFxufSA9IGNoYWluQXBpO1xuXG5cbi8vIGV4cG9ydCBlbmRwb2ludHMgZm9yIHVzZSBpbiBTU1JcbmV4cG9ydCBjb25zdCB7XG4gICAvL2dldENoYWluTGF0ZXN0QmxvY2ssIFxuICAgZ2V0Q2hhaW5Ob2RlSW5mb1xuIH0gPSBjaGFpbkFwaS5lbmRwb2ludHM7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJIWURSQVRFIiwiY2hhaW5BcGkiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZXh0cmFjdFJlaHlkcmF0aW9uSW5mbyIsImFjdGlvbiIsInJlZHVjZXJQYXRoIiwidHlwZSIsInBheWxvYWQiLCJ0YWdUeXBlcyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRDaGFpbk5vZGVJbmZvIiwicXVlcnkiLCJ1c2VHZXRDaGFpbk5vZGVJbmZvUXVlcnkiLCJ1dGlsIiwiZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/chainApi.ts\n");

/***/ }),

/***/ "./lib/store.ts":
/*!**********************!*\
  !*** ./lib/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chainApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chainApi */ \"./lib/chainApi.ts\");\n\n\n\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            [_chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.reducerPath]: _chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.reducer\n        },\n        middleware: (gDM)=>gDM().concat(_chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.middleware)\n    })\n;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNDO0FBQ2I7QUFFL0IsTUFBTUcsU0FBUyxHQUFHLElBQ3ZCSCxnRUFBYyxDQUFDO1FBQ2JJLE9BQU8sRUFBRTtZQUNQLENBQUNGLDJEQUFvQixDQUFDLEVBQUVBLHVEQUFnQjtTQUN6QztRQUNESSxVQUFVLEVBQUUsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDTiwwREFBbUIsQ0FBQztLQUN2RCxDQUFDO0FBQUEsQ0FBQztBQU1FLE1BQU1PLE9BQU8sR0FBR1IsaUVBQWEsQ0FBV0UsU0FBUyxFQUFFO0lBQUVPLEtBQUssRUFBRSxJQUFJO0NBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbGliL3N0b3JlLnRzP2U4NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IGNoYWluQXBpIH0gZnJvbSBcIi4vY2hhaW5BcGlcIjtcblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9ICgpID0+XG4gIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICBbY2hhaW5BcGkucmVkdWNlclBhdGhdOiBjaGFpbkFwaS5yZWR1Y2VyLFxuICAgIH0sXG4gICAgbWlkZGxld2FyZTogKGdETSkgPT4gZ0RNKCkuY29uY2F0KGNoYWluQXBpLm1pZGRsZXdhcmUpLFxuICB9KTtcblxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+O1xuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTxBcHBTdG9yZVtcImdldFN0YXRlXCJdPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gQXBwU3RvcmVbXCJkaXNwYXRjaFwiXTtcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPEFwcFN0b3JlPihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwiY2hhaW5BcGkiLCJtYWtlU3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ0RNIiwiY29uY2F0Iiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/store.ts\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { default: AbortController  } = __webpack_require__(/*! abort-controller */ \"abort-controller\");\n//import \"../styles/global.css\";\nconst { wrapper  } = __webpack_require__(/*! ../lib/store */ \"./lib/store.ts\");\nconst { default: fetch , Headers , Request , Response  } = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nObject.assign(globalThis, {\n    fetch,\n    Headers,\n    Request,\n    Response,\n    AbortController\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/chibuzordaniel/coris-v2/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper.withRedux(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFBLE1BQU0sRUFBRUEsT0FBTyxFQUFFQyxlQUFlLEdBQUUsR0FBR0MsbUJBQU8sQ0FBQywwQ0FBa0IsQ0FBQztBQUNoRSxnQ0FBZ0M7QUFDaEMsTUFBTSxFQUFFQyxPQUFPLEdBQUUsR0FBR0QsbUJBQU8sQ0FBQyxvQ0FBYyxDQUFDO0FBQzNDLE1BQU0sRUFBRUYsT0FBTyxFQUFFSSxLQUFLLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxRQUFRLEdBQUUsR0FBR0wsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBRTVFTSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFO0lBQ3hCTixLQUFLO0lBQ0xDLE9BQU87SUFDUEMsT0FBTztJQUNQQyxRQUFRO0lBQ1JOLGVBQWU7Q0FDaEIsQ0FBQyxDQUFDO0FBRUksU0FBU1UsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDNUMscUJBQU8sOERBQUNELFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztZQUFJLENBQUM7Q0FDckM7QUFFRCxpRUFBZVYsT0FBTyxDQUFDVyxTQUFTLENBQUNILEdBQUcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVmYXVsdDogQWJvcnRDb250cm9sbGVyIH0gPSByZXF1aXJlKFwiYWJvcnQtY29udHJvbGxlclwiKTtcbi8vaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcbmNvbnN0IHsgd3JhcHBlciB9ID0gcmVxdWlyZShcIi4uL2xpYi9zdG9yZVwiKTtcbmNvbnN0IHsgZGVmYXVsdDogZmV0Y2gsIEhlYWRlcnMsIFJlcXVlc3QsIFJlc3BvbnNlIH0gPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIGZldGNoLFxuICBIZWFkZXJzLFxuICBSZXF1ZXN0LFxuICBSZXNwb25zZSxcbiAgQWJvcnRDb250cm9sbGVyLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJBYm9ydENvbnRyb2xsZXIiLCJyZXF1aXJlIiwid3JhcHBlciIsImZldGNoIiwiSGVhZGVycyIsIlJlcXVlc3QiLCJSZXNwb25zZSIsIk9iamVjdCIsImFzc2lnbiIsImdsb2JhbFRoaXMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "abort-controller":
/*!***********************************!*\
  !*** external "abort-controller" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("abort-controller");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();