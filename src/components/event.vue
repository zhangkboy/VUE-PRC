<template>
  <div class="page">
    <!-- 阻止单击事件继续传播 stop：阻止冒泡 -->
    <a v-on:click.stop="doThis">aaa</a>
    <p></p>
    <!-- 提交事件不再重载页面 prevent：阻止默认事件 self：只处理自己发出的事件，不处理冒泡的事件 -->
    <a href="https://www.baidu.com" v-on:click.self.prevent="onSubmit"
      >prevent</a
    >
    <p></p>
    <!-- 修饰符可以串联 -->
    <a href="https://www.baidu.com" v-on:click.stop.prevent="doThat"
      >stop.prevent</a
    >
    <p></p>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent>prevent</form>
    <p></p>
    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>
    <p></p>
    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>
    <p></p>
    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis">once</a>

    <p></p>

    <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
    <!-- 而不会等待 `onScroll` 完成  -->
    <!-- 这其中包含 `event.preventDefault()` 的情况 -->
    <div v-on:scroll.passive="onScroll">...</div>

    <!-- 按键修饰符 -->
    <!-- 在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符： -->
    <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
    <input v-on:keyup.enter="onSubmit" />
    <!-- 你可以直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符。 -->
    <input v-on:keyup.page-down="onPageDown" />

    <!-- Alt + C -->
    <input v-on:keyup.alt.67="clear" />

    <!-- Ctrl + Click -->
    <div v-on:click.ctrl="doSomething">Do something</div>

    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>


  </div>
</template>

<script>
export default {
  name: "component_name",
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }

    doThis() {
      alert("1");
    },
    onSubmit() {
      alert("2");
    },
    doThat() {
      alert("stop.prevent");
    },
    onScroll() {
      alert("onScroll");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>