<template>
  <div class="page">
      <!-- 我们可以传给 v-bind:class 一个对象，以动态地切换 class： -->
    <div v-bind:class="{ active: isActive }">qq</div>

    <div
        class="static"
        v-bind:class="{ active: isActive, 'text-danger': hasError }">ee
    </div>

    <div v-bind:class="classObject">rr</div>

  </div>
</template>

<script>
export default {
  name: "classStyle",
  data() {
    return {
        isActive: false,
        hasError: false,
        error: null,
        // classObject: {
        //     active: true,
        //     'text-danger': false
        // }
    }
  },
  components: {

  },
  computed: {
      classObject: function () {
        return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
        }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.text-danger {
  color: #2c3e50;
}
.active {
  color: #ff0000;
}
</style>