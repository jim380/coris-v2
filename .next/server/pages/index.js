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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./backend/utils/DB/cache.ts":
/*!***********************************!*\
  !*** ./backend/utils/DB/cache.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redis */ \"./backend/utils/DB/redis.tsx\");\n\nconst fetch = async (key, fetcher, expires)=>{\n    const existing = await get(key);\n    if (existing !== null) return existing;\n    return set(key, fetcher, expires);\n};\nconst get = async (key)=>{\n    const value = await _redis__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(key);\n    //console.log(value, \"from redis\")\n    if (value === null) return null;\n    return JSON.parse(value);\n};\nconst set = async (key, fetcher, expires)=>{\n    const value = await fetcher();\n    //console.log(value, 'set at 35sec')\n    await _redis__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(key, JSON.stringify(value), \"EX\", expires);\n    return value;\n};\nconst exportedObject = {\n    fetch,\n    set,\n    get\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedObject);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrZW5kL3V0aWxzL0RCL2NhY2hlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZCO0FBRTVCLE1BQU1DLEtBQUssR0FBRyxPQUFVQyxHQUFXLEVBQUVDLE9BQWdCLEVBQUVDLE9BQWUsR0FBSztJQUN4RSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsR0FBRyxDQUFJSixHQUFHLENBQUM7SUFDbEMsSUFBSUcsUUFBUSxLQUFLLElBQUksRUFBRSxPQUFPQSxRQUFRLENBQUM7SUFDdkMsT0FBUUUsR0FBRyxDQUFDTCxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxDQUFDLENBQUM7Q0FDdEM7QUFFRCxNQUFNRSxHQUFHLEdBQUcsT0FBVUosR0FBVyxHQUFpQjtJQUM5QyxNQUFNTSxLQUFLLEdBQVEsTUFBTVIsa0RBQVMsQ0FBQ0UsR0FBRyxDQUFDO0lBQ3ZDLGtDQUFrQztJQUNsQyxJQUFJTSxLQUFLLEtBQUssSUFBSSxFQUFFLE9BQU8sSUFBSSxDQUFRO0lBQ3ZDLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixLQUFLLENBQUM7Q0FDM0I7QUFFRCxNQUFNRCxHQUFHLEdBQUcsT0FBVUwsR0FBVSxFQUFFQyxPQUFnQixFQUFFQyxPQUFlLEdBQUs7SUFDcEUsTUFBTUksS0FBSyxHQUFPLE1BQU1MLE9BQU8sRUFBRTtJQUNqQyxvQ0FBb0M7SUFDcEMsTUFBTUgsa0RBQVMsQ0FBQ0UsR0FBRyxFQUFFTyxJQUFJLENBQUNFLFNBQVMsQ0FBQ0gsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFSixPQUFPLENBQUM7SUFDMUQsT0FBT0ksS0FBSztDQUNmO0FBRUQsTUFBTUksY0FBYyxHQUFHO0lBQ25CWCxLQUFLO0lBQ0xNLEdBQUc7SUFDSEQsR0FBRztDQUNOO0FBRUQsaUVBQWVNLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Jpcy12Mi8uL2JhY2tlbmQvdXRpbHMvREIvY2FjaGUudHM/MTJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHJlZGlzICBmcm9tIFwiLi9yZWRpc1wiXG5cbiBjb25zdCBmZXRjaCA9IGFzeW5jIDxUPihrZXk6IHN0cmluZywgZmV0Y2hlcjogKCkgPT4gVCwgZXhwaXJlczogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBnZXQ8VD4oa2V5KTtcbiAgICBpZiAoZXhpc3RpbmcgIT09IG51bGwpIHJldHVybiBleGlzdGluZztcbiAgICByZXR1cm4gIHNldChrZXksIGZldGNoZXIsIGV4cGlyZXMpO1xufTtcblxuY29uc3QgZ2V0ID0gYXN5bmMgPFQ+KGtleTogc3RyaW5nKTogUHJvbWlzZTxUPiA9PiB7XG4gICAgY29uc3QgdmFsdWU6IGFueSA9IGF3YWl0IHJlZGlzLmdldChrZXkpO1xuICAgIC8vY29uc29sZS5sb2codmFsdWUsIFwiZnJvbSByZWRpc1wiKVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIG51bGwgYXMgYW55O1xuICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKVxufTtcblxuY29uc3Qgc2V0ID0gYXN5bmMgPFQ+KGtleTpzdHJpbmcsIGZldGNoZXI6ICgpID0+IFQsIGV4cGlyZXM6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHZhbHVlOmFueSA9IGF3YWl0IGZldGNoZXIoKTtcbiAgICAvL2NvbnNvbGUubG9nKHZhbHVlLCAnc2V0IGF0IDM1c2VjJylcbiAgICBhd2FpdCByZWRpcy5zZXQoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSksIFwiRVhcIiwgZXhwaXJlcylcbiAgICByZXR1cm4gdmFsdWVcbn1cblxuY29uc3QgZXhwb3J0ZWRPYmplY3QgPSB7XG4gICAgZmV0Y2gsXG4gICAgc2V0LFxuICAgIGdldFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0ZWRPYmplY3RcbiJdLCJuYW1lcyI6WyJyZWRpcyIsImZldGNoIiwia2V5IiwiZmV0Y2hlciIsImV4cGlyZXMiLCJleGlzdGluZyIsImdldCIsInNldCIsInZhbHVlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXhwb3J0ZWRPYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./backend/utils/DB/cache.ts\n");

