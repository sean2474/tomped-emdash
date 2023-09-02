exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 2676:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 9459:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2486))

/***/ }),

/***/ 2581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ RedButton),
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4043);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ children, href, className, onClick, download, target, rel, style })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: `${(_button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)} ${className}`,
        href: href,
        onClick: onClick,
        download: download,
        target: target,
        rel: rel,
        style: style,
        children: children
    });
};
const RedButton = ({ children, href, className, onClick, download, target, rel })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: `${(_button_module_css__WEBPACK_IMPORTED_MODULE_1___default().red)} ${(_button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)} ${className}`,
        href: href,
        onClick: onClick,
        download: download,
        target: target,
        rel: rel,
        children: children
    });
};


/***/ }),

/***/ 2486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ googleAnalytics)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(1949);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/libs/gtags.ts
const GA_TRACKING_ID = "G-13MSZV3GMR";
const pageview = (url)=>{
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const gtags_event = (action, { event_category, event_label, value })=>{
    window.gtag("event", action, {
        event_category,
        event_label,
        value
    });
};

;// CONCATENATED MODULE: ./src/components/googleAnalytics.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const GoogleAnalytics = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "gtag-init",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              });
                `
                }
            })
        ]
    });
};
/* harmony default export */ const googleAnalytics = (GoogleAnalytics);


/***/ }),

/***/ 7651:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__KDdEv",
	"footerTexts": "footer_footerTexts__Es8F8",
	"footer1": "footer_footer1__8qRjc",
	"footer2": "footer_footer2__jeHWR",
	"footer3": "footer_footer3__1I1TS",
	"footerText": "footer_footerText__hMIQC"
};


/***/ }),

/***/ 4043:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "button_button__TIoc7",
	"red": "button_red__Q5Ye3"
};


/***/ }),

/***/ 6960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Ubuntu","arguments":[{"weight":"400","subsets":["latin-ext"]}],"variableName":"inter"}
var layout_tsx_import_Ubuntu_arguments_weight_400_subsets_latin_ext_variableName_inter_ = __webpack_require__(8240);
var layout_tsx_import_Ubuntu_arguments_weight_400_subsets_latin_ext_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Ubuntu_arguments_weight_400_subsets_latin_ext_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./src/app/footer.module.css
var footer_module = __webpack_require__(7651);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/footer.tsx



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).footerTexts,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footer1,
                        children: [
                            "TOMPED ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Organizing Committee"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footer3,
                        children: [
                            "W: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://tomped.emdash.one/",
                                children: " https://tomped.emdash.one/ "
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "W: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.tomglass.co.kr/",
                                target: "_blank",
                                children: " https://www.tomglass.co.kr/ "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "E: mped@emdash.one ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "T: +82.2.553.5795 / 070.7007.2257 ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (footer_module_default()).footer2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Follow on social"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.instagram.com/tomglass_kr/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/footer/instagram_icon.png",
                                    alt: "logo",
                                    width: 50,
                                    height: 50
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.instagram.com/tomglass_kr/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "instagram.com/tomglass_kr/"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/images/footer/footer_image.png",
                alt: "logo",
                width: 100,
                height: 100,
                layout: "responsive"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (footer_module_default()).footerText,
                children: [
                    "\xa9 2023 TOMPED SPECTACLE DESIGN COMPETITION ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        children: "made by Sean Park, Avon Old Farms 2024"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/googleAnalytics.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/sean2474/Desktop/tomped-emdash/src/components/googleAnalytics.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const googleAnalytics = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: (layout_tsx_import_Ubuntu_arguments_weight_400_subsets_latin_ext_variableName_inter_default()).className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Welcome to TOMPED!!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(googleAnalytics, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;