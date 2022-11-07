<template>
  <div class="page">
      <!-- 我们可以把一个数组传给 v-bind:class，以应用一个 class 列表： -->

    <div v-bind:class="[activeClass, errorClass]"></div>

    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

    <div v-bind:class="[{ active: isActive }, errorClass]"></div>

    <!-- v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。
    CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名： -->

    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

    <div v-bind:style="styleObject"></div>

    <!-- v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上： -->

    <div v-bind:style="[baseStyles, overridingStyles]"></div>

  </div>
</template>

<script>
export default {
  name: 'component_name',
  data() {
    return {
      activeClass: 'active',
      errorClass: 'text-danger',
      isActive: true,
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px',
      },
    };
  },
  components: {

  },
  computed: {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>
