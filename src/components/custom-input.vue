<template>
  <div class="page">
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  data() {
    return {}
  },
  props: ['value'],
  components: {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
