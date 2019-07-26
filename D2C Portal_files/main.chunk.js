(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/reduction.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/styles/reduction.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i);", ""]);

// module
exports.push([module.i, "/*!\n * Bootstrap v4.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #0212cb;\n  --secondary: #36454f;\n  --success: #45b649;\n  --info: #00c9ff;\n  --warning: #ffd700;\n  --danger: #f85032;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --teal: #009688;\n  --indigo: #536dfe;\n  --orange: #ff9800;\n  --green: #4caf50;\n  --red: #f44336;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #0212cb;\n  text-decoration: none;\n  background-color: transparent; }\n  a:hover {\n    color: #010b7f;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nselect {\n  word-wrap: normal; }\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton:not(:disabled),\n[type=\"button\"]:not(:disabled),\n[type=\"reset\"]:not(:disabled),\n[type=\"submit\"]:not(:disabled) {\n  cursor: pointer; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n  .blockquote-footer::before {\n    content: \"\\2014\\A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d; }\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word; }\n  a > code {\n    color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\n  pre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  -webkit-flex-basis: 0;\n          flex-basis: 0;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  -webkit-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; }\n\n.col-1 {\n  -webkit-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  -webkit-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  -webkit-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  -webkit-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  -webkit-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  -webkit-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  -webkit-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  -webkit-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  -webkit-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  -webkit-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  -webkit-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  -webkit-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  -webkit-order: -1;\n          order: -1; }\n\n.order-last {\n  -webkit-order: 13;\n          order: 13; }\n\n.order-0 {\n  -webkit-order: 0;\n          order: 0; }\n\n.order-1 {\n  -webkit-order: 1;\n          order: 1; }\n\n.order-2 {\n  -webkit-order: 2;\n          order: 2; }\n\n.order-3 {\n  -webkit-order: 3;\n          order: 3; }\n\n.order-4 {\n  -webkit-order: 4;\n          order: 4; }\n\n.order-5 {\n  -webkit-order: 5;\n          order: 5; }\n\n.order-6 {\n  -webkit-order: 6;\n          order: 6; }\n\n.order-7 {\n  -webkit-order: 7;\n          order: 7; }\n\n.order-8 {\n  -webkit-order: 8;\n          order: 8; }\n\n.order-9 {\n  -webkit-order: 9;\n          order: 9; }\n\n.order-10 {\n  -webkit-order: 10;\n          order: 10; }\n\n.order-11 {\n  -webkit-order: 11;\n          order: 11; }\n\n.order-12 {\n  -webkit-order: 12;\n          order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333%; }\n\n.offset-2 {\n  margin-left: 16.66667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333%; }\n\n.offset-5 {\n  margin-left: 41.66667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333%; }\n\n.offset-8 {\n  margin-left: 66.66667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333%; }\n\n.offset-11 {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    -webkit-flex-basis: 0;\n            flex-basis: 0;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-sm-1 {\n    -webkit-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    -webkit-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    -webkit-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    -webkit-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    -webkit-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    -webkit-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    -webkit-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    -webkit-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    -webkit-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-order: 13;\n            order: 13; }\n  .order-sm-0 {\n    -webkit-order: 0;\n            order: 0; }\n  .order-sm-1 {\n    -webkit-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333%; }\n  .offset-sm-2 {\n    margin-left: 16.66667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333%; }\n  .offset-sm-5 {\n    margin-left: 41.66667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333%; }\n  .offset-sm-8 {\n    margin-left: 66.66667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333%; }\n  .offset-sm-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    -webkit-flex-basis: 0;\n            flex-basis: 0;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-md-1 {\n    -webkit-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    -webkit-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    -webkit-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    -webkit-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    -webkit-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    -webkit-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    -webkit-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    -webkit-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    -webkit-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-order: 13;\n            order: 13; }\n  .order-md-0 {\n    -webkit-order: 0;\n            order: 0; }\n  .order-md-1 {\n    -webkit-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333%; }\n  .offset-md-2 {\n    margin-left: 16.66667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333%; }\n  .offset-md-5 {\n    margin-left: 41.66667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333%; }\n  .offset-md-8 {\n    margin-left: 66.66667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333%; }\n  .offset-md-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    -webkit-flex-basis: 0;\n            flex-basis: 0;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-lg-1 {\n    -webkit-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    -webkit-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    -webkit-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    -webkit-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    -webkit-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    -webkit-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    -webkit-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    -webkit-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    -webkit-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-order: 13;\n            order: 13; }\n  .order-lg-0 {\n    -webkit-order: 0;\n            order: 0; }\n  .order-lg-1 {\n    -webkit-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333%; }\n  .offset-lg-2 {\n    margin-left: 16.66667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333%; }\n  .offset-lg-5 {\n    margin-left: 41.66667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333%; }\n  .offset-lg-8 {\n    margin-left: 66.66667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333%; }\n  .offset-lg-11 {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -webkit-flex-basis: 0;\n            flex-basis: 0;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-xl-1 {\n    -webkit-flex: 0 0 8.33333%;\n            flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    -webkit-flex: 0 0 16.66667%;\n            flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    -webkit-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    -webkit-flex: 0 0 41.66667%;\n            flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    -webkit-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-flex: 0 0 58.33333%;\n            flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    -webkit-flex: 0 0 66.66667%;\n            flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    -webkit-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-flex: 0 0 83.33333%;\n            flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    -webkit-flex: 0 0 91.66667%;\n            flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    -webkit-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-order: 13;\n            order: 13; }\n  .order-xl-0 {\n    -webkit-order: 0;\n            order: 0; }\n  .order-xl-1 {\n    -webkit-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333%; }\n  .offset-xl-2 {\n    margin-left: 16.66667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333%; }\n  .offset-xl-5 {\n    margin-left: 41.66667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333%; }\n  .offset-xl-8 {\n    margin-left: 66.66667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333%; }\n  .offset-xl-11 {\n    margin-left: 91.66667%; } }\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n  .table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #dee2e6; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8bdf0; }\n\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #7b84e4; }\n\n.table-hover .table-primary:hover {\n  background-color: #a3a9ec; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #a3a9ec; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #c7cbce; }\n\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #969ea3; }\n\n.table-hover .table-secondary:hover {\n  background-color: #b9bec2; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #b9bec2; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #cbebcc; }\n\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #9ed9a0; }\n\n.table-hover .table-success:hover {\n  background-color: #b9e4ba; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b9e4ba; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8f0ff; }\n\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #7ae3ff; }\n\n.table-hover .table-info:hover {\n  background-color: #9febff; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #9febff; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fff4b8; }\n\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffea7a; }\n\n.table-hover .table-warning:hover {\n  background-color: #fff09f; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #fff09f; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #fdcec6; }\n\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #fba494; }\n\n.table-hover .table-danger:hover {\n  background-color: #fcb9ad; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #fcb9ad; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n\n.table-teal,\n.table-teal > th,\n.table-teal > td {\n  background-color: #b8e2de; }\n\n.table-teal th,\n.table-teal td,\n.table-teal thead th,\n.table-teal tbody + tbody {\n  border-color: #7ac8c1; }\n\n.table-hover .table-teal:hover {\n  background-color: #a6dbd6; }\n  .table-hover .table-teal:hover > td,\n  .table-hover .table-teal:hover > th {\n    background-color: #a6dbd6; }\n\n.table-indigo,\n.table-indigo > th,\n.table-indigo > td {\n  background-color: #cfd6ff; }\n\n.table-indigo th,\n.table-indigo td,\n.table-indigo thead th,\n.table-indigo tbody + tbody {\n  border-color: #a6b3fe; }\n\n.table-hover .table-indigo:hover {\n  background-color: #b6c0ff; }\n  .table-hover .table-indigo:hover > td,\n  .table-hover .table-indigo:hover > th {\n    background-color: #b6c0ff; }\n\n.table-orange,\n.table-orange > th,\n.table-orange > td {\n  background-color: #ffe2b8; }\n\n.table-orange th,\n.table-orange td,\n.table-orange thead th,\n.table-orange tbody + tbody {\n  border-color: #ffc97a; }\n\n.table-hover .table-orange:hover {\n  background-color: #ffd89f; }\n  .table-hover .table-orange:hover > td,\n  .table-hover .table-orange:hover > th {\n    background-color: #ffd89f; }\n\n.table-green,\n.table-green > th,\n.table-green > td {\n  background-color: #cde9ce; }\n\n.table-green th,\n.table-green td,\n.table-green thead th,\n.table-green tbody + tbody {\n  border-color: #a2d5a4; }\n\n.table-hover .table-green:hover {\n  background-color: #bbe1bd; }\n  .table-hover .table-green:hover > td,\n  .table-hover .table-green:hover > th {\n    background-color: #bbe1bd; }\n\n.table-red,\n.table-red > th,\n.table-red > td {\n  background-color: #fccac7; }\n\n.table-red th,\n.table-red td,\n.table-red thead th,\n.table-red tbody + tbody {\n  border-color: #f99d96; }\n\n.table-hover .table-red:hover {\n  background-color: #fbb3af; }\n  .table-hover .table-red:hover > td,\n  .table-hover .table-red:hover > th {\n    background-color: #fbb3af; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #454d55; }\n  .table-dark.table-bordered {\n    border: 0; }\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover tbody tr:hover {\n    color: #fff;\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; }\n  .table-responsive > .table-bordered {\n    border: 0; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .form-control {\n      transition: none; } }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #4f5dfd;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n  .form-control::-webkit-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n  .form-control::-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n  .form-control::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto; }\n\ntextarea.form-control {\n  height: auto; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n  .form-check-input:disabled ~ .form-check-label {\n    color: #6c757d; }\n\n.form-check-label {\n  margin-bottom: 0; }\n\n.form-check-inline {\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-align-items: center;\n          align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n  .form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #45b649; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(69, 182, 73, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #45b649;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2345b649' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center right calc(0.375em + 0.1875rem);\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n    border-color: #45b649;\n    box-shadow: 0 0 0 0.2rem rgba(69, 182, 73, 0.25); }\n  .was-validated .form-control:valid ~ .valid-feedback,\n  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n  .form-control.is-valid ~ .valid-tooltip {\n    display: block; }\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #45b649;\n  padding-right: calc((1em + 0.75rem) * 3 / 4 + 1.75rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2345b649' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n    border-color: #45b649;\n    box-shadow: 0 0 0 0.2rem rgba(69, 182, 73, 0.25); }\n  .was-validated .custom-select:valid ~ .valid-feedback,\n  .was-validated .custom-select:valid ~ .valid-tooltip, .custom-select.is-valid ~ .valid-feedback,\n  .custom-select.is-valid ~ .valid-tooltip {\n    display: block; }\n\n.was-validated .form-control-file:valid ~ .valid-feedback,\n.was-validated .form-control-file:valid ~ .valid-tooltip, .form-control-file.is-valid ~ .valid-feedback,\n.form-control-file.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #45b649; }\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #45b649; }\n  .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    border-color: #45b649; }\n\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #68c66b;\n  background: #68c66b linear-gradient(180deg, #7fce82, #68c66b) repeat-x; }\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(69, 182, 73, 0.25); }\n\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #45b649; }\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #45b649; }\n\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #45b649;\n  box-shadow: 0 0 0 0.2rem rgba(69, 182, 73, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #f85032; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(248, 80, 50, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #f85032;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23f85032' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23f85032' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center right calc(0.375em + 0.1875rem);\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n    border-color: #f85032;\n    box-shadow: 0 0 0 0.2rem rgba(248, 80, 50, 0.25); }\n  .was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #f85032;\n  padding-right: calc((1em + 0.75rem) * 3 / 4 + 1.75rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23f85032' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23f85032' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }\n  .was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n    border-color: #f85032;\n    box-shadow: 0 0 0 0.2rem rgba(248, 80, 50, 0.25); }\n  .was-validated .custom-select:invalid ~ .invalid-feedback,\n  .was-validated .custom-select:invalid ~ .invalid-tooltip, .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated .form-control-file:invalid ~ .invalid-feedback,\n.was-validated .form-control-file:invalid ~ .invalid-tooltip, .form-control-file.is-invalid ~ .invalid-feedback,\n.form-control-file.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #f85032; }\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #f85032; }\n  .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    border-color: #f85032; }\n\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #fa7a63;\n  background: #fa7a63 linear-gradient(180deg, #fa8e7b, #fa7a63) repeat-x; }\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(248, 80, 50, 0.25); }\n\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #f85032; }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #f85032; }\n\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #f85032;\n  box-shadow: 0 0 0 0.2rem rgba(248, 80, 50, 0.25); }\n\n.form-inline {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-align-items: center;\n          align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: -webkit-flex;\n      display: flex;\n      -webkit-align-items: center;\n              align-items: center;\n      -webkit-justify-content: center;\n              justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: -webkit-flex;\n      display: flex;\n      -webkit-flex: 0 0 auto;\n              flex: 0 0 auto;\n      -webkit-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-align-items: center;\n              align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group,\n    .form-inline .custom-select {\n      width: auto; }\n    .form-inline .form-check {\n      display: -webkit-flex;\n      display: flex;\n      -webkit-align-items: center;\n              align-items: center;\n      -webkit-justify-content: center;\n              justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      -webkit-flex-shrink: 0;\n              flex-shrink: 0;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      -webkit-align-items: center;\n              align-items: center;\n      -webkit-justify-content: center;\n              justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none; } }\n  .btn:hover {\n    color: #212529;\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n  .btn.disabled, .btn:disabled {\n    opacity: 0.65; }\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background: #0212cb linear-gradient(180deg, #2836d3, #0212cb) repeat-x;\n  border-color: #0212cb; }\n  .btn-primary:hover {\n    color: #fff;\n    background: #020fa5 linear-gradient(180deg, #2833b3, #020fa5) repeat-x;\n    border-color: #020e98; }\n  .btn-primary:focus, .btn-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 54, 211, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    color: #fff;\n    background-color: #0212cb;\n    border-color: #0212cb;\n    background-image: none; }\n  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #020e98;\n    background-image: none;\n    border-color: #010c8c; }\n    .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 54, 211, 0.5); }\n\n.btn-secondary {\n  color: #fff;\n  background: #36454f linear-gradient(180deg, #546169, #36454f) repeat-x;\n  border-color: #36454f; }\n  .btn-secondary:hover {\n    color: #fff;\n    background: #263138 linear-gradient(180deg, #475056, #263138) repeat-x;\n    border-color: #212b31; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(84, 97, 105, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    color: #fff;\n    background-color: #36454f;\n    border-color: #36454f;\n    background-image: none; }\n  .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #212b31;\n    background-image: none;\n    border-color: #1c2429; }\n    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(84, 97, 105, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background: #45b649 linear-gradient(180deg, #61c164, #45b649) repeat-x;\n  border-color: #45b649; }\n  .btn-success:hover {\n    color: #fff;\n    background: #3a9a3e linear-gradient(180deg, #58a95b, #3a9a3e) repeat-x;\n    border-color: #37913a; }\n  .btn-success:focus, .btn-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(97, 193, 100, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #45b649;\n    border-color: #45b649;\n    background-image: none; }\n  .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #37913a;\n    background-image: none;\n    border-color: #338836; }\n    .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(97, 193, 100, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background: #00c9ff linear-gradient(180deg, #26d1ff, #00c9ff) repeat-x;\n  border-color: #00c9ff; }\n  .btn-info:hover {\n    color: #fff;\n    background: #00abd9 linear-gradient(180deg, #26b7de, #00abd9) repeat-x;\n    border-color: #00a1cc; }\n  .btn-info:focus, .btn-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(38, 209, 255, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #00c9ff;\n    border-color: #00c9ff;\n    background-image: none; }\n  .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #00a1cc;\n    background-image: none;\n    border-color: #0097bf; }\n    .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(38, 209, 255, 0.5); }\n\n.btn-warning {\n  color: #212529;\n  background: #ffd700 linear-gradient(180deg, #ffdd26, #ffd700) repeat-x;\n  border-color: #ffd700; }\n  .btn-warning:hover {\n    color: #212529;\n    background: #d9b700 linear-gradient(180deg, #dec226, #d9b700) repeat-x;\n    border-color: #ccac00; }\n  .btn-warning:focus, .btn-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(222, 188, 6, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    color: #212529;\n    background-color: #ffd700;\n    border-color: #ffd700;\n    background-image: none; }\n  .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #ccac00;\n    background-image: none;\n    border-color: #bfa100; }\n    .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(222, 188, 6, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background: #f85032 linear-gradient(180deg, #f96a51, #f85032) repeat-x;\n  border-color: #f85032; }\n  .btn-danger:hover {\n    color: #fff;\n    background: #f7300d linear-gradient(180deg, #f84f31, #f7300d) repeat-x;\n    border-color: #ef2b08; }\n  .btn-danger:focus, .btn-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(249, 106, 81, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    color: #fff;\n    background-color: #f85032;\n    border-color: #f85032;\n    background-image: none; }\n  .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #ef2b08;\n    background-image: none;\n    border-color: #e32908; }\n    .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(249, 106, 81, 0.5); }\n\n.btn-light {\n  color: #212529;\n  background: #f8f9fa linear-gradient(180deg, #f9fafb, #f8f9fa) repeat-x;\n  border-color: #f8f9fa; }\n  .btn-light:hover {\n    color: #212529;\n    background: #e2e6ea linear-gradient(180deg, #e6eaed, #e2e6ea) repeat-x;\n    border-color: #dae0e5; }\n  .btn-light:focus, .btn-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5); }\n  .btn-light.disabled, .btn-light:disabled {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n    background-image: none; }\n  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #212529;\n    background-color: #dae0e5;\n    background-image: none;\n    border-color: #d3d9df; }\n    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background: #343a40 linear-gradient(180deg, #52585d, #343a40) repeat-x;\n  border-color: #343a40; }\n  .btn-dark:hover {\n    color: #fff;\n    background: #23272b linear-gradient(180deg, #44474b, #23272b) repeat-x;\n    border-color: #1d2124; }\n  .btn-dark:focus, .btn-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5); }\n  .btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n    background-image: none; }\n  .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    background-image: none;\n    border-color: #171a1d; }\n    .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5); }\n\n.btn-teal {\n  color: #fff;\n  background: #009688 linear-gradient(180deg, #26a69a, #009688) repeat-x;\n  border-color: #009688; }\n  .btn-teal:hover {\n    color: #fff;\n    background: #007065 linear-gradient(180deg, #26857c, #007065) repeat-x;\n    border-color: #00635a; }\n  .btn-teal:focus, .btn-teal.focus {\n    box-shadow: 0 0 0 0.2rem rgba(38, 166, 154, 0.5); }\n  .btn-teal.disabled, .btn-teal:disabled {\n    color: #fff;\n    background-color: #009688;\n    border-color: #009688;\n    background-image: none; }\n  .btn-teal:not(:disabled):not(.disabled):active, .btn-teal:not(:disabled):not(.disabled).active,\n  .show > .btn-teal.dropdown-toggle {\n    color: #fff;\n    background-color: #00635a;\n    background-image: none;\n    border-color: #00564e; }\n    .btn-teal:not(:disabled):not(.disabled):active:focus, .btn-teal:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-teal.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(38, 166, 154, 0.5); }\n\n.btn-indigo {\n  color: #fff;\n  background: #536dfe linear-gradient(180deg, #6d83fe, #536dfe) repeat-x;\n  border-color: #536dfe; }\n  .btn-indigo:hover {\n    color: #fff;\n    background: #2d4dfe linear-gradient(180deg, #4c67fe, #2d4dfe) repeat-x;\n    border-color: #2042fe; }\n  .btn-indigo:focus, .btn-indigo.focus {\n    box-shadow: 0 0 0 0.2rem rgba(109, 131, 254, 0.5); }\n  .btn-indigo.disabled, .btn-indigo:disabled {\n    color: #fff;\n    background-color: #536dfe;\n    border-color: #536dfe;\n    background-image: none; }\n  .btn-indigo:not(:disabled):not(.disabled):active, .btn-indigo:not(:disabled):not(.disabled).active,\n  .show > .btn-indigo.dropdown-toggle {\n    color: #fff;\n    background-color: #2042fe;\n    background-image: none;\n    border-color: #1437fe; }\n    .btn-indigo:not(:disabled):not(.disabled):active:focus, .btn-indigo:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-indigo.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(109, 131, 254, 0.5); }\n\n.btn-orange {\n  color: #212529;\n  background: #ff9800 linear-gradient(180deg, #ffa726, #ff9800) repeat-x;\n  border-color: #ff9800; }\n  .btn-orange:hover {\n    color: #fff;\n    background: #d98100 linear-gradient(180deg, #de9426, #d98100) repeat-x;\n    border-color: #cc7a00; }\n  .btn-orange:focus, .btn-orange.focus {\n    box-shadow: 0 0 0 0.2rem rgba(222, 135, 6, 0.5); }\n  .btn-orange.disabled, .btn-orange:disabled {\n    color: #212529;\n    background-color: #ff9800;\n    border-color: #ff9800;\n    background-image: none; }\n  .btn-orange:not(:disabled):not(.disabled):active, .btn-orange:not(:disabled):not(.disabled).active,\n  .show > .btn-orange.dropdown-toggle {\n    color: #fff;\n    background-color: #cc7a00;\n    background-image: none;\n    border-color: #bf7200; }\n    .btn-orange:not(:disabled):not(.disabled):active:focus, .btn-orange:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-orange.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(222, 135, 6, 0.5); }\n\n.btn-green {\n  color: #fff;\n  background: #4caf50 linear-gradient(180deg, #67bb6a, #4caf50) repeat-x;\n  border-color: #4caf50; }\n  .btn-green:hover {\n    color: #fff;\n    background: #409444 linear-gradient(180deg, #5da460, #409444) repeat-x;\n    border-color: #3d8b40; }\n  .btn-green:focus, .btn-green.focus {\n    box-shadow: 0 0 0 0.2rem rgba(103, 187, 106, 0.5); }\n  .btn-green.disabled, .btn-green:disabled {\n    color: #fff;\n    background-color: #4caf50;\n    border-color: #4caf50;\n    background-image: none; }\n  .btn-green:not(:disabled):not(.disabled):active, .btn-green:not(:disabled):not(.disabled).active,\n  .show > .btn-green.dropdown-toggle {\n    color: #fff;\n    background-color: #3d8b40;\n    background-image: none;\n    border-color: #39833c; }\n    .btn-green:not(:disabled):not(.disabled):active:focus, .btn-green:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-green.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(103, 187, 106, 0.5); }\n\n.btn-red {\n  color: #fff;\n  background: #f44336 linear-gradient(180deg, #f65f54, #f44336) repeat-x;\n  border-color: #f44336; }\n  .btn-red:hover {\n    color: #fff;\n    background: #f22112 linear-gradient(180deg, #f44235, #f22112) repeat-x;\n    border-color: #ea1c0d; }\n  .btn-red:focus, .btn-red.focus {\n    box-shadow: 0 0 0 0.2rem rgba(246, 95, 84, 0.5); }\n  .btn-red.disabled, .btn-red:disabled {\n    color: #fff;\n    background-color: #f44336;\n    border-color: #f44336;\n    background-image: none; }\n  .btn-red:not(:disabled):not(.disabled):active, .btn-red:not(:disabled):not(.disabled).active,\n  .show > .btn-red.dropdown-toggle {\n    color: #fff;\n    background-color: #ea1c0d;\n    background-image: none;\n    border-color: #de1b0c; }\n    .btn-red:not(:disabled):not(.disabled):active:focus, .btn-red:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-red.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(246, 95, 84, 0.5); }\n\n.btn-outline-primary {\n  color: #0212cb;\n  border-color: #0212cb; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #0212cb;\n    border-color: #0212cb; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #0212cb;\n    background-color: transparent; }\n  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0212cb;\n    border-color: #0212cb; }\n    .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.5); }\n\n.btn-outline-secondary {\n  color: #36454f;\n  border-color: #36454f; }\n  .btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #36454f;\n    border-color: #36454f; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(54, 69, 79, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #36454f;\n    background-color: transparent; }\n  .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #36454f;\n    border-color: #36454f; }\n    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(54, 69, 79, 0.5); }\n\n.btn-outline-success {\n  color: #45b649;\n  border-color: #45b649; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #45b649;\n    border-color: #45b649; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(69, 182, 73, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #45b649;\n    background-color: transparent; }\n  .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #45b649;\n    border-color: #45b649; }\n    .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(69, 182, 73, 0.5); }\n\n.btn-outline-info {\n  color: #00c9ff;\n  border-color: #00c9ff; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #00c9ff;\n    border-color: #00c9ff; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 201, 255, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #00c9ff;\n    background-color: transparent; }\n  .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #00c9ff;\n    border-color: #00c9ff; }\n    .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 201, 255, 0.5); }\n\n.btn-outline-warning {\n  color: #ffd700;\n  border-color: #ffd700; }\n  .btn-outline-warning:hover {\n    color: #212529;\n    background-color: #ffd700;\n    border-color: #ffd700; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffd700;\n    background-color: transparent; }\n  .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #ffd700;\n    border-color: #ffd700; }\n    .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.5); }\n\n.btn-outline-danger {\n  color: #f85032;\n  border-color: #f85032; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #f85032;\n    border-color: #f85032; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 80, 50, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #f85032;\n    background-color: transparent; }\n  .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #f85032;\n    border-color: #f85032; }\n    .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 80, 50, 0.5); }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n  .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n    .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n  .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n    .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-outline-teal {\n  color: #009688;\n  border-color: #009688; }\n  .btn-outline-teal:hover {\n    color: #fff;\n    background-color: #009688;\n    border-color: #009688; }\n  .btn-outline-teal:focus, .btn-outline-teal.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 150, 136, 0.5); }\n  .btn-outline-teal.disabled, .btn-outline-teal:disabled {\n    color: #009688;\n    background-color: transparent; }\n  .btn-outline-teal:not(:disabled):not(.disabled):active, .btn-outline-teal:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-teal.dropdown-toggle {\n    color: #fff;\n    background-color: #009688;\n    border-color: #009688; }\n    .btn-outline-teal:not(:disabled):not(.disabled):active:focus, .btn-outline-teal:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-teal.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 150, 136, 0.5); }\n\n.btn-outline-indigo {\n  color: #536dfe;\n  border-color: #536dfe; }\n  .btn-outline-indigo:hover {\n    color: #fff;\n    background-color: #536dfe;\n    border-color: #536dfe; }\n  .btn-outline-indigo:focus, .btn-outline-indigo.focus {\n    box-shadow: 0 0 0 0.2rem rgba(83, 109, 254, 0.5); }\n  .btn-outline-indigo.disabled, .btn-outline-indigo:disabled {\n    color: #536dfe;\n    background-color: transparent; }\n  .btn-outline-indigo:not(:disabled):not(.disabled):active, .btn-outline-indigo:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-indigo.dropdown-toggle {\n    color: #fff;\n    background-color: #536dfe;\n    border-color: #536dfe; }\n    .btn-outline-indigo:not(:disabled):not(.disabled):active:focus, .btn-outline-indigo:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-indigo.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(83, 109, 254, 0.5); }\n\n.btn-outline-orange {\n  color: #ff9800;\n  border-color: #ff9800; }\n  .btn-outline-orange:hover {\n    color: #212529;\n    background-color: #ff9800;\n    border-color: #ff9800; }\n  .btn-outline-orange:focus, .btn-outline-orange.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5); }\n  .btn-outline-orange.disabled, .btn-outline-orange:disabled {\n    color: #ff9800;\n    background-color: transparent; }\n  .btn-outline-orange:not(:disabled):not(.disabled):active, .btn-outline-orange:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-orange.dropdown-toggle {\n    color: #212529;\n    background-color: #ff9800;\n    border-color: #ff9800; }\n    .btn-outline-orange:not(:disabled):not(.disabled):active:focus, .btn-outline-orange:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-orange.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5); }\n\n.btn-outline-green {\n  color: #4caf50;\n  border-color: #4caf50; }\n  .btn-outline-green:hover {\n    color: #fff;\n    background-color: #4caf50;\n    border-color: #4caf50; }\n  .btn-outline-green:focus, .btn-outline-green.focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5); }\n  .btn-outline-green.disabled, .btn-outline-green:disabled {\n    color: #4caf50;\n    background-color: transparent; }\n  .btn-outline-green:not(:disabled):not(.disabled):active, .btn-outline-green:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-green.dropdown-toggle {\n    color: #fff;\n    background-color: #4caf50;\n    border-color: #4caf50; }\n    .btn-outline-green:not(:disabled):not(.disabled):active:focus, .btn-outline-green:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-green.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5); }\n\n.btn-outline-red {\n  color: #f44336;\n  border-color: #f44336; }\n  .btn-outline-red:hover {\n    color: #fff;\n    background-color: #f44336;\n    border-color: #f44336; }\n  .btn-outline-red:focus, .btn-outline-red.focus {\n    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5); }\n  .btn-outline-red.disabled, .btn-outline-red:disabled {\n    color: #f44336;\n    background-color: transparent; }\n  .btn-outline-red:not(:disabled):not(.disabled):active, .btn-outline-red:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-red.dropdown-toggle {\n    color: #fff;\n    background-color: #f44336;\n    border-color: #f44336; }\n    .btn-outline-red:not(:disabled):not(.disabled):active:focus, .btn-outline-red:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-red.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #0212cb;\n  text-decoration: none; }\n  .btn-link:hover {\n    color: #010b7f;\n    text-decoration: underline; }\n  .btn-link:focus, .btn-link.focus {\n    text-decoration: underline;\n    box-shadow: none; }\n  .btn-link:disabled, .btn-link.disabled {\n    color: #6c757d;\n    pointer-events: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n  .btn-block + .btn-block {\n    margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  transition: opacity 0.15s linear; }\n  @media (prefers-reduced-motion: reduce) {\n    .fade {\n      transition: none; } }\n  .fade:not(.show) {\n    opacity: 0; }\n\n.collapse:not(.show) {\n  display: none; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .collapsing {\n      transition: none; } }\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative; }\n\n.dropdown-toggle {\n  white-space: nowrap; }\n  .dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent; }\n  .dropdown-toggle:empty::after {\n    margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto; } }\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n\n.dropleft .dropdown-toggle::after {\n  display: none; }\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n\n.dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\n  right: auto;\n  bottom: auto; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n  .dropdown-item:hover, .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background: #f8f9fa linear-gradient(180deg, #f9fafb, #f8f9fa) repeat-x; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background: #0212cb linear-gradient(180deg, #2836d3, #0212cb) repeat-x; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: transparent;\n    background-image: none; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    -webkit-flex: 1 1 auto;\n            flex: 1 1 auto; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n\n.btn-toolbar {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px; }\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n  .dropdown-toggle-split::after,\n  .dropup .dropdown-toggle-split::after,\n  .dropright .dropdown-toggle-split::after {\n    margin-left: 0; }\n  .dropleft .dropdown-toggle-split::before {\n    margin-right: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n  -webkit-justify-content: center;\n          justify-content: center; }\n  .btn-group-vertical > .btn,\n  .btn-group-vertical > .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) {\n    margin-top: -1px; }\n  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n  .btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-align-items: stretch;\n          align-items: stretch;\n  width: 100%; }\n  .input-group > .form-control,\n  .input-group > .form-control-plaintext,\n  .input-group > .custom-select,\n  .input-group > .custom-file {\n    position: relative;\n    -webkit-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n    .input-group > .form-control + .form-control,\n    .input-group > .form-control + .custom-select,\n    .input-group > .form-control + .custom-file,\n    .input-group > .form-control-plaintext + .form-control,\n    .input-group > .form-control-plaintext + .custom-select,\n    .input-group > .form-control-plaintext + .custom-file,\n    .input-group > .custom-select + .form-control,\n    .input-group > .custom-select + .custom-select,\n    .input-group > .custom-select + .custom-file,\n    .input-group > .custom-file + .form-control,\n    .input-group > .custom-file + .custom-select,\n    .input-group > .custom-file + .custom-file {\n      margin-left: -1px; }\n  .input-group > .form-control:focus,\n  .input-group > .custom-select:focus,\n  .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n    z-index: 3; }\n  .input-group > .custom-file .custom-file-input:focus {\n    z-index: 4; }\n  .input-group > .form-control:not(:last-child),\n  .input-group > .custom-select:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .input-group > .form-control:not(:first-child),\n  .input-group > .custom-select:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .input-group > .custom-file {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center; }\n    .input-group > .custom-file:not(:last-child) .custom-file-label,\n    .input-group > .custom-file:not(:last-child) .custom-file-label::after {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n    .input-group > .custom-file:not(:first-child) .custom-file-label {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n\n.input-group-prepend,\n.input-group-append {\n  display: -webkit-flex;\n  display: flex; }\n  .input-group-prepend .btn,\n  .input-group-append .btn {\n    position: relative;\n    z-index: 2; }\n    .input-group-prepend .btn:focus,\n    .input-group-append .btn:focus {\n      z-index: 3; }\n  .input-group-prepend .btn + .btn,\n  .input-group-prepend .btn + .input-group-text,\n  .input-group-prepend .input-group-text + .input-group-text,\n  .input-group-prepend .input-group-text + .btn,\n  .input-group-append .btn + .btn,\n  .input-group-append .btn + .input-group-text,\n  .input-group-append .input-group-text + .input-group-text,\n  .input-group-append .input-group-text + .btn {\n    margin-left: -1px; }\n\n.input-group-prepend {\n  margin-right: -1px; }\n\n.input-group-append {\n  margin-left: -1px; }\n\n.input-group-text {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .input-group-text input[type=\"radio\"],\n  .input-group-text input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px); }\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px); }\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem; }\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem; }\n\n.custom-control-inline {\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    border-color: #0212cb;\n    background: #0212cb linear-gradient(180deg, #2836d3, #0212cb) repeat-x; }\n  .custom-control-input:focus ~ .custom-control-label::before {\n    box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n  .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n    border-color: #4f5dfd; }\n  .custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #828cfe;\n    border-color: #828cfe; }\n  .custom-control-input:disabled ~ .custom-control-label {\n    color: #6c757d; }\n    .custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e9ecef; }\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top; }\n  .custom-control-label::before {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    background-color: #fff;\n    border: #adb5bd solid 1px; }\n  .custom-control-label::after {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background: no-repeat 50% / 50% 50%; }\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #0212cb;\n  background: #0212cb linear-gradient(180deg, #2836d3, #0212cb) repeat-x; }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\"); }\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(2, 18, 203, 0.5); }\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(2, 18, 203, 0.5); }\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\"); }\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(2, 18, 203, 0.5); }\n\n.custom-switch {\n  padding-left: 2.25rem; }\n  .custom-switch .custom-control-label::before {\n    left: -2.25rem;\n    width: 1.75rem;\n    pointer-events: all;\n    border-radius: 0.5rem; }\n  .custom-switch .custom-control-label::after {\n    top: calc(0.25rem + 2px);\n    left: calc(-2.25rem + 2px);\n    width: calc(1rem - 4px);\n    height: calc(1rem - 4px);\n    background-color: #adb5bd;\n    border-radius: 0.5rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-switch .custom-control-label::after {\n        transition: none; } }\n  .custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n    background-color: #fff;\n    -webkit-transform: translateX(0.75rem);\n            transform: translateX(0.75rem); }\n  .custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n    background-color: rgba(2, 18, 203, 0.5); }\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .custom-select:focus {\n    border-color: #4f5dfd;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n    .custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n  .custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n  .custom-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n  .custom-select::-ms-expand {\n    display: none; }\n\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem; }\n\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  opacity: 0; }\n  .custom-file-input:focus ~ .custom-file-label {\n    border-color: #4f5dfd;\n    box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n  .custom-file-input:disabled ~ .custom-file-label {\n    background-color: #e9ecef; }\n  .custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n  .custom-file-input ~ .custom-file-label[data-browse]::after {\n    content: attr(data-browse); }\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: calc(1.5em + 0.75rem);\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    content: \"Browse\";\n    background: #e9ecef linear-gradient(180deg, #eceff1, #e9ecef) repeat-x;\n    border-left: inherit;\n    border-radius: 0 0.25rem 0.25rem 0; }\n\n.custom-range {\n  width: 100%;\n  height: calc(1rem + 0.4rem);\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .custom-range:focus {\n    outline: none; }\n    .custom-range:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n    .custom-range:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n    .custom-range:focus::-ms-thumb {\n      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n  .custom-range::-moz-focus-outer {\n    border: 0; }\n  .custom-range::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background: #0212cb linear-gradient(180deg, #2836d3, #0212cb) repeat-x;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    -webkit-appearance: none;\n            appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-webkit-slider-thumb {\n        transition: none; } }\n    .custom-range::-webkit-slider-thumb:active {\n      background: #828cfe linear-gradient(180deg, #959dfe, #828cfe) repeat-x; }\n  .custom-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .custom-range::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background: #0212cb linear-gradient(180deg, #2836d3, #0212cb) repeat-x;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    -moz-appearance: none;\n         appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-moz-range-thumb {\n        transition: none; } }\n    .custom-range::-moz-range-thumb:active {\n      background: #828cfe linear-gradient(180deg, #959dfe, #828cfe) repeat-x; }\n  .custom-range::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .custom-range::-ms-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 0;\n    margin-right: 0.2rem;\n    margin-left: 0.2rem;\n    background: #0212cb linear-gradient(180deg, #2836d3, #0212cb) repeat-x;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-ms-thumb {\n        transition: none; } }\n    .custom-range::-ms-thumb:active {\n      background: #828cfe linear-gradient(180deg, #959dfe, #828cfe) repeat-x; }\n  .custom-range::-ms-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: 0.5rem; }\n  .custom-range::-ms-fill-lower {\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range::-ms-fill-upper {\n    margin-right: 15px;\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range:disabled::-webkit-slider-thumb {\n    background-color: #adb5bd; }\n  .custom-range:disabled::-webkit-slider-runnable-track {\n    cursor: default; }\n  .custom-range:disabled::-moz-range-thumb {\n    background-color: #adb5bd; }\n  .custom-range:disabled::-moz-range-track {\n    cursor: default; }\n  .custom-range:disabled::-ms-thumb {\n    background-color: #adb5bd; }\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .custom-control-label::before,\n    .custom-file-label,\n    .custom-select {\n      transition: none; } }\n\n.nav {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:hover, .nav-link:focus {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: default; }\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n  .nav-tabs .nav-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n    .nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #0212cb; }\n\n.nav-fill .nav-item {\n  -webkit-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  -webkit-flex-basis: 0;\n          flex-basis: 0;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 0.5rem 1rem; }\n  .navbar > .container,\n  .navbar > .container-fluid {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-justify-content: space-between;\n            justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  -webkit-flex-basis: 100%;\n          flex-basis: 100%;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  -webkit-align-items: center;\n          align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:hover, .navbar-toggler:focus {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      -webkit-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      -webkit-flex-wrap: nowrap;\n              flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: -webkit-flex !important;\n      display: flex !important;\n      -webkit-flex-basis: auto;\n              flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      -webkit-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      -webkit-flex-wrap: nowrap;\n              flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: -webkit-flex !important;\n      display: flex !important;\n      -webkit-flex-basis: auto;\n              flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      -webkit-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      -webkit-flex-wrap: nowrap;\n              flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: -webkit-flex !important;\n      display: flex !important;\n      -webkit-flex-basis: auto;\n              flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      -webkit-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      -webkit-flex-wrap: nowrap;\n              flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: -webkit-flex !important;\n      display: flex !important;\n      -webkit-flex-basis: auto;\n              flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n\n.navbar-expand {\n  -webkit-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    -webkit-flex-direction: row;\n            flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    -webkit-flex-wrap: nowrap;\n            flex-wrap: nowrap; }\n  .navbar-expand .navbar-collapse {\n    display: -webkit-flex !important;\n    display: flex !important;\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n    .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-text a {\n    color: #fff; }\n    .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n      color: #fff; }\n\n.card {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n  .card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n  .card > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .card > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.card-body {\n  -webkit-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n  .card-header + .list-group .list-group-item:first-child {\n    border-top: 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px); }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n\n.card-deck {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n  .card-deck .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-deck {\n      -webkit-flex-flow: row wrap;\n              flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck .card {\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex: 1 0;\n                flex: 1 0;\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n\n.card-group {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n  .card-group > .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-group {\n      -webkit-flex-flow: row wrap;\n              flex-flow: row wrap; }\n      .card-group > .card {\n        -webkit-flex: 1 0;\n                flex: 1 0;\n        margin-bottom: 0; }\n        .card-group > .card + .card {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group > .card:not(:last-child) {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group > .card:not(:last-child) .card-img-top,\n          .card-group > .card:not(:last-child) .card-header {\n            border-top-right-radius: 0; }\n          .card-group > .card:not(:last-child) .card-img-bottom,\n          .card-group > .card:not(:last-child) .card-footer {\n            border-bottom-right-radius: 0; }\n        .card-group > .card:not(:first-child) {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group > .card:not(:first-child) .card-img-top,\n          .card-group > .card:not(:first-child) .card-header {\n            border-top-left-radius: 0; }\n          .card-group > .card:not(:first-child) .card-img-bottom,\n          .card-group > .card:not(:first-child) .card-footer {\n            border-bottom-left-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3;\n    grid-column-gap: 1.25rem;\n    -webkit-column-gap: 1.25rem;\n            column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.accordion > .card {\n  overflow: hidden; }\n  .accordion > .card:not(:first-of-type) .card-header:first-child {\n    border-radius: 0; }\n  .accordion > .card:not(:first-of-type):not(:last-of-type) {\n    border-bottom: 0;\n    border-radius: 0; }\n  .accordion > .card:first-of-type {\n    border-bottom: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .accordion > .card:last-of-type {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n  .accordion > .card .card-header {\n    margin-bottom: -1px; }\n\n.breadcrumb {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem; }\n  .breadcrumb-item + .breadcrumb-item::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    color: #6c757d;\n    content: \"/\"; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active {\n  color: #6c757d; }\n\n.pagination {\n  display: -webkit-flex;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #0212cb;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n  .page-link:hover {\n    z-index: 2;\n    color: #010b7f;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n  .page-link:focus {\n    z-index: 2;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.25); }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #0212cb;\n  border-color: #0212cb; }\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .badge {\n      transition: none; } }\n  a.badge:hover, a.badge:focus {\n    text-decoration: none; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #0212cb; }\n  a.badge-primary:hover, a.badge-primary:focus {\n    color: #fff;\n    background-color: #020e98; }\n  a.badge-primary:focus, a.badge-primary.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(2, 18, 203, 0.5); }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #36454f; }\n  a.badge-secondary:hover, a.badge-secondary:focus {\n    color: #fff;\n    background-color: #212b31; }\n  a.badge-secondary:focus, a.badge-secondary.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(54, 69, 79, 0.5); }\n\n.badge-success {\n  color: #fff;\n  background-color: #45b649; }\n  a.badge-success:hover, a.badge-success:focus {\n    color: #fff;\n    background-color: #37913a; }\n  a.badge-success:focus, a.badge-success.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(69, 182, 73, 0.5); }\n\n.badge-info {\n  color: #fff;\n  background-color: #00c9ff; }\n  a.badge-info:hover, a.badge-info:focus {\n    color: #fff;\n    background-color: #00a1cc; }\n  a.badge-info:focus, a.badge-info.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 201, 255, 0.5); }\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffd700; }\n  a.badge-warning:hover, a.badge-warning:focus {\n    color: #212529;\n    background-color: #ccac00; }\n  a.badge-warning:focus, a.badge-warning.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.5); }\n\n.badge-danger {\n  color: #fff;\n  background-color: #f85032; }\n  a.badge-danger:hover, a.badge-danger:focus {\n    color: #fff;\n    background-color: #ef2b08; }\n  a.badge-danger:focus, a.badge-danger.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(248, 80, 50, 0.5); }\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa; }\n  a.badge-light:hover, a.badge-light:focus {\n    color: #212529;\n    background-color: #dae0e5; }\n  a.badge-light:focus, a.badge-light.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n  a.badge-dark:hover, a.badge-dark:focus {\n    color: #fff;\n    background-color: #1d2124; }\n  a.badge-dark:focus, a.badge-dark.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.badge-teal {\n  color: #fff;\n  background-color: #009688; }\n  a.badge-teal:hover, a.badge-teal:focus {\n    color: #fff;\n    background-color: #00635a; }\n  a.badge-teal:focus, a.badge-teal.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 150, 136, 0.5); }\n\n.badge-indigo {\n  color: #fff;\n  background-color: #536dfe; }\n  a.badge-indigo:hover, a.badge-indigo:focus {\n    color: #fff;\n    background-color: #2042fe; }\n  a.badge-indigo:focus, a.badge-indigo.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(83, 109, 254, 0.5); }\n\n.badge-orange {\n  color: #212529;\n  background-color: #ff9800; }\n  a.badge-orange:hover, a.badge-orange:focus {\n    color: #212529;\n    background-color: #cc7a00; }\n  a.badge-orange:focus, a.badge-orange.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.5); }\n\n.badge-green {\n  color: #fff;\n  background-color: #4caf50; }\n  a.badge-green:hover, a.badge-green:focus {\n    color: #fff;\n    background-color: #3d8b40; }\n  a.badge-green:focus, a.badge-green.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5); }\n\n.badge-red {\n  color: #fff;\n  background-color: #f44336; }\n  a.badge-red:hover, a.badge-red:focus {\n    color: #fff;\n    background-color: #ea1c0d; }\n  a.badge-red:focus, a.badge-red.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5); }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n  @media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible {\n  padding-right: 4rem; }\n  .alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n\n.alert-primary {\n  color: #01096a;\n  background: #ccd0f5 linear-gradient(180deg, #d4d7f7, #ccd0f5) repeat-x;\n  border-color: #b8bdf0; }\n  .alert-primary hr {\n    border-top-color: #a3a9ec; }\n  .alert-primary .alert-link {\n    color: #010537; }\n\n.alert-secondary {\n  color: #1c2429;\n  background: #d7dadc linear-gradient(180deg, #dde0e1, #d7dadc) repeat-x;\n  border-color: #c7cbce; }\n  .alert-secondary hr {\n    border-top-color: #b9bec2; }\n  .alert-secondary .alert-link {\n    color: #07090b; }\n\n.alert-success {\n  color: #245f26;\n  background: #daf0db linear-gradient(180deg, #e0f2e0, #daf0db) repeat-x;\n  border-color: #cbebcc; }\n  .alert-success hr {\n    border-top-color: #b9e4ba; }\n  .alert-success .alert-link {\n    color: #163a17; }\n\n.alert-info {\n  color: #006985;\n  background: #ccf4ff linear-gradient(180deg, #d4f6ff, #ccf4ff) repeat-x;\n  border-color: #b8f0ff; }\n  .alert-info hr {\n    border-top-color: #9febff; }\n  .alert-info .alert-link {\n    color: #004152; }\n\n.alert-warning {\n  color: #857000;\n  background: #fff7cc linear-gradient(180deg, #fff8d4, #fff7cc) repeat-x;\n  border-color: #fff4b8; }\n  .alert-warning hr {\n    border-top-color: #fff09f; }\n  .alert-warning .alert-link {\n    color: #524500; }\n\n.alert-danger {\n  color: #812a1a;\n  background: #fedcd6 linear-gradient(180deg, #fee1dc, #fedcd6) repeat-x;\n  border-color: #fdcec6; }\n  .alert-danger hr {\n    border-top-color: #fcb9ad; }\n  .alert-danger .alert-link {\n    color: #571c11; }\n\n.alert-light {\n  color: #818182;\n  background: #fefefe linear-gradient(180deg, #fefefe, #fefefe) repeat-x;\n  border-color: #fdfdfe; }\n  .alert-light hr {\n    border-top-color: #ececf6; }\n  .alert-light .alert-link {\n    color: #686868; }\n\n.alert-dark {\n  color: #1b1e21;\n  background: #d6d8d9 linear-gradient(180deg, #dcdedf, #d6d8d9) repeat-x;\n  border-color: #c6c8ca; }\n  .alert-dark hr {\n    border-top-color: #b9bbbe; }\n  .alert-dark .alert-link {\n    color: #040505; }\n\n.alert-teal {\n  color: #004e47;\n  background: #cceae7 linear-gradient(180deg, #d4edeb, #cceae7) repeat-x;\n  border-color: #b8e2de; }\n  .alert-teal hr {\n    border-top-color: #a6dbd6; }\n  .alert-teal .alert-link {\n    color: #001b19; }\n\n.alert-indigo {\n  color: #2b3984;\n  background: #dde2ff linear-gradient(180deg, #e2e6ff, #dde2ff) repeat-x;\n  border-color: #cfd6ff; }\n  .alert-indigo hr {\n    border-top-color: #b6c0ff; }\n  .alert-indigo .alert-link {\n    color: #1e285e; }\n\n.alert-orange {\n  color: #854f00;\n  background: #ffeacc linear-gradient(180deg, #ffedd4, #ffeacc) repeat-x;\n  border-color: #ffe2b8; }\n  .alert-orange hr {\n    border-top-color: #ffd89f; }\n  .alert-orange .alert-link {\n    color: #523100; }\n\n.alert-green {\n  color: #285b2a;\n  background: #dbefdc linear-gradient(180deg, #e0f1e1, #dbefdc) repeat-x;\n  border-color: #cde9ce; }\n  .alert-green hr {\n    border-top-color: #bbe1bd; }\n  .alert-green .alert-link {\n    color: #18381a; }\n\n.alert-red {\n  color: #7f231c;\n  background: #fdd9d7 linear-gradient(180deg, #fddfdd, #fdd9d7) repeat-x;\n  border-color: #fccac7; }\n  .alert-red hr {\n    border-top-color: #fbb3af; }\n  .alert-red .alert-link {\n    color: #551713; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: -webkit-flex;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: center;\n          justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #0212cb;\n  transition: width 0.6s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .progress-bar {\n      transition: none; } }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite; }\n  @media (prefers-reduced-motion: reduce) {\n    .progress-bar-animated {\n      -webkit-animation: none;\n              animation: none; } }\n\n.media {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: flex-start;\n          align-items: flex-start; }\n\n.media-body {\n  -webkit-flex: 1 1;\n          flex: 1 1; }\n\n.list-group {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:hover, .list-group-item-action:focus {\n    z-index: 1;\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #0212cb;\n    border-color: #0212cb; }\n\n.list-group-horizontal {\n  -webkit-flex-direction: row;\n          flex-direction: row; }\n  .list-group-horizontal .list-group-item {\n    margin-right: -1px;\n    margin-bottom: 0; }\n    .list-group-horizontal .list-group-item:first-child {\n      border-top-left-radius: 0.25rem;\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal .list-group-item:last-child {\n      margin-right: 0;\n      border-top-right-radius: 0.25rem;\n      border-bottom-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    -webkit-flex-direction: row;\n            flex-direction: row; }\n    .list-group-horizontal-sm .list-group-item {\n      margin-right: -1px;\n      margin-bottom: 0; }\n      .list-group-horizontal-sm .list-group-item:first-child {\n        border-top-left-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        border-top-right-radius: 0; }\n      .list-group-horizontal-sm .list-group-item:last-child {\n        margin-right: 0;\n        border-top-right-radius: 0.25rem;\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0; } }\n\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    -webkit-flex-direction: row;\n            flex-direction: row; }\n    .list-group-horizontal-md .list-group-item {\n      margin-right: -1px;\n      margin-bottom: 0; }\n      .list-group-horizontal-md .list-group-item:first-child {\n        border-top-left-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        border-top-right-radius: 0; }\n      .list-group-horizontal-md .list-group-item:last-child {\n        margin-right: 0;\n        border-top-right-radius: 0.25rem;\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0; } }\n\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    -webkit-flex-direction: row;\n            flex-direction: row; }\n    .list-group-horizontal-lg .list-group-item {\n      margin-right: -1px;\n      margin-bottom: 0; }\n      .list-group-horizontal-lg .list-group-item:first-child {\n        border-top-left-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        border-top-right-radius: 0; }\n      .list-group-horizontal-lg .list-group-item:last-child {\n        margin-right: 0;\n        border-top-right-radius: 0.25rem;\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0; } }\n\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    -webkit-flex-direction: row;\n            flex-direction: row; }\n    .list-group-horizontal-xl .list-group-item {\n      margin-right: -1px;\n      margin-bottom: 0; }\n      .list-group-horizontal-xl .list-group-item:first-child {\n        border-top-left-radius: 0.25rem;\n        border-bottom-left-radius: 0.25rem;\n        border-top-right-radius: 0; }\n      .list-group-horizontal-xl .list-group-item:last-child {\n        margin-right: 0;\n        border-top-right-radius: 0.25rem;\n        border-bottom-right-radius: 0.25rem;\n        border-bottom-left-radius: 0; } }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n  .list-group-flush .list-group-item:last-child {\n    margin-bottom: -1px; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #01096a;\n  background-color: #b8bdf0; }\n  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #01096a;\n    background-color: #a3a9ec; }\n  .list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #01096a;\n    border-color: #01096a; }\n\n.list-group-item-secondary {\n  color: #1c2429;\n  background-color: #c7cbce; }\n  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #1c2429;\n    background-color: #b9bec2; }\n  .list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #1c2429;\n    border-color: #1c2429; }\n\n.list-group-item-success {\n  color: #245f26;\n  background-color: #cbebcc; }\n  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #245f26;\n    background-color: #b9e4ba; }\n  .list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #245f26;\n    border-color: #245f26; }\n\n.list-group-item-info {\n  color: #006985;\n  background-color: #b8f0ff; }\n  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #006985;\n    background-color: #9febff; }\n  .list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #006985;\n    border-color: #006985; }\n\n.list-group-item-warning {\n  color: #857000;\n  background-color: #fff4b8; }\n  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #857000;\n    background-color: #fff09f; }\n  .list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #857000;\n    border-color: #857000; }\n\n.list-group-item-danger {\n  color: #812a1a;\n  background-color: #fdcec6; }\n  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #812a1a;\n    background-color: #fcb9ad; }\n  .list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #812a1a;\n    border-color: #812a1a; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #818182;\n    background-color: #ececf6; }\n  .list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n  .list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n\n.list-group-item-teal {\n  color: #004e47;\n  background-color: #b8e2de; }\n  .list-group-item-teal.list-group-item-action:hover, .list-group-item-teal.list-group-item-action:focus {\n    color: #004e47;\n    background-color: #a6dbd6; }\n  .list-group-item-teal.list-group-item-action.active {\n    color: #fff;\n    background-color: #004e47;\n    border-color: #004e47; }\n\n.list-group-item-indigo {\n  color: #2b3984;\n  background-color: #cfd6ff; }\n  .list-group-item-indigo.list-group-item-action:hover, .list-group-item-indigo.list-group-item-action:focus {\n    color: #2b3984;\n    background-color: #b6c0ff; }\n  .list-group-item-indigo.list-group-item-action.active {\n    color: #fff;\n    background-color: #2b3984;\n    border-color: #2b3984; }\n\n.list-group-item-orange {\n  color: #854f00;\n  background-color: #ffe2b8; }\n  .list-group-item-orange.list-group-item-action:hover, .list-group-item-orange.list-group-item-action:focus {\n    color: #854f00;\n    background-color: #ffd89f; }\n  .list-group-item-orange.list-group-item-action.active {\n    color: #fff;\n    background-color: #854f00;\n    border-color: #854f00; }\n\n.list-group-item-green {\n  color: #285b2a;\n  background-color: #cde9ce; }\n  .list-group-item-green.list-group-item-action:hover, .list-group-item-green.list-group-item-action:focus {\n    color: #285b2a;\n    background-color: #bbe1bd; }\n  .list-group-item-green.list-group-item-action.active {\n    color: #fff;\n    background-color: #285b2a;\n    border-color: #285b2a; }\n\n.list-group-item-red {\n  color: #7f231c;\n  background-color: #fccac7; }\n  .list-group-item-red.list-group-item-action:hover, .list-group-item-red.list-group-item-action:focus {\n    color: #7f231c;\n    background-color: #fbb3af; }\n  .list-group-item-red.list-group-item-action.active {\n    color: #fff;\n    background-color: #7f231c;\n    border-color: #7f231c; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n  .close:hover {\n    color: #000;\n    text-decoration: none; }\n  .close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n    opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n\na.close.disabled {\n  pointer-events: none; }\n\n.toast {\n  max-width: 350px;\n  overflow: hidden;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  opacity: 0;\n  border-radius: 0.25rem; }\n  .toast:not(:last-child) {\n    margin-bottom: 0.75rem; }\n  .toast.showing {\n    opacity: 1; }\n  .toast.show {\n    display: block;\n    opacity: 1; }\n  .toast.hide {\n    display: none; }\n\n.toast-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05); }\n\n.toast-body {\n  padding: 0.75rem; }\n\n.modal-open {\n  overflow: hidden; }\n  .modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n  .modal.fade .modal-dialog {\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n    -webkit-transform: translate(0, -50px);\n            transform: translate(0, -50px); }\n    @media (prefers-reduced-motion: reduce) {\n      .modal.fade .modal-dialog {\n        transition: none; } }\n  .modal.show .modal-dialog {\n    -webkit-transform: none;\n            transform: none; }\n\n.modal-dialog-scrollable {\n  display: -webkit-flex;\n  display: flex;\n  max-height: calc(100% - 1rem); }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 1rem);\n    overflow: hidden; }\n  .modal-dialog-scrollable .modal-header,\n  .modal-dialog-scrollable .modal-footer {\n    -webkit-flex-shrink: 0;\n            flex-shrink: 0; }\n  .modal-dialog-scrollable .modal-body {\n    overflow-y: auto; }\n\n.modal-dialog-centered {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  min-height: calc(100% - 1rem); }\n  .modal-dialog-centered::before {\n    display: block;\n    height: calc(100vh - 1rem);\n    content: \"\"; }\n  .modal-dialog-centered.modal-dialog-scrollable {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    height: 100%; }\n    .modal-dialog-centered.modal-dialog-scrollable .modal-content {\n      max-height: none; }\n    .modal-dialog-centered.modal-dialog-scrollable::before {\n      content: none; }\n\n.modal-content {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n  .modal-header .close {\n    padding: 1rem 1rem;\n    margin: -1rem -1rem -1rem auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  -webkit-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1rem; }\n\n.modal-footer {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n  .modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n  .modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem); }\n    .modal-dialog-scrollable .modal-content {\n      max-height: calc(100vh - 3.5rem); }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem); }\n    .modal-dialog-centered::before {\n      height: calc(100vh - 3.5rem); }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px; } }\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n    .tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n    .popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem; }\n  .bs-popover-top > .arrow, .bs-popover-auto[x-placement^=\"top\"] > .arrow {\n    bottom: calc((0.5rem + 1px) * -1); }\n    .bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=\"top\"] > .arrow::before {\n      bottom: 0;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=\"top\"] > .arrow::after {\n      bottom: 1px;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: #fff; }\n\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem; }\n  .bs-popover-right > .arrow, .bs-popover-auto[x-placement^=\"right\"] > .arrow {\n    left: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n    .bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=\"right\"] > .arrow::before {\n      left: 0;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=\"right\"] > .arrow::after {\n      left: 1px;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: #fff; }\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem; }\n  .bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow {\n    top: calc((0.5rem + 1px) * -1); }\n    .bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::before {\n      top: 0;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::after {\n      top: 1px;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: #fff; }\n  .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f7f7f7; }\n\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem; }\n  .bs-popover-left > .arrow, .bs-popover-auto[x-placement^=\"left\"] > .arrow {\n    right: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n    .bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=\"left\"] > .arrow::before {\n      right: 0;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n    .bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=\"left\"] > .arrow::after {\n      right: 1px;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel.pointer-event {\n  touch-action: pan-y; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .carousel-inner::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-item {\n      transition: none; } }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  -webkit-transform: none;\n          transform: none; }\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1; }\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: 0s 0.6s opacity; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-fade .active.carousel-item-left,\n    .carousel-fade .active.carousel-item-right {\n      transition: none; } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .carousel-control-prev,\n    .carousel-control-next {\n      transition: none; } }\n  .carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: 0.9; }\n\n.carousel-control-prev {\n  left: 0;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.001)); }\n\n.carousel-control-next {\n  right: 0;\n  background: linear-gradient(270deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.001)); }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50% / 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    box-sizing: content-box;\n    -webkit-flex: 0 1 auto;\n            flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: #fff;\n    background-clip: padding-box;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    opacity: .5;\n    transition: opacity 0.6s ease; }\n    @media (prefers-reduced-motion: reduce) {\n      .carousel-indicators li {\n        transition: none; } }\n  .carousel-indicators .active {\n    opacity: 1; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n@-webkit-keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: spinner-border .75s linear infinite;\n          animation: spinner-border .75s linear infinite; }\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em; }\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    opacity: 1; } }\n\n@keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  50% {\n    opacity: 1; } }\n\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: spinner-grow .75s linear infinite;\n          animation: spinner-grow .75s linear infinite; }\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #0212cb !important; }\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #020e98 !important; }\n\n.bg-secondary {\n  background-color: #36454f !important; }\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #212b31 !important; }\n\n.bg-success {\n  background-color: #45b649 !important; }\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #37913a !important; }\n\n.bg-info {\n  background-color: #00c9ff !important; }\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #00a1cc !important; }\n\n.bg-warning {\n  background-color: #ffd700 !important; }\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #ccac00 !important; }\n\n.bg-danger {\n  background-color: #f85032 !important; }\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #ef2b08 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important; }\n\n.bg-teal {\n  background-color: #009688 !important; }\n\na.bg-teal:hover, a.bg-teal:focus,\nbutton.bg-teal:hover,\nbutton.bg-teal:focus {\n  background-color: #00635a !important; }\n\n.bg-indigo {\n  background-color: #536dfe !important; }\n\na.bg-indigo:hover, a.bg-indigo:focus,\nbutton.bg-indigo:hover,\nbutton.bg-indigo:focus {\n  background-color: #2042fe !important; }\n\n.bg-orange {\n  background-color: #ff9800 !important; }\n\na.bg-orange:hover, a.bg-orange:focus,\nbutton.bg-orange:hover,\nbutton.bg-orange:focus {\n  background-color: #cc7a00 !important; }\n\n.bg-green {\n  background-color: #4caf50 !important; }\n\na.bg-green:hover, a.bg-green:focus,\nbutton.bg-green:hover,\nbutton.bg-green:focus {\n  background-color: #3d8b40 !important; }\n\n.bg-red {\n  background-color: #f44336 !important; }\n\na.bg-red:hover, a.bg-red:focus,\nbutton.bg-red:hover,\nbutton.bg-red:focus {\n  background-color: #ea1c0d !important; }\n\n.bg-gradient-primary {\n  background: #0212cb linear-gradient(180deg, #2836d3, #0212cb) repeat-x !important; }\n\n.bg-gradient-secondary {\n  background: #36454f linear-gradient(180deg, #546169, #36454f) repeat-x !important; }\n\n.bg-gradient-success {\n  background: #45b649 linear-gradient(180deg, #61c164, #45b649) repeat-x !important; }\n\n.bg-gradient-info {\n  background: #00c9ff linear-gradient(180deg, #26d1ff, #00c9ff) repeat-x !important; }\n\n.bg-gradient-warning {\n  background: #ffd700 linear-gradient(180deg, #ffdd26, #ffd700) repeat-x !important; }\n\n.bg-gradient-danger {\n  background: #f85032 linear-gradient(180deg, #f96a51, #f85032) repeat-x !important; }\n\n.bg-gradient-light {\n  background: #f8f9fa linear-gradient(180deg, #f9fafb, #f8f9fa) repeat-x !important; }\n\n.bg-gradient-dark {\n  background: #343a40 linear-gradient(180deg, #52585d, #343a40) repeat-x !important; }\n\n.bg-gradient-teal {\n  background: #009688 linear-gradient(180deg, #26a69a, #009688) repeat-x !important; }\n\n.bg-gradient-indigo {\n  background: #536dfe linear-gradient(180deg, #6d83fe, #536dfe) repeat-x !important; }\n\n.bg-gradient-orange {\n  background: #ff9800 linear-gradient(180deg, #ffa726, #ff9800) repeat-x !important; }\n\n.bg-gradient-green {\n  background: #4caf50 linear-gradient(180deg, #67bb6a, #4caf50) repeat-x !important; }\n\n.bg-gradient-red {\n  background: #f44336 linear-gradient(180deg, #f65f54, #f44336) repeat-x !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #dee2e6 !important; }\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important; }\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #0212cb !important; }\n\n.border-secondary {\n  border-color: #36454f !important; }\n\n.border-success {\n  border-color: #45b649 !important; }\n\n.border-info {\n  border-color: #00c9ff !important; }\n\n.border-warning {\n  border-color: #ffd700 !important; }\n\n.border-danger {\n  border-color: #f85032 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.border-teal {\n  border-color: #009688 !important; }\n\n.border-indigo {\n  border-color: #536dfe !important; }\n\n.border-orange {\n  border-color: #ff9800 !important; }\n\n.border-green {\n  border-color: #4caf50 !important; }\n\n.border-red {\n  border-color: #f44336 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded-sm {\n  border-radius: 0.2rem !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-lg {\n  border-radius: 0.3rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-pill {\n  border-radius: 50rem !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: -webkit-flex !important;\n  display: flex !important; }\n\n.d-inline-flex {\n  display: -webkit-inline-flex !important;\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-flex !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-flex !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-flex !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-flex !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-flex !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-flex !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-flex !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-flex !important;\n    display: inline-flex !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: -webkit-flex !important;\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: -webkit-inline-flex !important;\n    display: inline-flex !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  -webkit-flex-direction: row !important;\n          flex-direction: row !important; }\n\n.flex-column {\n  -webkit-flex-direction: column !important;\n          flex-direction: column !important; }\n\n.flex-row-reverse {\n  -webkit-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  -webkit-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  -webkit-flex-wrap: wrap !important;\n          flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  -webkit-flex-wrap: nowrap !important;\n          flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  -webkit-flex-wrap: wrap-reverse !important;\n          flex-wrap: wrap-reverse !important; }\n\n.flex-fill {\n  -webkit-flex: 1 1 auto !important;\n          flex: 1 1 auto !important; }\n\n.flex-grow-0 {\n  -webkit-flex-grow: 0 !important;\n          flex-grow: 0 !important; }\n\n.flex-grow-1 {\n  -webkit-flex-grow: 1 !important;\n          flex-grow: 1 !important; }\n\n.flex-shrink-0 {\n  -webkit-flex-shrink: 0 !important;\n          flex-shrink: 0 !important; }\n\n.flex-shrink-1 {\n  -webkit-flex-shrink: 1 !important;\n          flex-shrink: 1 !important; }\n\n.justify-content-start {\n  -webkit-justify-content: flex-start !important;\n          justify-content: flex-start !important; }\n\n.justify-content-end {\n  -webkit-justify-content: flex-end !important;\n          justify-content: flex-end !important; }\n\n.justify-content-center {\n  -webkit-justify-content: center !important;\n          justify-content: center !important; }\n\n.justify-content-between {\n  -webkit-justify-content: space-between !important;\n          justify-content: space-between !important; }\n\n.justify-content-around {\n  -webkit-justify-content: space-around !important;\n          justify-content: space-around !important; }\n\n.align-items-start {\n  -webkit-align-items: flex-start !important;\n          align-items: flex-start !important; }\n\n.align-items-end {\n  -webkit-align-items: flex-end !important;\n          align-items: flex-end !important; }\n\n.align-items-center {\n  -webkit-align-items: center !important;\n          align-items: center !important; }\n\n.align-items-baseline {\n  -webkit-align-items: baseline !important;\n          align-items: baseline !important; }\n\n.align-items-stretch {\n  -webkit-align-items: stretch !important;\n          align-items: stretch !important; }\n\n.align-content-start {\n  -webkit-align-content: flex-start !important;\n          align-content: flex-start !important; }\n\n.align-content-end {\n  -webkit-align-content: flex-end !important;\n          align-content: flex-end !important; }\n\n.align-content-center {\n  -webkit-align-content: center !important;\n          align-content: center !important; }\n\n.align-content-between {\n  -webkit-align-content: space-between !important;\n          align-content: space-between !important; }\n\n.align-content-around {\n  -webkit-align-content: space-around !important;\n          align-content: space-around !important; }\n\n.align-content-stretch {\n  -webkit-align-content: stretch !important;\n          align-content: stretch !important; }\n\n.align-self-auto {\n  -webkit-align-self: auto !important;\n          align-self: auto !important; }\n\n.align-self-start {\n  -webkit-align-self: flex-start !important;\n          align-self: flex-start !important; }\n\n.align-self-end {\n  -webkit-align-self: flex-end !important;\n          align-self: flex-end !important; }\n\n.align-self-center {\n  -webkit-align-self: center !important;\n          align-self: center !important; }\n\n.align-self-baseline {\n  -webkit-align-self: baseline !important;\n          align-self: baseline !important; }\n\n.align-self-stretch {\n  -webkit-align-self: stretch !important;\n          align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -webkit-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    -webkit-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    -webkit-flex-grow: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    -webkit-flex-grow: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    -webkit-justify-content: flex-start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-justify-content: flex-end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-justify-content: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-justify-content: space-between !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -webkit-justify-content: space-around !important;\n            justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-align-items: flex-start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-align-items: flex-end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-align-items: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-align-items: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-align-items: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -webkit-align-content: flex-start !important;\n            align-content: flex-start !important; }\n  .align-content-sm-end {\n    -webkit-align-content: flex-end !important;\n            align-content: flex-end !important; }\n  .align-content-sm-center {\n    -webkit-align-content: center !important;\n            align-content: center !important; }\n  .align-content-sm-between {\n    -webkit-align-content: space-between !important;\n            align-content: space-between !important; }\n  .align-content-sm-around {\n    -webkit-align-content: space-around !important;\n            align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -webkit-align-content: stretch !important;\n            align-content: stretch !important; }\n  .align-self-sm-auto {\n    -webkit-align-self: auto !important;\n            align-self: auto !important; }\n  .align-self-sm-start {\n    -webkit-align-self: flex-start !important;\n            align-self: flex-start !important; }\n  .align-self-sm-end {\n    -webkit-align-self: flex-end !important;\n            align-self: flex-end !important; }\n  .align-self-sm-center {\n    -webkit-align-self: center !important;\n            align-self: center !important; }\n  .align-self-sm-baseline {\n    -webkit-align-self: baseline !important;\n            align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -webkit-align-self: stretch !important;\n            align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -webkit-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    -webkit-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    -webkit-flex-grow: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    -webkit-flex-grow: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    -webkit-justify-content: flex-start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-justify-content: flex-end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-justify-content: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-justify-content: space-between !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -webkit-justify-content: space-around !important;\n            justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-align-items: flex-start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-align-items: flex-end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-align-items: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-align-items: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-align-items: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -webkit-align-content: flex-start !important;\n            align-content: flex-start !important; }\n  .align-content-md-end {\n    -webkit-align-content: flex-end !important;\n            align-content: flex-end !important; }\n  .align-content-md-center {\n    -webkit-align-content: center !important;\n            align-content: center !important; }\n  .align-content-md-between {\n    -webkit-align-content: space-between !important;\n            align-content: space-between !important; }\n  .align-content-md-around {\n    -webkit-align-content: space-around !important;\n            align-content: space-around !important; }\n  .align-content-md-stretch {\n    -webkit-align-content: stretch !important;\n            align-content: stretch !important; }\n  .align-self-md-auto {\n    -webkit-align-self: auto !important;\n            align-self: auto !important; }\n  .align-self-md-start {\n    -webkit-align-self: flex-start !important;\n            align-self: flex-start !important; }\n  .align-self-md-end {\n    -webkit-align-self: flex-end !important;\n            align-self: flex-end !important; }\n  .align-self-md-center {\n    -webkit-align-self: center !important;\n            align-self: center !important; }\n  .align-self-md-baseline {\n    -webkit-align-self: baseline !important;\n            align-self: baseline !important; }\n  .align-self-md-stretch {\n    -webkit-align-self: stretch !important;\n            align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -webkit-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    -webkit-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    -webkit-flex-grow: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    -webkit-flex-grow: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    -webkit-justify-content: flex-start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-justify-content: flex-end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-justify-content: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-justify-content: space-between !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -webkit-justify-content: space-around !important;\n            justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-align-items: flex-start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-align-items: flex-end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-align-items: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-align-items: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-align-items: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -webkit-align-content: flex-start !important;\n            align-content: flex-start !important; }\n  .align-content-lg-end {\n    -webkit-align-content: flex-end !important;\n            align-content: flex-end !important; }\n  .align-content-lg-center {\n    -webkit-align-content: center !important;\n            align-content: center !important; }\n  .align-content-lg-between {\n    -webkit-align-content: space-between !important;\n            align-content: space-between !important; }\n  .align-content-lg-around {\n    -webkit-align-content: space-around !important;\n            align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -webkit-align-content: stretch !important;\n            align-content: stretch !important; }\n  .align-self-lg-auto {\n    -webkit-align-self: auto !important;\n            align-self: auto !important; }\n  .align-self-lg-start {\n    -webkit-align-self: flex-start !important;\n            align-self: flex-start !important; }\n  .align-self-lg-end {\n    -webkit-align-self: flex-end !important;\n            align-self: flex-end !important; }\n  .align-self-lg-center {\n    -webkit-align-self: center !important;\n            align-self: center !important; }\n  .align-self-lg-baseline {\n    -webkit-align-self: baseline !important;\n            align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -webkit-align-self: stretch !important;\n            align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -webkit-flex-wrap: wrap !important;\n            flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -webkit-flex-wrap: nowrap !important;\n            flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -webkit-flex-wrap: wrap-reverse !important;\n            flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    -webkit-flex: 1 1 auto !important;\n            flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    -webkit-flex-grow: 0 !important;\n            flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    -webkit-flex-grow: 1 !important;\n            flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    -webkit-flex-shrink: 0 !important;\n            flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    -webkit-flex-shrink: 1 !important;\n            flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    -webkit-justify-content: flex-start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-justify-content: flex-end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-justify-content: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-justify-content: space-between !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -webkit-justify-content: space-around !important;\n            justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-align-items: flex-start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-align-items: flex-end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-align-items: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-align-items: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-align-items: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -webkit-align-content: flex-start !important;\n            align-content: flex-start !important; }\n  .align-content-xl-end {\n    -webkit-align-content: flex-end !important;\n            align-content: flex-end !important; }\n  .align-content-xl-center {\n    -webkit-align-content: center !important;\n            align-content: center !important; }\n  .align-content-xl-between {\n    -webkit-align-content: space-between !important;\n            align-content: space-between !important; }\n  .align-content-xl-around {\n    -webkit-align-content: space-around !important;\n            align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -webkit-align-content: stretch !important;\n            align-content: stretch !important; }\n  .align-self-xl-auto {\n    -webkit-align-self: auto !important;\n            align-self: auto !important; }\n  .align-self-xl-start {\n    -webkit-align-self: flex-start !important;\n            align-self: flex-start !important; }\n  .align-self-xl-end {\n    -webkit-align-self: flex-end !important;\n            align-self: flex-end !important; }\n  .align-self-xl-center {\n    -webkit-align-self: center !important;\n            align-self: center !important; }\n  .align-self-xl-baseline {\n    -webkit-align-self: baseline !important;\n            align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -webkit-align-self: stretch !important;\n            align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.overflow-auto {\n  overflow: auto !important; }\n\n.overflow-hidden {\n  overflow: hidden !important; }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal; }\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n\n.shadow-none {\n  box-shadow: none !important; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.w-auto {\n  width: auto !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-auto {\n  height: auto !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.min-vw-100 {\n  min-width: 100vw !important; }\n\n.min-vh-100 {\n  min-height: 100vh !important; }\n\n.vw-100 {\n  width: 100vw !important; }\n\n.vh-100 {\n  height: 100vh !important; }\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0); }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-n1 {\n  margin: -0.25rem !important; }\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important; }\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important; }\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important; }\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important; }\n\n.m-n2 {\n  margin: -0.5rem !important; }\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important; }\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important; }\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important; }\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important; }\n\n.m-n3 {\n  margin: -1rem !important; }\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important; }\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important; }\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important; }\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important; }\n\n.m-n4 {\n  margin: -1.5rem !important; }\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important; }\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important; }\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important; }\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important; }\n\n.m-n5 {\n  margin: -3rem !important; }\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important; }\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important; }\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important; }\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-n1 {\n    margin: -0.25rem !important; }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important; }\n  .m-sm-n2 {\n    margin: -0.5rem !important; }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important; }\n  .m-sm-n3 {\n    margin: -1rem !important; }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important; }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important; }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important; }\n  .m-sm-n4 {\n    margin: -1.5rem !important; }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important; }\n  .m-sm-n5 {\n    margin: -3rem !important; }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important; }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important; }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-n1 {\n    margin: -0.25rem !important; }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important; }\n  .m-md-n2 {\n    margin: -0.5rem !important; }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important; }\n  .m-md-n3 {\n    margin: -1rem !important; }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important; }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important; }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important; }\n  .m-md-n4 {\n    margin: -1.5rem !important; }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important; }\n  .m-md-n5 {\n    margin: -3rem !important; }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important; }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important; }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-n1 {\n    margin: -0.25rem !important; }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important; }\n  .m-lg-n2 {\n    margin: -0.5rem !important; }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important; }\n  .m-lg-n3 {\n    margin: -1rem !important; }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important; }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important; }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important; }\n  .m-lg-n4 {\n    margin: -1.5rem !important; }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important; }\n  .m-lg-n5 {\n    margin: -3rem !important; }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important; }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important; }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-n1 {\n    margin: -0.25rem !important; }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important; }\n  .m-xl-n2 {\n    margin: -0.5rem !important; }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important; }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important; }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important; }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important; }\n  .m-xl-n3 {\n    margin: -1rem !important; }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important; }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important; }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important; }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important; }\n  .m-xl-n4 {\n    margin: -1.5rem !important; }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important; }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important; }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important; }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important; }\n  .m-xl-n5 {\n    margin: -3rem !important; }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important; }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important; }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important; }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-wrap {\n  white-space: normal !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-lighter {\n  font-weight: lighter !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 700 !important; }\n\n.font-weight-bolder {\n  font-weight: bolder !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #0212cb !important; }\n\na.text-primary:hover, a.text-primary:focus {\n  color: #010b7f !important; }\n\n.text-secondary {\n  color: #36454f !important; }\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #171d22 !important; }\n\n.text-success {\n  color: #45b649 !important; }\n\na.text-success:hover, a.text-success:focus {\n  color: #307f33 !important; }\n\n.text-info {\n  color: #00c9ff !important; }\n\na.text-info:hover, a.text-info:focus {\n  color: #008db3 !important; }\n\n.text-warning {\n  color: #ffd700 !important; }\n\na.text-warning:hover, a.text-warning:focus {\n  color: #b39700 !important; }\n\n.text-danger {\n  color: #f85032 !important; }\n\na.text-danger:hover, a.text-danger:focus {\n  color: #d62707 !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important; }\n\n.text-teal {\n  color: #009688 !important; }\n\na.text-teal:hover, a.text-teal:focus {\n  color: #004a43 !important; }\n\n.text-indigo {\n  color: #536dfe !important; }\n\na.text-indigo:hover, a.text-indigo:focus {\n  color: #072cfe !important; }\n\n.text-orange {\n  color: #ff9800 !important; }\n\na.text-orange:hover, a.text-orange:focus {\n  color: #b36a00 !important; }\n\n.text-green {\n  color: #4caf50 !important; }\n\na.text-green:hover, a.text-green:focus {\n  color: #357a38 !important; }\n\n.text-red {\n  color: #f44336 !important; }\n\na.text-red:hover, a.text-red:focus {\n  color: #d2190b !important; }\n\n.text-body {\n  color: #212529 !important; }\n\n.text-muted {\n  color: #6c757d !important; }\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-decoration-none {\n  text-decoration: none !important; }\n\n.text-break {\n  word-break: break-word !important;\n  overflow-wrap: break-word !important; }\n\n.text-reset {\n  color: inherit !important; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a:not(.btn) {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body {\n    min-width: 992px !important; }\n  .container {\n    min-width: 992px !important; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important; }\n  .table-dark {\n    color: inherit; }\n    .table-dark th,\n    .table-dark td,\n    .table-dark thead th,\n    .table-dark tbody + tbody {\n      border-color: #dee2e6; }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6; } }\n\n.Cal__Day__root {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 14.28571%;\n  list-style: none;\n  font-size: 16px;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.Cal__Day__root.Cal__Day__enabled.Cal__Day__highlighted, .Cal__Day__root.Cal__Day__enabled:active, .Cal__Day__root.Cal__Day__enabled:hover {\n  position: relative;\n  z-index: 1; }\n\n.Cal__Day__root.Cal__Day__enabled.Cal__Day__highlighted:before, .Cal__Day__root.Cal__Day__enabled:active:before, .Cal__Day__root.Cal__Day__enabled:hover:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 52px;\n  height: 52px;\n  margin-top: -26px;\n  margin-left: -26px;\n  border-radius: 50%;\n  background-color: #EFEFEF;\n  z-index: -1; }\n\n.Cal__Day__root.Cal__Day__enabled:hover:before {\n  opacity: 0.5; }\n\n.Cal__Day__root.Cal__Day__enabled.Cal__Day__highlighted:before, .Cal__Day__root.Cal__Day__enabled:active:before {\n  opacity: 1; }\n\n.Cal__Day__root:first-child {\n  position: relative; }\n\n.Cal__Day__root.Cal__Day__today {\n  position: relative;\n  z-index: 2; }\n\n.Cal__Day__root.Cal__Day__today > span {\n  color: #3d3d3d; }\n\n.Cal__Day__root.Cal__Day__today.Cal__Day__disabled > span {\n  color: #AAA; }\n\n.Cal__Day__root.Cal__Day__today:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 52px;\n  height: 52px;\n  margin-top: -26px;\n  margin-left: -26px;\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 1px;\n  z-index: -1; }\n\n.Cal__Day__root.Cal__Day__today.Cal__Day__disabled:before {\n  box-shadow: inset 0 0 0 1px #BBB; }\n\n.Cal__Day__root.Cal__Day__selected {\n  position: relative; }\n\n.Cal__Day__root.Cal__Day__selected > .Cal__Day__month, .Cal__Day__root.Cal__Day__selected > .Cal__Day__year {\n  display: none; }\n\n.Cal__Day__root.Cal__Day__selected:before {\n  display: none; }\n\n.Cal__Day__root.Cal__Day__selected .Cal__Day__selection {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 52px;\n  height: 52px;\n  margin-top: -26px;\n  margin-left: -26px;\n  border-radius: 50%;\n  line-height: 56px;\n  z-index: 2; }\n\n.Cal__Day__root.Cal__Day__selected .Cal__Day__selection .Cal__Day__month {\n  top: 9px; }\n\n.Cal__Day__root.Cal__Day__selected .Cal__Day__selection .Cal__Day__day {\n  position: relative;\n  top: 5px;\n  font-weight: bold;\n  font-size: 18px; }\n\n.Cal__Day__root.Cal__Day__disabled {\n  color: #AAA;\n  cursor: not-allowed; }\n\n.Cal__Day__month, .Cal__Day__year {\n  position: absolute;\n  left: 0;\n  right: 0;\n  font-size: 12px;\n  line-height: 12px;\n  text-transform: capitalize; }\n\n.Cal__Day__month {\n  top: 5px; }\n\n.Cal__Day__year {\n  bottom: 5px; }\n\n/*\n * Range selection styles\n */\n.Cal__Day__range.Cal__Day__selected.Cal__Day__start:after, .Cal__Day__range.Cal__Day__selected.Cal__Day__end:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  width: 50%;\n  height: 52px;\n  margin-top: -26px;\n  box-shadow: inset 56px 56px; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__disabled .Cal__Day__selection.Cal__Day__selection {\n  background-color: #EEE !important; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__disabled .Cal__Day__selection.Cal__Day__selection .Cal__Day__day, .Cal__Day__range.Cal__Day__selected.Cal__Day__disabled .Cal__Day__selection.Cal__Day__selection .Cal__Day__month {\n  color: #AAA;\n  font-weight: 300; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__start .Cal__Day__selection {\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__start:after {\n  right: 0; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__start.Cal__Day__end:after {\n  display: none; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__betweenRange .Cal__Day__selection {\n  left: 0;\n  right: 0;\n  width: 100%;\n  margin-left: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-align-items: center;\n          align-items: center;\n  border-radius: 0; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__betweenRange .Cal__Day__day {\n  top: 0;\n  font-size: 16px; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__betweenRange .Cal__Day__month {\n  display: none; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__end:after {\n  left: 0; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__end .Cal__Day__selection {\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n  color: inherit !important;\n  background-color: #FFF !important;\n  border: 2px solid;\n  box-sizing: border-box; }\n\n.Cal__Day__range.Cal__Day__selected.Cal__Day__end .Cal__Day__selection .Cal__Day__day {\n  top: 4px; }\n\n.Cal__Container__root {\n  position: relative;\n  display: table;\n  z-index: 1;\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n  outline: none;\n  text-align: left; }\n\n.Cal__Container__root.Cal__Container__landscape {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n          flex-direction: row; }\n\n.Cal__Container__root.Cal__Container__landscape .Cal__Container__wrapper {\n  position: relative;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  overflow: hidden;\n  z-index: 1;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\n.Cal__Container__listWrapper {\n  position: relative;\n  overflow: hidden;\n  background-color: #FFF; }\n\n.Cal__Header__root {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  box-sizing: border-box;\n  overflow: hidden;\n  min-height: 98px;\n  padding: 20px;\n  line-height: 1.3;\n  font-weight: 400;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.Cal__Header__root.Cal__Header__landscape {\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n  min-width: 200px;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 3px; }\n\n.Cal__Header__root.Cal__Header__landscape .Cal__Header__dateWrapper.Cal__Header__day {\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  height: 76px; }\n\n.Cal__Header__wrapper {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  cursor: pointer; }\n\n.Cal__Header__wrapper.Cal__Header__blank {\n  height: 58px;\n  line-height: 58px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 18px;\n  cursor: default; }\n\n.Cal__Header__dateWrapper {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.5);\n  transition: color 0.3s ease; }\n\n.Cal__Header__dateWrapper.Cal__Header__active {\n  color: white; }\n\n.Cal__Header__dateWrapper.Cal__Header__day {\n  height: 38px;\n  font-size: 36px;\n  line-height: 36px;\n  text-transform: capitalize; }\n\n.Cal__Header__dateWrapper.Cal__Header__year {\n  height: 20px;\n  font-size: 18px;\n  line-height: 18px; }\n\n.Cal__Header__date {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.Cal__Header__range {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-grow: 1;\n          flex-grow: 1; }\n\n.Cal__Header__range .Cal__Header__dateWrapper {\n  overflow: visible; }\n\n.Cal__Header__range .Cal__Header__wrapper:first-child:before, .Cal__Header__range .Cal__Header__wrapper:first-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 0;\n  margin-top: -50px;\n  margin-left: -50px;\n  border-top: 100px solid transparent;\n  border-bottom: 100px solid transparent;\n  border-left: 60px solid; }\n\n.Cal__Header__range .Cal__Header__wrapper:first-child:before {\n  color: rgba(255, 255, 255, 0.15);\n  -webkit-transform: translateX(1px);\n          transform: translateX(1px); }\n\n.Cal__Header__range .Cal__Header__wrapper:last-child {\n  margin-left: 60px; }\n\n.Cal__Header__range .Cal__Header__wrapper .Cal__Header__date {\n  white-space: nowrap;\n  z-index: 1; }\n\n.Cal__Today__root {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  height: 32px;\n  padding: 6px;\n  box-sizing: border-box;\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n  font-weight: 500;\n  line-height: 0;\n  z-index: 10;\n  cursor: pointer;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  transition-delay: 0.3s; }\n\n.Cal__Today__root.Cal__Today__show {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition-delay: 0s; }\n\n.Cal__Today__root.Cal__Today__show .Cal__Today__chevron {\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n\n.Cal__Today__root .Cal__Today__chevron {\n  position: absolute;\n  top: 50%;\n  margin-top: -6px;\n  margin-left: 5px;\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n\n.Cal__Today__root.Cal__Today__chevronUp .Cal__Today__chevron {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.Cal__Today__root.Cal__Today__chevronDown .Cal__Today__chevron {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg); }\n\n.Cal__MonthList__root {\n  width: 100% !important;\n  background-color: #FFF;\n  -webkit-overflow-scrolling: touch; }\n\n.Cal__MonthList__root.Cal__MonthList__scrolling > div {\n  pointer-events: none; }\n\n.Cal__MonthList__root.Cal__MonthList__scrolling label {\n  opacity: 1; }\n\n.Cal__Weekdays__root {\n  position: relative;\n  z-index: 5;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.04); }\n\n.Cal__Weekdays__day {\n  padding: 15px 0;\n  -webkit-flex-basis: 14.28571%;\n          flex-basis: 14.28571%;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  font-weight: 500;\n  text-align: center; }\n\n.Cal__Years__root {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  background-color: #F9F9F9; }\n\n.Cal__Years__root:before, .Cal__Years__root:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 50px;\n  pointer-events: none;\n  z-index: 1; }\n\n.Cal__Years__root:before {\n  top: 0;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%); }\n\n.Cal__Years__root:after {\n  bottom: 0;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%); }\n\n.Cal__Years__list {\n  box-sizing: border-box; }\n\n.Cal__Years__list.Cal__Years__center {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center; }\n\n.Cal__Years__year {\n  display: -webkit-flex;\n  display: flex;\n  padding: 0 20px;\n  height: 100%;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  box-sizing: border-box; }\n\n.Cal__Years__year.Cal__Years__withMonths {\n  border-bottom: 1px solid #E9E9E9; }\n\n.Cal__Years__year.Cal__Years__withMonths label {\n  height: 88px;\n  padding-top: 12px;\n  box-sizing: border-box; }\n\n.Cal__Years__year label {\n  -webkit-flex-basis: 42%;\n          flex-basis: 42%; }\n\n.Cal__Years__year label span {\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  color: #333; }\n\n.Cal__Years__year ol {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  font-size: 14px; }\n\n.Cal__Years__year ol li {\n  display: -webkit-flex;\n  display: flex;\n  width: 44px;\n  height: 44px;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  list-style: none;\n  border-radius: 50%;\n  box-sizing: border-box;\n  color: #444;\n  font-weight: 400;\n  text-transform: capitalize; }\n\n.Cal__Years__year ol li.Cal__Years__currentMonth {\n  border: 1px solid; }\n\n.Cal__Years__year ol li.Cal__Years__selected {\n  position: relative;\n  z-index: 1;\n  background-color: blue;\n  color: #FFF !important;\n  border: 0; }\n\n.Cal__Years__year ol li.Cal__Years__disabled {\n  cursor: not-allowed;\n  color: #AAA; }\n\n.Cal__Years__year ol li.Cal__Years__disabled:hover {\n  background-color: inherit; }\n\n.Cal__Years__year ol li:hover {\n  background-color: #EFEFEF; }\n\n.Cal__Years__year:hover label > span, .Cal__Years__year.Cal__Years__active label > span {\n  color: inherit; }\n\n.Cal__Years__year:hover, .Cal__Years__year.Cal__Years__active {\n  position: relative;\n  z-index: 2; }\n\n.Cal__Years__year.Cal__Years__active {\n  font-size: 32px; }\n\n.Cal__Years__year.Cal__Years__currentYear {\n  position: relative; }\n\n.Cal__Years__year.Cal__Years__currentYear label > span {\n  min-width: 50px;\n  padding-bottom: 5px;\n  border-bottom: 3px solid; }\n\n.Cal__Years__year.Cal__Years__currentYear.Cal__Years__active label > span {\n  min-width: 85px; }\n\n.Cal__Years__year.Cal__Years__first {\n  padding-top: 40px; }\n\n.Cal__Years__year.Cal__Years__last {\n  padding-bottom: 40px; }\n\n.Cal__Animation__enter {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n  transition: 0.25s ease; }\n\n.Cal__Animation__enter.Cal__Animation__enterActive {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.Cal__Animation__leave {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: 0.25s ease; }\n\n.Cal__Animation__leave.Cal__Animation__leaveActive {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0); }\n\n.Cal__Slider__root, .Cal__Slider__slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.Cal__Slider__root {\n  overflow: hidden; }\n\n.Cal__Slider__slide {\n  padding: 20px 65px; }\n\n.Cal__Slider__slide:first-child {\n  padding-left: 20px; }\n\n.Cal__Slider__wrapper {\n  height: 100%;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n\n.Cal__Slider__arrow {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  width: 40px;\n  height: 100%;\n  opacity: 0.7;\n  cursor: pointer;\n  border-left: 1px solid rgba(255, 255, 255, 0.1); }\n\n.Cal__Slider__arrow svg {\n  width: 15px; }\n\n.Cal__Slider__arrow:hover {\n  opacity: 1; }\n\n.Cal__Slider__arrowRight {\n  right: 0; }\n\n.Cal__Slider__arrowLeft {\n  left: 0;\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1); }\n\n.Cal__transition__enter {\n  opacity: 0; }\n\n.Cal__transition__enterActive {\n  opacity: 1;\n  transition: opacity 0.3s ease; }\n\n.Cal__transition__leave {\n  opacity: 1; }\n\n.Cal__transition__leaveActive {\n  opacity: 0;\n  transition: opacity 0.3s ease; }\n\n.Cal__Month__rows {\n  position: relative;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.05) 100%); }\n\n.Cal__Month__row {\n  padding: 0;\n  margin: 0; }\n\n.Cal__Month__row:first-child {\n  text-align: right; }\n\n.Cal__Month__row:first-child li {\n  background-color: #FFF;\n  box-shadow: 0 -1px 0 #E9E9E9; }\n\n.Cal__Month__row:nth-child(2) {\n  box-shadow: 0 -1px 0 #E9E9E9; }\n\n.Cal__Month__row.Cal__Month__partial:first-child li:first-child {\n  box-shadow: 0px -1px 0 #E9E9E9, inset 1px 0 0 #E9E9E9; }\n\n.Cal__Month__row.Cal__Month__partial:last-of-type li {\n  position: relative;\n  z-index: 1; }\n\n.Cal__Month__label {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  font-size: 30px;\n  font-weight: 500;\n  z-index: 3;\n  pointer-events: none;\n  background-color: rgba(255, 255, 255, 0.6);\n  opacity: 0;\n  transition: opacity 0.3s ease; }\n\n.Cal__Month__label > span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 56px;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  text-transform: capitalize; }\n\n.Cal__Month__label.Cal__Month__partialFirstRow {\n  top: 56px; }\n\n/* Font Smoothing */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\ntd,\nbutton,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6,\n.display-1,\n.display-2,\n.display-3,\n.display-4,\n.navbar,\n.brand,\n.alert {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: Poppins, Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 400; }\n\n.cr-app {\n  display: -webkit-flex;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  overflow-x: hidden; }\n\n.card-img-left {\n  border-radius: 0;\n  border-top-left-radius: calc(.25rem - 1px);\n  border-bottom-left-radius: calc(.25rem - 1px); }\n\n.card-img-right {\n  border-radius: 0;\n  border-top-right-radius: calc(.25rem - 1px);\n  border-bottom-right-radius: calc(.25rem - 1px); }\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg); }\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg); } }\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg); }\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg); } }\n\n.swing {\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n  -webkit-animation-name: swing;\n          animation-name: swing; }\n\n.animated {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.nav-item .nav-link {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center; }\n  .nav-item .nav-link.active {\n    color: #fff;\n    background: rgba(255, 255, 255, 0.23);\n    opacity: 1; }\n\n.sidebar .nav a {\n  transition: all 150ms ease-in; }\n\n.card-header {\n  text-transform: uppercase; }\n\n.badge:empty {\n  display: inline-block; }\n\n.modal-content {\n  height: -webkit-fill-available; }\n\n.can-click {\n  cursor: pointer; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n@media (min-width: 1200px) {\n  .hidden-xl {\n    display: none; } }\n\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .hidden-lg {\n    display: none; } }\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .hidden-md {\n    display: none; } }\n\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .hidden-sm {\n    display: none; } }\n\n@media (max-width: 575.98px) {\n  .hidden-xs {\n    display: none; } }\n\n.cr-header {\n  margin-bottom: 0.5rem;\n  border-bottom: 1px solid #dee2e6; }\n  .cr-header__nav-right {\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end;\n    margin-left: auto; }\n\n.cr-sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: -240px;\n  z-index: 5;\n  width: 240px;\n  font-weight: 200;\n  color: #fff;\n  background-position: center center;\n  background-size: cover;\n  transition: left .1s ease-in; }\n  .cr-sidebar + .cr-content {\n    transition: margin .1s ease-in; }\n  .cr-sidebar::after, .cr-sidebar::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    display: block;\n    width: 100%;\n    height: 100%;\n    content: \"\"; }\n  .cr-sidebar::before {\n    background: #000;\n    opacity: .33; }\n  .cr-sidebar::after {\n    z-index: 3;\n    background: #0212cb;\n    /* fallback for old browsers */\n    background: linear-gradient(to bottom, #36454f, #0212cb);\n    opacity: 1; }\n  .cr-sidebar[data-image]:after {\n    opacity: .77; }\n  .cr-sidebar__content {\n    position: relative;\n    z-index: 4;\n    height: calc(100vh - 20px);\n    padding-bottom: 30px;\n    overflow: auto; }\n  .cr-sidebar__background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-position: center center;\n    background-size: cover; }\n  .cr-sidebar__nav-item-collapse {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    cursor: pointer; }\n  .cr-sidebar__nav-item-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n    padding-right: .5rem; }\n  .cr-sidebar--open {\n    left: 0;\n    transition: left .2s ease-in; }\n    .cr-sidebar--open + .cr-content {\n      margin: 0 0 0 240px;\n      transition: margin .2s ease-in; }\n  .cr-sidebar .nav {\n    margin-top: 20px; }\n    .cr-sidebar .nav .nav-item {\n      margin: 5px 10px;\n      color: #f8f9fa;\n      border-radius: 4px;\n      opacity: .86; }\n    .cr-sidebar .nav .nav-link {\n      color: #f8f9fa; }\n      .cr-sidebar .nav .nav-link:hover {\n        background: rgba(248, 249, 250, 0.15); }\n\n.cr-content {\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  width: 100%;\n  min-height: 100vh;\n  padding: 0;\n  margin: 0; }\n\n.cr-page__header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: flex-end;\n          align-items: flex-end;\n  -webkit-align-self: center;\n          align-self: center; }\n  @media (max-width: 767.98px) {\n    .cr-page__header {\n      -webkit-flex-direction: column;\n              flex-direction: column;\n      -webkit-align-items: flex-start;\n              align-items: flex-start; } }\n\n.cr-page__title {\n  padding-right: .5rem;\n  margin-bottom: 1rem; }\n  @media (max-width: 767.98px) {\n    .cr-page__title {\n      margin-bottom: 0; } }\n\n.cr-page__breadcrumb {\n  -webkit-align-self: flex-end;\n          align-self: flex-end;\n  padding: 0;\n  text-transform: capitalize;\n  background: #f8f9fa; }\n  @media (max-width: 767.98px) {\n    .cr-page__breadcrumb {\n      -webkit-align-self: flex-start;\n              align-self: flex-start; } }\n\n.cr-page .row .col, .cr-page .row > [class^=\"col-\"] {\n  margin-bottom: 1rem; }\n\n.cr-widget {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n          flex-direction: row; }\n  .cr-widget__icon {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-justify-content: center;\n            justify-content: center; }\n\n.cr-search-form {\n  position: relative; }\n  .cr-search-form__icon-search {\n    position: absolute;\n    left: 8px; }\n  .cr-search-form__input {\n    /* stylelint-disable-next-line */\n    padding-left: 35px !important; }\n\n.bg-gradient-theme {\n  background: linear-gradient(to bottom, #0212cb, #36454f); }\n\n.bg-gradient-theme-top {\n  background: linear-gradient(to top, #0212cb, #36454f); }\n\n.bg-gradient-theme-left {\n  background: linear-gradient(to left, #0212cb, #36454f); }\n\n.bg-gradient-theme-right {\n  background: linear-gradient(to right, #0212cb, #36454f); }\n\n.ButtonPage .btn {\n  margin: 4px; }\n\n.ButtonPage .btn-group .btn {\n  margin: 0; }\n\n.TablePage .card-body {\n  overflow: hidden; }\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-axios */ "./node_modules/react-axios/lib/index.js");
/* harmony import */ var react_axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_component_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-component-queries */ "./node_modules/react-component-queries/dist/react-component-queries.js");
/* harmony import */ var react_component_queries__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_component_queries__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components_AuthForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/AuthForm */ "./src/components/AuthForm.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-spinners/HashLoader */ "./node_modules/react-spinners/HashLoader.js");
/* harmony import */ var react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _styles_reduction_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/reduction.scss */ "./src/styles/reduction.scss");
/* harmony import */ var _styles_reduction_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_reduction_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var pages_DashboardPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pages/DashboardPage */ "./src/pages/DashboardPage.js");
/* harmony import */ var pages_MyFeedPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! pages/MyFeedPage */ "./src/pages/MyFeedPage.js");
/* harmony import */ var pages_SECFeedPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! pages/SECFeedPage */ "./src/pages/SECFeedPage.js");
/* harmony import */ var pages_FilingSearchPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! pages/FilingSearchPage */ "./src/pages/FilingSearchPage.js");
/* harmony import */ var pages_CompanySearchPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! pages/CompanySearchPage */ "./src/pages/CompanySearchPage.js");
/* harmony import */ var pages_FormTypeSearchPage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! pages/FormTypeSearchPage */ "./src/pages/FormTypeSearchPage.js");
/* harmony import */ var pages_MyCompaniesPage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! pages/MyCompaniesPage */ "./src/pages/MyCompaniesPage.js");
/* harmony import */ var pages_MyFormTypesPage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! pages/MyFormTypesPage */ "./src/pages/MyFormTypesPage.js");
/* harmony import */ var pages_SavedFilingsPage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! pages/SavedFilingsPage */ "./src/pages/SavedFilingsPage.js");
/* harmony import */ var pages_ViewedFilingsPage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! pages/ViewedFilingsPage */ "./src/pages/ViewedFilingsPage.js");
/* harmony import */ var pages_SearchHistoryPage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! pages/SearchHistoryPage */ "./src/pages/SearchHistoryPage.js");
/* harmony import */ var pages_FilingDocsPage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! pages/FilingDocsPage */ "./src/pages/FilingDocsPage.js");
/* harmony import */ var pages_FilingSpreadsheet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! pages/FilingSpreadsheet */ "./src/pages/FilingSpreadsheet.js");
/* harmony import */ var pages_SECHistoricalPage__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! pages/SECHistoricalPage */ "./src/pages/SECHistoricalPage.js");
/* harmony import */ var pages_XBRLFeedPage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! pages/XBRLFeedPage */ "./src/pages/XBRLFeedPage.js");
/* harmony import */ var pages_XBRLHistoricalPage__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! pages/XBRLHistoricalPage */ "./src/pages/XBRLHistoricalPage.js");
/* harmony import */ var pages_SettingsPage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! pages/SettingsPage */ "./src/pages/SettingsPage.js");
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var pages_AuthModalPage__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! pages/AuthModalPage */ "./src/pages/AuthModalPage.js");
/* harmony import */ var pages_AuthPage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! pages/AuthPage */ "./src/pages/AuthPage.js");





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/App.js";





 // Components






 // * Main Pages



 // * Search



 // * Personal





 // * Reference Docs

 // * Others




 // * Settings

 // import StockPage from 'pages/StockPage';
