"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/redirect/page",{

/***/ "(app-pages-browser)/./src/app/redirect/page.tsx":
/*!***********************************!*\
  !*** ./src/app/redirect/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Redirect; }\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\nfunction Redirect() {\n    _s();\n    const clientId = process.env.OAUTH_CLIENT_ID;\n    const clientSecret = process.env.OAUTH_CLIENT_SECRET;\n    const redirectUri = process.env.OAUTH_REDIRECT_URI;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    console.log(router, router.query);\n//   const { code } = router.query;\n//   const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString(\"base64\");\n//   const fetchToken = async () => {\n//     const response = await fetch(\"https://api.notion.com/v1/oauth/token\", {\n//       method: \"POST\",\n//       headers: {\n//         Accept: \"application/json\",\n//         \"Content-Type\": \"application/json\",\n//         Authorization: `Basic ${encoded}`,\n//       },\n//       body: JSON.stringify({\n//         grant_type: \"authorization_code\",\n//         code: code,\n//         redirect_uri: redirectUri,\n//       }),\n//     });\n//     console.log(response);\n//   };\n//   useEffect(() => {\n//     fetchToken();\n//   }, []);\n}\n_s(Redirect, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n_c = Redirect;\nvar _c;\n$RefreshReg$(_c, \"Redirect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkaXJlY3QvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFHN0IsU0FBU0M7O0lBQ3RCLE1BQU1DLFdBQVdDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtJQUM1QyxNQUFNQyxlQUFlSCxPQUFPQSxDQUFDQyxHQUFHLENBQUNHLG1CQUFtQjtJQUNwRCxNQUFNQyxjQUFjTCxPQUFPQSxDQUFDQyxHQUFHLENBQUNLLGtCQUFrQjtJQUVsRCxNQUFNQyxTQUFTViwwREFBU0E7SUFDeEJXLFFBQVFDLEdBQUcsQ0FBQ0YsUUFBUUEsT0FBT0csS0FBSztBQUNoQyxtQ0FBbUM7QUFFbkMsbUZBQW1GO0FBRW5GLHFDQUFxQztBQUNyQyw4RUFBOEU7QUFDOUUsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixzQ0FBc0M7QUFDdEMsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3QyxXQUFXO0FBQ1gsK0JBQStCO0FBQy9CLDRDQUE0QztBQUM1QyxzQkFBc0I7QUFDdEIscUNBQXFDO0FBQ3JDLFlBQVk7QUFDWixVQUFVO0FBRVYsNkJBQTZCO0FBQzdCLE9BQU87QUFFUCxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLFlBQVk7QUFDZDtHQWhDd0JaOztRQUtQRCxzREFBU0E7OztLQUxGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JlZGlyZWN0L3BhZ2UudHN4P2JiNGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWRpcmVjdCgpIHtcbiAgY29uc3QgY2xpZW50SWQgPSBwcm9jZXNzLmVudi5PQVVUSF9DTElFTlRfSUQ7XG4gIGNvbnN0IGNsaWVudFNlY3JldCA9IHByb2Nlc3MuZW52Lk9BVVRIX0NMSUVOVF9TRUNSRVQ7XG4gIGNvbnN0IHJlZGlyZWN0VXJpID0gcHJvY2Vzcy5lbnYuT0FVVEhfUkVESVJFQ1RfVVJJO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhyb3V0ZXIsIHJvdXRlci5xdWVyeSk7XG4gIC8vICAgY29uc3QgeyBjb2RlIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgLy8gICBjb25zdCBlbmNvZGVkID0gQnVmZmVyLmZyb20oYCR7Y2xpZW50SWR9OiR7Y2xpZW50U2VjcmV0fWApLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuXG4gIC8vICAgY29uc3QgZmV0Y2hUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5ub3Rpb24uY29tL3YxL29hdXRoL3Rva2VuXCIsIHtcbiAgLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgLy8gICAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7ZW5jb2RlZH1gLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gIC8vICAgICAgICAgZ3JhbnRfdHlwZTogXCJhdXRob3JpemF0aW9uX2NvZGVcIixcbiAgLy8gICAgICAgICBjb2RlOiBjb2RlLFxuICAvLyAgICAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXG4gIC8vICAgICAgIH0pLFxuICAvLyAgICAgfSk7XG5cbiAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgLy8gICB9O1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGZldGNoVG9rZW4oKTtcbiAgLy8gICB9LCBbXSk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVkaXJlY3QiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJPQVVUSF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJPQVVUSF9DTElFTlRfU0VDUkVUIiwicmVkaXJlY3RVcmkiLCJPQVVUSF9SRURJUkVDVF9VUkkiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redirect/page.tsx\n"));

/***/ })

});