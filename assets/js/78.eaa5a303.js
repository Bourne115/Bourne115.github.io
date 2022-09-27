(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{640:function(t,e,a){"use strict";a.r(e);var c=a(14),o=Object(c.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"computed-和-watch-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别"}},[t._v("#")]),t._v(" computed 和 watch 的区别")]),t._v(" "),a("p",[t._v("通俗来讲，既能用 computed 实现又可以用 watch 监听来实现的功能，推荐用 computed， 重点在于 computed 的缓存功能 computed 计算属性是用来声明式的描述一个值依赖了其它的值，当所依赖的值或者变量改变时，计算属性也会跟着改变； watch 监听的是已经在 data 中定义的变量，当该变量变化时，会触发 watch 中的方法。")]),t._v(" "),a("p",[t._v("watch 属性监听 是一个对象，键是需要观察的属性，值是对应回调函数，主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作,监听属性的变化，需要在数据变化时执行异步或开销较大的操作时使用")]),t._v(" "),a("p",[t._v("computed 计算属性 属性的结果会被缓存，当computed中的函数所依赖的属性没有发生改变的时候，那么调用当前函数的时候结果会从缓存中读取。除非依赖的响应式属性变化时才会重新计算，主要当做属性来使用 computed中的函数必须用return返回最终的结果 computed更高效，优先使用。data 不改变，computed 不更新。\n使用场景 computed：当一个属性受多个属性影响的时候使用，例：购物车商品结算功能 watch：当一条数据影响多条数据的时候使用，例：搜索数据")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("计算属性可以从组件数据派生出新数据，最常见的使用方式是设置一个函数，返回计算之后的结果，computed 和 methods 的差异是它具备缓存性，如果依赖项不变时不会重新计算。侦听器可以侦测某个响应式数据的变化并执行副作用，常见用法是传递一个函数，执行副作用，watch 没有返回值，但可以执行异步操作等复杂逻辑。")])]),t._v(" "),a("li",[a("p",[t._v("计算属性常用场景是简化行内模板中的复杂表达式，模板中出现太多逻辑会是模板变得臃肿不易维护。侦听器常用场景是状态变化之后做一些额外的 DOM 操作或者异步操作。选择采用何用方案时首先看是否需要派生出新值，基本能用计算属性实现的方式首选计算属性。")])]),t._v(" "),a("li",[a("p",[t._v("使用过程中有一些细节，比如计算属性也是可以传递对象，成为既可读又可写的计算属性。watch 可以传递对象，设置 deep、immediate 等选项。")])])]),t._v(" "),a("h2",{attrs:{id:"vue3相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3相关"}},[t._v("#")]),t._v(" vue3相关")]),t._v(" "),a("ol",[a("li",[t._v("vue3 中 watch 选项发生了一些变化，例如不再能侦测一个点操作符之外的字符串形式的表达式； reactivity API 中新出现了 watch、watchEffect 可以完全替代目前的 watch 选项，且功能更加强大。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);