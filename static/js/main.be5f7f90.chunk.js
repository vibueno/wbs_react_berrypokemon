(this.webpackJsonpwbs_react_berrypokemon=this.webpackJsonpwbs_react_berrypokemon||[]).push([[0],{20:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(14),i=n.n(o),s=(n(20),n(4)),b=n(3),j=n.n(b);n(39),n(40);function d(e){var t=e.berryInfo;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-title",children:t.category}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsxs)("div",{className:"card-content-item",children:[Object(c.jsx)("strong",{children:"Id: "})," ",t.id]}),Object(c.jsxs)("div",{className:"card-content-item",children:[Object(c.jsx)("strong",{children:"Name: "}),t.name]})]})]})}n(41);function u(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useRef)(null),i=Object(r.useRef)(null);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{ref:o,onSubmit:function(e){var t=i.current.value;j.a.get("https://pokeapi.co/api/v2/berry/".concat(t)).then((function(e){a(e.data.name)})).catch((function(e){a("no berry available with the specified id.")})),o.current.reset(),e.preventDefault()},children:[Object(c.jsx)("input",{ref:i,id:"user-berry",type:"text",placeholder:"Enter a berry id...",required:!0}),Object(c.jsx)("button",{type:"submit",children:"get berry!"})]}),Object(c.jsx)("div",{className:"returned-berry",children:Object(c.jsx)("strong",{children:""!==n?"Your berry: ".concat(n):""})})]})}n(42);function l(e){var t=e.pokemonList;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:"pokemon-list",children:Object.keys(t).map((function(e,n){return Object(c.jsx)("li",{children:t[n].name},e)}))})})}var h=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),b=i[0],h=i[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),O=m[0],p=m[1],v=Object(r.useState)(""),x=Object(s.a)(v,2),y=x[0],g=x[1];return document.title="Pokemoon & Berryland",Object(r.useEffect)((function(){j.a.get("https://pokeapi.co/api/v2/berry/1").then((function(e){var t={category:"berry",id:e.data.id,name:e.data.name};a(t)})).catch((function(e){console.log(e)})),j.a.get("https://pokeapi.co/api/v2/berry-firmness/1").then((function(e){var t={category:"firmness",id:e.data.id,name:e.data.name};h(t)})).catch((function(e){console.log(e)})),j.a.get("https://pokeapi.co/api/v2/berry-flavor/1").then((function(e){var t={category:"flavour",id:e.data.id,name:e.data.name};p(t)})).catch((function(e){console.log(e)})),j.a.get(" https://pokeapi.co/api/v2/pokemon").then((function(e){g(e.data.results)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Welcome to Pokemoon & Berryland!"}),Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)(d,{berryInfo:n}),Object(c.jsx)(d,{berryInfo:b}),Object(c.jsx)(d,{berryInfo:O})]}),Object(c.jsx)(u,{}),Object(c.jsx)("h2",{children:"Pokemon buddies"}),Object(c.jsx)(l,{pokemonList:y})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),f()}},[[43,1,2]]]);
//# sourceMappingURL=main.be5f7f90.chunk.js.map