"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{990:function(n,e,t){t.d(e,{Cm:function(){return a},FT:function(){return c},hG:function(){return i},jf:function(){return u},z1:function(){return o}});var r="c77f748b921c87e18a4a8be3b6f2e99b";function c(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.json()}))}function o(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=1")).then((function(n){return n.json()}))}function i(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))}function u(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))}function a(n){return fetch("\nhttps://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.json()}))}},681:function(n,e,t){t.r(e);var r=t(885),c=t(689),o=t(791),i=t(990),u=t(184);e.default=function(){var n=(0,o.useState)(null),e=(0,r.Z)(n,2),t=e[0],a=e[1],h=(0,c.UO)().id;return(0,o.useEffect)((function(){(0,i.Cm)(h).then((function(n){a(n.results)}))}),[h]),t?(0,u.jsxs)("div",{children:[0!==t.length?(0,u.jsx)("ul",{children:t.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("h5",{children:["Author: ",e]}),(0,u.jsx)("p",{children:t})]},r)}))}):(0,u.jsx)("p",{children:"There are no reviews"}),(0,u.jsx)(c.j3,{})]}):null}}}]);
//# sourceMappingURL=681.8fb4decb.chunk.js.map