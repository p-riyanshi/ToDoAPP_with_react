(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(6),s=n.n(i),r=(n(21),n(22),n(15)),o=n(4),l=n(12),u=n.n(l),j=n(1),d=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],i=n[1];return Object(j.jsxs)("div",{className:"list",children:[Object(j.jsx)("div",{className:"item",style:{textDecoration:a?"line-through":"none"},onClick:function(){i((function(e){return!e}))},children:e.value}),Object(j.jsx)("button",{className:"btn",onClick:function(t){t.preventDefault(),e.deleteItem(e.id)},children:Object(j.jsx)(u.a,{})})]})},b=n(14),f=n.n(b),O=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1];function b(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"ToDo List"}),Object(j.jsxs)("form",{className:"form-content",children:[Object(j.jsx)("input",{type:"text",placeholder:"Add ToDo item",name:"item",value:l,onChange:function(e){u(e.target.value)},autoComplete:"off"}),Object(j.jsx)("button",{onClick:function(e){var t;e.preventDefault(),0===(t=l).length?alert("please enter a valid task"):a((function(e){return[].concat(Object(r.a)(e),[t])})),u("")},children:Object(j.jsx)(f.a,{})})]})]}),Object(j.jsx)("div",{className:"todo-list",children:n.map((function(e,t){return Object(j.jsx)(d,{value:e,id:t,deleteItem:b},t)}))})]})})};var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.1005cd4f.chunk.js.map