// import FilingReaderPage from 'pages/FilingReaderPage';





var getBasename = function getBasename() {
  return "/".concat("".split('/').pop());
};

react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].configure();
var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_6___default.a.create({
  baseURL: "/",
  timeout: 15000,
  headers: {
    Accept: "application/json"
  }
});

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var user = services_auth__WEBPACK_IMPORTED_MODULE_34__["default"].getCurrentUser();
      this.setState({
        user: user
      });
    }
  }, {
    key: "render",
    value: function render() {
      var user = this.state.user;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
        fallback: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_8___default.a, {
          active: true,
          classNamePrefix: "SuspenseLoader_",
          spinner: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_13___default.a, {
            size: 85,
            color: "#0212cb",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["BrowserRouter"], {
        basename: getBasename(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/login",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["EmptyLayout"],
        component: function component(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(pages_AuthPage__WEBPACK_IMPORTED_MODULE_36__["default"], Object.assign({}, props, {
            authState: components_AuthForm__WEBPACK_IMPORTED_MODULE_11__["STATE_LOGIN"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), !user && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        from: "/",
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/signup",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["EmptyLayout"],
        component: function component(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(pages_AuthPage__WEBPACK_IMPORTED_MODULE_36__["default"], Object.assign({}, props, {
            authState: components_AuthForm__WEBPACK_IMPORTED_MODULE_11__["STATE_SIGNUP"],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/login-modal",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_AuthModalPage__WEBPACK_IMPORTED_MODULE_35__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_axios__WEBPACK_IMPORTED_MODULE_7__["AxiosProvider"], {
        instance: axiosInstance,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_DashboardPage__WEBPACK_IMPORTED_MODULE_17__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/myfeed",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_MyFeedPage__WEBPACK_IMPORTED_MODULE_18__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/secfilings",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_SECFeedPage__WEBPACK_IMPORTED_MODULE_19__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/search",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_FilingSearchPage__WEBPACK_IMPORTED_MODULE_20__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/companysearch",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_CompanySearchPage__WEBPACK_IMPORTED_MODULE_21__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/formtypesearch",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_FormTypeSearchPage__WEBPACK_IMPORTED_MODULE_22__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/mycompanies",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_MyCompaniesPage__WEBPACK_IMPORTED_MODULE_23__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/myformtypes",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_MyFormTypesPage__WEBPACK_IMPORTED_MODULE_24__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/savedfilings",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_SavedFilingsPage__WEBPACK_IMPORTED_MODULE_25__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/viewedfilings",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_ViewedFilingsPage__WEBPACK_IMPORTED_MODULE_26__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/searchhistory",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_SearchHistoryPage__WEBPACK_IMPORTED_MODULE_27__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/filingDocs",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_FilingDocsPage__WEBPACK_IMPORTED_MODULE_28__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/spreadsheet",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_FilingSpreadsheet__WEBPACK_IMPORTED_MODULE_29__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/sechistorical",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_SECHistoricalPage__WEBPACK_IMPORTED_MODULE_30__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/xbrlhistorical",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_XBRLHistoricalPage__WEBPACK_IMPORTED_MODULE_32__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/xbrlfilings",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_XBRLFeedPage__WEBPACK_IMPORTED_MODULE_31__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/settings",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_SettingsPage__WEBPACK_IMPORTED_MODULE_33__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_12__["LayoutRoute"], {
        exact: true,
        path: "/register",
        layout: components_Layout__WEBPACK_IMPORTED_MODULE_12__["MainLayout"],
        component: pages_AuthPage__WEBPACK_IMPORTED_MODULE_36__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var query = function query(_ref) {
  var width = _ref.width;

  if (width < 575) {
    return {
      breakpoint: 'xs'
    };
  }

  if (576 < width && width < 767) {
    return {
      breakpoint: 'sm'
    };
  }

  if (768 < width && width < 991) {
    return {
      breakpoint: 'md'
    };
  }

  if (992 < width && width < 1199) {
    return {
      breakpoint: 'lg'
    };
  }

  if (width > 1200) {
    return {
      breakpoint: 'xl'
    };
  }

  return {
    breakpoint: 'xs'
  };
};

/* harmony default export */ __webpack_exports__["default"] = (react_component_queries__WEBPACK_IMPORTED_MODULE_9___default()(query)(App));

/***/ }),

/***/ "./src/assets/defaultUser.png":
/*!************************************!*\
  !*** ./src/assets/defaultUser.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/defaultUser.b26e8c18.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.16c1087b.png";

/***/ }),

/***/ "./src/components/AuthForm.js":
/*!************************************!*\
  !*** ./src/components/AuthForm.js ***!
  \************************************/
/*! exports provided: STATE_LOGIN, STATE_SIGNUP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_LOGIN", function() { return STATE_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_SIGNUP", function() { return STATE_SIGNUP; });
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_logo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! joi-browser */ "./node_modules/joi-browser/dist/joi-browser.js");
/* harmony import */ var joi_browser__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(joi_browser__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);









var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/AuthForm.js";










var AuthForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(AuthForm, _React$Component);

  function AuthForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AuthForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(AuthForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: {
        username: "",
        password: ""
      },
      errors: {}
    };
    _this.schema = {
      username: joi_browser__WEBPACK_IMPORTED_MODULE_14___default.a.string().email().required().label("username"),
      password: joi_browser__WEBPACK_IMPORTED_MODULE_14___default.a.string().required().label("password")
    };

    _this.changeAuthState = function (authState) {
      return function (event) {
        event.preventDefault();

        _this.props.onChangeAuthState(authState);
      };
    };

    _this.validateProperty = function (name, value) {
      var obj = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value);

      var schema = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, _this.schema[name]);

      var _Joi$validate = joi_browser__WEBPACK_IMPORTED_MODULE_14___default.a.validate(obj, schema),
          error = _Joi$validate.error;

      return error ? error.details[0].message : null;
    };

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
        var _this$state$data, username, password;

        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state$data = _this.state.data, username = _this$state$data.username, password = _this$state$data.password;

                if (!lodash__WEBPACK_IMPORTED_MODULE_17__["isEmpty"](_this.state.errors)) {
                  _context.next = 14;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return Object(services_auth__WEBPACK_IMPORTED_MODULE_13__["login"])(username, password);

              case 5:
                if (lodash__WEBPACK_IMPORTED_MODULE_17__["isEmpty"](Object(services_auth__WEBPACK_IMPORTED_MODULE_13__["getCurrentUser"])())) react_toastify__WEBPACK_IMPORTED_MODULE_16__["toast"].warn('Credentials not found.', {
                  className: 'rounded'
                });else {
                  console.log('Logged in. Redirecting...');
                  window.location = "/"; //window.location = this.props.location ? this.props.location.state.from.pathname : "/";
                }
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                react_toastify__WEBPACK_IMPORTED_MODULE_16__["toast"].error('Internal Error.', {
                  className: 'rounded'
                });
                console.log('Login Failure:', _context.t0);

              case 12:
                _context.next = 16;
                break;

              case 14:
                react_toastify__WEBPACK_IMPORTED_MODULE_16__["toast"].error('Please enter a valid Email and Password', {
                  className: 'rounded'
                });
                console.log('Username or password does not meet requirements.');

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleUsernameChange = function (e) {
      var errors = lodash__WEBPACK_IMPORTED_MODULE_17__["isEmpty"](_this.validateProperty('username', e.target.value)) ? {} : Object.assign({}, _this.state.errors, _this.validateProperty('username', e.target.value));

      var data = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.data);

      data.username = e.target.value;

      _this.setState({
        data: data,
        errors: errors
      });
    };

    _this.handlePasswordChange = function (e) {
      var errors = lodash__WEBPACK_IMPORTED_MODULE_17__["isEmpty"](_this.validateProperty('password', e.target.value)) ? {} : Object.assign({}, _this.state.errors, _this.validateProperty('password', e.target.value));

      var data = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.data);

      data.password = e.target.value;

      _this.setState({
        data: data,
        errors: errors
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AuthForm, [{
    key: "render",
    value: function render() {
      if (Object(services_auth__WEBPACK_IMPORTED_MODULE_13__["getCurrentUser"])()) return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      });
      var _this$props = this.props,
          showLogo = _this$props.showLogo,
          usernameLabel = _this$props.usernameLabel,
          usernameInputProps = _this$props.usernameInputProps,
          passwordLabel = _this$props.passwordLabel,
          passwordInputProps = _this$props.passwordInputProps,
          confirmPasswordLabel = _this$props.confirmPasswordLabel,
          confirmPasswordInputProps = _this$props.confirmPasswordInputProps,
          children = _this$props.children,
          onLogoClick = _this$props.onLogoClick;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, showLogo && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "text-center pb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        className: "rounded",
        style: {
          width: 100,
          cursor: 'pointer'
        },
        alt: "logo",
        src: assets_logo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        onClick: onLogoClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: usernameLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, usernameLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], Object.assign({}, usernameInputProps, {
        onChange: this.handleUsernameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: passwordLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, passwordLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], Object.assign({}, passwordInputProps, {
        onChange: this.handlePasswordChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }))), this.isSignup && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: confirmPasswordLabel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, confirmPasswordLabel), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], Object.assign({}, confirmPasswordInputProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        check: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), ' ', this.isSignup ? 'Agree the terms and policy' : 'Remember me')), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        size: "lg",
        className: "border-0",
        style: {
          backgroundColor: '$primary'
        },
        block: true,
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Login"), children);
    }
  }, {
    key: "isLogin",
    get: function get() {
      return this.props.authState === STATE_LOGIN;
    }
  }, {
    key: "isSignup",
    get: function get() {
      return this.props.authState === STATE_SIGNUP;
    }
  }]);

  return AuthForm;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var STATE_LOGIN = 'LOGIN';
var STATE_SIGNUP = 'SIGNUP';
AuthForm.propTypes = {
  authState: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  usernameLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  usernameInputProps: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  passwordLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  passwordInputProps: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  confirmPasswordLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  confirmPasswordInputProps: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  onLogoClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};
AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com'
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password'
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password'
  },
  onLogoClick: function onLogoClick() {}
};
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

