(this["webpackJsonp@uiw/react-shields"]=this["webpackJsonp@uiw/react-shields"]||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(8),o=r.n(c),s=r(9),i=r.p+"static/media/logo.105c84b7.svg",u=(r(15),r(2)),l=r(4),f=r(3),p=r(1),m=r(5),y=r(6);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var j=function(e){Object(l.a)(r,e);var t=b(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(y.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.Children.toArray(this.props.children).map((function(t){if(a.a.isValidElement(t))return a.a.cloneElement(t,v(v({},e.props),t.props))})))}}]),r}(n.Component);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var E=function(e){Object(l.a)(r,e);var t=O(r);function r(e,n,a){var c;return Object(u.a)(this,r),(c=t.call(this,e)).getUrl=function(){return""},c.state=Object.assign({},g(g({},n),e),a),c}return Object(y.a)(r,[{key:"render",value:function(){var e=this.state.href;return e?a.a.createElement("a",{href:e}," ",a.a.createElement("img",{src:this.getUrl()})," "):a.a.createElement("img",{src:this.getUrl()})}}]),r}(n.Component);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}E.defaultProps={platform:"github",base:"https://img.shields.io"};var R=function(e){Object(l.a)(r,e);var t=w(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{platform:"github",type:"issues"})).getUrl=function(){var e=n.state,t=e.type,r=e.platform,a=e.property,c=e.user,o=e.repo,s=e.label,i=e.base;return"github"!==r?"":"issues"===t||/^issues\-(raw|closed|closed\-raw|pr|pr\-raw|pr\-closed|pr\-closed\-raw)/.test(t)?s&&("issues"===t||/^issues\-(raw|pr|pr\-raw)/.test(t||""))?[i,r,t,c,o,s].join("/"):[i,r,t,c,o].join("/"):"issueKind"===t?[i,r,t,"detail",a,c,o].join("/"):""},n}return r}(E);function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var N=function(e){Object(l.a)(r,e);var t=D(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{platform:"github",type:"languages"})).getUrl=function(){var e=n.state,t=e.type,r=e.platform,a=e.user,c=e.repo,o=e.base,s=e.path;return"github"!==r?"":"languages"===t?[o,r,t,"code-size",a,c].join("/"):"repo-size"===t?[o,r,t,a,c].join("/"):"size"===t&&s?[o,r,t,a,c,s].join("/"):""},n}return r}(E);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var k=function(e){Object(l.a)(r,e);var t=S(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{platform:"github",type:"downloads",total:!0})).getUrl=function(){var e=n.state,t=e.type,r=e.platform,a=e.user,c=e.repo,o=e.base,s=e.tag,i=e.path,u=e.total;if("github"!==r||!/^(downloads|downloads-pre)/.test(t||""))return"";var l=[o,r,t,a,c];return i&&s?[].concat(l,[s,i]).join("/"):u&&s||"downloads-pre"===t&&s&&u?[].concat(l,[s,"total"]).join("/"):u?[].concat(l,["total"]).join("/"):""},n}return r}(E);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var A=function(e){Object(l.a)(r,e);var t=P(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{platform:"github",type:"commits-since"})).getUrl=function(){var e=n.state,t=e.type,r=e.platform,a=e.user,c=e.repo,o=e.base,s=e.interval,i=e.variant,u=e.version,l=e.branch;return"github"!==r?"":"commits-since"===t&&u&&l?[o,r,t,a,c,u,l].join("/"):"commit-activity"===t&&s?[o,r,t,s,a,c].join("/"):"variant"===t&&i?[o,r,t,i,a,c].join("/"):"last-commit"===t?l?[o,r,t,a,c,l].join("/"):[o,r,t,a,c].join("/"):t&&/^release\-(date|date\-pre)/.test(t)?[o,r,t,a,c].join("/"):""},n}return r}(E);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var I=function(e){Object(l.a)(r,e);var t=x(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{platform:"github",type:"version-release"})).getUrl=function(){var e=n.state,t=e.type,r=e.platform,a=e.user,c=e.repo,o=e.base,s=e.branch,i="";switch(t){case"version-release":i="v/release";break;case"version-tag":i="v/tag";break;case"package-json":i="package-json/v";break;case"manifest-json":i="manifest-json/v";break;case"go-mod":i="go-mod/go-version"}if("github"!==r||!i)return"";var u=[o,r,i,a,c];return/(go\-mod|manifest\-json|package\-json)/.test(t||"")&&s?[].concat(u,[s]).join("/"):u.join("/")},n}return r}(E);function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var V=function(e){Object(l.a)(r,e);var t=z(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{platform:"github",type:"license"})).getUrl=function(){var e=n.state,t=e.type,r=e.platform,a=e.user,c=e.repo,o=e.base;return"github"!==r?"":[o,r,t,a,c].join("/")},n}return r}(E);function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var C=function(e){Object(l.a)(r,e);var t=U(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{platform:"github",type:"languages-count"})).getUrl=function(){var e=n.state,t=e.base,r=e.platform,a=e.type,c=e.user,o=e.repo,s=e.query,i="";switch(a){case"languages-count":i="languages/count";break;case"languages-top":i="languages/top";break;case"search":i="search"}if("github"!==r||!i)return"";var u=[t,r,i,c,o];return s?[].concat(u,[s]).join("/"):u.join("/")},n}return r}(E);function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var L=function(e){Object(l.a)(r,e);var t=G(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{platform:"github",type:"followers"})).getUrl=function(){var e=n.state,t=e.type,r=e.platform,a=e.user,c=e.repo,o=e.base;return"github"!==r?"":"followers"===t?[o,r,t,a].join("/"):[o,r,t,a,c].join("/")},n}return r}(E);function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var J=function(e){Object(l.a)(r,e);var t=q(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return r}(j);J.Issues=R,J.Size=N,J.Activity=A,J.Downloads=k,J.Version=I,J.License=V,J.Analysis=C,J.Social=L;var B=J;function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var K=function(e){Object(l.a)(r,e);var t=F(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{type:"github"},{platform:"coveralls"})).getUrl=function(){var e=n.state,t=e.type,r=e.platform,a=e.user,c=e.repo,o=e.base;return"coveralls"!==r?"":[o,r,t,a,c].join("/")},n}return r}(E);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var H=function(e){Object(l.a)(r,e);var t=_(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{},{platform:"coveralls"})).getUrl=function(){var e=n.state,t=e.base,r=e.platform,a=e.projectId,c=e.branch;return"coveralls"!==r?"":c?[t,r,a,c].join("/"):[t,"codacy/coverage",a].join("/")},n}return r}(E);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var Q=function(e){Object(l.a)(r,e);var t=M(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return r}(j);Q.Coverages=K,Q.Codacy=H;var T=Q;function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var X=function(e){Object(l.a)(r,e);var t=W(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{type:"version"},{platform:"npm"})).getUrl=function(){var e=n.state,t=e.base,r=e.platform,a=e.type,c=e.scope,o=e.packageName,s=e.dependency,i=e.dependencyScope,u=e.version,l=e.registryUri;if("npm"!==r||!o)return"";var f="",p=[t,r];return"version"===a&&o?(p.push("v"),c&&p.push(c),p.push(o),u&&p.push(u),f=p.join("/"),l&&(f="".concat(f,"?registry_uri=").concat(l))):"peer-dependency"===a&&o&&s?(p.push("dependency-version"),c&&p.push(c),f=[].concat(p,[o,"peer",s]).join("/")):"dev-dependency"===a&&o&&s?(p.push("dependency-version"),c&&p.push(c),p.concat([o,"dev"]),i&&p.push(i),p.push(s),f=p.join("/")):o&&s&&(p.concat([o,s]),f=p.join("/")),f},n}return r}(E);function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var Z=function(e){Object(l.a)(r,e);var t=Y(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e,{format:"min"},{platform:"npm"})).getUrl=function(){var e=n.state,t=e.base,r=(e.type,e.platform),a=e.format,c=e.packageName,o=e.scope,s=e.version;if("npm"!==r)return"";var i=[t,"bundlephobia"],u="";return c&&a&&(u=[].concat(i,[a,c]).join("/")),c&&a&&o&&(u=[].concat(i,[a,o,c]).join("/")),c&&a&&o&&s&&(u=[].concat(i,[a,o,c,s]).join("/")),c&&a&&s&&(u=[].concat(i,[a,c,s]).join("/")),u},n}return r}(E);function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var ee=function(e){Object(l.a)(r,e);var t=$(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return r}(j);ee.Version=X,ee.Size=Z;var te=ee,re=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s.a,{href:"https://github.com/uiwjs/react-shields"}),a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:i,className:"App-logo",alt:"logo"}),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github Social"),a.a.createElement(B.Social,{user:"jaywcjlove",repo:"uiw",href:"https://github.com/jaywcjlove"}),a.a.createElement(B,{user:"jaywcjlove",repo:"awesome-mac"},a.a.createElement(B.Social,{type:"forks"}),a.a.createElement(B.Social,{type:"stars"}),a.a.createElement(B.Social,{type:"watchers"}),a.a.createElement(B.Social,{type:"followers"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Npm Version"),a.a.createElement(te.Version,{scope:"@uiw",packageName:"react-shields"}),a.a.createElement(te,null,a.a.createElement(te.Version,{scope:"@uiw",packageName:"react-github-corners"}),a.a.createElement(te.Version,{packageName:"hotkeys-js"}),a.a.createElement(te.Version,{packageName:"kkt",version:"latest"}),a.a.createElement(te.Version,{packageName:"tsbb"}),a.a.createElement(te.Version,{scope:"@uiw",type:"peer-dependency",dependency:"react",packageName:"react-github-corners"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Npm Size"),a.a.createElement(te.Size,{scope:"@uiw",packageName:"react-shields"}),a.a.createElement(te,null,a.a.createElement(te.Size,{format:"minzip",scope:"@uiw",packageName:"react-github-corners"}),a.a.createElement(te.Size,{packageName:"hotkeys-js"}),a.a.createElement(te.Size,{packageName:"kkt",version:"5.0.0-alpha.12"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github Issue"),a.a.createElement(B.Issues,{user:"uiwjs",repo:"uiw"}),a.a.createElement(B,{user:"uiwjs",repo:"uiw"},a.a.createElement(B.Issues,{href:"https://github.com/uiwjs/react-shields",type:"issues"}),a.a.createElement(B.Issues,{type:"issues-raw"}),a.a.createElement(B.Issues,{type:"issues-closed"}),a.a.createElement(B.Issues,{type:"issues-closed-raw"}),a.a.createElement(B.Issues,{type:"issues-pr"}),a.a.createElement(B.Issues,{type:"issues-pr-raw"}),a.a.createElement(B.Issues,{type:"issues-pr-closed"}),a.a.createElement(B.Issues,{type:"issues-pr-closed-raw"}),a.a.createElement(B.Issues,{type:"issues",label:"bug"}),a.a.createElement(B.Issues,{type:"issues-raw",label:"bug"}),a.a.createElement(B.Issues,{type:"issues-pr",label:"bug"}),a.a.createElement(B.Issues,{type:"issues-pr-raw",label:"bug"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github Downloads"),a.a.createElement(B.Downloads,{user:"uiwjs",repo:"uiw"}),a.a.createElement(B,{user:"uiwjs",repo:"uiw"},a.a.createElement(B.Downloads,{tag:"v3.9.0",total:!1}),a.a.createElement(B.Downloads,{user:"jaywcjlove",repo:"linux-command",type:"downloads-pre",tag:"v1.2.2",path:"linux-command.docset.zip"}),a.a.createElement(B.Downloads,{tag:"v3.9.0"}),a.a.createElement(B.Downloads,{tag:"v3.9.0"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github Activity"),a.a.createElement(B.Activity,{user:"uiwjs",repo:"uiw",type:"commit-activity",interval:"y"}),a.a.createElement(B,{user:"uiwjs",repo:"uiw"},a.a.createElement(B.Activity,{type:"last-commit"}),a.a.createElement(B.Activity,{type:"last-commit",branch:"gh-pages"}),a.a.createElement(B.Activity,{type:"release-date"}),a.a.createElement(B.Activity,{type:"release-date-pre"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github Size"),a.a.createElement(B.Size,{user:"uiwjs",repo:"uiw"}),a.a.createElement(B,{user:"uiwjs",repo:"uiw"},a.a.createElement(B.Size,null),a.a.createElement(B.Size,{type:"repo-size"}),a.a.createElement(B.Size,{type:"size",path:"src/index.ts"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github Version"),a.a.createElement(B.Version,{user:"uiwjs",repo:"uiw"}),a.a.createElement(B,{user:"uiwjs",repo:"uiw"},a.a.createElement(B.Version,{type:"version-tag"}),a.a.createElement(B.Version,{type:"package-json"}),a.a.createElement(B.Version,{type:"package-json",branch:"dev"}),a.a.createElement(B.Version,{user:"jaywcjlove",repo:"wxmp",type:"manifest-json"}),a.a.createElement(B.Version,{user:"jaywcjlove",repo:"wxmp",type:"manifest-json",branch:"master"}),a.a.createElement(B.Version,{user:"x-mod",repo:"routine",type:"go-mod"}),a.a.createElement(B.Version,{user:"x-mod",repo:"routine",type:"go-mod",branch:"master"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github License"),a.a.createElement(B.License,{user:"uiwjs",repo:"uiw"}),a.a.createElement(B,{user:"uiwjs",repo:"uiw"},a.a.createElement(B.License,null))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github Analysis"),a.a.createElement(B.Analysis,{user:"uiwjs",repo:"uiw"}),a.a.createElement(B,{user:"uiwjs",repo:"uiw"},a.a.createElement(B.Analysis,{type:"languages-top"}),a.a.createElement(B.Analysis,{type:"search",query:"github"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Github Coverages"),a.a.createElement(T.Coverages,{user:"jaywcjlove",repo:"hotkeys"}),a.a.createElement(T,{user:"jaywcjlove",repo:"hotkeys"},a.a.createElement(T.Coverages,{type:"github"}),a.a.createElement(T.Coverages,{type:"github"}))),a.a.createElement("div",{className:"App-list"},a.a.createElement("div",{className:"title"},"Codacy Coverages"),a.a.createElement(T.Codacy,{projectId:"1c524e61cd8640e79b80d406eda8754b"}),a.a.createElement(T,{user:"jaywcjlove",repo:"hotkeys"},a.a.createElement(T.Codacy,{projectId:"1c524e61cd8640e79b80d406eda8754b",branch:"master"}),a.a.createElement(T.Codacy,{projectId:"1c524e61cd8640e79b80d406eda8754b"})))))};o.a.render(a.a.createElement(re,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e0302b30.chunk.js.map