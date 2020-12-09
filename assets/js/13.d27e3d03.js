(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{367:function(t,a,e){"use strict";e.r(a);var r=e(42),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"事务-multi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务-multi"}},[t._v("#")]),t._v(" 事务（multi）")]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("一个事务中的命令要么执行，要么都不执行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('开启事务\nredis 127.0.0.1:6379> MULTI \nOK\n\nredis 127.0.0.1:6379> SET book-name "Mastering C++ in 21 days"\nQUEUED\n\nredis 127.0.0.1:6379> GET book-name\nQUEUED\n\nredis 127.0.0.1:6379> SADD tag "C++" "Programming" "Mastering Series"\nQUEUED\n\nredis 127.0.0.1:6379> SMEMBERS tag\nQUEUED\n\n退出事务\nredis 127.0.0.1:6379> EXEC\n\n')])])]),e("h2",{attrs:{id:"watch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),e("p",[t._v("可以监听一个字段，如果这个字段被修改，后续的事务是无法进行的。")]),t._v(" "),e("p",[t._v("如果使用watch来监听一个含有过期时间的键，该键事件到期自动删除并不会被watch监听到")]),t._v(" "),e("h2",{attrs:{id:"过期时间expire-pexoire-ms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过期时间expire-pexoire-ms"}},[t._v("#")]),t._v(" 过期时间expire（pexoire   ms）")]),t._v(" "),e("p",[t._v("expire key time   返回值 OK")]),t._v(" "),e("p",[t._v("ttl  key  剩余时间 （-1 永久存在  没有设置expire；-2 字段不存在）")]),t._v(" "),e("p",[t._v("expireat和expireat  Unix时间")]),t._v(" "),e("h2",{attrs:{id:"访问频率限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问频率限制"}},[t._v("#")]),t._v(" 访问频率限制")]),t._v(" "),e("h2",{attrs:{id:"实现缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现缓存"}},[t._v("#")]),t._v(" 实现缓存")])])}),[],!1,null,null,null);a.default=s.exports}}]);