/***/ }),

/***/ "./src/components/Avatar.js":
/*!**********************************!*\
  !*** ./src/components/Avatar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/propTypes */ "./src/utils/propTypes.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Avatar.js";




var Avatar = function Avatar(_ref) {
  var rounded = _ref.rounded,
      circle = _ref.circle,
      src = _ref.src,
      size = _ref.size,
      Tag = _ref.tag,
      className = _ref.className,
      style = _ref.style,
      restProps = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["rounded", "circle", "src", "size", "tag", "className", "style"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
    'rounded-circle': circle,
    rounded: rounded
  }, className);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, Object.assign({
    src: src,
    style: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: size,
      height: size
    }, style),
    className: classes
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

Avatar.propTypes = {
  tag: utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].component,
  rounded: utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].bool,
  circle: utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].bool,
  size: utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].oneOfType([utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].string, utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].number]),
  src: utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].string,
  style: utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].object
};
Avatar.defaultProps = {
  tag: 'img',
  rounded: false,
  circle: true,
  size: 40,
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/components/Card/AnnouncementCard.js":
/*!*************************************************!*\
  !*** ./src/components/Card/AnnouncementCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/propTypes */ "./src/utils/propTypes.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var components_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Avatar */ "./src/components/Avatar.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/AnnouncementCard.js";






var AnnouncementCard = function AnnouncementCard(_ref) {
  var color = _ref.color,
      header = _ref.header,
      avatar = _ref.avatar,
      avatarSize = _ref.avatarSize,
      name = _ref.name,
      date = _ref.date,
      text = _ref.text,
      className = _ref.className,
      buttonProps = _ref.buttonProps,
      restProps = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["color", "header", "avatar", "avatarSize", "name", "date", "text", "className", "buttonProps"]);

  var bgColor = "bg-".concat(color);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(bgColor, className);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], Object.assign({
    inverse: true,
    className: classes
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), header && typeof header === 'string' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
    className: bgColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, header) : header, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "d-flex flex-wrap flex-column align-items-center justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: avatarSize,
    src: avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "d-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, date)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], Object.assign({
    color: "primary"
  }, buttonProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))));
};

