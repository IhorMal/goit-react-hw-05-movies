"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{990:function(n,e,t){t.d(e,{Cm:function(){return u},FT:function(){return c},hG:function(){return i},jf:function(){return a},z1:function(){return o}});var r="c77f748b921c87e18a4a8be3b6f2e99b";function c(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.json()}))}function o(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(n,"&page=1")).then((function(n){return n.json()}))}function i(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))}function a(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))}function u(n){return fetch("\nhttps://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.json()}))}},597:function(n,e,t){t.r(e);var r=t(885),c=t(689),o=t(791),i=t(990),a=t(184);e.default=function(){var n=(0,o.useState)(null),e=(0,r.Z)(n,2),t=e[0],u=e[1],h=(0,c.UO)().id;return(0,o.useEffect)((function(){(0,i.jf)(h).then((function(n){console.log(n),u(n.cast)}))}),[h]),t?(0,a.jsxs)("div",{children:[0!==t.length?(0,a.jsx)("ul",{children:t.map((function(n){var e=n.profile_path,t=n.name,r=n.character,c=n.id;return(0,a.jsxs)("li",{children:[e?(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e),alt:t}):(0,a.jsx)("p",{children:"no Foro"}),(0,a.jsxs)("p",{children:["Name: ",t]}),(0,a.jsxs)("p",{children:["Character: ",r]})]},c)}))}):(0,a.jsx)("p",{children:"There is no information"}),(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading subpage..."}),children:(0,a.jsx)(c.j3,{})})]}):null}}}]);
//# sourceMappingURL=597.b8f8c52f.chunk.js.map