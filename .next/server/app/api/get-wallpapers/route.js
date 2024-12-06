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
exports.id = "app/api/get-wallpapers/route";
exports.ids = ["app/api/get-wallpapers/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("pg");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fget-wallpapers%2Froute&page=%2Fapi%2Fget-wallpapers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-wallpapers%2Froute.ts&appDir=D%3A%5CProjects%5CAIwallpaper%5Caiwallpaper%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CAIwallpaper%5Caiwallpaper&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fget-wallpapers%2Froute&page=%2Fapi%2Fget-wallpapers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-wallpapers%2Froute.ts&appDir=D%3A%5CProjects%5CAIwallpaper%5Caiwallpaper%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CAIwallpaper%5Caiwallpaper&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_AIwallpaper_aiwallpaper_app_api_get_wallpapers_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/get-wallpapers/route.ts */ \"(rsc)/./app/api/get-wallpapers/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/get-wallpapers/route\",\n        pathname: \"/api/get-wallpapers\",\n        filename: \"route\",\n        bundlePath: \"app/api/get-wallpapers/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\AIwallpaper\\\\aiwallpaper\\\\app\\\\api\\\\get-wallpapers\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Projects_AIwallpaper_aiwallpaper_app_api_get_wallpapers_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXQtd2FsbHBhcGVycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2V0LXdhbGxwYXBlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZXQtd2FsbHBhcGVycyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUNBSXdhbGxwYXBlciU1Q2Fpd2FsbHBhcGVyJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDUHJvamVjdHMlNUNBSXdhbGxwYXBlciU1Q2Fpd2FsbHBhcGVyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMwQjtBQUN2RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQUl3YWxscGFwZXJcXFxcYWl3YWxscGFwZXJcXFxcYXBwXFxcXGFwaVxcXFxnZXQtd2FsbHBhcGVyc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2V0LXdhbGxwYXBlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZXQtd2FsbHBhcGVyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2V0LXdhbGxwYXBlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxQcm9qZWN0c1xcXFxBSXdhbGxwYXBlclxcXFxhaXdhbGxwYXBlclxcXFxhcHBcXFxcYXBpXFxcXGdldC13YWxscGFwZXJzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fget-wallpapers%2Froute&page=%2Fapi%2Fget-wallpapers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-wallpapers%2Froute.ts&appDir=D%3A%5CProjects%5CAIwallpaper%5Caiwallpaper%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CAIwallpaper%5Caiwallpaper&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/get-wallpapers/route.ts":
/*!*****************************************!*\
  !*** ./app/api/get-wallpapers/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _models_wallpaper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/wallpaper */ \"(rsc)/./models/wallpaper.ts\");\n\nasync function GET(req) {\n    const wallpapers = await (0,_models_wallpaper__WEBPACK_IMPORTED_MODULE_0__.getWallpapers)(1, 10);\n    return Response.json({\n        code: 0,\n        message: \"ok\",\n        data: wallpapers\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dldC13YWxscGFwZXJzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1EO0FBRTVDLGVBQWVDLElBQUlDLEdBQVk7SUFDcEMsTUFBTUMsYUFBYSxNQUFNSCxnRUFBYUEsQ0FBQyxHQUFHO0lBRTFDLE9BQU9JLFNBQVNDLElBQUksQ0FBQztRQUNuQkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE1BQU1MO0lBQ1I7QUFDRiIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxBSXdhbGxwYXBlclxcYWl3YWxscGFwZXJcXGFwcFxcYXBpXFxnZXQtd2FsbHBhcGVyc1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2FsbHBhcGVycyB9IGZyb20gXCJAL21vZGVscy93YWxscGFwZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBSZXF1ZXN0KSB7XHJcbiAgY29uc3Qgd2FsbHBhcGVycyA9IGF3YWl0IGdldFdhbGxwYXBlcnMoMSwgMTApO1xyXG5cclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICBjb2RlOiAwLFxyXG4gICAgbWVzc2FnZTogXCJva1wiLFxyXG4gICAgZGF0YTogd2FsbHBhcGVycyxcclxuICB9KTtcclxufSJdLCJuYW1lcyI6WyJnZXRXYWxscGFwZXJzIiwiR0VUIiwicmVxIiwid2FsbHBhcGVycyIsIlJlc3BvbnNlIiwianNvbiIsImNvZGUiLCJtZXNzYWdlIiwiZGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/get-wallpapers/route.ts\n");

/***/ }),