AnnouncementCard.propTypes = {
  color: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  header: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].node,
  avatar: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  avatarSize: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].number,
  name: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  date: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].date,
  className: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  children: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].element
};
AnnouncementCard.defaultProps = {
  color: 'gradient-secondary',
  avatarSize: 60
};
/* harmony default export */ __webpack_exports__["default"] = (AnnouncementCard);

/***/ }),

/***/ "./src/components/Card/CompanyCard.js":
/*!********************************************!*\
  !*** ./src/components/Card/CompanyCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/CompanyCard.js";





var CompanyCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CompanyCard, _Component);

  function CompanyCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CompanyCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CompanyCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      saved: false
    };
    _this.saveCompany =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                cik: _this.props.company.cik,
                companyName: _this.props.company.companyName,
                companyLocation: _this.props.company.location
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/addSavedCompany", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: true
                  });
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.unsaveCompany =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                cik: _this.props.company.cik,
                companyName: _this.props.company.companyName,
                companyLocation: _this.props.company.location
              };
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/removeSavedCompany", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: false
                  });
                }
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CompanyCard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this2 = this;

        var config;
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                config = {
                  params: {
                    "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                  }
                };

                if (this.state.saved) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/users/verifySavedCompany/?company=".concat(this.props.company.companyName), config).then(function (res) {
                  _this2.setState({
                    saved: res.data.savedCompany
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var saved = this.state.saved;
      var company = this.props.company;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "m-2 flex-row",
        style: {
          minWidth: "150px",
          height: "min-content",
          width: "fit-content"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        className: "p-2",
        style: {
          margin: "auto 5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
        className: "mr-1",
        color: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, company.location), company.companyName)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          margin: "auto 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: "min-content",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, !saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-2",
        outline: true,
        onClick: function onClick() {
          return _this3.saveCompany();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Follow") : "", saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-2",
        outline: true,
        onClick: function onClick() {
          return _this3.unsaveCompany();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "UnFollow") : "")));
    }
  }]);

  return CompanyCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CompanyCard);

/***/ }),

/***/ "./src/components/Card/FilingCard.js":
/*!*******************************************!*\
  !*** ./src/components/Card/FilingCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/FilingCard.js";





var FilingCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FilingCard, _Component);

  function FilingCard(props) {
    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FilingCard);

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FilingCard).call(this, props));
    _this.toggleModal =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_this.state.modal) {
                _context2.next = 8;
                break;
              }

              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("api/filingdoc/getData/?link=".concat(_this.props.fileLink)).then(
              /*#__PURE__*/
              function () {
                var _ref2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                  return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this.setState({
                            modal: !_this.state.modal,
                            data: res.data.html,
                            link: res.data.link
                          });

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 3:
              // Save queried filing as a recent search
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                fileLink: _this.props.fileLink,
                badgeColor: _this.props.badgeColor,
                formType: _this.props.formType,
                title: _this.props.title,
                filingDate: _this.props.filingDate
              };
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/updateViewedFilings", params);

            case 6:
              _context2.next = 9;
              break;

            case 8:
              _this.setState({
                modal: !_this.state.modal
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    _this.saveFiling =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                fileLink: _this.props.fileLink,
                badgeColor: _this.props.badgeColor,
                formType: _this.props.formType,
                title: _this.props.title,
                filingDate: _this.props.filingDate
              };
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/addSavedFiling", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: true
                  });
                }
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    _this.unsaveFiling =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                fileLink: _this.props.fileLink,
                badgeColor: _this.props.badgeColor,
                formType: _this.props.formType,
                title: _this.props.title,
                filingDate: _this.props.filingDate
              };
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/removeSavedFiling", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: false
                  });
                }
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    _this.viewExternally =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (_this.state.link) {
                window.open(_this.state.link);
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    _this.state = {
      modal: false,
      data: null,
      link: null,
      saved: false
    };
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FilingCard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this2 = this;

        var config;
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                config = {
                  params: {
                    "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                  }
                };

                if (this.state.saved) {
                  _context6.next = 4;
                  break;
                }

                _context6.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/filingdoc/verifyFilingSaved/?link=".concat(this.props.fileLink), config).then(function (res) {
                  _this2.setState({
                    saved: res.data.savedFiling
                  });
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          badgeColor = _this$props.badgeColor,
          formType = _this$props.formType,
          title = _this$props.title,
          filingDate = _this$props.filingDate;
      var _this$state = this.state,
          modal = _this$state.modal,
          data = _this$state.data,
          saved = _this$state.saved;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
        color: badgeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, formType), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
        className: "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
        flush: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Form Type: ", formType), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Filing Date: ", filingDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, !saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-1",
        outline: true,
        onClick: function onClick() {
          return _this3.saveFiling();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Save") : "", saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-1",
        outline: true,
        onClick: function onClick() {
          return _this3.unsaveFiling();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "UnSave") : "", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-1",
        outline: true,
        onClick: function onClick() {
          return _this3.toggleModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "View"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        isOpen: modal,
        toggle: this.toggleModal,
        className: this.props.className,
        style: {
          maxWidth: '80%',
          margin: "1.7rem auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
        toggle: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], {
        style: {
          overflowY: "scroll"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, data !== null ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: data
        },
        style: {
          maxHeight: "80%",
          overflowY: "scroll"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Loading...")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        color: "primary",
        onClick: function onClick() {
          return _this3.viewExternally();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "View In Browser"), ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        color: "secondary",
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Close"))))));
    }
  }]);

  return FilingCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FilingCard);

