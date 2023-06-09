<template>
  <div class="page">
    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
    <button v-on:click.ctrl="onClick">A</button>

    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
    <button v-on:click.ctrl.exact="onCtrlClick">A</button>

    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button v-on:click.exact="onClick">A</button>
  </div>
</template>

<script>
export default {
  name: 'component_name',
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    onClick() {
      alert(0)
    },
    onCtrlClick() {
      alert(1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
