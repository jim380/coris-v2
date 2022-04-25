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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chainApi\": () => (/* binding */ chainApi),\n/* harmony export */   \"getChainNodeInfo\": () => (/* binding */ getChainNodeInfo),\n/* harmony export */   \"getRunningOperationPromises\": () => (/* binding */ getRunningOperationPromises),\n/* harmony export */   \"useGetChainNodeInfoQuery\": () => (/* binding */ useGetChainNodeInfoQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst chainApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://api.cosmos.network\"\n    }),\n    extractRehydrationInfo (action, { reducerPath  }) {\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n    },\n    tagTypes: [],\n    endpoints: (builder)=>({\n            //getChainLastBlock: builder.query<any, void>({\n            //query: (name) => ``,\n            // }),\n            getChainNodeInfo: builder.query({\n                query: ()=>`/node_info`\n            })\n        })\n});\n// Export hooks for usage in functional components\nconst { // useGetChainLastBlockQuery,\nuseGetChainNodeInfoQuery , util: { getRunningOperationPromises  } ,  } = chainApi;\n// export endpoints for use in SSR\nconst { getChainNodeInfo  } = chainApi.endpoints;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2hhaW5BcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUU7QUFDNUI7QUFFdEMsTUFBTUcsUUFBUSxHQUFHSCx1RUFBUyxDQUFDO0lBQ2hDSSxTQUFTLEVBQUVILDRFQUFjLENBQUM7UUFDeEJJLE9BQU8sRUFBRSw0QkFBNEI7S0FDdEMsQ0FBQztJQUNGQyxzQkFBc0IsRUFBQ0MsTUFBTSxFQUFFLEVBQUVDLFdBQVcsR0FBRSxFQUFFO1FBQzlDLElBQUlELE1BQU0sQ0FBQ0UsSUFBSSxLQUFLUCx1REFBTyxFQUFFO1lBQzNCLE9BQU9LLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRixXQUFXLENBQUMsQ0FBQztTQUNwQztLQUNGO0lBQ0RHLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFNBQVMsRUFBRSxDQUFDQyxPQUFPLEdBQUssQ0FBQztZQUN2QiwrQ0FBK0M7WUFDN0Msc0JBQXNCO1lBQ3pCLE1BQU07WUFDTEMsZ0JBQWdCLEVBQUVELE9BQU8sQ0FBQ0UsS0FBSyxDQUFZO2dCQUN6Q0EsS0FBSyxFQUFFLElBQU0sQ0FBQyxVQUFVLENBQUM7YUFDMUIsQ0FBQztTQUNILENBQUM7Q0FDSCxDQUFDLENBQUM7QUFFSCxrREFBa0Q7QUFDM0MsTUFBTSxFQUNaLDZCQUE2QjtBQUM1QkMsd0JBQXdCLEdBQ3hCQyxJQUFJLEVBQUUsRUFBRUMsMkJBQTJCLEdBQUUsS0FDdEMsR0FBR2YsUUFBUSxDQUFDO0FBRWIsa0NBQWtDO0FBQzNCLE1BQU0sRUFBRVcsZ0JBQWdCLEdBQUUsR0FBR1gsUUFBUSxDQUFDUyxTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9saWIvY2hhaW5BcGkudHM/MGY5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjaGFpbkFwaSA9IGNyZWF0ZUFwaSh7XG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcGkuY29zbW9zLm5ldHdvcmtcIixcbiAgfSksXG4gIGV4dHJhY3RSZWh5ZHJhdGlvbkluZm8oYWN0aW9uLCB7IHJlZHVjZXJQYXRoIH0pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFtyZWR1Y2VyUGF0aF07XG4gICAgfVxuICB9LFxuICB0YWdUeXBlczogW10sXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgLy9nZXRDaGFpbkxhc3RCbG9jazogYnVpbGRlci5xdWVyeTxhbnksIHZvaWQ+KHtcbiAgICAgIC8vcXVlcnk6IChuYW1lKSA9PiBgYCxcbiAgIC8vIH0pLFxuICAgIGdldENoYWluTm9kZUluZm86IGJ1aWxkZXIucXVlcnk8YW55LCB2b2lkPih7XG4gICAgICBxdWVyeTogKCkgPT4gYC9ub2RlX2luZm9gLFxuICAgIH0pLFxuICB9KSxcbn0pO1xuXG4vLyBFeHBvcnQgaG9va3MgZm9yIHVzYWdlIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuZXhwb3J0IGNvbnN0IHtcbiAvLyB1c2VHZXRDaGFpbkxhc3RCbG9ja1F1ZXJ5LFxuICB1c2VHZXRDaGFpbk5vZGVJbmZvUXVlcnksXG4gIHV0aWw6IHsgZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzIH0sXG59ID0gY2hhaW5BcGk7XG5cbi8vIGV4cG9ydCBlbmRwb2ludHMgZm9yIHVzZSBpbiBTU1JcbmV4cG9ydCBjb25zdCB7IGdldENoYWluTm9kZUluZm8gfSA9IGNoYWluQXBpLmVuZHBvaW50cztcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsIkhZRFJBVEUiLCJjaGFpbkFwaSIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJleHRyYWN0UmVoeWRyYXRpb25JbmZvIiwiYWN0aW9uIiwicmVkdWNlclBhdGgiLCJ0eXBlIiwicGF5bG9hZCIsInRhZ1R5cGVzIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldENoYWluTm9kZUluZm8iLCJxdWVyeSIsInVzZUdldENoYWluTm9kZUluZm9RdWVyeSIsInV0aWwiLCJnZXRSdW5uaW5nT3BlcmF0aW9uUHJvbWlzZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/chainApi.ts\n");