/***/ }),

/***/ "./backend/utils/DB/redis.tsx":
/*!************************************!*\
  !*** ./backend/utils/DB/redis.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ioredis */ \"ioredis\");\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst redis = new (ioredis__WEBPACK_IMPORTED_MODULE_0___default())(\"rediss://:fc46e167cc3e4936bb9556cedf53662e@gusc1-dear-dane-31683.upstash.io:31683\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redis);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrZW5kL3V0aWxzL0RCL3JlZGlzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsS0FBSyxHQUFHLElBQUlELGdEQUFLLENBQUNFLG1GQUFpQyxDQUFDO0FBRTFELGlFQUFlRCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Jpcy12Mi8uL2JhY2tlbmQvdXRpbHMvREIvcmVkaXMudHN4P2ViNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlZGlzIGZyb20gJ2lvcmVkaXMnO1xuXG5jb25zdCByZWRpcyA9IG5ldyBSZWRpcyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRURJU19VUkwpO1xuXG5leHBvcnQgZGVmYXVsdCByZWRpczsiXSwibmFtZXMiOlsiUmVkaXMiLCJyZWRpcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19SRURJU19VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./backend/utils/DB/redis.tsx\n");

/***/ }),

/***/ "./lib/chainApi.ts":
/*!*************************!*\
  !*** ./lib/chainApi.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chainApi\": () => (/* binding */ chainApi),\n/* harmony export */   \"getChainLatestBlock\": () => (/* binding */ getChainLatestBlock),\n/* harmony export */   \"getRunningOperationPromises\": () => (/* binding */ getRunningOperationPromises),\n/* harmony export */   \"useGetChainLatestBlockQuery\": () => (/* binding */ useGetChainLatestBlockQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst chainApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"https://api.cosmos.network\"\n    }),\n    extractRehydrationInfo (action, { reducerPath  }) {\n        if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n            return action.payload[reducerPath];\n        }\n    },\n    tagTypes: [],\n    endpoints: (builder)=>({\n            getChainLatestBlock: builder.query({\n                query: ()=>`/blocks/latest`\n            })\n        })\n});\n// Export hooks for usage in functional components\nconst { useGetChainLatestBlockQuery , //useGetChainNodeInfoQuery,\nutil: { getRunningOperationPromises  } ,  } = chainApi;\n// export endpoints for use in SSR\nconst { getChainLatestBlock  } = chainApi.endpoints;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2hhaW5BcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUU7QUFDNUI7QUFFdEMsTUFBTUcsUUFBUSxHQUFHSCx1RUFBUyxDQUFDO0lBQ2hDSSxTQUFTLEVBQUVILDRFQUFjLENBQUM7UUFDeEJJLE9BQU8sRUFBRSw0QkFBNEI7S0FDdEMsQ0FBQztJQUNGQyxzQkFBc0IsRUFBQ0MsTUFBTSxFQUFFLEVBQUVDLFdBQVcsR0FBRSxFQUFFO1FBQzlDLElBQUlELE1BQU0sQ0FBQ0UsSUFBSSxLQUFLUCx1REFBTyxFQUFFO1lBQzNCLE9BQU9LLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRixXQUFXLENBQUMsQ0FBQztTQUNwQztLQUNGO0lBQ0RHLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFNBQVMsRUFBRSxDQUFDQyxPQUFPLEdBQUssQ0FBQztZQUN4QkMsbUJBQW1CLEVBQUVELE9BQU8sQ0FBQ0UsS0FBSyxDQUFZO2dCQUMzQ0EsS0FBSyxFQUFFLElBQU0sQ0FBQyxjQUFjLENBQUM7YUFDOUIsQ0FBQztTQUlILENBQUM7Q0FDSCxDQUFDLENBQUM7QUFFSCxrREFBa0Q7QUFDM0MsTUFBTSxFQUNYQywyQkFBMkIsR0FDM0IsMkJBQTJCO0FBQzNCQyxJQUFJLEVBQUUsRUFBRUMsMkJBQTJCLEdBQUUsS0FDdEMsR0FBR2YsUUFBUSxDQUFDO0FBR2Isa0NBQWtDO0FBQzNCLE1BQU0sRUFDVlcsbUJBQW1CLEdBRXBCLEdBQUdYLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29yaXMtdjIvLi9saWIvY2hhaW5BcGkudHM/MGY5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIjtcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjaGFpbkFwaSA9IGNyZWF0ZUFwaSh7XG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xuICAgIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcGkuY29zbW9zLm5ldHdvcmtcIixcbiAgfSksXG4gIGV4dHJhY3RSZWh5ZHJhdGlvbkluZm8oYWN0aW9uLCB7IHJlZHVjZXJQYXRoIH0pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFtyZWR1Y2VyUGF0aF07XG4gICAgfVxuICB9LFxuICB0YWdUeXBlczogW10sXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICBnZXRDaGFpbkxhdGVzdEJsb2NrOiBidWlsZGVyLnF1ZXJ5PGFueSwgdm9pZD4oe1xuICAgICAgcXVlcnk6ICgpID0+IGAvYmxvY2tzL2xhdGVzdGAsXG4gICAgfSksXG4gICAgLy9nZXRDaGFpbk5vZGVJbmZvOiBidWlsZGVyLnF1ZXJ5PGFueSwgdm9pZD4oe1xuICAgICAvLyBxdWVyeTogKCkgPT4gYC9ub2RlX2luZm9gLFxuICAgIC8vfSksXG4gIH0pLFxufSk7XG5cbi8vIEV4cG9ydCBob29rcyBmb3IgdXNhZ2UgaW4gZnVuY3Rpb25hbCBjb21wb25lbnRzXG5leHBvcnQgY29uc3Qge1xuICB1c2VHZXRDaGFpbkxhdGVzdEJsb2NrUXVlcnksXG4gIC8vdXNlR2V0Q2hhaW5Ob2RlSW5mb1F1ZXJ5LFxuICB1dGlsOiB7IGdldFJ1bm5pbmdPcGVyYXRpb25Qcm9taXNlcyB9LFxufSA9IGNoYWluQXBpO1xuXG5cbi8vIGV4cG9ydCBlbmRwb2ludHMgZm9yIHVzZSBpbiBTU1JcbmV4cG9ydCBjb25zdCB7XG4gICBnZXRDaGFpbkxhdGVzdEJsb2NrLCBcbiAgIC8vZ2V0Q2hhaW5Ob2RlSW5mb1xuIH0gPSBjaGFpbkFwaS5lbmRwb2ludHM7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJIWURSQVRFIiwiY2hhaW5BcGkiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZXh0cmFjdFJlaHlkcmF0aW9uSW5mbyIsImFjdGlvbiIsInJlZHVjZXJQYXRoIiwidHlwZSIsInBheWxvYWQiLCJ0YWdUeXBlcyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRDaGFpbkxhdGVzdEJsb2NrIiwicXVlcnkiLCJ1c2VHZXRDaGFpbkxhdGVzdEJsb2NrUXVlcnkiLCJ1dGlsIiwiZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/chainApi.ts\n");

