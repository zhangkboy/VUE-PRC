<template>
  <div class="page">
    <!-- <input v-model.trim="msg" @input="onInput" :value="iValue" /> -->
    <input @input="onInput" :value="value1" />

    <p>{{ title }}</p>
    <p>{{ likes }}</p>
    <!-- <p>{{ isPublished }}</p> -->
    <!-- <p>{{ title }}</p>
    <p>{{ title }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'component1',
  // 单向数据流
  // 所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，
  // 但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。
  // 额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。
  // 这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise, // or any other constructor
    value1: String,
  },
  /*
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
*/

  // props: ['title', 'likes', 'isPublished', 'commentIds', 'author'],
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    onInput(e) {
      console.log(e.target.value);
      // this.title = "watch";
      // this.likes = 999;
      this.$emit('valueChanged', e.target.value, this.title, this.likes);
      // 通过.sync可以简化上面代码(组件内触发的事件名称以“update:myPropName”命名,
      // 父组件v-bind:value 加上.sync修饰符，即 v-bind:value.sync)
      // this.$emit("update:value", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
