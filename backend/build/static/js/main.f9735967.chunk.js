(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(11),n(12),n(1)),s=n.n(l),i=n(2),u=n(3),m=function(e){var t=e.todo,n=Object(a.useState)(t.description),c=Object(u.a)(n,2),o=c[0],l=c[1],m=function(){var e=Object(i.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,a={description:o},e.next=5,fetch("http://localhost:5000/todos/".concat(t.todo_id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:e.sent,window.location="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-info btn-lg","data-toggle":"modal","data-target":"#id".concat(t.todo_id)},"Edit"),r.a.createElement("div",{id:"id".concat(t.todo_id),className:"modal fade",role:"dialog",onClick:function(){return l(t.description)}},r.a.createElement("div",{className:"modal-dialog modal-sm"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",{className:"modal-title"},"Edit Todo"),r.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return l(t.description)}},"\xd7")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("input",{type:"text",className:"form-control",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-success","data-dismiss":"modal",onClick:function(e){return m(e)}},"Submit"),r.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return l(t.description)}},"Close"))))))},d=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/todos/".concat(t),{method:"DELETE"});case 3:e.sent,c(n.filter((function(e){return e.todo_id!==t}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/todos");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.rows),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),console.log(n),r.a.createElement("div",null,r.a.createElement("table",{className:"table mt-5 text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Edit"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.todo_id},r.a.createElement("td",null,e.description),r.a.createElement("td",null,r.a.createElement(m,{todo:e})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return o(e.todo_id)}},"Delete")))})))))},p=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={description:n},e.next=5,fetch("http://localhost:5000/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:e.sent,window.location="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center mt-5"},"Pern Todo List"),r.a.createElement("form",{className:"d-flex mt-5",onSubmit:o},r.a.createElement("input",{type:"text",className:"form-control",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"btn btn-success"},"Add")))};var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(p,null)),r.a.createElement(d,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.f9735967.chunk.js.map