(this.webpackJsonpreduxproject=this.webpackJsonpreduxproject||[]).push([[0],{12:function(e,c,t){},13:function(e,c,t){},16:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(5),n=t.n(a),r=t(4),i=t.n(r),l=t(6),j=t(2),d=(t(12),t(13),t(0)),o=function(e){var c=e.val,t=e.Click,s=e.Change;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row bg-dark",children:[Object(d.jsx)("div",{className:"col-md-1",children:Object(d.jsxs)("span",{className:"design",children:[" ",Object(d.jsx)("i",{class:"fas fa-utensils"})]})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("h1",{className:"text-light",children:"Food Recipe"})}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{className:"input-group mb-3 ",children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Your Recepe...","aria-label":"First name",value:c,onChange:s}),Object(d.jsx)("button",{onClick:t,className:"btn btn-outline-primary btn-primary text-dark",type:"button",id:"button-addon2",children:"Search"})]})})]})})})},b=function(e){var c=e.fet;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"row ",children:c.map((function(e){return Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{className:"card-columns",children:Object(d.jsxs)("div",{className:"card border-dark mb-3",children:[Object(d.jsx)("img",{src:e.recipe.image,className:"img-fluid"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("h3",{children:e.recipe.label})}),Object(d.jsx)("ul",{className:"list-group list-group-flush",children:e.recipe.ingredientLines.map((function(e){return Object(d.jsx)("li",{className:"list-group-item",children:e})}))})]})})})}))})]})},u=function(){var e=Object(s.useState)(""),c=Object(j.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(""),r=Object(j.a)(n,2),u=r[0],m=r[1],p=Object(s.useState)([]),h=Object(j.a)(p,2),x=h[0],O=h[1],f=function(){var e=Object(l.a)(i.a.mark((function e(){var c,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/api/recipes/v2?type=public&q=".concat(u,"&app_id=abc36306&app_key=239e03d22a3c5b1829557fc496f66be7"));case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,O(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(x),Object(s.useEffect)((function(){f()}),[u]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{val:t,Click:function(){m(t)},Change:function(e){a(e.target.value)}}),Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)(b,{fet:x})})]})};t(15);n.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.202d1cde.chunk.js.map