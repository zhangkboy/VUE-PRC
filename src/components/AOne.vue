<template>
    <div>
         <!-- 模版语法 {{}}表达式 -->
        <!-- <h1>{{ msg + 1}}</h1> -->
        <a :href="url">a</a>
        <p><button @click="aaa">click</button></p>
        <p><button v-on:click="aaa">click</button></p>

        <!-- 请使用 <span> 来组合行内元素，以便通过样式来格式化它们 -->
        <p class="tip"><span v-once>这个将不会改变: {{ msg }}</span></p>
        <p class="tip">Using mustaches: {{ rawHtml }}</p>
        <!-- 有XSS攻击危险 -->
        <p class="tip">Using v-html directive: <span v-html="rawHtml"></span></p>

        <!-- Mustache语法，即{{}}语法 -->

        <!-- 完整语法 -->
        <p><a v-bind:href="url">...</a></p>

        <!-- 缩写 -->
        <p><a :href="url">...</a></p>

        <!-- 动态参数的缩写 (2.6.0+) -->
        <p><a :[key]="url"> ... 11</a></p>

        <!-- Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 v-bind 指令： -->
        <div v-bind:id="dynamicId"></div>

        <!-- 对于布尔 attribute (它们只要存在就意味着值为 true)，v-bind 工作起来略有不同，在这个例子中： -->
        <p><button v-bind:disabled="isButtonDisabled" @click="disableBtn">Button</button></p>
        <p><button disabled>Button2</button></p>
        <!-- vue.js 都提供了完全的 JavaScript 表达式支持。 -->
        <!--
        {{ number + 1 }}

        {{ ok ? 'YES' : 'NO' }}

        {{ message.split('').reverse().join('') }}
         -->
         <div v-bind:id="'list-' + id">{{ message.split('').reverse().join('') }}</div>

         <!-- 流控制也不会生效，请使用三元表达式 -->
        <!-- {{ if (ok) { return message } }} -->

    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: ' A  ',
      url: 'https://www.baidu.com',
      rawHtml: '<a>a</a>',
      isButtonDisabled: true,
      message: 'HelloWorld',
    };
  },

  methods: {
    aaa() {
      alert('aaa');
    },
    disableBtn() {
      console.log('disable');
    },
  },
};
</script>

<style scoped>
p.tip span {
	font-weight:bold;
	color:#ff9955;
	}
</style>
