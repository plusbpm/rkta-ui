(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/util/createMediaQueries.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return g});var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");a("./node_modules/docz/dist/index.m.js"),a("./src/index.js");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}function c(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,n){return!n||"object"!==r(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=s(this,l(n).call(this,e))).layout=null,a}var a,t,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,m.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"breakpoints"}},"Breakpoints"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { createMediaQueries } from 'rkta-ui';\n\nconst customTheme = {\n  mediaQueries: createMediaQueries([{ brekpointName: SIZE:int }]),\n}\n")),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"named-breakpoints"}},"Named breakpoints"),m.a.createElement(o.MDXTag,{name:"p",components:n},"We got same breakpoints like they have in material UI but we name them differently:"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"phone")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"0"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"tablet")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"600"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"laptop")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"960"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"desktop")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"1280"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"jumbotron")," ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"1920"),"  "),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"mediaqueries"}},"Mediaqueries"),m.a.createElement(o.MDXTag,{name:"p",components:n},"5 breakpoints are used to generate 13 named media queries:"),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"atLeastDesktop")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (max-width: 1919px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"atLeastLaptop")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (max-width: 1279px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"atLeastPhone")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (max-width: 599px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"atLeastTablet")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (max-width: 959px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"atMostDesktop")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (min-width: 1280px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"atMostJumbotron")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (min-width: 1920px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"atMostLaptop")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (min-width: 960px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"atMostTablet")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (min-width: 600px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"desktop")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (min-width: 1280px) and (max-width: 1919px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"jumbotron")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (min-width: 1920px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"laptop")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (min-width: 960px) and (max-width: 1279px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"phone")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (max-width: 599px)"),m.a.createElement(o.MDXTag,{name:"br",components:n,parentName:"p"}),m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"tablet")," \u2014 ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"all and (min-width: 600px) and (max-width: 959px)"),"  "))}}])&&c(a.prototype,t),r&&c(a,r),n}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=util-create-media-queries.368c42b2ac2e226cd048.js.map