/***/ }),

/***/ "./src/components/Card/FilingFrequencyCard.js":
/*!****************************************************!*\
  !*** ./src/components/Card/FilingFrequencyCard.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bit/primefaces.primereact.chart */ "./node_modules/@bit/primefaces.primereact.chart/dist/Chart.js");
/* harmony import */ var _bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/FilingFrequencyCard.js";





var FilingFrequencyCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FilingFrequencyCard, _Component);

  function FilingFrequencyCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FilingFrequencyCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FilingFrequencyCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
          data: [0, 0, 0, 0, 0],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0']
        }]
      },
      filingCount: 5,
      defaultFilings: true
    };
    _this.getFilingFrequency =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("/api/stats/getFilingFrequencyData/?count=".concat(_this.state.filingCount)).then(function (res) {
                // Return array of arrays in format: ['formType', frequency]
                var sorted = res.data;
                var itemFrequency = [];
                var distinctItems = [];
                var total = 0;

                if (sorted) {
                  for (var each = 0; each < sorted.length; each++) {
                    total += sorted[each][1][1];
                  }

                  for (each = 0; each < sorted.length; each++) {
                    itemFrequency.push(Math.round(sorted[each][1][1] / total * 100) / 100);
                    distinctItems.push(sorted[each][1][0]);
                  }

                  _this.setState({
                    data: {
                      labels: distinctItems,
                      datasets: [{
                        data: itemFrequency,
                        backgroundColor: _this.state.data.datasets[0].backgroundColor,
                        hoverBackgroundColor: _this.state.data.datasets[0].hoverBackgroundColor
                      }]
                    },
                    filingCount: _this.state.filingCount,
                    defaultFilings: false
                  });
                }
              }).catch(function (error) {
                console.log('ERROR::Could not get form frequencies.');
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FilingFrequencyCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getFilingFrequency();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          defaultFilings = _this$state.defaultFilings;

      if (defaultFilings) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          className: "m-2",
          style: {
            width: 300
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "Top Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-flex m-3 align-items-center flex-grow-1 justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "spinner-grow d-flex align-items-center",
          style: {
            width: "75px",
            height: "75px"
          },
          role: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "Loading..."))));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "m-2",
        style: {
          width: 300
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Top Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "d-flex m-3 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_9__["Chart"], {
        type: "pie",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })));
    }
  }]);

  return FilingFrequencyCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FilingFrequencyCard);

/***/ }),

/***/ "./src/components/Card/Filings.js":
/*!****************************************!*\
  !*** ./src/components/Card/Filings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _FilingCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FilingCard */ "./src/components/Card/FilingCard.js");





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/Filings.js";





var Filings =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Filings, _React$Component);

  function Filings() {
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filings);

    return Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Filings).apply(this, arguments));
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filings, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          searchExecuted = _this$props.searchExecuted,
          filter = _this$props.filter,
          number = _this$props.number,
          showLoader = _this$props.showLoader,
          apiRoute = _this$props.apiRoute;
      var counter = 0;

      if (showLoader) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "d-flex align-items-center flex-grow-1 justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "spinner-grow d-flex align-items-center",
          style: {
            width: "75px",
            height: "75px"
          },
          role: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "Loading...")));
      }

      if (searchExecuted && data && !data.length) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "d-flex align-items-center flex-grow-1 justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "No Search Results"));
      }

      if (data) {
        return data.map(function (_ref) {
          var title = _ref.title,
              formType = _ref.formType,
              filingDate = _ref.filingDate,
              fileLink = _ref.fileLink;
          var badgeColor = "primary";
          var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_6__["filings"]);

          for (var key = 0; key < values.length; key++) {
            for (var filing = 0; filing < values[key].filingArray.length; filing++) {
              if (formType === values[key].filingArray[filing]) {
                badgeColor = values[key].color;
              }
            }
          }

          if (filter.includes(formType) && (number === "All" || counter < number)) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
              key: counter++,
              xl: 3,
              lg: 4,
              md: 6,
              sm: 8,
              xs: 12,
              className: "mb-3",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_FilingCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
              badgeColor: badgeColor,
              formType: formType,
              title: title,
              filingDate: filingDate,
              fileLink: fileLink,
              apiRoute: apiRoute,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }));
          }

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: counter++,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          });
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });
    }
  }]);

  return Filings;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Filings);

/***/ }),

/***/ "./src/components/Card/FollowedFilingCard.js":
/*!***************************************************!*\
  !*** ./src/components/Card/FollowedFilingCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/FollowedFilingCard.js";





var FollowedFilingCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FollowedFilingCard, _Component);

  function FollowedFilingCard(props) {
    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FollowedFilingCard);

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FollowedFilingCard).call(this, props));
    _this.toggleModal =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_this.state.modal) {
                _context2.next = 8;
                break;
              }

              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("api/filingdoc/getData/?link=".concat(_this.props.fileLink)).then(
              /*#__PURE__*/
              function () {
                var _ref2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                  return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this.setState({
                            modal: !_this.state.modal,
                            data: res.data.html,
                            link: res.data.link
                          });

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 3:
              // Save queried filing as a recent search
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                fileLink: _this.props.fileLink,
                badgeColor: _this.props.badgeColor,
                formType: _this.props.formType,
                title: _this.props.title,
                filingDate: _this.props.filingDate
              };
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/updateViewedFilings", params);

            case 6:
              _context2.next = 9;
              break;

            case 8:
              _this.setState({
                modal: !_this.state.modal
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    _this.saveFiling =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                fileLink: _this.props.fileLink,
                badgeColor: _this.props.badgeColor,
                formType: _this.props.formType,
                title: _this.props.title,
                filingDate: _this.props.filingDate
              };
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/addSavedFiling", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: true
                  });
                }
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    _this.unsaveFiling =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                fileLink: _this.props.fileLink,
                badgeColor: _this.props.badgeColor,
                formType: _this.props.formType,
                title: _this.props.title,
                filingDate: _this.props.filingDate
              };
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/removeSavedFiling", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: false
                  });
                }
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    _this.viewExternally =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (_this.state.link) {
                window.open(_this.state.link);
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    _this.state = {
      modal: false,
      data: null,
      link: null,
      saved: false
    };
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FollowedFilingCard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this2 = this;

        var config;
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                config = {
                  params: {
                    "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                  }
                };

                if (this.state.saved) {
                  _context6.next = 4;
                  break;
                }

                _context6.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/filingdoc/verifyFilingSaved/?link=".concat(this.props.fileLink), config).then(function (res) {
                  _this2.setState({
                    saved: res.data.savedFiling
                  });
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          badgeColor = _this$props.badgeColor,
          formType = _this$props.formType,
          title = _this$props.title,
          filingDate = _this$props.filingDate,
          companyName = _this$props.companyName;
      var _this$state = this.state,
          modal = _this$state.modal,
          data = _this$state.data,
          saved = _this$state.saved;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: {
          margin: "5px",
          minWidth: "250px",
          minHeight: "300px"
        },
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
        color: badgeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, formType), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
        className: "text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
        flush: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, companyName ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, companyName) : '', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Form Type: ", formType), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Filing Date: ", filingDate), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, !saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-1",
        outline: true,
        onClick: function onClick() {
          return _this3.saveFiling();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Save") : "", saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-1",
        outline: true,
        onClick: function onClick() {
          return _this3.unsaveFiling();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "UnSave") : "", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-1",
        outline: true,
        onClick: function onClick() {
          return _this3.toggleModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "View"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        isOpen: modal,
        toggle: this.toggleModal,
        className: this.props.className,
        style: {
          maxWidth: '80%',
          margin: "1.7rem auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
        toggle: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], {
        style: {
          overflowY: "scroll"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, data !== null ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: data
        },
        style: {
          maxHeight: "80%",
          overflowY: "scroll"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Loading...")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        color: "primary",
        onClick: function onClick() {
          return _this3.viewExternally();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "View In Browser"), ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        color: "secondary",
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Close"))))));
    }
  }]);

  return FollowedFilingCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FollowedFilingCard);

/***/ }),

/***/ "./src/components/Card/FormTypeCard.js":
/*!*********************************************!*\
  !*** ./src/components/Card/FormTypeCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/FormTypeCard.js";





var FormTypeCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FormTypeCard, _Component);

  function FormTypeCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FormTypeCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FormTypeCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      saved: false
    };
    _this.saveFormType =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                FormType: _this.props.FormType,
                BadgeColor: _this.props.BadgeColor
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/addSavedFormType", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: true
                  });
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    _this.unsaveFormType =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                FormType: _this.props.FormType,
                BadgeColor: _this.props.BadgeColor
              };
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/removeSavedFormType", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: false
                  });
                }
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FormTypeCard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this2 = this;

        var config;
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                config = {
                  params: {
                    "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                  }
                };

                if (this.state.saved) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/users/verifySavedFormType/?FormType=".concat(this.props.FormType), config).then(function (res) {
                  _this2.setState({
                    saved: res.data.savedFormType
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var saved = this.state.saved;
      var _this$props = this.props,
          FormType = _this$props.FormType,
          BadgeColor = _this$props.BadgeColor;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "m-2 flex-row",
        style: {
          minWidth: "150px",
          height: "min-content",
          width: "fit-content"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        className: "p-2",
        style: {
          margin: "auto 5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
        className: "mr-1",
        color: BadgeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, FormType))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          margin: "auto 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: "min-content",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, !saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-2",
        outline: true,
        onClick: function onClick() {
          return _this3.saveFormType();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Follow") : "", saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-2",
        outline: true,
        onClick: function onClick() {
          return _this3.unsaveFormType();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "UnFollow") : "")));
    }
  }]);

  return FormTypeCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormTypeCard);

/***/ }),

/***/ "./src/components/Card/MarketOverviewCard.js":
/*!***************************************************!*\
  !*** ./src/components/Card/MarketOverviewCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _StockCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockCard */ "./src/components/Card/StockCard.js");
var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/MarketOverviewCard.js";



var usMarkets = [".DJI", ".SPX", "NASDAQ:^RUT", "NASDAQ:^IXIC"];

var MarketOverviewCard = function MarketOverviewCard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "m-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "US Market Overview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex flex-wrap justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex m-0 justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StockCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ticker: usMarkets[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StockCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ticker: usMarkets[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "d-flex m-0 justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StockCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ticker: usMarkets[2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StockCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ticker: usMarkets[3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MarketOverviewCard);

/***/ }),

/***/ "./src/components/Card/RecentSavedFilingsCard.js":
/*!*******************************************************!*\
  !*** ./src/components/Card/RecentSavedFilingsCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _SmallFilingCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SmallFilingCard */ "./src/components/Card/SmallFilingCard.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/RecentSavedFilingsCard.js";







var RecentSavedFilingsCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RecentSavedFilingsCard, _Component);

  function RecentSavedFilingsCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RecentSavedFilingsCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RecentSavedFilingsCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: [],
      filingsCount: 5,
      defaultData: true
    };
    _this.getRecentSavedFilings =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_8__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/stats/getRecentSavedFilings', config).then(function (res) {
                var filings = res.data;

                if (filings && filings.data.length) {
                  _this.setState({
                    data: filings.data.splice(0, _this.state.filingsCount),
                    defaultData: false
                  });
                }
              }).catch(function (error) {
                console.log('ERROR. Could not get recent searches.');
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentSavedFilingsCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getRecentSavedFilings();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          defaultData = _this$state.defaultData;
      var counter = 0;

      if (defaultData) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
          className: "m-2",
          style: {
            width: 350
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Recently Saved Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-flex m-3 align-items-center flex-grow-1 justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "spinner-grow d-flex align-items-center",
          style: {
            width: "75px",
            height: "75px"
          },
          role: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Loading..."))));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        className: "m-2",
        style: {
          width: 350,
          maxHeight: "min-content"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Recently Saved Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, data.map(function (_ref2) {
        var title = _ref2.title,
            formType = _ref2.formType,
            filingDate = _ref2.filingDate,
            fileLink = _ref2.fileLink,
            badgeColor = _ref2.badgeColor;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SmallFilingCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: counter++,
          badgeColor: badgeColor,
          formType: formType,
          title: title,
          filingDate: filingDate,
          fileLink: fileLink,
          previouslySaved: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        to: "/savedfilings",
        style: {
          width: "-webkit-fill-available"
        },
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "View All")));
    }
  }]);

  return RecentSavedFilingsCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentSavedFilingsCard);

/***/ }),

/***/ "./src/components/Card/RecentSearchesCard.js":
/*!***************************************************!*\
  !*** ./src/components/Card/RecentSearchesCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var components_Card_SmallRecentSearchCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card/SmallRecentSearchCard */ "./src/components/Card/SmallRecentSearchCard.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/RecentSearchesCard.js";







var RecentSearchesCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RecentSearchesCard, _Component);

  function RecentSearchesCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RecentSearchesCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RecentSearchesCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: [],
      SearchesCount: 5,
      defaultData: true
    };
    _this.getRecentSearches =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/stats/getRecentSearchData', config).then(function (res) {
                var searches = res.data;

                if (searches && searches.data.length) {
                  _this.setState({
                    data: searches.data.splice(0, _this.state.SearchesCount),
                    defaultData: false
                  });
                }
              }).catch(function (error) {
                console.log('ERROR. Could not get recent searches.');
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentSearchesCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getRecentSearches();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          defaultData = _this$state.defaultData;
      var counter = 0;

      if (defaultData) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          className: "m-2",
          style: {
            width: 270
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Recent Filing Searches"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-flex m-3 align-items-center flex-grow-1 justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "spinner-grow d-flex align-items-center",
          style: {
            width: "75px",
            height: "75px"
          },
          role: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Loading..."))));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "m-2",
        style: {
          width: 270,
          maxHeight: "min-content"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Recent Searches"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, data.map(function (_ref2) {
        var companySearchString = _ref2.companySearchString,
            cikSearchString = _ref2.cikSearchString,
            formTypeSearchString = _ref2.formTypeSearchString,
            dateSearched = _ref2.dateSearched;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Card_SmallRecentSearchCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: counter++,
          companySearchString: companySearchString,
          cikSearchString: cikSearchString,
          formTypeSearchString: formTypeSearchString,
          dateSearched: dateSearched,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }) //<SmallFilingCard key={title} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={htmlLink} previouslySaved={true} />
        ;
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        to: "/searchhistory",
        style: {
          width: "-webkit-fill-available"
        },
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "View All")));
    }
  }]);

  return RecentSearchesCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentSearchesCard);

/***/ }),

/***/ "./src/components/Card/RecentViewedFilingsCard.js":
/*!********************************************************!*\
  !*** ./src/components/Card/RecentViewedFilingsCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SmallFilingCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SmallFilingCard */ "./src/components/Card/SmallFilingCard.js");
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/RecentViewedFilingsCard.js";







var RecentViewedFilingsCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RecentViewedFilingsCard, _Component);

  function RecentViewedFilingsCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RecentViewedFilingsCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RecentViewedFilingsCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: [],
      filingCount: 5,
      defaultData: true
    };
    _this.getRecentlyViewedFilings =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_11__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/stats/getRecentlyViewedFilingData', config).then(function (res) {
                var filings = res.data;

                if (filings && filings.data.length) {
                  _this.setState({
                    data: filings.data.splice(0, _this.state.filingCount),
                    defaultData: false
                  });
                }
              }).catch(function (error) {
                console.log('ERROR. Could not get recently viewed filings.');
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentViewedFilingsCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getRecentlyViewedFilings();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          data = _this$state.data,
          defaultData = _this$state.defaultData;
      var counter = 0;

      if (defaultData) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          className: "m-2",
          style: {
            width: 350
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "Recently Viewed Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-flex m-3 align-items-center flex-grow-1 justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "spinner-grow d-flex align-items-center",
          style: {
            width: "75px",
            height: "75px"
          },
          role: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "Loading..."))));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "m-2",
        style: {
          maxWidth: 350
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Recently Viewed Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, data.map(function (_ref2) {
        var title = _ref2.title,
            formType = _ref2.formType,
            filingDate = _ref2.filingDate,
            fileLink = _ref2.fileLink,
            badgeColor = _ref2.badgeColor;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SmallFilingCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: counter++,
          badgeColor: badgeColor,
          formType: formType,
          title: title,
          filingDate: filingDate,
          fileLink: fileLink,
          previouslySaved: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        to: "/viewedfilings",
        style: {
          width: "-webkit-fill-available"
        },
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "View All")));
    }
  }]);

  return RecentViewedFilingsCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RecentViewedFilingsCard);

/***/ }),

/***/ "./src/components/Card/SmallFilingCard.js":
/*!************************************************!*\
  !*** ./src/components/Card/SmallFilingCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/SmallFilingCard.js";





var SmallFilingCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SmallFilingCard, _Component);

  function SmallFilingCard(props) {
    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SmallFilingCard);

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SmallFilingCard).call(this, props));
    _this.toggleModal =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_this.state.modal) {
                _context2.next = 9;
                break;
              }

              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("api/filingdoc/getData/?link=".concat(_this.props.fileLink)).then(
              /*#__PURE__*/
              function () {
                var _ref2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                  return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this.setState({
                            modal: !_this.state.modal,
                            data: res.data.html,
                            link: res.data.link
                          });

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 3:
              if (_this.props.previouslySaved) {
                _context2.next = 7;
                break;
              }

              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                htmlLink: _this.props.fileLink
              };
              _context2.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/updateViewedFilings", params);

            case 7:
              _context2.next = 10;
              break;

            case 9:
              _this.setState({
                modal: !_this.state.modal
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    _this.saveFiling =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                fileLink: _this.props.fileLink,
                badgeColor: _this.props.badgeColor,
                formType: _this.props.formType,
                title: _this.props.title,
                filingDate: _this.props.filingDate
              };
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/addSavedFiling", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: true
                  });
                }
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    _this.unsaveFiling =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                fileLink: _this.props.fileLink,
                badgeColor: _this.props.badgeColor,
                formType: _this.props.formType,
                title: _this.props.title,
                filingDate: _this.props.filingDate
              };
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/removeSavedFiling", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    saved: false
                  });
                }
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    _this.viewExternally =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (_this.state.link) {
                window.open(_this.state.link);
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    _this.state = {
      modal: false,
      data: null,
      link: null,
      saved: false
    };
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SmallFilingCard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this2 = this;

        var config;
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                config = {
                  params: {
                    "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                  }
                };

                if (this.state.saved) {
                  _context6.next = 4;
                  break;
                }

                _context6.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/filingdoc/verifyFilingSaved/?link=".concat(this.props.fileLink), config).then(function (res) {
                  _this2.setState({
                    saved: res.data.savedFiling
                  });
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          badgeColor = _this$props.badgeColor,
          formType = _this$props.formType,
          title = _this$props.title,
          filingDate = _this$props.filingDate;
      var _this$state = this.state,
          modal = _this$state.modal,
          data = _this$state.data,
          saved = _this$state.saved;
      var entityName = title.slice(title.indexOf("-") + 2, title.indexOf("("));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "m-2 flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
        className: "mr-1",
        color: badgeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, formType), entityName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, filingDate)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          margin: "auto 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: "min-content",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, !saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-2",
        outline: true,
        onClick: function onClick() {
          return _this3.saveFiling();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Save") : "", saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "m-2",
        outline: true,
        onClick: function onClick() {
          return _this3.unsaveFiling();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "UnSave") : "", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        className: "m-2",
        onClick: function onClick() {
          return _this3.toggleModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "View"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        isOpen: modal,
        toggle: this.toggleModal,
        className: this.props.className,
        style: {
          maxWidth: '80%',
          margin: "1.7rem auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
        toggle: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], {
        style: {
          overflowY: "scroll"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, data !== null ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: data
        },
        style: {
          maxHeight: "80%",
          overflowY: "scroll"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Loading...")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, !saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        onClick: function onClick() {
          return _this3.saveFiling();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Save") : "", saved ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        onClick: function onClick() {
          return _this3.unsaveFiling();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "UnSave") : "", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        color: "primary",
        onClick: function onClick() {
          return _this3.viewExternally();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "View In Browser"), ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        color: "secondary",
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Close"))))));
    }
  }]);

  return SmallFilingCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SmallFilingCard);

/***/ }),

/***/ "./src/components/Card/SmallRecentSearchCard.js":
/*!******************************************************!*\
  !*** ./src/components/Card/SmallRecentSearchCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/SmallRecentSearchCard.js";




var SmallRecentSearchCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SmallRecentSearchCard, _Component);

  function SmallRecentSearchCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SmallRecentSearchCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SmallRecentSearchCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SmallRecentSearchCard, [{
    key: "render",
    value: function render() {
      // { dateSearched } = this.props
      var _this$props = this.props,
          companySearchString = _this$props.companySearchString,
          cikSearchString = _this$props.cikSearchString,
          formTypeSearchString = _this$props.formTypeSearchString;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "m-2 flex-row",
        style: {
          minWidth: "150px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        className: "p-2 m-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, companySearchString ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-flex",
        style: {
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          margin: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdAccountBalance"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), " ", companySearchString)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), cikSearchString ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-flex",
        style: {
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          margin: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdFingerprint"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), " ", cikSearchString)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), formTypeSearchString ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-flex",
        style: {
          justifyContent: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          margin: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdLabelOutline"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), " ", formTypeSearchString)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          width: "min-content",
          margin: "0px auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        outline: true,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Search"))));
    }
  }]);

  return SmallRecentSearchCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SmallRecentSearchCard);

/***/ }),

/***/ "./src/components/Card/StockCard.js":
/*!******************************************!*\
  !*** ./src/components/Card/StockCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/StockCard.js";




var StockCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StockCard, _Component);

  function StockCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StockCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(StockCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      symbol: "",
      open: "",
      high: "",
      low: "",
      price: "",
      volume: "",
      prevTradingDay: "",
      prevClose: "",
      change: "",
      changePercent: ""
    };
    _this.getDataFromAV =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(_this.props.ticker, "&apikey=").concat(Object({"NODE_ENV":"development","PUBLIC_URL":"","REACT_APP_API_URL":"/","REACT_APP_API_LOGIN_TOKEN_NAME":"UserToken","REACT_APP_TITLE":"D2C Portal","REACT_APP_DESCRIPTION":"React portal for District 2 Capital","REACT_APP_SOURCE_URL":"https://github.com/District2Capital/portal"}).ALPHAVANTAGEAPIKEY)).then(function (res) {
                var stockInfo = res.data["Global Quote"];

                if (stockInfo) {
                  _this.setState({
                    symbol: stockInfo["01. symbol"],
                    open: stockInfo["02. open"],
                    high: stockInfo["03. high"].slice(0, -2),
                    low: stockInfo["04. low"].slice(0, -2),
                    price: "$" + stockInfo["05. price"].slice(0, -2),
                    volume: stockInfo["06. volumne"],
                    prevTradingDay: stockInfo["07. latest trading day"],
                    prevClose: stockInfo["08. previous close"],
                    change: stockInfo["09. change"].slice(0, -2),
                    changePercent: stockInfo["10. change percent"].slice(0, -3) + "%"
                  });
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.handleCardColor = function () {
      var change = _this.state.change;

      if (change === "" || change === 0) {
        return 'secondary';
      } else if (change > 0) {
        return 'green';
      }

      return 'red';
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StockCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getDataFromAV();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          symbol = _this$state.symbol,
          price = _this$state.price,
          change = _this$state.change,
          changePercent = _this$state.changePercent;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "m-2",
        style: {
          width: "140px"
        },
        color: this.handleCardColor(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, symbol), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, price), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, change), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, changePercent)));
    }
  }]);

  return StockCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StockCard);

/***/ }),

/***/ "./src/components/Card/UserCard.js":
/*!*****************************************!*\
  !*** ./src/components/Card/UserCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/propTypes */ "./src/utils/propTypes.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Avatar */ "./src/components/Avatar.js");

var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Card/UserCard.js";






var UserCard = function UserCard(_ref) {
  var avatar = _ref.avatar,
      avatarSize = _ref.avatarSize,
      title = _ref.title,
      subtitle = _ref.subtitle,
      text = _ref.text,
      children = _ref.children,
      className = _ref.className,
      restProps = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["avatar", "avatarSize", "title", "subtitle", "text", "children", "className"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('bg-gradient-theme', className);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], Object.assign({
    inverse: true,
    className: classes
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
    className: "d-flex justify-content-center align-items-center flex-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: avatar,
    size: avatarSize,
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardSubtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, subtitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, text))), children);
};

UserCard.propTypes = {
  avatar: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  avatarSize: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].number,
  title: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  subtitle: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  text: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  className: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string
};
UserCard.defaultProps = {
  avatarSize: 80
};
/* harmony default export */ __webpack_exports__["default"] = (UserCard);

/***/ }),

/***/ "./src/components/Card/index.js":
/*!**************************************!*\
  !*** ./src/components/Card/index.js ***!
  \**************************************/
/*! exports provided: UserCard, AnnouncementCard, Filings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCard */ "./src/components/Card/UserCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserCard", function() { return _UserCard__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AnnouncementCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnouncementCard */ "./src/components/Card/AnnouncementCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnnouncementCard", function() { return _AnnouncementCard__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Filings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filings */ "./src/components/Card/Filings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filings", function() { return _Filings__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/components/CompanySearchForm.js":
/*!*********************************************!*\
  !*** ./src/components/CompanySearchForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/CompanySearchForm.js";



var CompanySearchForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CompanySearchForm, _React$Component);

  function CompanySearchForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CompanySearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CompanySearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      company: ""
    };

    _this.handleEnterClicked =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var code;
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                code = e.key;

                if (!(code === 'Enter')) {
                  _context.next = 5;
                  break;
                }

                e.preventDefault();
                _context.next = 5;
                return _this.props.searchHandler(_this.state.company);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CompanySearchForm, [{
    key: "handleCompanyChange",
    value: function handleCompanyChange(e) {
      this.setState({
        company: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Search Parameters"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "my-2",
        sm: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        for: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Company")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "my-2",
        sm: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "company",
        name: "company",
        placeholder: "Company Name",
        onChange: function onChange(e) {
          return _this2.handleCompanyChange(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.handleEnterClicked(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "my-2",
        sm: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        className: "float-right",
        onClick: function onClick() {
          return _this2.props.searchHandler(_this2.state.company);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Search"))))));
    }
  }]);

  return CompanySearchForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CompanySearchForm);

/***/ }),

/***/ "./src/components/FilingDocs.js":
/*!**************************************!*\
  !*** ./src/components/FilingDocs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/FilingDocs.js";




var FilingDocs = function FilingDocs() {
  var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_1__["filings"]);
  var keys = Object.keys(_config__WEBPACK_IMPORTED_MODULE_1__["filings"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, values.map(function (value, valueindex) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: value + valueindex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, keys[valueindex]), value.filingArray.map(function (filing, filingindex) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: filing + filingindex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        color: value.color || "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, filing), " - ", filing, " - ", value.descriptionArray[filingindex]);
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FilingDocs);

/***/ }),

/***/ "./src/components/FormTypeSearchForm.js":
/*!**********************************************!*\
  !*** ./src/components/FormTypeSearchForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/FormTypeSearchForm.js";



var FormTypeSearchForm =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FormTypeSearchForm, _Component);

  function FormTypeSearchForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FormTypeSearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FormTypeSearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      FormType: ""
    };

    _this.handleFormTypeChange =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  FormType: e.target.value
                });

                _context.next = 3;
                return _this.props.searchHandler(_this.state.FormType);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleEnterClicked =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var code;
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                code = e.key;

                if (!(code === 'Enter')) {
                  _context2.next = 5;
                  break;
                }

                e.preventDefault();
                _context2.next = 5;
                return _this.props.searchHandler(_this.state.FormType);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FormTypeSearchForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Search Parameters"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "my-2",
        sm: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        for: "FormType",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "FormType")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "my-2",
        sm: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "FormType",
        name: "FormType",
        placeholder: "FormType Name",
        onChange: function onChange(e) {
          return _this2.handleFormTypeChange(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.handleEnterClicked(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "my-2",
        sm: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        className: "float-right",
        onClick: function onClick() {
          return _this2.props.searchHandler(_this2.state.FormType);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Search"))))));
    }
  }]);

  return FormTypeSearchForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormTypeSearchForm);

/***/ }),

/***/ "./src/components/Layout/Content.js":
/*!******************************************!*\
  !*** ./src/components/Layout/Content.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_bemnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/bemnames */ "./src/utils/bemnames.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Layout/Content.js";



var bem = utils_bemnames__WEBPACK_IMPORTED_MODULE_2__["default"].create('content');