/***/ "(rsc)/./models/db.ts":
/*!**********************!*\
  !*** ./models/db.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDb: () => (/* binding */ getDb)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nlet globalPool;\nfunction getDb() {\n    if (!globalPool) {\n        const connectionString = process.env.POSTGRES_URL;\n        console.log(\"connectionString\", connectionString);\n        globalPool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n            connectionString\n        });\n    }\n    return globalPool;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLElBQUlDO0FBRUcsU0FBU0M7SUFDZCxJQUFJLENBQUNELFlBQVk7UUFDZixNQUFNRSxtQkFBbUJDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtRQUNqREMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkw7UUFFaENGLGFBQWEsSUFBSUQsb0NBQUlBLENBQUM7WUFDcEJHO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1QiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcQUl3YWxscGFwZXJcXGFpd2FsbHBhcGVyXFxtb2RlbHNcXGRiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcclxuXHJcbmxldCBnbG9iYWxQb29sOiBQb29sO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERiKCkge1xyXG4gIGlmICghZ2xvYmFsUG9vbCkge1xyXG4gICAgY29uc3QgY29ubmVjdGlvblN0cmluZyA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VSTDtcclxuICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGlvblN0cmluZ1wiLCBjb25uZWN0aW9uU3RyaW5nKTtcclxuXHJcbiAgICBnbG9iYWxQb29sID0gbmV3IFBvb2woe1xyXG4gICAgICBjb25uZWN0aW9uU3RyaW5nLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2xvYmFsUG9vbDtcclxufSJdLCJuYW1lcyI6WyJQb29sIiwiZ2xvYmFsUG9vbCIsImdldERiIiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJQT1NUR1JFU19VUkwiLCJjb25zb2xlIiwibG9nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/db.ts\n");

/***/ }),

