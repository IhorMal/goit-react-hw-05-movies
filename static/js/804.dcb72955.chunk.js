"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[804],{990:function(e,n,t){t.d(n,{Cm:function(){return s},FT:function(){return r},hG:function(){return a},jf:function(){return o},z1:function(){return c}});var i="c77f748b921c87e18a4a8be3b6f2e99b";function r(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i)).then((function(e){return e.json()}))}function c(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1")).then((function(e){return e.json()}))}function a(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US")).then((function(e){return e.json()}))}function o(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US")).then((function(e){return e.json()}))}function s(e){return fetch("\nhttps://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(e){return e.json()}))}},804:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var i=t(885),r="MovieDetails_conteiner__aJr8X",c="MovieDetails_film_description__51iKR",a="MovieDetails_list_genres__6W3qw",o="MovieDetails_item_genres__FCc0g",s=t(87),u=t(689),h=t(791),l=t(990),d=t(184),f=function(){var e=(0,u.UO)().id,n=(0,h.useState)(null),t=(0,i.Z)(n,2),f=t[0],v=t[1],p=(0,u.TH)();if((0,h.useEffect)((function(){(0,l.hG)(e).then((function(e){v({title:e.title,path:e.poster_path,average:e.vote_average,overview:e.overview,genres:e.genres})}))}),[e]),!f)return null;var g=f.title,j=f.path,m=f.average,_=f.overview,x=f.genres;return console.log(p),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(j),alt:""}),(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("h1",{children:g}),(0,d.jsxs)("p",{children:["Use Score: ",Math.round(10*m),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:_}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("ul",{className:a,children:x.map((function(e){var n=e.id,t=e.name;return(0,d.jsx)("li",{className:o,children:(0,d.jsxs)("p",{children:[t,","]})},n)}))})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=804.dcb72955.chunk.js.map