var Content = function Content(_ref) {
  var Tag = _ref.tag,
      className = _ref.className,
      restProps = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["tag", "className"]);

  var classes = bem.b(className);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, Object.assign({
    className: classes
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

Content.defaultProps = {
  tag: reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"]
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Layout/EmptyLayout.js":
/*!**********************************************!*\
  !*** ./src/components/Layout/EmptyLayout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Layout/EmptyLayout.js";



var EmptyLayout = function EmptyLayout(_ref) {
  var children = _ref.children,
      restProps = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", Object.assign({
    className: "cr-app bg-light"
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyLayout);

/***/ }),

/***/ "./src/components/Layout/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Layout/Footer.js";



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Layout/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var components_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Avatar */ "./src/components/Avatar.js");
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Card */ "./src/components/Card/index.js");
/* harmony import */ var components_SearchInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SearchInput */ "./src/components/SearchInput.js");
/* harmony import */ var assets_defaultUser_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/defaultUser.png */ "./src/assets/defaultUser.png");
/* harmony import */ var assets_defaultUser_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_defaultUser_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var utils_bemnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/bemnames */ "./src/utils/bemnames.js");





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Layout/Header.js";








var bem = utils_bemnames__WEBPACK_IMPORTED_MODULE_12__["default"].create('header');

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isOpenUserCardPopover: false
    };

    _this.toggleUserCardPopover = function () {
      _this.setState({
        isOpenUserCardPopover: !_this.state.isOpenUserCardPopover
      });
    };

    _this.handleSidebarControlButton = function (event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"], {
        light: true,
        expand: true,
        className: bem.b('bg-white'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
        navbar: true,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        outline: true,
        onClick: this.handleSidebarControlButton,
        className: "shadow-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdClearAll"], {
        size: 25,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components_SearchInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
        className: "ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        id: "Popover2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: this.toggleUserCardPopover,
        src: assets_defaultUser_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        className: "can-click",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
        placement: "bottom-end",
        isOpen: this.state.isOpenUserCardPopover,
        toggle: this.toggleUserCardPopover,
        target: "Popover2",
        className: "p-0 border-0",
        style: {
          minWidth: 250
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["PopoverBody"], {
        className: "p-0 border-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components_Card__WEBPACK_IMPORTED_MODULE_6__["UserCard"], {
        title: "",
        subtitle: "",
        text: "",
        avatar: assets_defaultUser_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        className: "border-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ListGroup"], {
        flush: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ListGroupItem"], {
        tag: "button",
        action: true,
        className: "border-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdPersonPin"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), " Profile"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ListGroupItem"], {
        tag: "button",
        action: true,
        onClick: function onClick() {
          localStorage.removeItem("UserToken");
          window.location = "/";
        },
        className: "border-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdExitToApp"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), " Signout"))))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout/LayoutRoute.js":
/*!**********************************************!*\
  !*** ./src/components/Layout/LayoutRoute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Layout/LayoutRoute.js";



var LayoutRoute = function LayoutRoute(_ref) {
  var Component = _ref.component,
      Layout = _ref.layout,
      rest = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "layout"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutRoute);

/***/ }),

/***/ "./src/components/Layout/MainLayout.js":
/*!*********************************************!*\
  !*** ./src/components/Layout/MainLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_notification_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-notification-system */ "./node_modules/react-notification-system/dist/NotificationSystem.js");
/* harmony import */ var react_notification_system__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_notification_system__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Layout/MainLayout.js";





var MainLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainLayout, _React$Component);

  function MainLayout() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleContentClick = function (event) {
      // close sidebar if sidebar is open and screen size is less than `md`
      if (MainLayout.isSidebarOpen() && (_this.props.breakpoint === 'xs' || _this.props.breakpoint === 'sm' || _this.props.breakpoint === 'md')) {
        _this.openSidebar('close');
      }
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainLayout, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var breakpoint = _ref.breakpoint;

      if (breakpoint !== this.props.breakpoint) {
        this.checkBreakpoint(breakpoint);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.checkBreakpoint(this.props.breakpoint);

      if (window.innerWidth < 700) {
        this.openSidebar('close');
      }

      setTimeout(function () {
        if (!_this2.notificationSystem) {
          return;
        }
        /*this.notificationSystem.addNotification({
          title: <MdImportantDevices />,
          message: 'Welome to Reduction Admin!',
          level: 'info',
        });*/

      }, 1500);
    } // close sidebar when

  }, {
    key: "checkBreakpoint",
    value: function checkBreakpoint(breakpoint) {
      switch (breakpoint) {
        case 'xs':
        case 'sm':
        case 'md':
          return this.openSidebar('close');

        case 'lg':
        case 'xl':
        default:
          return this.openSidebar('open');
      }
    }
  }, {
    key: "openSidebar",
    value: function openSidebar(openOrClose) {
      if (openOrClose === 'open') {
        return document.querySelector('.cr-sidebar').classList.add('cr-sidebar--open');
      }

      document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
        className: "cr-app bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_5__["Sidebar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_5__["Content"], {
        style: {
          width: "-webkit-fill-available"
        },
        fluid: true,
        onClick: this.handleContentClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_5__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), children, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_notification_system__WEBPACK_IMPORTED_MODULE_7___default.a, {
        dismissible: false,
        ref: function ref(notificationSystem) {
          return _this3.notificationSystem = notificationSystem;
        },
        style: utils_constants__WEBPACK_IMPORTED_MODULE_8__["NOTIFICATION_SYSTEM_STYLE"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }));
    }
  }], [{
    key: "isSidebarOpen",
    value: function isSidebarOpen() {
      return document.querySelector('.cr-sidebar').classList.contains('cr-sidebar--open');
    }
  }]);

  return MainLayout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./src/components/Layout/Sidebar.js":
/*!******************************************!*\
  !*** ./src/components/Layout/Sidebar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_logo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_SourceLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SourceLink */ "./src/components/SourceLink.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var utils_bemnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/bemnames */ "./src/utils/bemnames.js");






var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Layout/Sidebar.js";







var navItems = [{
  to: '/',
  name: 'Dashboard',
  exact: true,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdDashboard"]
}, {
  to: '/myfeed',
  name: 'My Feed',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdRssFeed"]
}, {
  to: '/secfilings',
  name: 'SEC Feed',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdRssFeed"]
}]; //{ to: '/filingreader', name: 'Filing Reader', exact: false, Icon: MdFindInPage },
//{ to: '/stock', name: 'Stock Analysis', exact: false, Icon: MdShowChart }

var Search = [{
  to: '/search',
  name: 'Filing Search',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSearch"]
}, {
  to: '/companysearch',
  name: 'Company Search',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSearch"]
}, {
  to: '/formtypesearch',
  name: 'FormType Search',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSearch"]
}];
var Personal = [{
  to: '/mycompanies',
  name: 'My Companies',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdFavoriteBorder"]
}, {
  to: '/myformtypes',
  name: 'My FormTypes',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdFavoriteBorder"]
}, {
  to: '/savedfilings',
  name: 'Saved Filings',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdFavoriteBorder"]
}, {
  to: '/viewedfilings',
  name: 'Viewed Filings',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdRemoveRedEye"]
}, {
  to: '/searchhistory',
  name: 'Search History',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdHistory"]
}];
var referenceDocs = [{
  to: '/filingDocs',
  name: 'Filing Docs',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdDescription"]
}];
var Others = [{
  to: '/spreadsheet',
  name: 'Filings Spreadsheet',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdList"]
}, {
  to: '/sechistorical',
  name: 'SEC Historical',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdRssFeed"]
}, {
  to: '/xbrlfilings',
  name: 'XBRL Filings',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdRssFeed"]
}, {
  to: '/xbrlhistorical',
  name: 'XBRL Historical',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdHistory"]
}];
var Settings = {
  to: '/settings',
  name: 'Settings',
  exact: false,
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSettings"]
};
var bem = utils_bemnames__WEBPACK_IMPORTED_MODULE_12__["default"].create('sidebar');

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sidebar, _React$Component);

  function Sidebar() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Sidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isOpenReferenceDocs: false,
      isOpenOthers: false,
      isOpenPersonal: false,
      isOpenSearch: false
    };

    _this.handleClick = function (name) {
      return function () {
        _this.setState(function (prevState) {
          var isOpen = prevState["isOpen".concat(name)];
          return Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "isOpen".concat(name), !isOpen);
        });
      };
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sidebar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("aside", {
        className: bem.b(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: bem.e('background'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: bem.e('content'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"], {
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_SourceLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        width: "100",
        height: "50",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
        vertical: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, navItems.map(function (_ref2, index) {
        var to = _ref2.to,
            name = _ref2.name,
            exact = _ref2.exact,
            Icon = _ref2.Icon;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
          key: index,
          className: bem.e('nav-item'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
          id: "navItem-".concat(name, "-").concat(index),
          className: "text-uppercase",
          tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__["NavLink"],
          to: to,
          activeClassName: "active",
          exact: exact,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Icon, {
          className: bem.e('nav-item-icon'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, name)));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: bem.e('nav-item'),
        onClick: this.handleClick('Search'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: bem.e('nav-item-collapse'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdSearch"], {
        className: bem.e('nav-item-icon'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: " align-self-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "SEARCH")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdKeyboardArrowDown"], {
        className: bem.e('nav-item-icon'),
        style: {
          padding: 0,
          transform: this.state.isOpenSearch ? 'rotate(0deg)' : 'rotate(-90deg)',
          transitionDuration: '0.3s',
          transitionProperty: 'transform'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Collapse"], {
        isOpen: this.state.isOpenSearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, Search.map(function (_ref3, index) {
        var to = _ref3.to,
            name = _ref3.name,
            exact = _ref3.exact,
            Icon = _ref3.Icon;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
          key: index,
          className: bem.e('nav-item'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
          id: "navItem-".concat(name, "-").concat(index),
          className: "text-uppercase",
          tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__["NavLink"],
          to: to,
          activeClassName: "active",
          exact: exact,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Icon, {
          className: bem.e('nav-item-icon'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, name)));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: bem.e('nav-item'),
        onClick: this.handleClick('Personal'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: bem.e('nav-item-collapse'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdAccountCircle"], {
        className: bem.e('nav-item-icon'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: " align-self-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "PERSONAL")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdKeyboardArrowDown"], {
        className: bem.e('nav-item-icon'),
        style: {
          padding: 0,
          transform: this.state.isOpenPersonal ? 'rotate(0deg)' : 'rotate(-90deg)',
          transitionDuration: '0.3s',
          transitionProperty: 'transform'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Collapse"], {
        isOpen: this.state.isOpenPersonal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, Personal.map(function (_ref4, index) {
        var to = _ref4.to,
            name = _ref4.name,
            exact = _ref4.exact,
            Icon = _ref4.Icon;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
          key: index,
          className: bem.e('nav-item'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
          id: "navItem-".concat(name, "-").concat(index),
          className: "text-uppercase",
          tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__["NavLink"],
          to: to,
          activeClassName: "active",
          exact: exact,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Icon, {
          className: bem.e('nav-item-icon'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, name)));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: bem.e('nav-item'),
        onClick: this.handleClick('ReferenceDocs'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: bem.e('nav-item-collapse'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdBook"], {
        className: bem.e('nav-item-icon'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: " align-self-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "REFERENCE DOCS")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdKeyboardArrowDown"], {
        className: bem.e('nav-item-icon'),
        style: {
          padding: 0,
          transform: this.state.isOpenReferenceDocs ? 'rotate(0deg)' : 'rotate(-90deg)',
          transitionDuration: '0.3s',
          transitionProperty: 'transform'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Collapse"], {
        isOpen: this.state.isOpenReferenceDocs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, referenceDocs.map(function (_ref5, index) {
        var to = _ref5.to,
            name = _ref5.name,
            exact = _ref5.exact,
            Icon = _ref5.Icon;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
          key: index,
          className: bem.e('nav-item'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
          id: "navItem-".concat(name, "-").concat(index),
          className: "text-uppercase",
          tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__["NavLink"],
          to: to,
          activeClassName: "active",
          exact: exact,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Icon, {
          className: bem.e('nav-item-icon'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, name)));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        className: bem.e('nav-item'),
        onClick: this.handleClick('Others'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: bem.e('nav-item-collapse'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdMoreHoriz"], {
        className: bem.e('nav-item-icon'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: " align-self-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Others")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdKeyboardArrowDown"], {
        className: bem.e('nav-item-icon'),
        style: {
          padding: 0,
          transform: this.state.isOpenOthers ? 'rotate(0deg)' : 'rotate(-90deg)',
          transitionDuration: '0.3s',
          transitionProperty: 'transform'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Collapse"], {
        isOpen: this.state.isOpenOthers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, Others.map(function (_ref6, index) {
        var to = _ref6.to,
            name = _ref6.name,
            exact = _ref6.exact,
            Icon = _ref6.Icon;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
          key: index,
          className: bem.e('nav-item'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
          id: "navItem-".concat(name, "-").concat(index),
          className: "text-uppercase",
          tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__["NavLink"],
          to: to,
          activeClassName: "active",
          exact: exact,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Icon, {
          className: bem.e('nav-item-icon'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, name)));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], {
        key: "Settings",
        className: bem.e('nav-item'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        id: "navItem-".concat(Settings.name, "-Settings"),
        className: "text-uppercase",
        tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__["NavLink"],
        to: Settings.to,
        activeClassName: "active",
        exact: Settings.exact,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Settings.Icon, {
        className: bem.e('nav-item-icon'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, Settings.name))))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: Content, EmptyLayout, Footer, Header, LayoutRoute, MainLayout, Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./src/components/Layout/Content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _Content__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _EmptyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyLayout */ "./src/components/Layout/EmptyLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyLayout", function() { return _EmptyLayout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Layout/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Layout/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _LayoutRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutRoute */ "./src/components/Layout/LayoutRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutRoute", function() { return _LayoutRoute__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainLayout */ "./src/components/Layout/MainLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return _MainLayout__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Layout/Sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/propTypes */ "./src/utils/propTypes.js");
/* harmony import */ var utils_bemnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/bemnames */ "./src/utils/bemnames.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Typography */ "./src/components/Typography.js");

var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Page.js";





var bem = utils_bemnames__WEBPACK_IMPORTED_MODULE_3__["default"].create('page');

var Page = function Page(_ref) {
  var title = _ref.title,
      breadcrumbs = _ref.breadcrumbs,
      Tag = _ref.tag,
      className = _ref.className,
      children = _ref.children,
      restProps = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["title", "breadcrumbs", "tag", "className", "children"]);

  var classes = bem.b('px-3', className);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, Object.assign({
    className: classes
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: bem.e('header'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, title && typeof title === 'string' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "h1",
    className: bem.e('title'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, title) : title, breadcrumbs && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"], {
    className: bem.e('breadcrumb'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Home"), breadcrumbs.length && breadcrumbs.map(function (_ref2, index) {
    var name = _ref2.name,
        active = _ref2.active;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbItem"], {
      key: index,
      active: active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, name);
  }))), children);
};

Page.propTypes = {
  tag: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].component,
  title: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].oneOfType([utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string, utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].element]),
  className: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
  children: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].node,
  breadcrumbs: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].arrayOf(utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].shape({
    name: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].string,
    active: utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"].bool
  }))
};
Page.defaultProps = {
  tag: 'div',
  title: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/SearchForm.js":
/*!**************************************!*\
  !*** ./src/components/SearchForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/SearchForm.js";



var SearchForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchForm, _React$Component);

  function SearchForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      company: "",
      type: "",
      cik: ""
    };

    _this.handleEnterClicked =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var code;
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                code = e.key;

                if (!(code === 'Enter')) {
                  _context.next = 5;
                  break;
                }

                e.preventDefault();
                _context.next = 5;
                return _this.props.searchHandler(_this.state.company, _this.state.type, _this.state.cik);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchForm, [{
    key: "handleCompanyChange",
    value: function handleCompanyChange(e) {
      this.setState({
        company: e.target.value
      });
    }
  }, {
    key: "handleTypeChange",
    value: function handleTypeChange(e) {
      this.setState({
        type: e.target.value
      });
    }
  }, {
    key: "handleCIKChange",
    value: function handleCIKChange(e) {
      this.setState({
        cik: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //let { company, type, cik } = this.state;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Search Parameters"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        for: "company",
        sm: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Company"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "company",
        name: "company",
        placeholder: "Company Name",
        onChange: function onChange(e) {
          return _this2.handleCompanyChange(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.handleEnterClicked(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        for: "cik",
        sm: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "CIK"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "cik",
        name: "cik",
        placeholder: "Company CIK",
        onChange: function onChange(e) {
          return _this2.handleCIKChange(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.handleEnterClicked(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        for: "type",
        sm: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Form Type"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        type: "type",
        name: "type",
        placeholder: "Form Type",
        onChange: function onChange(e) {
          return _this2.handleTypeChange(e);
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.handleEnterClicked(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        row: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: {
          size: 9,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        outline: true,
        className: "float-right",
        onClick: function onClick() {
          return _this2.props.searchHandler(_this2.state.company, _this2.state.type, _this2.state.cik);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Search"))))));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./src/components/SearchInput.js":
/*!***************************************!*\
  !*** ./src/components/SearchInput.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/SearchInput.js";




var SearchInput = function SearchInput() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    className: "cr-search-form",
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdSearch"], {
    size: "20",
    className: "cr-search-form__icon-search text-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "search",
    className: "cr-search-form__input",
    placeholder: "Search...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ }),

/***/ "./src/components/SourceLink.js":
/*!**************************************!*\
  !*** ./src/components/SourceLink.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/SourceLink.js";


var SourceLink = function SourceLink(props) {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", Object.assign({
    href: "https://github.com/District2Capital/portal",
    target: "_blank",
    rel: "noopener noreferrer"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SourceLink);

/***/ }),

/***/ "./src/components/Typography.js":
/*!**************************************!*\
  !*** ./src/components/Typography.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/propTypes */ "./src/utils/propTypes.js");


var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/components/Typography.js";



var tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'display-1': 'h1',
  'display-2': 'h1',
  'display-3': 'h1',
  'display-4': 'h1',
  p: 'p',
  lead: 'p',
  blockquote: 'blockquote'
};
var types = Object.keys(tagMap);

var Typography = function Typography(_ref) {
  var Tag = _ref.tag,
      className = _ref.className,
      type = _ref.type,
      restProps = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["tag", "className", "type"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, type, !!type), className);
  var TypoComp;

  if (Tag) {
    TypoComp = Tag;
  } else if (!Tag && tagMap[type]) {
    TypoComp = tagMap[type];
  } else {
    TypoComp = 'p';
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TypoComp, Object.assign({}, restProps, {
    className: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

Typography.propTypes = {
  tag: utils_propTypes__WEBPACK_IMPORTED_MODULE_4__["default"].component,
  className: utils_propTypes__WEBPACK_IMPORTED_MODULE_4__["default"].string,
  type: utils_propTypes__WEBPACK_IMPORTED_MODULE_4__["default"].oneOf(types)
};
Typography.defaultProps = {
  type: 'p'
};
/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "./src/config/filings.js":
/*!*******************************!*\
  !*** ./src/config/filings.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  'Registration Statements': {
    "color": "success",
    "filingArray": ["S-1", "S-1/A", "S-1MEF", "POS AM", "S-2", "S-2/A", "S-2MEF", "S-3", "S-3/A", "S-3MEF", "S-3D", "S-3D/A", "S-3DPOS", "S-4", "S-4/A", "S-4EF", "S-4EF/A", "S-4 POS", "S-4MEF", "S-6", "S-6/A", "S-8", "S-8/A", "S-8 POS", "S-11", "S-11/A", "S-11MEF", "S-20", "S-20/A", "SB-1", "SB-1/A", "SB-1MEF", "SB-2", "SB-2/A", "SB-2MEF", "POS AM", "POS AMI", "424A", "424B1", "424B2", "424B3", "424B4", "424B5", "425", "DEL AM", "497", "497J", "S-6", "S-6/A", "497K1", "487", "10-12B", "10-12B/A", "10-12G", "10-12G/A", "10SB12B", "10SB12B/A", "10SB12G", "10SB12G/A", "18-12B", "18-12B/A", "18-12G", "18-12G/A", "N-8B-2", "N-8B-2/A", "N-1", "N-1/A", "N-1A", "N-2", "N-2/A", "N-3", "N-3/A", "N-4", "N-4/A", "N-5", "N-5/A", "N-14", "N-14/A", "N-14/AE", "N-14/AE/A", "N-14 8C", "N-14 8C/A", "F-1", "F-1/A", "F-1MEF", "F-2", "F-2/A", "F-2D", "F-2DPOS", "F-2MEF", "F-3MEF", "F-4MEF", "F-9MEF", "F-10MEF", "F-3", "F-3/A", "F-3D", "F-3DPOS", "F-4", "F-4/A", "F-6", "F-6/A", "F-6 POS", "F-6EF", "F-6EF/A", "20FR12B", "20FR12B/A", "20FR12G", "20FR12G/A", "24F-1", "24F-2EL", "24F-2EL/A", "24F-2NT", "24F-2NT/A", "POS462B", "POS462C", "8-A12B", "8-A12B/A", "8-A12G", "8-A12G/A", "8-B12B", "8-B12B/A", "8-B12G", "8-B12G/A", "8A12BEF", "8A12BT", "8A12BT/A", "485A24E", "485A24F", "485APOS", "485B24E", "485B24F", "485BPOS"],
    "descriptionArray": ["This filing is a pre-effective registration statement submitted when a company decides to go public. Commonly referred to as an 'IPO' (Initial Public Offering) filing.", "This filing is a pre-effective amendment to an S-1 IPO filing.", "Registration of up to an additional 20% of securities for any offering registered on an S-1.", "This filing is a post-effective amendment to an S-Type filing.", "This filing is an optional registration form that may be used by companies which have reported under the '34 Act for a minimum of three years and have timely filed all required reports during the 12 calendar months and any portion of the month immediately preceding the filing of the registration statement.", "This filing is a pre-effective amendment to an S-2 filing.", "Registration of up to an additional 20% of securities for any offering registered on an S-2.", "This filing is the most simplified registration form and it may only be used by companies which have reported under the '34 Act for a minimum of twelve months and meet the timely filing requirements set forth under Form S-2. The filing company must also meet the stringent qualitative tests prescribed by the form.", "This filing is a pre-effective amendment to an S-3 filing.", "Registration of up to an additional 20% of securities for any offering registered on a S-3.", "Registration statement of securities pursuant to dividend or interest reinvestment plans which become effective automatically upon filing.", "Amendment to a previously filed S-3D.", "This filing is a post-effective amendment to an S-3D filing.", "This filing is for the registration of securities issued in business combination transactions.", "This filing is a pre-effective amendment to an S-4 filing.", "Filed when securities are issued in connection with the formation of a bank, savings and loan, or holding company.", "This filing is a pre-effective amendment to an S-4EF filing.", "This filing is a post-effective amendment to an S-4EF filing.", "Registration pursuant to Securities Act Rule 462(b) of up to an additional 20% of securities for an offering that was registered on a Form S-3.", "Initial registration statement for unit investment trusts.", "This filing is a pre-effective amendment to an S-6 filing.", "This filing is required when securities are to be offered to employees pursuant to employee benefit plans.", "Amendment to a previously filed S-8.", "This filing is a post-effective amendment to an S-8 filing.", "Filing for the registration of securities of certain real estate companies.", "This filing is a pre-effective amendment to an S-11 filing.", "Registration of up to an additional 20% of securities for any offering registered on a S-11.", "Initial registration statement for standardized options.", "Amendment to a previously filed S-20.", "An optional filing for small business issuers for the registration of securities to be sold to the public.", "This filing is a pre-effective amendment to an SB-1 filing.", "Registration of up to an additional 20% of securities for any offering registered on a SB-1.", "Also an optional filing for small business issuers for the registration of securities to be sold to the public.", "This filing is a pre-effective amendment to an SB-2 filing.", "Registration of up to an additional 20% of securities for any offering registered on a SB-2.", "Post-effective amendments.", "Post-effective amendments.", "Contains substantive changes from or additions to a prospectus previously filed with the SEC as part of the registration statement.", "A form of prospectus that discloses information previously omitted from the prospectus filed as part of a registration statement.", "A form of prospectus filed in connection with a primary offering of securities on a delayed basis which includes the public offering price, description of securities and specific method of distribution.", "A form of prospectus that reflects facts or events that constitute a substantive change from or addition to the information set forth in the last form of prospectus filed with the SEC.", "A form of prospectus that discloses information, facts or events covered in both form 424B1 and form 424B3.", "A form of prospectus that discloses information, facts or events covered in both form 424B2 and form 424B3.", "Filing of certain prospectuses and communications in connection with business combination transactions.", "Delaying amendment.", "Definitive materials filed by investment companies.", "Certification of no change in definitive materials.", "Registration statement for unit investment trusts.", "Pre-effective amendment to a S-6.", "Profiles for certain open-end management investment companies.", "Pre-effective pricing amendment.", "A general registration filing of securities pursuant to section 12(b) of the Securities Exchange Act.", "Amendment to a previously filed 10-12B.", "A general registration filing of securities pursuant to section 12(g) of the Securities Exchange Act.", "Amendment to a previously filed 10-12G.", "Filed for the registration of securities for small business issuers pursuant to section 12(b) of the Securities Exchange Act.", "Amendment to a previously filed 10SB12B.", "Filed for the registration of securities for small business issuers pursuant to section 12(g) of the Securities Exchange Act.", "Amendment to a previously filed 10SB12G.", "Registration of securities filed pursuant to section 12(b) of the Securities Exchange Act.", "Amendment to a previously filed 18-12B.", "Registration of securities filed pursuant to section 12(g) of the Securities Exchange Act.", "Amendment to a previously filed 18-12G.", "Registration statement for unit investment trusts.", "Amendments to a previously filed N-8B-2.", "Registration statement for open-end management investment companies.", "Amendments to a previously filed N-1.", "Registration statement for Mutual Funds.", "Registration statement for closed-end investment companies.", "This filing is a pre-effective amendment to an N-2 filing.", "Registration statement for separate accounts (management investment companies).", "This filing is a pre-effective amendment to an N-3 filing.", "Registration statement for separate accounts (unit investment trusts).", "This filing is a pre-effective amendment to an N-4 filing.", "Registration statement for small business investment companies.", "This filing is a pre-effective amendment to an N-5 filing.", "Registration statement for investment companies business combination.", "Pre-effective amendment to a previously filed N-14.", "Initial statement with automatic effectiveness.", "Pre-effective amendment.", "Registration statement for closed-end investment company.", "Pre-effective amendment.", "Registration statement for certain foreign private issuers.", "This filing is a pre-effective amendment to an F-1 filing.", "Registration of up to an additional 20% of securities for an offering filed on an F-1.", "Registration statement for certain foreign private issuers.", "Amendment to a previously filed F-2.", "Registration of securities pursuant to dividend or interest reinvestment plans (foreign).", "Post-effective amendments to a previously filed F-2D.", "Registration pursuant to Securities Act Rule 462(b) of up to an additional 20% of securities for an offering that was registered on a Form F-2.", "Registration pursuant to Securities Act Rule 462(b) of up to an additional 20% of securities for an offering that was registered on a Form F-3.", "Registration pursuant to Securities Act Rule 462(b) of up to an additional 20% of securities for an offering that was registered on a Form F-4.", "Registration pursuant to Securities Act Rule 462(b) of up to an additional 20% of securities for an offering that was registered on a Form F-9.", "Registration pursuant to Securities Act Rule 462(b) of up to an additional 20% of securities for an offering that was registered on a Form F-10.", "Registration statement for certain foreign private issuers offered pursuant to certain types of transactions.", "Amendment to a previously filed F-3.", "Registration statement for certain foreign private issuers offered pursuant to dividend or pursuant to dividend or interest reinvestment plans.", "Amendment to a previously filed F-3D.", "Registration statement for foreign private issuers issued in certain business transactions.", "Amendment to a previously filed F-4.", "Registration of depository shares evidenced by American Depository Receipts. Filing to become effective other than immediately upon filing.", "Amendment to a previously filed F-6.", "Post-effective amendment to a previously filed F-6.", "Registration of depositary shares evidenced by American Depository Receipts. Filing to become effective immediately upon filing.", "Amendment to a previously filed F-6EF.", "Registration of securities of foreign private issuers pursuant to section 12 (b) of the Securities Exchange Act.", "Amendment to a previously filed 20FR12B.", "Registration of securities of foreign private issuers pursuant to section 12 (g) of the Securities Exchange Act.", "Amendment to a previously filed 20FR12G.", "Registration of securities by certain investment companies pursuant to rule 24f-1. Notification of election.", "Registration of securities by certain investment companies pursuant to rule 24f-2. Declaration of election.", "Amendment to a previously filed 24F-2EL.", "Registration of securities by certain investment companies pursuant to rule 24f-2. Rule 24f-2 notice.", "Amendment to a previously filed 24F-2NT.", "Post effective amendment to proposed Securities Act Rule 462(b) registration statement.", "Post effective amendment to proposed Securities Act Rule 462(c) registration statement.", "Registration of certain classes of securities pursuant to section 12(b) of the Securities Exchange Act.", "Amendment to a previously filed 8-A12B.", "Registration of certain classes of securities pursuant to section 12(g) of the Securities Exchange Act.", "Amendment to a previously filed 8-A12G.", "Registration of securities of certain successor issuers pursuant to section 12(b) of the Securities Exchange Act.", "Amendment to a previously filed 8-B12B.", "Registration of securities of certain successor issuers pursuant to section 12(g) of the Securities Exchange Act.", "Amendment to a previously filed 8-B12G.", "Registration of listed debt securities pursuant to section 12(b) - filing to become effective automatically upon filing.", "Registration of listed debt securities pursuant to section 12(b) - filing to become effective simultaneously with the effective of a concurrent Securities Act registration statement.", "Amendment to a previously filed 8A12BT.", "Registration statement for separate accounts (management investment companies). Post-Effective amendment filed pursuant to Rule 485(b) with additional shares under 24e-2.", "Registration statement for separate accounts (management investment companies). Post-Effective amendment filed pursuant to Rule 485(b) with additional shares under 24f-2.", "Registration statement for separate accounts (management investment companies). Post-Effective amendment filed pursuant to Rule 485(a).", "Registration statement for separate accounts (management investment companies). Post-Effective amendment filed pursuant to Rule 485(a) with additional shares under 24e-2.", "Registration statement for separate accounts (management investment companies). Post-Effective amendment filed pursuant to Rule 485(b) with additional shares under 24f-2.", "Registration statement for separate accounts (management investment companies). Post-Effective amendment filed pursuant to Rule 485(b)."]
  },
  "Registration Withdrawal and Termination Statements": {
    "color": "danger",
    "filingArray": ["RW", "AW", "15-12G", "15-12G/A", "15-15D", "15-15D/A", "15-12B", "15-12B/A", "24F-2TM"],
    "descriptionArray": ["Request for a withdrawal of a previously filed registration statement.", "Amendment to a previously filed RW.", "Certification of termination of registration of a class of security under Section 12(g) or notice of suspension of duty to file reports pursuant to Section 13 and 15(d) of the Securities Exchange Act. Section 12 (g) initial filing.", "Amendment to a previously filed 15-12G.", "Certification of termination of registration of a class of security under Section 12(g) or notice of suspension of duty to file reports pursuant to Section 13 and 15(d) of the Securities Exchange Act. Section 13 and 15 (d) initial filing.", "Amendment to a previously filed 15-15D.", "Certification of termination of registration of a class of security under Section 12(g) or notice of suspension of duty to file reports pursuant to Section 13 and 15(d) of the Securities Exchange Act. Section 12 (b) initial filing.", "Amendment to a previously filed 15-12B.", "Registration of securities by certain investment companies pursuant to rule 24f-2. Termination of declaration of election."]
  },
  "Proxies and Information Statements": {
    "color": "primary",
    "filingArray": ["PRE 14A", "PREC14A", "PREC14C", "PREN14A", "PREM14A", "PREM14C", "PRES14A", "PRES14C", "PRE 14C", "PRER14A", "PRER14C", "PRE13E3", "PRE13E3/A", "PRRN14A", "PX14A6G", "DEF 14A", "DEFM14A", "DEFM14C", "DEFS14A", "DEFS14C", "DEFC14A", "DEFC14C", "DEFA14A", "DEFN14A", "DFRN14A", "DFAN14A", "DEF13E3", "DEF13E3/A", "DEFA14C", "DEFR14C", "DEFR14A"],
    "descriptionArray": ["A preliminary proxy statement providing official notification to designated classes of shareholders of matters to be brought to a vote at a shareholders meeting.", "Preliminary proxy statement containing contested solicitations.", "Preliminary information statement containing contested solicitations.", "Non-management preliminary proxy statements not involving contested solicitations.", "A preliminary proxy statement relating to a merger or acquisition.", "A preliminary information statement relating to a merger or acquisition.", "A preliminary proxy statement giving notice regarding a special meeting.", "A preliminary information statement relating to a special meeting.", "A preliminary proxy statement containing all other information.", "Proxy soliciting materials. Revised preliminary material.", "Information statements. Revised preliminary material.", "Initial statement - preliminary form.", "Amendment to a previously filed PRE13E3.", "Non-management revised preliminary proxy soliciting materials for both contested solicitations and other situations. Revised preliminary material.", "Notice of exempt solicitation. Definitive material.", "Provides official notification to designated classes of shareholders of matters to be brought to a vote at a shareholders meeting. This form is commonly refered to as a 'Proxy'.", "Provides official notification to designated classes of shareholders of matters relating to a merger or acquisition.", "A definitive information statement relating to a merger or an acquisition.", "A definitive proxy statement giving notice regarding a special meeting.", "A definitive information statement regarding a special meeting.", "Definitive proxy statement in connection with contested solicitations.", "Definitive information statement indicating contested solicitations.", "Additional proxy soliciting materials - definitive.", "Definitive proxy statement filed by non-management not in connection with contested solicitations.", "Revised definitive proxy statement filed by non-management.", "Additional proxy soliciting materials filed by non-management.", "Schedule filed as definitive materials.", "Amendment to a previously filed DEF 13E3.", "Additional information statement materials - definitive.", "Revised information statement materials - definitive.", "Revised proxy soliciting materials -definitive."]
  },
  "Quarterly Reports": {
    "color": "teal",
    "filingArray": ["10-Q", "10-Q/A", "10QSB", "10QSB/A", "NT 10-Q", "NT 10-Q/A", "10-QT", "10-QT/A", "13F-E", "13F-E/A", "13F-HR", "13F-HR/A", "13F-NT", "13F-NT/A", "13F-HR", "13F-HR/A"],
    "descriptionArray": ["A quarterly report which provides a continuing view of a company's financial position during the year. The filing is due 45 days after each of the first three fiscal quarters. No filing is due for the fourth quarter.", "Amendment to a previously filed 10-Q.", "A quarterly report which provides a continuing view of a company's financial position during the year. The 10QSB form is filed by small businesses.", "An amendment to a previously filed 10QSB.", "Notification that form type 10-Q will be submitted late.", "Amendment to a previously filed NT 10-Q.", "Quarterly transition reports filed pursuant to rule 13a-10 or 15d-10 of the Securities Exchange Act.", "Amendment to a previously filed 10-QT.", "Quarterly reports filed by institutional managers.", "Amendment to a previously filed 13F-E.", "13F Holdings Report Initial Filing 13F-HR.", "13F Holdings Report Initial Filing amendment13F-HR/A.", "13F Notice Report Initial Filing 13F-NT.", "13F Notice Report Initial Filing amendment13F-NT/A.", "13F Combination Report Initial Filing. 13F-HR.", "13F Combination Report Initial Filing amendment. 13F-HR/A."]
  },
  "Annual Reports": {
    "color": "info",
    "filingArray": ["ARS", "10-K", "10-K/A", "10-K405", "10-K405/A", "NT 10-K", "NT 10-K/A", "10KSB", "10KSB/A", "10-C", "10-C/A", "10-KT", "10-KT/A", "10KSB40", "10KSB40/A", "10KT405", "10KT405/A", "11-KT", "11-KT/A", "18-K", "18-K/A", "11-K", "11-K/A", "NT 11-K", "NT 11-K/A", "NSAR-A", "NSAR-A/A", "NSAR-AT", "NSAR-AT/A", "NSAR-B", "NSAR-B/A", "NSAR-BT", "NSAR-BT/A", "NSAR-U", "NSAR-U/A", "NT-NSAR", "NT-NSAR/A", "N-30D", "N-30D/A", "20-F", "20-F/A", "ARS"],
    "descriptionArray": ["An annual report to security holders. This is a voluntary filing on EDGAR.", "An annual report which provides a comprehensive overview of the company for the past year. The filing is due 90 days after the close of the company's fiscal year, and contains such information as company history, organization, nature of business, equity, holdings, earnings per share, subsidiaries, and other pertinent financial information.", "Amendment to a previously filed 10-K.", "An annual report which provides a comprehensive overview of the company for the past year. The Regulation S-K Item 405 box on the cover page is checked.", "This filing is an amendment to a previously filed 10-K405.", "Notification that form 10-K will be submitted late.", "Amendment to a previously filed NT 10-K.", "An annual report which provides a comprehensive overview of the company for the past year. The filing is due 90 days after the close of the company's fiscal year, and contains such information as company history, organization, nature of business, equity, holdings, earnings per share, subsidiaries, and other pertinent financial information. The 10KSB is filed by small businesses.", "Amendment to a previously filed 10KSB.", "This filing is required of an issuer of securities quoted on the NASDAQ Interdealer Quotation System, and contains information regarding a change in the number of shares outstanding or a change in the name of the issuer.", "Amendment to a previously filed 10-C.", "Annual transition reports filed pursuant to rule 13a-10 or 15d-10 of the Securities Exchange Act.", "Amendment to a previously filed 10-KT.", "An optional form for annual and transition reports of small business issuers under Section 13 or 15 (d) of the Securities Exchange Act where the Regulation S-B Item 405 box on the cover page (relating to section 16 (a) reports) is checked.", "Amendment to a previously filed 10KSB40.", "Annual transition report filed pursuant to Rule 13a-10 or15d-10 of the Securities Exchange Act.", "Amendment to a previously filed 10KT405.", "Annual report of employee stock purchase, savings and similar plans. Filed pursuant to rule 13a-10 or 15d-10 of the Securities Exchange Act.", "Amendment to a previously filed 11-KT.", "Annual report for foreign governments and political subdivisions.", "Amendment to a previously filed 18-K.", "An annual report of employee stock purchase, savings and similar plans.", "Amendment to a previously filed 11-K.", "Notification that form 11-K will be submitted late.", "Amendment to a previously filed NT 11-K.", "Semi-Annual report for management companies.", "Amendments to a previously filed NSAR-A.", "Transitional semi-annual report for registered investment companies (Management).", "Amendments to a previously filed NSAR-AT.", "Annual report for management companies.", "Amendments to a previously filed NSAR-B.", "Transitional annual report for management companies.", "Amendments to a previously filed NSAR-BT.", "Annual report for unit investment trusts.", "Amendments to a previously filed NSAR-U.", "Request for an extension of time for filing form NSAR-A, NSAR-B or NSAR-U.", "Amendments to a previously filed NT-NSAR.", "An annual and semi-annual report mailed to shareholders. Filed by registered investment companies.", "Amendments to a previously filed N-30D.", "Annual and transition report of foreign private issuers filed pursuant to sections 13 or 15 (d) of the Securities Exchange Act.", "Amendment to a previously filed 20-F.", "Annual report to Security Holders."]
  },
  "Statements of Ownership": {
    "color": "light",
    "filingArray": ["SC 13D", "SC 13D/A", "SC 13G", "SC 13G/A", "SC 13E1", "SC 13E1/A", "SC 13E3", "SC 13E3/A", "SC 13E4", "SC 13E4/A", "SC 14D1", "SC 14D1/A", "SC 14D9", "SC 14D9/A", "SC 14F1", "SC 14F1/A", "SC TO-C", "SC TO-C/A", "SC TO-T", "SC TO-T/A", "SC TO-I", "SC TO-I/A"],
    "descriptionArray": ["This filing is made by person(s) reporting beneficially owned shares of common stock in a public company.", "An amendment to a SC 13D filing.", "A statement of beneficial ownership of common stock by certain persons.", "An amendment to the SC 13G filing.", "Statement of issuer required by Rule 13e-1 of the Securities Exchange Act.", "Amendment to a previously filed SC 13E1.", "Going private transaction by certain issuers.", "Amendment to a previously filed SC 13E3.", "Issuer tender offer statement.", "Amendment to a previously filed SC 13E4.", "Tender offer statement.", "Amendment to a previously filed SC 14D1.", "Solicitation/recommendation statements.", "Amendment to a previously filed SC 14D9.", "Statement regarding change in majority of directors pursuant to Rule 14f-1.", "Amendment to a previously filed SC 14F1.", "Written public communication relating to an issuer or third party tender offer not by the subject company.", "Amendment to a previously filed SC TO-C.", "Tender offer schedule and amendment filed by a third party.", "Amendment to a previously filed SC TO-T", "Tender offer schedule and amendment filed by the issuer.", "Amendment to a previously filed SC TO-I."]
  },
  "Insider Trading": {
    "color": "dark",
    "filingArray": ["3", "3/A", "4", "4/A", "5", "5/A", "144", "144/A"],
    "descriptionArray": ["An initial filing of equity securities filed by every director, officer, or owner of more than ten percent of a class of equity securities. Contains information on the reporting person's relationship to the company and on purchases and sales of equity securities.", "An amendment to a 3 filing. This form is not required to be filed with the EDGAR system.", "Any changes to a previously filed form 3 are reported in this filing.", "Amendment to a previously filed 4.", "An annual statement of ownership of securities filed by every director, officer, or owner of more than ten percent of a class of equity securities. Contains information on the reporting person's relationship to the company and on purchases and sales of equity securities.", "Amendment to a previously filed 5.", "This form must be filed by 'insiders' prior to their intended sale of restricted stock (issued stock currently unregistered with the SEC). Filing this form results in each seller receiving an automatic exemption from SEC registration requirements for this one transaction. A Form 144 is NOT an EDGAR electronic filing; each 144 is filed by the seller in paper during the day at the SEC. EDGAR Online cumulates and adds all of the current day's 144 paper filings to our electronic database at the END of each business day. ", "Amendment to a previously filed 144."]
  },
  "Filings pursuant to the Trust Identure Act": {
    "color": "danger",
    "filingArray": ["305B2", "305B2/A", "T-3", "T-3/A"],
    "descriptionArray": ["Initial statement filed pursuant to the Trust Indenture Act.", "Amendment to a previously filed 305B2.", "Application for qualification of trust indentures. Filed pursuant to the Trust Indenture Act.", "Amendment to a previously filed T-3."]
  },
  "Filings pursuant to the Public Utility Holding Company Act": {
    "color": "indigo",
    "filingArray": ["U-1", "U-1/A", "U-13-1", "U-13-1/A", "U-12-IB", "U-12-IB", "U-13E-1", "U-13E-1/A", "U-13-60", "U-13-60/A", "U-33-S", "U-3A-2", "U-3A-2/A", "U-3A3-1", "U-3A3-1/A", "U-57", "U-57/A", "U-6B-2", "U-7D", "U-7D/A", "U-R-1", "45B-3", "45B-3/A", "U5A", "U5B", "U5B/A", "U5S", "U-9C-3", "U-9C-3/A", "U-12-IA", "U-12-IA/A", "U5S/A", "35-APP", "35-APP/A", "35-CERT", "35-CERT/A"],
    "descriptionArray": ["Application of declaration under the Public Utility Holding Company Act.", "Amendment to a previously filed U-1.", "Application for approval for mutual service company filed pursuant to Rule 88 of the Public Utility Holding Company Act.", "Amendment to a previously filed U-13-1.", "Annual statement pursuant to section 12(i) of the Public Utility Company Act or by a registered holding company or a subsidiary thereof.", "Amendment to a U-12-IB.", "Report by affiliate service companies or independent service companies.", "Amendment to a U-13E-1.", "Annual report for mutual and subsidiary service companies filed pursuant to Rule 94 of the Public Utility Holding Company Act.", "Amendment to a previously filed U-13-60.", "Annual report concerning Foreign Utility Companies pursuant to section 33(e) of the Public Utility Holding Company Act.", "Statement by holding company claiming exemption from provisions of the act pursuant to Rule 2.", "Amendment to a previously filed U-3A-2.", "Twelve-month statement by bank claiming exemption from provisions of the act pursuant to Rule 3 of the Public Utility Holding Company Act.", "Amendment to a previously filed U-3A3-1.", "Notification of Foreign Utility Company Status under section 33(a)(2) of the Public Utility Holding Company Act.", "Amendment to a previously filed U-57.", "Certificate of notification of security issue, renewal or guaranty filed pursuant to Rule 20(d) of the Public Utility Holding Company Act.", "Certificate concerning lease of a utility facility filed pursuant to Rule 7(d) of the Public Utility Holding Company Act.", "Amendment to a previously filed U-7D.", "Declaration as to solicitations filed pursuant to Rule 62 of the Public Utility Holding Company Act.", "Transitional initial statement concerning extensions of credit.", "Amendment to 45B-3.", "Notification of registration filed under section 5(a) of the Public Utility Holding Company Act.", "Registration statement filed under section 5 of the Public Utility Holding Company Act.", "Amendment to a previously filed U5B.", "Annual report for holding companies registered pursuant to section 5 of the Public Utility Holding Company Act.", "Quarterly report concerning energy and gas-related companies.", "Amendment to a U-9C-3.", "Statement pursuant to section 12(i) of the Act by person employed or retained by a registered holding company or subsidiary thereof.", "Amendment to a U-12-IA.", "Amendment to a previously filed U5S.", "Statement concerning proposed transaction for which no form of application is prescribed filed pursuant to Rule 20(e) of the Public Utility Holding Company Act.", "Amendment to a previously filed 35-APP.", "Certificate concerning terms and conditions filed pursuant to Rule 24 of the Public Utility Holding Company Act.", "Amendment to a previously filed 35-CERT."]
  },
  "Miscellaneous Filings": {
    "color": "orange",
    "filingArray": ["8-K", "8-K/A", "N-14AE", "N-14AE/A", "N-30B-2", "2-E", "2-E/A", "SP 15D2", "SP 15D2/A", "NT 15D2", "NT 15D2/A", "6-K", "6-K/A", "8-K12G3", "8-K12G3/A", "8-K15D5", "8-K15D5/A"],
    "descriptionArray": ["A report of unscheduled material events or corporate changes which could be of importance to the shareholders or to the SEC. Examples include acquisition, bankruptcy, resignation of directors, or a change in the fiscal year.", "Amendment to a previously filed 8-K.", "Initial statement with automatic effectiveness for investment companies business combination.", "Pre-effective amendment to a previously filed N-14AE.", "Periodic and interim reports mailed to shareholders. Filed by registered investment companies.", "Reports of sales of securities pursuant to Regulation E. Filed by investment companies.", "Amendment to a previously filed 2-E.", "Special financial report pursuant to Rule 15d-2 of the Securities Exchange Act.", "Amendments to a previously filed SP 15D2.", "Notification of late filing Special report pursuant to section 15d-2.", "Amendment to a previously filed NT 15D2.", "Report of foreign issuer pursuant to Rules 13a-16 and 15d-16 of the Securities Exchange Act.", "Amendment to a previously filed 6-K.", "Notification of securities of successor issuers deemed to be registered pursuant to section 12(g) of the Securities Exchange Act.", "Amendment to a previously filed 8-K12G3.", "Notification of assumption of duty to report by successor issuer.", "Amendment to a previously filed 8-K15D5."]
  }
};

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: filings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filings */ "./src/config/filings.js");
/* harmony import */ var _filings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_filings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "filings", function() { return _filings__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/AuthModalPage.js":
/*!************************************!*\
  !*** ./src/pages/AuthModalPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var components_AuthForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AuthForm */ "./src/components/AuthForm.js");
/* harmony import */ var components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Page */ "./src/components/Page.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/AuthModalPage.js";





var AuthModalPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthModalPage, _React$Component);

  function AuthModalPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthModalPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthModalPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      show: false,
      authState: components_AuthForm__WEBPACK_IMPORTED_MODULE_5__["STATE_LOGIN"]
    };

    _this.toggle = function () {
      _this.setState({
        show: !_this.state.show
      });
    };

    _this.handleAuthState = function (authState) {
      _this.setState({
        authState: authState
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthModalPage, [{
    key: "render",
    value: function render() {
      var externalCloseBtn = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "close",
        style: {
          position: 'absolute',
          top: '15px',
          right: '20px',
          fontSize: '3rem'
        },
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\xD7");
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Login Modal",
        breadcrumbs: [{
          name: 'login modal',
          active: true
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "12",
        sm: "12",
        xs: "12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Login Modal Example"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        color: "danger",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Click to Login"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        isOpen: this.state.show,
        toggle: this.toggle,
        size: "sm",
        backdrop: "static",
        backdropClassName: "modal-backdrop-light",
        external: externalCloseBtn,
        centered: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_AuthForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        authState: this.state.authState,
        onChangeAuthState: this.handleAuthState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))))))));
    }
  }]);

  return AuthModalPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthModalPage);

/***/ }),

/***/ "./src/pages/AuthPage.js":
/*!*******************************!*\
  !*** ./src/pages/AuthPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var components_AuthForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AuthForm */ "./src/components/AuthForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/AuthPage.js";




var AuthPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthPage, _React$Component);

  function AuthPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleAuthState = function (authState) {
      if (authState === components_AuthForm__WEBPACK_IMPORTED_MODULE_5__["STATE_LOGIN"]) {
        _this.props.history.push('/login');
      } else {
        _this.props.history.push('/signup');
      }
    };

    _this.handleLogoClick = function () {
      _this.props.history.push('/');
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        style: {
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        md: 6,
        lg: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        body: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_AuthForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        authState: this.props.authState,
        onChangeAuthState: this.handleAuthState,
        onLogoClick: this.handleLogoClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))));
    }
  }]);

  return AuthPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthPage);

/***/ }),

/***/ "./src/pages/CompanySearchPage.js":
/*!****************************************!*\
  !*** ./src/pages/CompanySearchPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var components_CompanySearchForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CompanySearchForm */ "./src/components/CompanySearchForm.js");
