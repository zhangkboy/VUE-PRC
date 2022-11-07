<template>
  <div class="page">
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <div v-if="Math.random() > 0.5">Now you see me</div>
    <div v-else>Now you don't</div>

    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" />
    </template>

    <template v-if="loginType2 === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </template>
    <p></p>

    <!-- 注意，v-show 不支持 <template> 元素，也不支持 v-else -->
    <h1 v-show="ok">Hello!</h1>

  </div>
</template>

<script>
export default {
  name: "if1",
  data() {
    return {
      awesome: false,
      loginType: "",
      type: "",
      loginType2: 'username',
      ok: true
    };
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>