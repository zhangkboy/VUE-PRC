<template>
<div>
    <p v-if="seen">现在你看到我了</p>  

    <!-- v-bind 指令可以用于响应式地更新 HTML attribute： -->
    <a v-bind:href="url">...</a>
    <p></p>
    <!-- 从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数： -->
    <a v-bind:[attributeName]="url"> ... </a>
    <p></p>

    <a v-on:[eventName]="doSomething"> ... </a>

    <!-- 这会触发一个编译警告. 使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式 -->
    <p><a v-bind:[foo]="value"> ... </a></p>
    
    <!-- 在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写 -->
    <!--
    在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
    除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
    -->
    <a v-bind:[someAttr]="value"> ... </a>

    
<!-- 修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()： -->
<form v-on:submit.prevent="onSubmit">...</form>


<!-- 动态参数的缩写 (2.6.0+) -->
<a :[someAttr]="url"> ... </a>
<!-- 动态参数的缩写 (2.6.0+) -->
<a @[eventName]="doSomething"> ... </a>


</div>
</template>

<script>
export default {
  name: "Directives",
  data () {
    return {
        seen: false,
        url: "https://www.baidu.com",
        attributeName: "href",
        eventName: "focus",
        someAttr: "href"
    };
  },
  methods: {
      doSomething() {
          alert('aaa');
      }
  },
//   computed() {
//       return {
//           foo: {
//               getters() {
//                   return 'foo' + bar
//               }
//           }
//       }
//   }
}
</script>

<style lang="scss" scoped>
</style>