/* harmony import */ var components_Card_CompanyCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/CompanyCard */ "./src/components/Card/CompanyCard.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/CompanySearchPage.js";







var CompanySearchPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CompanySearchPage, _Component);

  function CompanySearchPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CompanySearchPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CompanySearchPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: [],
      numberItems: "All",
      numberdropdownOpen: false,
      companyQuery: "",
      showLoader: false,
      searchExecuted: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/sec/getCompanies/?company=".concat(_this.state.companyQuery)).then(function (res) {
                _this.setState({
                  data: res.data.companies,
                  showLoader: false,
                  searchExecuted: true
                });
              });

            case 2:
              // * Save company query as recent Company search in DB
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                companySearchString: _this.state.companyQuery
              };
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/updateCompanySearches", params);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    _this.searchHandler =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(company, type, cik) {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.setState({
                  companyQuery: company,
                  showLoader: true
                });

              case 2:
                _context2.next = 4;
                return _this.getDataFromDb();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CompanySearchPage, [{
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedNumber) {
      this.setState({
        numberItems: clickedNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          numberItems = _this$state.numberItems,
          showLoader = _this$state.showLoader,
          searchExecuted = _this$state.searchExecuted;
      var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Company Search"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "<", " ", number);
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_CompanySearchForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        props: this.props,
        searchHandler: function searchHandler(company) {
          return _this2.searchHandler(company);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, showLoader ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Loading..."))) : data.map(function (company, index) {
        if (numberItems === "All" || index < numberItems) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
            key: index,
            xl: 3,
            lg: 4,
            md: 6,
            sm: 8,
            xs: 12,
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Card_CompanyCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
            company: company,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        });
      }), !showLoader && searchExecuted && !data.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "No Search Results")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })));
    }
  }]);

  return CompanySearchPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CompanySearchPage);

/***/ }),

/***/ "./src/pages/DashboardPage.js":
/*!************************************!*\
  !*** ./src/pages/DashboardPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Page */ "./src/components/Page.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var components_Card_FilingFrequencyCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Card/FilingFrequencyCard */ "./src/components/Card/FilingFrequencyCard.js");
/* harmony import */ var components_Card_MarketOverviewCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Card/MarketOverviewCard */ "./src/components/Card/MarketOverviewCard.js");
/* harmony import */ var components_Card_RecentViewedFilingsCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Card/RecentViewedFilingsCard */ "./src/components/Card/RecentViewedFilingsCard.js");
/* harmony import */ var components_Card_RecentSearchesCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card/RecentSearchesCard */ "./src/components/Card/RecentSearchesCard.js");
/* harmony import */ var components_Card_RecentSavedFilingsCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/RecentSavedFilingsCard */ "./src/components/Card/RecentSavedFilingsCard.js");





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/DashboardPage.js";









var DashboardPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DashboardPage, _React$Component);

  function DashboardPage() {
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardPage);

    return Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DashboardPage).apply(this, arguments));
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "DashboardPage",
        title: "Dashboard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Card_MarketOverviewCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Card_FilingFrequencyCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Card_RecentViewedFilingsCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Card_RecentSearchesCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Card_RecentSavedFilingsCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })));
    }
  }]);

  return DashboardPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardPage);

/***/ }),

/***/ "./src/pages/FilingDocsPage.js":
/*!*************************************!*\
  !*** ./src/pages/FilingDocsPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Page */ "./src/components/Page.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FilingDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FilingDocs */ "./src/components/FilingDocs.js");
var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/FilingDocsPage.js";




var FilingDocsPage = function FilingDocsPage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Page__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "Filing Docs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FilingDocs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FilingDocsPage);

/***/ }),

/***/ "./src/pages/FilingSearchPage.js":
/*!***************************************!*\
  !*** ./src/pages/FilingSearchPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SearchForm */ "./src/components/SearchForm.js");
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");








var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/FilingSearchPage.js";








var FilingSearchPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(FilingSearchPage, _React$Component);

  function FilingSearchPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FilingSearchPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(FilingSearchPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: null,
      filter: [],
      numberItems: "All",
      availableFormTypes: [],
      formdropdownOpen: false,
      numberdropdownOpen: false,
      cikQuery: "",
      typeQuery: "",
      companyQuery: "",
      showLoader: false,
      searchExecuted: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("/api/sec/getData/?cik=".concat(_this.state.cikQuery, "&type=").concat(_this.state.typeQuery, "&company=").concat(_this.state.companyQuery)).then(function (res) {
                _this.setState({
                  data: res.data,
                  availableFormTypes: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(res.data.items.map(function (a) {
                    return a.formType;
                  }))),
                  filter: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(res.data.items.map(function (a) {
                    return a.formType;
                  }))),
                  showLoader: false,
                  searchExecuted: true
                });
              });

            case 2:
              // Save queried filing as a recent search
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_14__["getJwt"])(),
                companySearchString: _this.state.companyQuery,
                cikSearchString: _this.state.cikQuery,
                formTypeSearchString: _this.state.typeQuery
              };
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("api/users/updateRecentSearches", params);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    _this.searchHandler =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(company, type, cik) {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.setState({
                  companyQuery: company,
                  typeQuery: type,
                  cikQuery: cik,
                  showLoader: true
                });

              case 2:
                _this.getDataFromDb();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FilingSearchPage, [{
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          availableFormTypes = _this$state.availableFormTypes,
          numberItems = _this$state.numberItems,
          showLoader = _this$state.showLoader,
          searchExecuted = _this$state.searchExecuted;
      if (!data) data = {};
      var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Filing Search"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFormTypes);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "All"), availableFormTypes.map(function (formType) {
        var badgeColor = "primary";
        var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_12__["filings"]);

        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: formType,
          onClick: function onClick() {
            return _this2.handleFilterClick([formType]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, formType, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
          color: badgeColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, formType));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SearchForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        searchHandler: function searchHandler(company, type, cik) {
          return _this2.searchHandler(company, type, cik);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["Filings"], {
        showLoader: showLoader,
        searchExecuted: searchExecuted,
        data: data.items,
        filter: filter,
        number: numberItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })));
    }
  }]);

  return FilingSearchPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (FilingSearchPage);

/***/ }),

/***/ "./src/pages/FilingSpreadsheet.js":
/*!****************************************!*\
  !*** ./src/pages/FilingSpreadsheet.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/FilingSpreadsheet.js";




var FilingSpreadsheet =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FilingSpreadsheet, _React$Component);

  function FilingSpreadsheet() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FilingSpreadsheet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FilingSpreadsheet)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: null
    };
    _this.getDataFromGoogleSheets =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://sheets.googleapis.com/v4/spreadsheets/1RV46luph_aEURrcXLLFC5C3NksRTM6uF_P2m6uoDR78/values:batchGet?dateTimeRenderOption=SERIAL_NUMBER&majorDimension=ROWS&ranges=B%3AE&valueRenderOption=FORMATTED_VALUE&key=AIzaSyDRzWoZ_fXKy5xqE2qDitRcxHeYI_-_npM').then(function (res) {
                _this.setState({
                  data: res
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FilingSpreadsheet, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getDataFromGoogleSheets();

              case 2:
                _context2.t0 = setInterval;
                _context2.next = 5;
                return this.getDataFromGoogleSheets;

              case 5:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1, 10000);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var header = this.state.data ? this.state.data.data.valueRanges[0].values[1] : [];
      var rows = this.state.data ? this.state.data.data.valueRanges[0].values.splice(2) : [];

      if (!rows) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-flex align-items-center flex-grow-1 justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "spinner-grow d-flex align-items-center",
          style: {
            width: "75px",
            height: "75px"
          },
          role: "status",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Loading...")));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "mx-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Aggregate SEC Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Table"], {
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, header.map(function (value, key) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, value);
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, rows.map(function (eachrow, rowkey) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          key: rowkey,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, eachrow.map(function (value, valuekey) {
          if (valuekey === 3) {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
              key: valuekey,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
              href: value,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            }, "View Filing"));
          }

          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            key: valuekey,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, value);
        }));
      })))))));
    }
  }]);

  return FilingSpreadsheet;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilingSpreadsheet);

/***/ }),

/***/ "./src/pages/FormTypeSearchPage.js":
/*!*****************************************!*\
  !*** ./src/pages/FormTypeSearchPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var components_FormTypeSearchForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/FormTypeSearchForm */ "./src/components/FormTypeSearchForm.js");
/* harmony import */ var components_Card_FormTypeCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/FormTypeCard */ "./src/components/Card/FormTypeCard.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./src/config/index.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/FormTypeSearchPage.js";








var FormTypeSearchPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FormTypeSearchPage, _Component);

  function FormTypeSearchPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FormTypeSearchPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FormTypeSearchPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: [],
      numberItems: "All",
      numberdropdownOpen: false,
      FormTypeQuery: "",
      showLoader: false,
      searchExecuted: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var values, FormTypeArray, params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // * Compare FormTypes in state data to FormType Search String
              values = Object.values(_config__WEBPACK_IMPORTED_MODULE_13__["filings"]);
              FormTypeArray = [];
              values.map(function (value, valueindex) {
                value.filingArray.map(function (filing, filingindex) {
                  if (filing.includes(_this.state.FormTypeQuery.toUpperCase())) {
                    FormTypeArray.push({
                      FormType: filing,
                      BadgeColor: value.color
                    });
                  }

                  return {};
                });
                return {};
              });

              _this.setState({
                data: FormTypeArray,
                showLoader: false,
                searchExecuted: true
              }); // * Save FormType Query in recent FormType searches


              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])(),
                FormTypeSearchString: _this.state.FormTypeQuery
              };
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("api/users/updateFormTypeSearches", params);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    _this.searchHandler =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(FormType, type, cik) {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.setState({
                  FormTypeQuery: FormType,
                  showLoader: true
                });

              case 2:
                _context2.next = 4;
                return _this.getDataFromDb();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FormTypeSearchPage, [{
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedNumber) {
      this.setState({
        numberItems: clickedNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          numberItems = _this$state.numberItems,
          showLoader = _this$state.showLoader,
          searchExecuted = _this$state.searchExecuted;
      var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "FormType Search"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "<", " ", number);
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_FormTypeSearchForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        props: this.props,
        searchHandler: function searchHandler(FormType) {
          return _this2.searchHandler(FormType);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, showLoader ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Loading..."))) : data.map(function (Form, index) {
        if (numberItems === "All" || index < numberItems) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
            key: index,
            xl: 3,
            lg: 4,
            md: 6,
            sm: 8,
            xs: 12,
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Card_FormTypeCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
            BadgeColor: Form.BadgeColor,
            FormType: Form.FormType,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        });
      }), !showLoader && searchExecuted && !data.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "No Search Results")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })));
    }
  }]);

  return FormTypeSearchPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormTypeSearchPage);

