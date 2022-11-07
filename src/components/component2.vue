<template>
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <button v-on:click="$emit('enlarge-text')">
      Enlarge text
    </button>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'component2',
  props: {
    // props 是组件的公有属性 对外 由外部赋值 组件内部是只读的 不宜改变 改的时候运行时报警
    title: { default: 'A' },
    post: Object,
  },
  data() {
    // data 是组件的私有属性
    return {
      mTitle: this.title, // 组件内部依赖props的id初始化
    };
  },
  components: {

  },
  computed: {

  },
  methods: {
    // 方法供外部使用
    pop(title) {
      this.mTitle = title;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