/***/ "(rsc)/./models/wallpaper.ts":
/*!*****************************!*\
  !*** ./models/wallpaper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserWallpapersCount: () => (/* binding */ getUserWallpapersCount),\n/* harmony export */   getWallpapers: () => (/* binding */ getWallpapers),\n/* harmony export */   insertWallpaper: () => (/* binding */ insertWallpaper)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(rsc)/./models/db.ts\");\n\nasync function insertWallpaper(wallpaper) {\n    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__.getDb)();\n    const res = await db.query(`INSERT INTO wallpapers \n          (user_email, img_description, img_size, img_url, llm_name, llm_params, created_at) \n          VALUES \n          ($1, $2, $3, $4, $5, $6, $7)\n      `, [\n        wallpaper.user_email,\n        wallpaper.img_description,\n        wallpaper.img_size,\n        wallpaper.img_url,\n        wallpaper.llm_name,\n        wallpaper.llm_params,\n        wallpaper.created_at\n    ]);\n    return res;\n}\nasync function getWallpapers(page, limit) {\n    if (page < 1) {\n        page = 1;\n    }\n    if (limit <= 0) {\n        limit = 50;\n    }\n    const offset = (page - 1) * limit;\n    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__.getDb)();\n    const res = await db.query(`select * from wallpapers limit $1 offset $2`, [\n        limit,\n        offset\n    ]);\n    if (res.rowCount === 0) {\n        return undefined;\n    }\n    const { rows } = res;\n    let wallpapers = [];\n    rows.forEach((row)=>{\n        const wallpaper = {\n            id: row.id,\n            user_email: row.user_email,\n            img_description: row.img_description,\n            img_size: row.img_size,\n            img_url: row.img_url,\n            llm_name: row.llm_name,\n            llm_params: row.llm_params,\n            created_at: row.created_at\n        };\n        wallpapers.push(wallpaper);\n    });\n    return wallpapers;\n}\nasync function getUserWallpapersCount(user_email) {\n    const db = (0,_db__WEBPACK_IMPORTED_MODULE_0__.getDb)();\n    const res = await db.query(`SELECT count(1) as count FROM wallpapers WHERE user_email = $1`, [\n        user_email\n    ]);\n    if (res.rowCount === 0) {\n        return 0;\n    }\n    const { rows } = res;\n    const row = rows[0];\n    return row.count;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvd2FsbHBhcGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNkI7QUFFdEIsZUFBZUMsZ0JBQWdCQyxTQUFvQjtJQUN4RCxNQUFNQyxLQUFLSCwwQ0FBS0E7SUFDaEIsTUFBTUksTUFBTSxNQUFNRCxHQUFHRSxLQUFLLENBQ3hCLENBQUM7Ozs7TUFJQyxDQUFDLEVBQ0g7UUFDRUgsVUFBVUksVUFBVTtRQUNwQkosVUFBVUssZUFBZTtRQUN6QkwsVUFBVU0sUUFBUTtRQUNsQk4sVUFBVU8sT0FBTztRQUNqQlAsVUFBVVEsUUFBUTtRQUNsQlIsVUFBVVMsVUFBVTtRQUNwQlQsVUFBVVUsVUFBVTtLQUNyQjtJQUdILE9BQU9SO0FBQ1Q7QUFFTyxlQUFlUyxjQUNwQkMsSUFBWSxFQUNaQyxLQUFhO0lBRWIsSUFBSUQsT0FBTyxHQUFHO1FBQ1pBLE9BQU87SUFDVDtJQUNBLElBQUlDLFNBQVMsR0FBRztRQUNkQSxRQUFRO0lBQ1Y7SUFDQSxNQUFNQyxTQUFTLENBQUNGLE9BQU8sS0FBS0M7SUFFNUIsTUFBTVosS0FBS0gsMENBQUtBO0lBQ2hCLE1BQU1JLE1BQU0sTUFBTUQsR0FBR0UsS0FBSyxDQUFDLENBQUMsMkNBQTJDLENBQUMsRUFBRTtRQUN4RVU7UUFDQUM7S0FDRDtJQUNELElBQUlaLElBQUlhLFFBQVEsS0FBSyxHQUFHO1FBQ3RCLE9BQU9DO0lBQ1Q7SUFFQSxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHZjtJQUNqQixJQUFJZ0IsYUFBMEIsRUFBRTtJQUVoQ0QsS0FBS0UsT0FBTyxDQUFDLENBQUNDO1FBQ1osTUFBTXBCLFlBQXVCO1lBQzNCcUIsSUFBSUQsSUFBSUMsRUFBRTtZQUNWakIsWUFBWWdCLElBQUloQixVQUFVO1lBQzFCQyxpQkFBaUJlLElBQUlmLGVBQWU7WUFDcENDLFVBQVVjLElBQUlkLFFBQVE7WUFDdEJDLFNBQVNhLElBQUliLE9BQU87WUFDcEJDLFVBQVVZLElBQUlaLFFBQVE7WUFDdEJDLFlBQVlXLElBQUlYLFVBQVU7WUFDMUJDLFlBQVlVLElBQUlWLFVBQVU7UUFDNUI7UUFDQVEsV0FBV0ksSUFBSSxDQUFDdEI7SUFDbEI7SUFFQSxPQUFPa0I7QUFDVDtBQUVPLGVBQWVLLHVCQUNwQm5CLFVBQWtCO0lBRWxCLE1BQU1ILEtBQUtILDBDQUFLQTtJQUNoQixNQUFNSSxNQUFNLE1BQU1ELEdBQUdFLEtBQUssQ0FDeEIsQ0FBQyw4REFBOEQsQ0FBQyxFQUNoRTtRQUFDQztLQUFXO0lBRWQsSUFBSUYsSUFBSWEsUUFBUSxLQUFLLEdBQUc7UUFDdEIsT0FBTztJQUNUO0lBRUEsTUFBTSxFQUFFRSxJQUFJLEVBQUUsR0FBR2Y7SUFDakIsTUFBTWtCLE1BQU1ILElBQUksQ0FBQyxFQUFFO0lBRW5CLE9BQU9HLElBQUlJLEtBQUs7QUFDbEIiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcQUl3YWxscGFwZXJcXGFpd2FsbHBhcGVyXFxtb2RlbHNcXHdhbGxwYXBlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXYWxscGFwZXIgfSBmcm9tIFwiQC90eXBlcy93YWxscGFwZXJcIjtcclxuaW1wb3J0IHsgZ2V0RGIgfSBmcm9tIFwiLi9kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydFdhbGxwYXBlcih3YWxscGFwZXI6IFdhbGxwYXBlcikge1xyXG4gIGNvbnN0IGRiID0gZ2V0RGIoKTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBkYi5xdWVyeShcclxuICAgIGBJTlNFUlQgSU5UTyB3YWxscGFwZXJzIFxyXG4gICAgICAgICAgKHVzZXJfZW1haWwsIGltZ19kZXNjcmlwdGlvbiwgaW1nX3NpemUsIGltZ191cmwsIGxsbV9uYW1lLCBsbG1fcGFyYW1zLCBjcmVhdGVkX2F0KSBcclxuICAgICAgICAgIFZBTFVFUyBcclxuICAgICAgICAgICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNylcclxuICAgICAgYCxcclxuICAgIFtcclxuICAgICAgd2FsbHBhcGVyLnVzZXJfZW1haWwsXHJcbiAgICAgIHdhbGxwYXBlci5pbWdfZGVzY3JpcHRpb24sXHJcbiAgICAgIHdhbGxwYXBlci5pbWdfc2l6ZSxcclxuICAgICAgd2FsbHBhcGVyLmltZ191cmwsXHJcbiAgICAgIHdhbGxwYXBlci5sbG1fbmFtZSxcclxuICAgICAgd2FsbHBhcGVyLmxsbV9wYXJhbXMsXHJcbiAgICAgIHdhbGxwYXBlci5jcmVhdGVkX2F0LFxyXG4gICAgXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXYWxscGFwZXJzKFxyXG4gIHBhZ2U6IG51bWJlcixcclxuICBsaW1pdDogbnVtYmVyXHJcbik6IFByb21pc2U8V2FsbHBhcGVyW10gfCB1bmRlZmluZWQ+IHtcclxuICBpZiAocGFnZSA8IDEpIHtcclxuICAgIHBhZ2UgPSAxO1xyXG4gIH1cclxuICBpZiAobGltaXQgPD0gMCkge1xyXG4gICAgbGltaXQgPSA1MDtcclxuICB9XHJcbiAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xyXG5cclxuICBjb25zdCBkYiA9IGdldERiKCk7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZGIucXVlcnkoYHNlbGVjdCAqIGZyb20gd2FsbHBhcGVycyBsaW1pdCAkMSBvZmZzZXQgJDJgLCBbXHJcbiAgICBsaW1pdCxcclxuICAgIG9mZnNldCxcclxuICBdKTtcclxuICBpZiAocmVzLnJvd0NvdW50ID09PSAwKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyByb3dzIH0gPSByZXM7XHJcbiAgbGV0IHdhbGxwYXBlcnM6IFdhbGxwYXBlcltdID0gW107XHJcblxyXG4gIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICBjb25zdCB3YWxscGFwZXI6IFdhbGxwYXBlciA9IHtcclxuICAgICAgaWQ6IHJvdy5pZCxcclxuICAgICAgdXNlcl9lbWFpbDogcm93LnVzZXJfZW1haWwsXHJcbiAgICAgIGltZ19kZXNjcmlwdGlvbjogcm93LmltZ19kZXNjcmlwdGlvbixcclxuICAgICAgaW1nX3NpemU6IHJvdy5pbWdfc2l6ZSxcclxuICAgICAgaW1nX3VybDogcm93LmltZ191cmwsXHJcbiAgICAgIGxsbV9uYW1lOiByb3cubGxtX25hbWUsXHJcbiAgICAgIGxsbV9wYXJhbXM6IHJvdy5sbG1fcGFyYW1zLFxyXG4gICAgICBjcmVhdGVkX2F0OiByb3cuY3JlYXRlZF9hdCxcclxuICAgIH07XHJcbiAgICB3YWxscGFwZXJzLnB1c2god2FsbHBhcGVyKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHdhbGxwYXBlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyV2FsbHBhcGVyc0NvdW50KFxyXG4gIHVzZXJfZW1haWw6IHN0cmluZ1xyXG4pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gIGNvbnN0IGRiID0gZ2V0RGIoKTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBkYi5xdWVyeShcclxuICAgIGBTRUxFQ1QgY291bnQoMSkgYXMgY291bnQgRlJPTSB3YWxscGFwZXJzIFdIRVJFIHVzZXJfZW1haWwgPSAkMWAsXHJcbiAgICBbdXNlcl9lbWFpbF1cclxuICApO1xyXG4gIGlmIChyZXMucm93Q291bnQgPT09IDApIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyByb3dzIH0gPSByZXM7XHJcbiAgY29uc3Qgcm93ID0gcm93c1swXTtcclxuXHJcbiAgcmV0dXJuIHJvdy5jb3VudDtcclxufSJdLCJuYW1lcyI6WyJnZXREYiIsImluc2VydFdhbGxwYXBlciIsIndhbGxwYXBlciIsImRiIiwicmVzIiwicXVlcnkiLCJ1c2VyX2VtYWlsIiwiaW1nX2Rlc2NyaXB0aW9uIiwiaW1nX3NpemUiLCJpbWdfdXJsIiwibGxtX25hbWUiLCJsbG1fcGFyYW1zIiwiY3JlYXRlZF9hdCIsImdldFdhbGxwYXBlcnMiLCJwYWdlIiwibGltaXQiLCJvZmZzZXQiLCJyb3dDb3VudCIsInVuZGVmaW5lZCIsInJvd3MiLCJ3YWxscGFwZXJzIiwiZm9yRWFjaCIsInJvdyIsImlkIiwicHVzaCIsImdldFVzZXJXYWxscGFwZXJzQ291bnQiLCJjb3VudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/wallpaper.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fget-wallpapers%2Froute&page=%2Fapi%2Fget-wallpapers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-wallpapers%2Froute.ts&appDir=D%3A%5CProjects%5CAIwallpaper%5Caiwallpaper%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5CAIwallpaper%5Caiwallpaper&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();