"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nfunction middleware(req) {\n    // 添加日志查看中间件是否被触发\n    console.log(\"访问路径：\", req.url);\n    try {\n        // 尝试运行 clerk 中间件\n        return (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)()(req);\n    } catch (error) {\n        console.error(\"中间件错误：\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.error();\n    }\n}\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        '/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\n        '/(api|trpc)(.*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ1o7QUFFNUIsU0FBU0UsV0FBV0MsR0FBWTtJQUM3QyxpQkFBaUI7SUFDakJDLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRixJQUFJRyxHQUFHO0lBRTVCLElBQUk7UUFDRixpQkFBaUI7UUFDakIsT0FBT04scUVBQWVBLEdBQUdHO0lBQzNCLEVBQUUsT0FBT0ksT0FBTztRQUNkSCxRQUFRRyxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBT04scURBQVlBLENBQUNNLEtBQUs7SUFDM0I7QUFDRjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFDUCw2RUFBNkU7UUFDN0U7UUFDQTtLQUNEO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsiRDpcXFByb2plY3RzXFxBSXdhbGxwYXBlclxcYWl3YWxscGFwZXJcXG1pZGRsZXdhcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlcmtNaWRkbGV3YXJlIH0gZnJvbSBcIkBjbGVyay9uZXh0anMvc2VydmVyXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXE6IFJlcXVlc3QpIHtcclxuICAvLyDmt7vliqDml6Xlv5fmn6XnnIvkuK3pl7Tku7bmmK/lkKbooqvop6blj5FcclxuICBjb25zb2xlLmxvZyhcIuiuv+mXrui3r+W+hO+8mlwiLCByZXEudXJsKTtcclxuICBcclxuICB0cnkge1xyXG4gICAgLy8g5bCd6K+V6L+Q6KGMIGNsZXJrIOS4remXtOS7tlxyXG4gICAgcmV0dXJuIGNsZXJrTWlkZGxld2FyZSgpKHJlcSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLkuK3pl7Tku7bplJnor6/vvJpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5lcnJvcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbXHJcbiAgICAvLyBTa2lwIE5leHQuanMgaW50ZXJuYWxzIGFuZCBhbGwgc3RhdGljIGZpbGVzLCB1bmxlc3MgZm91bmQgaW4gc2VhcmNoIHBhcmFtc1xyXG4gICAgJy8oKD8hX25leHR8W14/XSpcXFxcLig/Omh0bWw/fGNzc3xqcyg/IW9uKXxqcGU/Z3x3ZWJwfHBuZ3xnaWZ8c3ZnfHR0Znx3b2ZmMj98aWNvfGNzdnxkb2N4P3x4bHN4P3x6aXB8d2VibWFuaWZlc3QpKS4qKScsXHJcbiAgICAnLyhhcGl8dHJwYykoLiopJyxcclxuICBdLFxyXG59OyJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwiY29uc29sZSIsImxvZyIsInVybCIsImVycm9yIiwiY29uZmlnIiwibWF0Y2hlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});