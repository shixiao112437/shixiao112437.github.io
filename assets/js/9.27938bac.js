(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{350:function(t,s,a){t.exports=a.p+"assets/img/1.391cc142.png"},427:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react-生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期"}},[t._v("#")]),t._v(" react 生命周期")]),t._v(" "),e("h2",{attrs:{id:"生命周期函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期函数"}},[t._v("#")]),t._v(" 生命周期函数")]),t._v(" "),e("h3",{attrs:{id:"生命周期图解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期图解"}},[t._v("#")]),t._v(" 生命周期图解")]),t._v(" "),e("p",[e("img",{attrs:{src:a(350),alt:""}}),t._v(";")]),t._v(" "),e("h3",{attrs:{id:"挂载卸载过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载卸载过程"}},[t._v("#")]),t._v(" 挂载卸载过程")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("constructor")]),t._v("\n完成react 数据初始化  只要是用了constructor() 就必须写super()")])]),t._v(" "),e("li",[e("p",[t._v("componentWillMount()\n还未渲染DOM")])]),t._v(" "),e("li",[e("p",[t._v("componentDidMount()\n组件第一次渲染完成, dom节点已经生成,一般在这里发送请求")])]),t._v(" "),e("li",[e("p",[t._v("componentWillUnmount()  类似于beforeDestory()\n在此处完成组件的卸载和数据的销毁。")]),t._v(" "),e("ul",[e("li",[t._v("clear你在组建中所有的setTimeout,setInterval")]),t._v(" "),e("li",[t._v("移除所有组建中的监听 removeEventListener")])])])]),t._v(" "),e("h3",{attrs:{id:"更新过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新过程"}},[t._v("#")]),t._v(" 更新过程")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("componentWillReceiveProps(nextProps)")]),t._v(" "),e("p",[t._v("在接受父组件改变后的props需要重新渲染组件时用到的比较多")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillReceiveProps")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            nextProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openNotice "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openNotice"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("openNotice")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nextProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openNotice\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("，")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openNotice"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("nextProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将state更新为nextProps,在setState的第二个参数（回调）可以打         印出新的state")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("shouldComponentUpdate(nextProps,nextState)")]),t._v(" "),e("ul",[e("li",[t._v("主要用于性能优化(部分更新)")]),t._v(" "),e("li",[t._v("因为react父组件的重新渲染会导致其所有子组件的重新渲染,子组件的该生命周期中做判断,在这里return false可以阻止组件的更新")])])]),t._v(" "),e("li",[e("p",[t._v("componentWillUpdate(nextProps,nextState)")])]),t._v(" "),e("li",[e("p",[t._v("componentDidUpdate(prevProps,prevState)")])]),t._v(" "),e("li",[e("p",[t._v("render()\nrender函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。")])])]),t._v(" "),e("h2",{attrs:{id:"新增生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增生命周期"}},[t._v("#")]),t._v(" 新增生命周期")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("getDerivedStateFromProps()静态方法\ngetDerivedStateFromProps 中还禁止了组件去访问 this.props，强制让开发者去比较 nextProps 与 prevState 中的值，以确保当开发者用到 getDerivedStateFromProps 这个生命周期函数时，就是在根据当前的 props 来更新组件的 state，而不是去做其他一些让组件自身状态变得更加不可预测的事情。")])]),t._v(" "),e("li",[e("p",[t._v("getSnapshotBeforeUpdate(prevProps, prevState)")]),t._v(" "),e("p",[t._v("代替componentWillUpdate。\n常见的 componentWillUpdate 的用例是在组件更新前，读取当前某个 DOM 元素的状态，并在 componentDidUpdate 中进行相应的处理。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);