/***/ }),

/***/ "./lib/store.ts":
/*!**********************!*\
  !*** ./lib/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chainApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chainApi */ \"./lib/chainApi.ts\");\n\n\n\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            [_chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.reducerPath]: _chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.reducer\n        },\n        middleware: (gDM)=>gDM().concat(_chainApi__WEBPACK_IMPORTED_MODULE_2__.chainApi.middleware)\n    })\n;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUNDO0FBQ2I7QUFFL0IsTUFBTUcsU0FBUyxHQUFHLElBQ3ZCSCxnRUFBYyxDQUFDO1FBQ2JJLE9BQU8sRUFBRTtZQUNQLENBQUNGLDJEQUFvQixDQUFDLEVBQUVBLHVEQUFnQjtTQUN6QztRQUNESSxVQUFVLEVBQUUsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDTiwwREFBbUIsQ0FBQztLQUN2RCxDQUFDO0FBQUEsQ0FBQztBQU1FLE1BQU1PLE9BQU8sR0FBR1IsaUVBQWEsQ0FBV0UsU0FBUyxFQUFFO0lBQUVPLEtBQUssRUFBRSxJQUFJO0NBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29yaXMtdjIvLi9saWIvc3RvcmUudHM/ZTg0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY2hhaW5BcGkgfSBmcm9tIFwiLi9jaGFpbkFwaVwiO1xuXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKCkgPT5cbiAgY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHtcbiAgICAgIFtjaGFpbkFwaS5yZWR1Y2VyUGF0aF06IGNoYWluQXBpLnJlZHVjZXIsXG4gICAgfSxcbiAgICBtaWRkbGV3YXJlOiAoZ0RNKSA9PiBnRE0oKS5jb25jYXQoY2hhaW5BcGkubWlkZGxld2FyZSksXG4gIH0pO1xuXG5leHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIG1ha2VTdG9yZT47XG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPEFwcFN0b3JlW1wiZ2V0U3RhdGVcIl0+O1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSBBcHBTdG9yZVtcImRpc3BhdGNoXCJdO1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8QXBwU3RvcmU+KG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJjaGFpbkFwaSIsIm1ha2VTdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsIm1pZGRsZXdhcmUiLCJnRE0iLCJjb25jYXQiLCJ3cmFwcGVyIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/store.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backend_utils_DB_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend/utils/DB/cache */ \"./backend/utils/DB/cache.ts\");\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/store */ \"./lib/store.ts\");\n/* harmony import */ var _lib_chainApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/chainApi */ \"./lib/chainApi.ts\");\n\n\n\n\nconst Home = ({ cachedResults  })=>{\n    console.log(cachedResults);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Hello\"\n    }, void 0, false, {\n        fileName: \"/Users/chibuzordaniel/coris-v2/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 4\n    }, undefined);\n};\nconst getServerSideProps = async ()=>{\n    const fetcher = async ()=>{\n        const store = (0,_lib_store__WEBPACK_IMPORTED_MODULE_2__.makeStore)();\n        const dataNodeInfo = await store.dispatch(_lib_chainApi__WEBPACK_IMPORTED_MODULE_3__.getChainLatestBlock.initiate());\n        const results = JSON.parse(JSON.stringify(dataNodeInfo));\n        await Promise.all((0,_lib_chainApi__WEBPACK_IMPORTED_MODULE_3__.getRunningOperationPromises)());\n        return results;\n    };\n    //function to persist data in Redis\n    const cachedResults = await _backend_utils_DB_cache__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(\"\", fetcher, 35);\n    return {\n        props: {\n            cachedResults: cachedResults\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRzZDO0FBQ0o7QUFJaEI7QUFJekIsTUFBTUksSUFBSSxHQUFhLENBQUMsRUFBQ0MsYUFBYSxHQUFNLEdBQUs7SUFDL0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixhQUFhLENBQUM7SUFDMUIscUJBQ0MsOERBQUNHLEtBQUc7a0JBQUMsT0FFTjs7Ozs7aUJBQU0sQ0FDSjtDQUNIO0FBS00sTUFBT0Msa0JBQWtCLEdBQXVCLFVBQVk7SUFDakUsTUFBTUMsT0FBTyxHQUFHLFVBQVk7UUFDNUIsTUFBTUMsS0FBSyxHQUFHVixxREFBUyxFQUFFO1FBQ3pCLE1BQU1XLFlBQVksR0FBRyxNQUFNRCxLQUFLLENBQUNFLFFBQVEsQ0FBQ1gsdUVBQTRCLEVBQUUsQ0FBQztRQUN6RSxNQUFNYSxPQUFPLEdBQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ04sWUFBWSxDQUFDLENBQUM7UUFDekQsTUFBTU8sT0FBTyxDQUFDQyxHQUFHLENBQUNqQiwwRUFBMkIsRUFBRSxDQUFDLENBQUM7UUFDakQsT0FBT1ksT0FBTztLQUVmO0lBRUQsbUNBQW1DO0lBQ2xDLE1BQU1WLGFBQWEsR0FBRyxNQUFNTCxxRUFBVyxDQUFDLEVBQUUsRUFBRVUsT0FBTyxFQUFFLEVBQUUsQ0FBQztJQUV6RCxPQUFPO1FBQUVZLEtBQUssRUFBRTtZQUNiakIsYUFBYSxFQUFFQSxhQUFhO1NBQUU7S0FDL0I7Q0FDRDtBQUdELGlFQUFlRCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29yaXMtdjIvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9iYWNrZW5kL3V0aWxzL0RCL2NhY2hlJ1xuaW1wb3J0IHsgbWFrZVN0b3JlIH0gZnJvbSBcIi4uL2xpYi9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgZ2V0Q2hhaW5MYXRlc3RCbG9jayxcbiAgZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzLFxufSBmcm9tICcuLi9saWIvY2hhaW5BcGknO1xuXG5cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoe2NhY2hlZFJlc3VsdHN9OiBhbnkpID0+IHtcbiAgY29uc29sZS5sb2coY2FjaGVkUmVzdWx0cylcbiAgcmV0dXJuIChcbiAgIDxkaXY+IFxuICAgSGVsbG9cbiAgPC9kaXY+XG4gICk7XG59XG5cblxuXG5cbmV4cG9ydCBjb25zdCAgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZldGNoZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gbWFrZVN0b3JlKCk7XG4gIGNvbnN0IGRhdGFOb2RlSW5mbyA9IGF3YWl0IHN0b3JlLmRpc3BhdGNoKGdldENoYWluTGF0ZXN0QmxvY2suaW5pdGlhdGUoKSk7XG4gIGNvbnN0IHJlc3VsdHMgPSAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhTm9kZUluZm8pKSBcbiAgYXdhaXQgUHJvbWlzZS5hbGwoZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzKCkpO1xuICByZXR1cm4gcmVzdWx0c1xuICBcbn1cblxuLy9mdW5jdGlvbiB0byBwZXJzaXN0IGRhdGEgaW4gUmVkaXNcbiBjb25zdCBjYWNoZWRSZXN1bHRzID0gYXdhaXQgY2FjaGUuZmV0Y2goXCJcIiwgZmV0Y2hlciwgMzUpXG5cbnJldHVybiB7IHByb3BzOiB7XG4gICBjYWNoZWRSZXN1bHRzOiBjYWNoZWRSZXN1bHRzIH0gXG4gfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiY2FjaGUiLCJtYWtlU3RvcmUiLCJnZXRDaGFpbkxhdGVzdEJsb2NrIiwiZ2V0UnVubmluZ09wZXJhdGlvblByb21pc2VzIiwiSG9tZSIsImNhY2hlZFJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmV0Y2hlciIsInN0b3JlIiwiZGF0YU5vZGVJbmZvIiwiZGlzcGF0Y2giLCJpbml0aWF0ZSIsInJlc3VsdHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2giLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();