/***/ }),

/***/ "./lib/store.ts":
/*!**********************!*\
  !*** ./lib/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chainApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chainApi */ \"./lib/chainApi.ts\");\n\n\n\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            [_chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.reducerPath]: _chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.reducer\n        },\n        middleware: (gDM)=>gDM().concat(_chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.middleware)\n    })\n;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNDO0FBQ2I7QUFFL0IsTUFBTUcsU0FBUyxHQUFHLElBQ3ZCSCxnRUFBYyxDQUFDO1FBQ2JJLE9BQU8sRUFBRTtZQUNQLENBQUNGLDJEQUFvQixDQUFDLEVBQUVBLHVEQUFnQjtTQUN6QztRQUNESSxVQUFVLEVBQUUsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDTiwwREFBbUIsQ0FBQztLQUN2RCxDQUFDO0FBQUEsQ0FBQztBQU1FLE1BQU1PLE9BQU8sR0FBR1IsaUVBQWEsQ0FBV0UsU0FBUyxFQUFFO0lBQUVPLEtBQUssRUFBRSxJQUFJO0NBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbGliL3N0b3JlLnRzP2U4NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IGNoYWluQXBpIH0gZnJvbSBcIi4vY2hhaW5BcGlcIjtcblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9ICgpID0+XG4gIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7XG4gICAgICBbY2hhaW5BcGkucmVkdWNlclBhdGhdOiBjaGFpbkFwaS5yZWR1Y2VyLFxuICAgIH0sXG4gICAgbWlkZGxld2FyZTogKGdETSkgPT4gZ0RNKCkuY29uY2F0KGNoYWluQXBpLm1pZGRsZXdhcmUpLFxuICB9KTtcblxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+O1xuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTxBcHBTdG9yZVtcImdldFN0YXRlXCJdPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gQXBwU3RvcmVbXCJkaXNwYXRjaFwiXTtcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPEFwcFN0b3JlPihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwiY2hhaW5BcGkiLCJtYWtlU3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ0RNIiwiY29uY2F0Iiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/store.ts\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n\nconst { default: AbortController  } = __webpack_require__(/*! abort-controller */ \"abort-controller\");\nconst { default: fetch , Headers , Request , Response  } = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nObject.assign(globalThis, {\n    fetch,\n    Headers,\n    Request,\n    Response,\n    AbortController\n});\n\nconst { wrapper  } = __webpack_require__(/*! ../lib/store */ \"./lib/store.ts\");\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/chibuzordaniel/coris-v2/pages/_app.js\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper.withRedux(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQUEsTUFBTSxFQUFFQSxPQUFPLEVBQUVDLGVBQWUsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLDBDQUFrQixDQUFDO0FBQ2hFLE1BQU0sRUFBRUYsT0FBTyxFQUFFRyxLQUFLLEdBQUVDLE9BQU8sR0FBRUMsT0FBTyxHQUFFQyxRQUFRLEdBQUUsR0FBR0osbUJBQU8sQ0FBQyw4QkFBWSxDQUFDO0FBRTVFSyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFO0lBQ3hCTixLQUFLO0lBQ0xDLE9BQU87SUFDUEMsT0FBTztJQUNQQyxRQUFRO0lBQ1JMLGVBQWU7Q0FDaEIsQ0FBQyxDQUFDO0FBRTJCO0FBQzlCLE1BQU0sRUFBRVMsT0FBTyxHQUFFLEdBQUdSLG1CQUFPLENBQUMsb0NBQWMsQ0FBQztBQUVwQyxTQUFTUyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUM1QyxxQkFBTyw4REFBQ0QsU0FBUztRQUFFLEdBQUdDLFNBQVM7Ozs7O1lBQUksQ0FBQztDQUNyQztBQUVELGlFQUFlSCxPQUFPLENBQUNJLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkZWZhdWx0OiBBYm9ydENvbnRyb2xsZXIgfSA9IHJlcXVpcmUoXCJhYm9ydC1jb250cm9sbGVyXCIpO1xuY29uc3QgeyBkZWZhdWx0OiBmZXRjaCwgSGVhZGVycywgUmVxdWVzdCwgUmVzcG9uc2UgfSA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgZmV0Y2gsXG4gIEhlYWRlcnMsXG4gIFJlcXVlc3QsXG4gIFJlc3BvbnNlLFxuICBBYm9ydENvbnRyb2xsZXIsXG59KTtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcbmNvbnN0IHsgd3JhcHBlciB9ID0gcmVxdWlyZShcIi4uL2xpYi9zdG9yZVwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIkFib3J0Q29udHJvbGxlciIsInJlcXVpcmUiLCJmZXRjaCIsIkhlYWRlcnMiLCJSZXF1ZXN0IiwiUmVzcG9uc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJnbG9iYWxUaGlzIiwid3JhcHBlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "abort-controller":
/*!***********************************!*\
  !*** external "abort-controller" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("abort-controller");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
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