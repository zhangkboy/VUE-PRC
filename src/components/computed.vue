<template>
  <div id="example">
        <p>Original message: "{{ message }}"</p>

        <!-- 计算属性的 -->
        <!-- 计算属性是基于它们的响应式依赖进行缓存的 -->
        <p>Computed reversed message: "{{ reversedMessage }}"</p>

        <!-- 调用方法 -->
        <p>Reversed message: "{{ reversedMessage1() }}"</p>

    </div>
</template>

<script>
export default {
  name: "compute",
  data() {
    return {
        message: "HelloWorld"
    }
  },
  computed: {
    // 计算属性的 getter
    // reversedMessage: {
    //     get(){
    //         return this.message.split('').reverse().join('')
    //     }
    // }
    reversedMessage() {
        // `this` 指向 vm 实例
        return Date.now();
        //return this.message.split('').reverse().join('')
    }
  },
    methods: {
        reversedMessage1: function () {
        return this.message.split('').reverse().join('')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>