"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/2",{

/***/ "./pages/2.tsx":
/*!*********************!*\
  !*** ./pages/2.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! array-move */ \"./node_modules/array-move/index.js\");\n/* harmony import */ var _components_sortableList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sortableList */ \"./components/sortableList.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { peoples  } = param;\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Organizer\",\n        \"Speakers\",\n        \"Location\",\n        \"Schedule\",\n        \"Sponsors\"\n    ]);\n    let res;\n    const onSortEnd = (param)=>{\n        let { oldIndex , newIndex  } = param;\n        setItems((prevItem)=>(0,array_move__WEBPACK_IMPORTED_MODULE_3__.arrayMoveImmutable)(prevItem, oldIndex, newIndex));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container grid max-w-screen-xl px-4 mx-auto mt-24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"wrapper rounded w-full \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header flex flex-col justify-between lg:p-2 lg:px-4 px-6 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-6xl font-semibold -ml-1 \",\n                                        children: \"Event Schedule\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"py-6 text-xl\",\n                                        children: \"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex suscipit iste ut eos.\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sortableList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            items: items,\n                            onSortEnd: onSortEnd\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:absolute lg:inset-72 lg:ml-96\",\n                            children: peoples.map((people, id)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative flex flex-col lg:flex-row lg:space-x-0 space-y-1 lg:space-y-0 rounded-xl max-w-xs lg:max-w-4xl mx-auto my-16 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full lg:w-1/3 grid lg:place-items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: people.image[\"url\"],\n                                                alt: \"tailwind logo\",\n                                                className: \"rounded-xl h-32\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full lg:w-2/3 bg-white flex flex-col space-y-2 lg:-space-x-10\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"font-black text-gray-800 lg:text-xl text-xl lg:-ml-10 lg:-mt-0 -mt-32 ml-32\",\n                                                    children: [\n                                                        people.name,\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"font-light text-gray-800 lg:text-xl text-xl lg:text-right lg:-mt-6 lg:-mr-10\",\n                                                            children: people.company == null ? \"NULL\" : people.company\n                                                        }, void 0, false, {\n                                                            fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"lg:text-lg text-gray-500 text-justify\",\n                                                    children: people.about\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, id, true, {\n                                    fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"G:\\\\Project\\\\lemonhive\\\\pages\\\\2.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"AfXwoJ2pCRaCRmlcdZ6C0wYcU/U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEM7QUFDUztBQUNIO0FBRU07O0FBR3ZDLFNBQVNLLEtBQUssS0FBZ0IsRUFBRTtRQUFsQixFQUFFQyxRQUFPLEVBQU8sR0FBaEI7O0lBQzNCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztRQUNqQztRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxJQUFJTztJQUVKLE1BQU1DLFlBQVksU0FBaUM7WUFBaEMsRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQU87UUFDNUNKLFNBQVMsQ0FBQ0ssV0FBYVYsOERBQWtCQSxDQUFDVSxVQUFVRixVQUFVQztJQUNoRTtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1osMERBQU1BOzs7OzswQkFDUCw4REFBQ2M7Z0JBQVFDLFdBQVU7MEJBQ2pCLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFHRixXQUFVO2tEQUFnQzs7Ozs7O2tEQUM5Qyw4REFBQ0c7d0NBQUVILFdBQVU7a0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU1oQyw4REFBQ1gsZ0VBQVlBOzRCQUFDRyxPQUFPQTs0QkFBT0csV0FBV0E7Ozs7OztzQ0FFdkMsOERBQUNNOzRCQUFJRCxXQUFVO3NDQUNaVCxRQUFRYSxHQUFHLENBQUMsQ0FBQ0MsUUFBYUMsS0FBZTtnQ0FDeEMscUJBQ0UsOERBQUNMO29DQUNDRCxXQUFVOztzREFHViw4REFBQ0M7NENBQUlELFdBQVU7c0RBQ2IsNEVBQUNPO2dEQUNDQyxLQUFLSCxPQUFPSSxLQUFLLENBQUMsTUFBTTtnREFDeEJDLEtBQUk7Z0RBQ0pWLFdBQVU7Ozs7Ozs7Ozs7O3NEQUdkLDhEQUFDQzs0Q0FBSUQsV0FBVTs7OERBQ2IsOERBQUNXO29EQUFHWCxXQUFVOzt3REFDWEssT0FBT08sSUFBSTtzRUFDWiw4REFBQ0Q7NERBQUdYLFdBQVU7c0VBQ1hLLE9BQU9RLE9BQU8sSUFBSSxJQUFJLEdBQUcsU0FBU1IsT0FBT1EsT0FBTzs7Ozs7Ozs7Ozs7OzhEQUlyRCw4REFBQ1Y7b0RBQUVILFdBQVU7OERBQ1ZLLE9BQU9TLEtBQUs7Ozs7Ozs7Ozs7Ozs7bUNBbEJaUjs7Ozs7NEJBdUJYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVosQ0FBQztHQWhFdUJoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy8yLnRzeD82MGU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXJyYXlNb3ZlSW1tdXRhYmxlIH0gZnJvbSBcImFycmF5LW1vdmVcIjtcbmltcG9ydCBzb3J0YWJsZUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvc29ydGFibGVMaXN0XCI7XG5pbXBvcnQgU29ydGFibGVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3NvcnRhYmxlTGlzdFwiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBlb3BsZXMgfTogYW55KSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW1xuICAgIFwiT3JnYW5pemVyXCIsXG4gICAgXCJTcGVha2Vyc1wiLFxuICAgIFwiTG9jYXRpb25cIixcbiAgICBcIlNjaGVkdWxlXCIsXG4gICAgXCJTcG9uc29yc1wiLFxuICBdKTtcbiAgbGV0IHJlcztcblxuICBjb25zdCBvblNvcnRFbmQgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfTogYW55KSA9PiB7XG4gICAgc2V0SXRlbXMoKHByZXZJdGVtKSA9PiBhcnJheU1vdmVJbW11dGFibGUocHJldkl0ZW0sIG9sZEluZGV4LCBuZXdJbmRleCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGdyaWQgbWF4LXctc2NyZWVuLXhsIHB4LTQgIG14LWF1dG8gbXQtMjRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgcm91bmRlZCAgdy1mdWxsIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gbGc6cC0yIGxnOnB4LTQgcHgtNiBcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtc2VtaWJvbGQgLW1sLTEgXCI+RXZlbnQgU2NoZWR1bGU8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS02IHRleHQteGxcIj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhcbiAgICAgICAgICAgICAgICBzdXNjaXBpdCBpc3RlIHV0IGVvcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNvcnRhYmxlTGlzdCBpdGVtcz17aXRlbXN9IG9uU29ydEVuZD17b25Tb3J0RW5kfSAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzphYnNvbHV0ZSBsZzppbnNldC03MiBsZzptbC05NlwiPlxuICAgICAgICAgICAge3Blb3BsZXMubWFwKChwZW9wbGU6IGFueSwgaWQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGc6c3BhY2UteC0wIHNwYWNlLXktMSBsZzpzcGFjZS15LTAgcm91bmRlZC14bCAgbWF4LXcteHMgbGc6bWF4LXctNHhsIG14LWF1dG8gbXktMTYgXCJcbiAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzMgZ3JpZCBsZzpwbGFjZS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGVvcGxlLmltYWdlW1widXJsXCJdfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInRhaWx3aW5kIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgaC0zMlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMi8zIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgc3BhY2UteS0yIGxnOi1zcGFjZS14LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQtZ3JheS04MDAgbGc6dGV4dC14bCB0ZXh0LXhsIGxnOi1tbC0xMCBsZzotbXQtMCAtbXQtMzIgbWwtMzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGVvcGxlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1ncmF5LTgwMCBsZzp0ZXh0LXhsIHRleHQteGwgIGxnOnRleHQtcmlnaHQgbGc6LW10LTYgbGc6LW1yLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGVvcGxlLmNvbXBhbnkgPT0gbnVsbCA/IFwiTlVMTFwiIDogcGVvcGxlLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZzp0ZXh0LWxnIHRleHQtZ3JheS01MDAgdGV4dC1qdXN0aWZ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Blb3BsZS5hYm91dH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBcImh0dHBzOi8vYXBpLnJlYWN0LWZpbmxhbmQuZmkvZ3JhcGhxbFwiLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICB9KTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSB7XG4gICAgICAgIHBlb3BsZSB7XG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBhYm91dFxuICAgICAgICAgIGNvbXBhbnlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwZW9wbGVzOiBkYXRhLnBlb3BsZSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk5hdkJhciIsIlJlYWN0IiwidXNlU3RhdGUiLCJhcnJheU1vdmVJbW11dGFibGUiLCJTb3J0YWJsZUxpc3QiLCJIb21lIiwicGVvcGxlcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJyZXMiLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwicHJldkl0ZW0iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJwIiwibWFwIiwicGVvcGxlIiwiaWQiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImgzIiwibmFtZSIsImNvbXBhbnkiLCJhYm91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/2.tsx\n"));

/***/ })

});