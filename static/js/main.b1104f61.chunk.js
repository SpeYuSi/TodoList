(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),i=a.n(l),o=(a(7),a(1)),r=a(2),s=a(4),d=a(3),u=a(5),h={set:function(e,t){localStorage.setItem(e,JSON.stringify(t))},get:function(e){return JSON.parse(localStorage.getItem(e))},remove:function(e){localStorage.removeItem(e)}},m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).addData=function(e){if(13===e.keyCode){var t=a.state.list;t.push({data:a.refs.data.value,checked:!1}),a.setState({list:t}),a.refs.data.value="",h.set("todolist",t)}},a.removeData=function(e){var t=a.state.list;t.splice(e,1),a.setState({list:t}),h.set("todolist",t)},a.handleChecked=function(e){var t=a.state.list;t[e].checked=!t[e].checked,a.setState({list:t}),h.set("todolist",t)},a.handleClear=function(){localStorage.clear(),a.setState({list:[]})},a.state={list:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=h.get("todolist");e&&this.setState({list:e})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("section",null,c.a.createElement("form",{action:""}),c.a.createElement("label",{for:"indata"},"ReactTodo"),c.a.createElement("input",{ref:"data",id:"indata",type:"text",onKeyDown:this.addData}))),c.a.createElement("section",{className:"listContainer"},c.a.createElement("h2",{className:"title"},"\u5f85\u529e\u4e8b\u9879\uff1a"),this.state.list.map(function(t,a){if(!t.checked)return c.a.createElement("div",{key:a,className:"unFinList"},c.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:e.handleChecked.bind(e,a)}),c.a.createElement("span",null,t.data),c.a.createElement("a",{href:"#",onClick:e.removeData.bind(e,a)},"x"))}),c.a.createElement("hr",null),c.a.createElement("h2",{className:"title"},"\u5df2\u5b8c\u6210\u4e8b\u9879\uff1a"),this.state.list.map(function(t,a){if(t.checked)return c.a.createElement("div",{key:a,className:"finList"},c.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:e.handleChecked.bind(e,a)}),c.a.createElement("span",null,t.data),c.a.createElement("a",{href:"#",onClick:e.removeData.bind(e,a)},"x"))})),c.a.createElement("footer",null,"Copyright \xa9 2018 Trolife |",c.a.createElement("a",{href:"#",onClick:this.handleClear}," clear")))}}]),t}(c.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.b1104f61.chunk.js.map