/***/ }),

/***/ "./src/pages/MyCompaniesPage.js":
/*!**************************************!*\
  !*** ./src/pages/MyCompaniesPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components_Card_CompanyCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/CompanyCard */ "./src/components/Card/CompanyCard.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/MyCompaniesPage.js";







var MyCompaniesPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyCompaniesPage, _Component);

  function MyCompaniesPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyCompaniesPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyCompaniesPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: [],
      numberItems: "All",
      numberdropdownOpen: false,
      showLoader: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/users/savedCompanies', config).then(function (res) {
                _this.setState({
                  data: res.data.savedCompanies
                });
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyCompaniesPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getDataFromDb();

              case 2:
                _context2.t0 = setInterval;
                _context2.next = 5;
                return this.getDataFromDb;

              case 5:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1, 10000);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedNumber) {
      this.setState({
        numberItems: clickedNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          numberItems = _this$state.numberItems,
          showLoader = _this$state.showLoader;
      var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "px-3 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Followed Companies"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "<", " ", number);
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, showLoader ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Loading..."))) : data.map(function (company, index) {
        if (numberItems === "All" || index < numberItems) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
            key: index,
            xl: 3,
            lg: 4,
            md: 6,
            sm: 8,
            xs: 12,
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Card_CompanyCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
            company: company,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        });
      }), !data.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          minHeight: "100px"
        },
        className: "d-flex flex-row align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "No Followed Companies")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: "fit-content",
          margin: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        to: "/companysearch",
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Search For Companies")))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })));
    }
  }]);

  return MyCompaniesPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MyCompaniesPage);

/***/ }),

/***/ "./src/pages/MyFeedPage.js":
/*!*********************************!*\
  !*** ./src/pages/MyFeedPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var components_Card_FollowedFilingCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card/FollowedFilingCard */ "./src/components/Card/FollowedFilingCard.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/MyFeedPage.js";






var MyFeedPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyFeedPage, _React$Component);

  function MyFeedPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyFeedPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyFeedPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      companyFilings: [],
      FormTypeFilings: [],
      filter: [],
      noData: true
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var companyFilings, FormTypeFilings, config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              companyFilings = [];
              FormTypeFilings = [];
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                }
              }; // * Fetch Filings for each company in the past 24 hours

              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/users/followedCompanyFilings', config).then(function (res) {
                if (res.data) {
                  companyFilings = res.data.data;
                }
              });

            case 5:
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/users/followedFormTypeFilings', config).then(function (res) {
                if (res.data) {
                  FormTypeFilings = res.data.data;
                }
              });

            case 7:
              // * Set State Filing Arrays
              _this.setState({
                companyFilings: companyFilings,
                FormTypeFilings: FormTypeFilings,
                noData: false
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyFeedPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getDataFromDb();

              case 2:
                _context2.t0 = setInterval;
                _context2.next = 5;
                return this.getDataFromDb;

              case 5:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1, 10000);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          companyFilings = _this$state.companyFilings,
          FormTypeFilings = _this$state.FormTypeFilings,
          noData = _this$state.noData;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Followed Company Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        style: {
          margin: "10px",
          paddingTop: "0px",
          paddingBottom: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        style: {
          overflowX: "scroll"
        },
        className: "flex-row d-flex flex-nowrap flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, !companyFilings.length && noData ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Loading..."))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), !noData && !companyFilings.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "No Filings of Followed Companies")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), companyFilings.map(function (Filing, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Card_FollowedFilingCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: index,
          companyName: Filing.companyName,
          badgeColor: Filing.badgeColor,
          formType: Filing.formType,
          title: Filing.title,
          filingDate: Filing.filingDate,
          fileLink: Filing.fileLink,
          apiRoute: 'sec',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        });
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: "m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Followed FormType Filings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        style: {
          margin: "10px",
          paddingTop: "0px",
          paddingBottom: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        style: {
          overflowX: "scroll"
        },
        className: "flex-row flex-nowrap d-flex flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, !FormTypeFilings.length && noData ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Loading..."))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), !noData && !FormTypeFilings.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "No Recent Followed Filings")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), FormTypeFilings.map(function (Filing, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Card_FollowedFilingCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: index,
          companyName: '',
          badgeColor: Filing.badgeColor,
          formType: Filing.formType,
          title: Filing.title,
          filingDate: Filing.filingDate,
          fileLink: Filing.fileLink,
          apiRoute: 'sec',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        });
      })))));
    }
  }]);

  return MyFeedPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (MyFeedPage);

/***/ }),

/***/ "./src/pages/MyFormTypesPage.js":
/*!**************************************!*\
  !*** ./src/pages/MyFormTypesPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components_Card_FormTypeCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/FormTypeCard */ "./src/components/Card/FormTypeCard.js");







var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/MyFormTypesPage.js";







var MyFormTypesPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyFormTypesPage, _Component);

  function MyFormTypesPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyFormTypesPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MyFormTypesPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: [],
      numberItems: "All",
      numberdropdownOpen: false,
      showLoader: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_10__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/users/savedFormTypes', config).then(function (res) {
                _this.setState({
                  data: res.data.savedFormTypes
                });
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyFormTypesPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getDataFromDb();

              case 2:
                _context2.t0 = setInterval;
                _context2.next = 5;
                return this.getDataFromDb;

              case 5:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1, 10000);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedNumber) {
      this.setState({
        numberItems: clickedNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          numberItems = _this$state.numberItems,
          showLoader = _this$state.showLoader;
      var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "px-3 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Followed FormTypes"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "<", " ", number);
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, showLoader ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "spinner-grow d-flex align-items-center",
        style: {
          width: "75px",
          height: "75px"
        },
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Loading..."))) : data.map(function (Form, index) {
        if (numberItems === "All" || index < numberItems) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
            style: {
              height: "min-content"
            },
            key: index,
            xl: 3,
            lg: 4,
            md: 6,
            sm: 8,
            xs: 12,
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_Card_FormTypeCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
            BadgeColor: Form.BadgeColor,
            FormType: Form.FormType,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        });
      }), !data.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          minHeight: "100px"
        },
        className: "d-flex flex-row align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "No Followed Form Types")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: "fit-content",
          margin: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        to: "/formtypesearch",
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Search For Form Types")))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })));
    }
  }]);

  return MyFormTypesPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MyFormTypesPage);

/***/ }),

/***/ "./src/pages/SECFeedPage.js":
/*!**********************************!*\
  !*** ./src/pages/SECFeedPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./src/config/index.js");








var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/SECFeedPage.js";






var SECFeedPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SECFeedPage, _React$Component);

  function SECFeedPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SECFeedPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(SECFeedPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.controller = new AbortController();
    _this.state = {
      time: Date.now(),
      data: null,
      filter: [],
      numberItems: "All",
      availableFormTypes: [],
      formdropdownOpen: false,
      numberdropdownOpen: false,
      showLoader: true
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/api/sec/getData/?cik=&type=&company=', {
                signal: _this.controller.signal
              }).then(function (res) {
                if (!_this.state.filter.length) {
                  _this.setState({
                    data: res.data,
                    showLoader: false,
                    availableFormTypes: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(res.data.items.map(function (a) {
                      return a.formType;
                    }))),
                    filter: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(res.data.items.map(function (a) {
                      return a.formType;
                    })))
                  });
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SECFeedPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getDataFromDb();

              case 2:
                _context2.t0 = setInterval;
                _context2.next = 5;
                return this.getDataFromDb;

              case 5:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1, 10000);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.controller.abort();
      clearInterval(this.interval);
    }
  }, {
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          availableFormTypes = _this$state.availableFormTypes,
          showLoader = _this$state.showLoader,
          numberItems = _this$state.numberItems;
      if (!data) data = {};
      var numberFilter = ["All", 5, 10, 25, 50, 100];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "SEC Recent Filings"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFormTypes);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "All"), availableFormTypes.map(function (formType) {
        var badgeColor = "primary";
        var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_12__["filings"]);

        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: formType,
          onClick: function onClick() {
            return _this2.handleFilterClick([formType]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, formType, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
          color: badgeColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, formType));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["Filings"], {
        data: data.items,
        showLoader: showLoader,
        filter: filter,
        number: numberItems,
        apiRoute: 'sec',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })));
    }
  }]);

  return SECFeedPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (SECFeedPage);

/***/ }),

/***/ "./src/pages/SECHistoricalPage.js":
/*!****************************************!*\
  !*** ./src/pages/SECHistoricalPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./src/config/index.js");






var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/SECHistoricalPage.js";






var SECHistoricalPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SECHistoricalPage, _React$Component);

  function SECHistoricalPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SECHistoricalPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SECHistoricalPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: null,
      intervalIsSet: false,
      filter: [],
      numberItems: 100,
      availableFormTypes: [],
      formdropdownOpen: false,
      numberdropdownOpen: false
    };

    _this.getDataFromDb = function () {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('/api/sec/getHistoricalData', {
        params: {
          number: _this.state.numberItems
        }
      }).then(function (res) {
        if (!_this.state.filter.length) {
          _this.setState({
            data: res.data,
            availableFormTypes: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(res.data.map(function (a) {
              return a.formType;
            }))),
            filter: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(res.data.map(function (a) {
              return a.formType;
            })))
          });
        }
      });
    };

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SECHistoricalPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //this.getDataFromDb();
      if (!this.state.intervalIsSet) {
        var interval = setInterval(this.getDataFromDb, 10000);
        this.setState({
          intervalIsSet: interval
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          availableFormTypes = _this$state.availableFormTypes,
          numberItems = _this$state.numberItems;
      var numberFilter = ["All", 5, 10, 25, 50, 100, 200, 500, 1000, 2000, 5000];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "mr-auto flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "SEC Historical Filings"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFormTypes);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "All"), availableFormTypes.map(function (formType, index) {
        var badgeColor = "primary";
        var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_10__["filings"]);

        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
          key: formType + index,
          onClick: function onClick() {
            return _this2.handleFilterClick([formType]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, formType, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
          color: badgeColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, formType));
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_9__["Filings"], {
        data: data,
        filter: filter,
        number: numberItems,
        apiRoute: 'sec',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })));
    }
  }]);

  return SECHistoricalPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (SECHistoricalPage);

/***/ }),

/***/ "./src/pages/SavedFilingsPage.js":
/*!***************************************!*\
  !*** ./src/pages/SavedFilingsPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card */ "./src/components/Card/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");








var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/SavedFilingsPage.js";








var SavedFilingsPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SavedFilingsPage, _Component);

  function SavedFilingsPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SavedFilingsPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(SavedFilingsPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: [],
      filter: [],
      numberItems: "All",
      availableFormTypes: [],
      formdropdownOpen: false,
      numberdropdownOpen: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_14__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/api/users/savedFilings', config).then(function (res) {
                if (!_this.state.filter.length) {
                  _this.setState({
                    data: res.data.savedFilings,
                    availableFormTypes: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(res.data.savedFilings.map(function (a) {
                      return a.formType;
                    }))),
                    filter: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(res.data.savedFilings.map(function (a) {
                      return a.formType;
                    })))
                  });
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SavedFilingsPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getDataFromDb();

              case 2:
                _context2.t0 = setInterval;
                _context2.next = 5;
                return this.getDataFromDb;

              case 5:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1, 10000);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          availableFormTypes = _this$state.availableFormTypes,
          numberItems = _this$state.numberItems;
      var numberFilter = ["All", 5, 10, 25, 50, 100];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Saved Filings"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFormTypes);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "All"), availableFormTypes.map(function (formType) {
        var badgeColor = "primary";
        var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_13__["filings"]);

        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: formType,
          onClick: function onClick() {
            return _this2.handleFilterClick([formType]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, formType, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
          color: badgeColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, formType));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "d-flex flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Card__WEBPACK_IMPORTED_MODULE_11__["Filings"], {
        data: data,
        filter: filter,
        number: numberItems,
        apiRoute: 'sec',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), !data.length ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          minHeight: "100px"
        },
        className: "d-flex flex-row align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "No Saved Filings")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "fit-content",
          margin: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        to: "/search",
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Search For Filings")))) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })));
    }
  }]);

  return SavedFilingsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SavedFilingsPage);

/***/ }),

/***/ "./src/pages/SearchHistoryPage.js":
/*!****************************************!*\
  !*** ./src/pages/SearchHistoryPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components_Card_SmallRecentSearchCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/SmallRecentSearchCard */ "./src/components/Card/SmallRecentSearchCard.js");








var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/SearchHistoryPage.js";







var SearchHistoryPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SearchHistoryPage, _Component);

  function SearchHistoryPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SearchHistoryPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(SearchHistoryPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: [],
      filter: [],
      numberItems: "All",
      availableFilters: ["company", "cik", "formType"],
      formdropdownOpen: false,
      numberdropdownOpen: false,
      searchHistoryCleared: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_11__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/api/stats/getRecentSearchData', config).then(function (res) {
                var searches = res.data;

                if (searches && searches.data.length && !_this.state.filter.length) {
                  // Sort data by company
                  var newfilters = [];
                  searches.data.map(function (_ref2) {
                    var companySearchString = _ref2.companySearchString,
                        cikSearchString = _ref2.cikSearchString,
                        formTypeSearchString = _ref2.formTypeSearchString,
                        dateSearched = _ref2.dateSearched;

                    if (companySearchString && !_this.state.filter.includes("company")) {
                      newfilters.push("company");
                    }

                    if (cikSearchString && !_this.state.filter.includes("cik")) {
                      newfilters.push("cik");
                    }

                    if (formTypeSearchString && !_this.state.filter.includes("formType")) {
                      newfilters.push("formType");
                    }

                    return "";
                  });

                  _this.setState({
                    data: searches.data,
                    filter: [].concat(Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.filter), newfilters),
                    defaultData: false
                  });
                }
              }).catch(function (error) {
                console.log('ERROR. Could not get recent searches.');
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    _this.clearSearchHistory =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var params;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = {
                "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_11__["getJwt"])()
              };
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("api/users/clearSearchHistory", params).then(function (res) {
                if (res.status === 200) {
                  _this.setState({
                    searchHistoryCleared: true
                  });
                }
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchHistoryPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getDataFromDb();

              case 2:
                _context3.t0 = setInterval;
                _context3.next = 5;
                return this.getDataFromDb;

              case 5:
                _context3.t1 = _context3.sent;
                (0, _context3.t0)(_context3.t1, 10000);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          numberItems = _this$state.numberItems,
          availableFilters = _this$state.availableFilters;
      var numberFilter = ["All", 5, 10, 25, 50, 100];
      var counter = 0;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "px-3 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Search History"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "m-2",
        onClick: function onClick() {
          return _this2.clearSearchHistory();
        },
        outline: true,
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Clear Search History"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFilters);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "All"), availableFilters.map(function (searchString) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: searchString,
          onClick: function onClick() {
            return _this2.handleFilterClick([searchString]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, searchString);
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, data.map(function (_ref4) {
        var companySearchString = _ref4.companySearchString,
            cikSearchString = _ref4.cikSearchString,
            formTypeSearchString = _ref4.formTypeSearchString,
            dateSearched = _ref4.dateSearched;

        if (filter.includes("company") && companySearchString || filter.includes("cik") && cikSearchString || filter.includes("formType") && formTypeSearchString) {
          if (numberItems === "All" || counter < numberItems) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components_Card_SmallRecentSearchCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
              key: counter++,
              companySearchString: companySearchString,
              cikSearchString: cikSearchString,
              formTypeSearchString: formTypeSearchString,
              dateSearched: dateSearched,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              },
              __self: this
            });
          }
        }

        return ""; //<SmallFilingCard key={title} badgeColor={badgeColor} formType={formType} title={title} filingDate={filingDate} fileLink={htmlLink} previouslySaved={true} />
      }), !data.length ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          minHeight: "100px"
        },
        className: "d-flex flex-row align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "No Recent Searches")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "fit-content",
          margin: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        to: "/search",
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Search For Filings")))) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })));
    }
  }]);

  return SearchHistoryPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchHistoryPage);

/***/ }),

/***/ "./src/pages/SettingsPage.js":
/*!***********************************!*\
  !*** ./src/pages/SettingsPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/SettingsPage.js";


var SettingsPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SettingsPage, _Component);

  function SettingsPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SettingsPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SettingsPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SettingsPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      });
    }
  }]);

  return SettingsPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SettingsPage);

/***/ }),

/***/ "./src/pages/ViewedFilingsPage.js":
/*!****************************************!*\
  !*** ./src/pages/ViewedFilingsPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! services/auth */ "./src/services/auth.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");








var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/ViewedFilingsPage.js";








var ViewedFilingsPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ViewedFilingsPage, _Component);

  function ViewedFilingsPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ViewedFilingsPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ViewedFilingsPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: [],
      filter: [],
      numberItems: "All",
      availableFormTypes: [],
      formdropdownOpen: false,
      numberdropdownOpen: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var config;
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                params: {
                  "x-auth-token": Object(services_auth__WEBPACK_IMPORTED_MODULE_13__["getJwt"])()
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/api/stats/getRecentlyViewedFilingData', config).then(function (res) {
                var searches = res.data;

                if (searches && searches.data.length && !_this.state.filter.length) {
                  _this.setState({
                    data: searches.data,
                    availableFormTypes: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(searches.data.map(function (a) {
                      return a.formType;
                    }))),
                    filter: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(searches.data.map(function (a) {
                      return a.formType;
                    }))),
                    defaultData: false
                  });
                }
              }).catch(function (error) {
                console.log('ERROR. Could not get recent searches.');
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewedFilingsPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getDataFromDb();

              case 2:
                _context2.t0 = setInterval;
                _context2.next = 5;
                return this.getDataFromDb;

              case 5:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1, 10000);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          availableFormTypes = _this$state.availableFormTypes,
          numberItems = _this$state.numberItems;
      var numberFilter = ["All", 5, 10, 25, 50, 100];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Viewed Filings"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFormTypes);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "All"), availableFormTypes.map(function (formType) {
        var badgeColor = "primary";
        var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_12__["filings"]);

        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: formType,
          onClick: function onClick() {
            return _this2.handleFilterClick([formType]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, formType, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
          color: badgeColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, formType));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "d-flex flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["Filings"], {
        data: data,
        filter: filter,
        number: numberItems,
        apiRoute: 'sec',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), !data.length ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          minHeight: "100px"
        },
        className: "d-flex flex-row align-items-center flex-grow-1 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "No Recently Viewed Filings")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "fit-content",
          margin: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["NavLink"], {
        to: "/secfilings",
        className: "btn m-2 btn-outline-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Find Recent Filings")))) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })));
    }
  }]);

  return ViewedFilingsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ViewedFilingsPage);

/***/ }),

/***/ "./src/pages/XBRLFeedPage.js":
/*!***********************************!*\
  !*** ./src/pages/XBRLFeedPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./src/config/index.js");








var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/XBRLFeedPage.js";






var XBRLFeedPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(XBRLFeedPage, _React$Component);

  function XBRLFeedPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, XBRLFeedPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(XBRLFeedPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: null,
      intervalIsSet: false,
      filter: [],
      numberItems: "All",
      availableFormTypes: [],
      formdropdownOpen: false,
      numberdropdownOpen: false
    };
    _this.getDataFromDb =
    /*#__PURE__*/
    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/api/edgar/getData').then(function (res) {
                if (!_this.state.filter.length) {
                  _this.setState({
                    data: res.data,
                    availableFormTypes: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(res.data.items.map(function (a) {
                      return a.formType;
                    }))),
                    filter: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(res.data.items.map(function (a) {
                      return a.formType;
                    })))
                  });
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(XBRLFeedPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.intervalIsSet) {
        this.getDataFromDb();
        setInterval(this.getDataFromDb, 10000);
        this.setState({
          intervalIsSet: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          availableFormTypes = _this$state.availableFormTypes,
          numberItems = _this$state.numberItems;
      if (!data) data = {};
      var numberFilter = ["All", 5, 10, 25, 50, 100, 200];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Edgar Filings"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFormTypes);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "All"), availableFormTypes.map(function (formType) {
        var badgeColor = "primary";
        var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_12__["filings"]);

        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["DropdownItem"], {
          key: formType,
          onClick: function onClick() {
            return _this2.handleFilterClick([formType]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, formType, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
          color: badgeColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, formType));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["Filings"], {
        data: data.items,
        filter: filter,
        number: numberItems,
        apiRoute: 'edgar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })));
    }
  }]);

  return XBRLFeedPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (XBRLFeedPage);

/***/ }),

/***/ "./src/pages/XBRLHistoricalPage.js":
/*!*****************************************!*\
  !*** ./src/pages/XBRLHistoricalPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./src/config/index.js");






var _jsxFileName = "/Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/pages/XBRLHistoricalPage.js";






var XBRLHistoricalPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(XBRLHistoricalPage, _React$Component);

  function XBRLHistoricalPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, XBRLHistoricalPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(XBRLHistoricalPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      time: Date.now(),
      data: null,
      intervalIsSet: false,
      filter: [],
      numberItems: 100,
      availableFormTypes: [],
      formdropdownOpen: false,
      numberdropdownOpen: false
    };

    _this.getDataFromDb = function () {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('/api/edgar/getHistoricalData', {
        params: {
          number: _this.state.numberItems
        }
      }).then(function (res) {
        if (!_this.state.filter.length) {
          _this.setState({
            data: res.data,
            availableFormTypes: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(res.data.map(function (a) {
              return a.formType;
            }))),
            filter: Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(res.data.map(function (a) {
              return a.formType;
            })))
          });
        }
      });
    };

    _this.toggleFormType = function () {
      _this.setState({
        formdropdownOpen: !_this.state.formdropdownOpen
      });
    };

    _this.toggleNumber = function () {
      _this.setState({
        numberdropdownOpen: !_this.state.numberdropdownOpen
      });
    };

    return _this;
  }

  Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(XBRLHistoricalPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //this.getDataFromDb();
      if (!this.state.intervalIsSet) {
        var interval = setInterval(this.getDataFromDb, 10000);
        this.setState({
          intervalIsSet: interval
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "handleFilterClick",
    value: function handleFilterClick(clickedFormType) {
      this.setState({
        filter: clickedFormType
      });
    }
  }, {
    key: "handleNumberFilterClick",
    value: function handleNumberFilterClick(clickedFormType) {
      this.setState({
        numberItems: clickedFormType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          filter = _this$state.filter,
          availableFormTypes = _this$state.availableFormTypes,
          numberItems = _this$state.numberItems;
      var numberFilter = ["All", 5, 10, 25, 50, 100, 200, 500, 1000, 2000, 5000];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "px-3 h-100 d-flex overflow-hidden flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "py-3 d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "mr-auto flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "XBRL Historical Filings"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.numberdropdownOpen,
        toggle: this.toggleNumber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, numberFilter.map(function (number, index) {
        if (!index) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
            key: index,
            onClick: function onClick() {
              return _this2.handleNumberFilterClick(number);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, number);
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
          key: index,
          onClick: function onClick() {
            return _this2.handleNumberFilterClick(number);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "<", " ", number);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        className: "p-2",
        style: {
          width: "120px"
        },
        isOpen: this.state.formdropdownOpen,
        toggle: this.toggleFormType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
        outline: true,
        className: "w-100",
        style: {
          boxShadow: "none"
        },
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.handleFilterClick(availableFormTypes);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "All"), availableFormTypes.map(function (formType, index) {
        var badgeColor = "primary";
        var values = Object.values(_config__WEBPACK_IMPORTED_MODULE_10__["filings"]);

        for (var key = 0; key < values.length; key++) {
          for (var filing = 0; filing < values[key].filingArray.length; filing++) {
            if (formType === values[key].filingArray[filing]) {
              badgeColor = values[key].color;
            }
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
          key: formType + index,
          onClick: function onClick() {
            return _this2.handleFilterClick([formType]);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, formType, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
          color: badgeColor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, formType));
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: "d-flex justify-content-center flex-grow-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_9__["Filings"], {
        data: data,
        filter: filter,
        number: numberItems,
        apiRoute: 'edgar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })));
    }
  }]);

  return XBRLHistoricalPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (XBRLHistoricalPage);

/***/ }),

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! exports provided: login, loginWithJwt, logout, getCurrentUser, getJwt, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithJwt", function() { return loginWithJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJwt", function() { return getJwt; });
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpService */ "./src/services/httpService.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);




var apiEndpoint = "/api/auth";
var tokenKey = "UserToken";
function login(_x, _x2) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password) {
    var _ref, jwt;

    return _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _httpService__WEBPACK_IMPORTED_MODULE_2__["default"].post(apiEndpoint, {
              email: email,
              password: password
            });

          case 2:
            _ref = _context.sent;
            jwt = _ref.data;
            localStorage.setItem(tokenKey, jwt);
            _httpService__WEBPACK_IMPORTED_MODULE_2__["default"].setJwt(getJwt());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _login.apply(this, arguments);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
  _httpService__WEBPACK_IMPORTED_MODULE_2__["default"].setJwt(getJwt());
}
function logout() {
  localStorage.removeItem(tokenKey);
}
function getCurrentUser() {
  try {
    var jwt = localStorage.getItem(tokenKey);
    return jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(jwt);
  } catch (e) {
    return null;
  }
}
function getJwt() {
  return localStorage.getItem(tokenKey);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  login: login,
  loginWithJwt: loginWithJwt,
  logout: logout,
  getCurrentUser: getCurrentUser,
  getJwt: getJwt
});

/***/ }),

/***/ "./src/services/httpService.js":
/*!*************************************!*\
  !*** ./src/services/httpService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "/";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(null, function (error) {
  var expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log("Uh Oh! Unexpected Error!", expectedError);
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["x-auth-token"] = jwt;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: axios__WEBPACK_IMPORTED_MODULE_0___default.a.get,
  post: axios__WEBPACK_IMPORTED_MODULE_0___default.a.post,
  put: axios__WEBPACK_IMPORTED_MODULE_0___default.a.put,
  delete: axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete,
  setJwt: setJwt
});

/***/ }),

/***/ "./src/styles/reduction.scss":
/*!***********************************!*\
  !*** ./src/styles/reduction.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./reduction.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/reduction.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./reduction.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/reduction.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./reduction.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles/reduction.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/utils/bemnames.js":
/*!*******************************!*\
  !*** ./src/utils/bemnames.js ***!
  \*******************************/
/*! exports provided: createBEM, bemNames, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBEM", function() { return createBEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bemNames", function() { return bemNames; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

var createBEM = function createBEM(namespace) {
  return {
    create: function create(blockName) {
      var block = blockName;

      if (typeof namespace === 'string') {
        block = "".concat(namespace, "-").concat(blockName);
      }

      return {
        b: function b() {
          for (var _len = arguments.length, more = new Array(_len), _key = 0; _key < _len; _key++) {
            more[_key] = arguments[_key];
          }

          return classnames__WEBPACK_IMPORTED_MODULE_0___default()(block, more);
        },
        e: function e(className) {
          for (var _len2 = arguments.length, more = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            more[_key2 - 1] = arguments[_key2];
          }

          return classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(block, "__").concat(className), more);
        },
        m: function m(className) {
          for (var _len3 = arguments.length, more = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            more[_key3 - 1] = arguments[_key3];
          }

          return classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(block, "--").concat(className), more);
        }
      };
    }
  };
};
var bemNames = createBEM('cr');
/* harmony default export */ __webpack_exports__["default"] = (bemNames);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: NOTIFICATION_SYSTEM_STYLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_SYSTEM_STYLE", function() { return NOTIFICATION_SYSTEM_STYLE; });
var NOTIFICATION_SYSTEM_STYLE = {
  NotificationItem: {
    DefaultStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '4px',
      fontSize: '14px'
    },
    success: {
      borderTop: 0,
      backgroundColor: '#45b649',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },
    error: {
      borderTop: 0,
      backgroundColor: '#f85032',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },
    warning: {
      borderTop: 0,
      backgroundColor: '#ffd700',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },
    info: {
      borderTop: 0,
      background: 'linear-gradient(to right, #6a82fb, #fc5c7d)',
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },
  Title: {
    DefaultStyle: {
      margin: 0,
      padding: 0,
      paddingRight: 5,
      color: '#fff',
      display: 'inline-flex',
      fontSize: 20,
      fontWeight: 'bold' // left: '15px',
      // position: 'absolute',
      // top: '50%',

    }
  },
  MessageWrapper: {
    DefaultStyle: {
      display: 'block',
      color: '#fff',
      width: '100%'
    }
  },
  Dismiss: {
    DefaultStyle: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'inherit',
      fontSize: 20,
      color: '#f2f2f2',
      position: 'relative',
      margin: 0,
      padding: 0,
      background: 'none',
      borderRadius: 0,
      opacity: 1,
      width: 20,
      height: 20,
      textAlign: 'initial',
      float: 'none',
      top: 'unset',
      right: 'unset',
      lineHeight: 'inherit'
    }
  },
  Action: {
    DefaultStyle: {
      background: '#fff',
      borderRadius: '2px',
      padding: '6px 20px',
      fontWeight: 'bold',
      margin: '10px 0 0 0',
      border: 0
    },
    success: {
      backgroundColor: '#45b649',
      color: '#fff'
    },
    error: {
      backgroundColor: '#f85032',
      color: '#fff'
    },
    warning: {
      backgroundColor: '#ffd700',
      color: '#fff'
    },
    info: {
      backgroundColor: '#00c9ff',
      color: '#fff'
    }
  },
  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

/***/ }),

/***/ "./src/utils/propTypes.js":
/*!********************************!*\
  !*** ./src/utils/propTypes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_Users_andreasbigger_OneDrive_University_of_Southern_California_Projects_Investment_District2Capital_portal_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a, {
  ID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
}));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/andreasbigger/OneDrive - University of Southern California/Projects/Investment/District2Capital/portal/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map