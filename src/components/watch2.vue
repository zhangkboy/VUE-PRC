<template>
  <div class="page">
    <p></p>
    <input type="text" v-model="question">
    <p>{{ answer }}</p>
  </div>
</template>

<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>

<script>
export default {
  name: "watch2",
  data() {
    return {
        question: '',
        answer: 'waiting for your question'
    }
  },
  created() {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  components: {

  },
  computed: {

  },
  methods: {
      getAnswer() {
          this.answer = 'Thinking...'
          var vm = this;
          axios.get('https://yesno.wtf/api','')
          .then(res => {
              console.log(res)
              vm.answer = _.capitalize(response.data.answer)
          })
          .catch(err => {
              console.error(err);
              vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
  },
  watch: {
      // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
        console.log(newQuestion);
        console.log(oldQuestion);

      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
