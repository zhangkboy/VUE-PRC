<template>
  <div class="page">
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br />
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

    <input type="checkbox" id="checkbox" v-model="checked" />

    <!-- label的for 隐式绑定： -->
    <!-- label的for: 如果在label元素内点击文本，就会触发此控件。就是说，当用户渲染该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。 -->
    <label for="checkbox">{{ checked }}</label>
    <p></p>
    <p>
      <label
        >Date of Birth: <input type="text" name="DofB" v-model="message" />{{
          message
        }}</label
      >
    </p>
    <p>
      <input type="text" name="DofB" id="aaa" v-model="message" />
      <!-- 显示绑定 -->
      <label for="aaa">Date of Birth: {{ message }}</label>
    </p>

    <!-- 多选按钮 -->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>

    <!-- 单选按钮 -->
    <div id="example-4">
      <input type="radio" id="one1" value="One" v-model="picked" />
      <label for="one1">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div>

    <!-- select -->
    <div id="example-6">
      <select v-model="selected" multiple style="width: 50px">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br />
      <span>Selected: {{ selected }}</span>
    </div>

    <!-- 值绑定
    对于单选按钮，复选框及选择框的选项，v-model 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)： -->

    <!-- 当选中时，`picked` 为字符串 "a" -->
    <div><input type="radio" name="q" v-model="picked" value="a" />aa</div>
    <div><input type="radio" name="b" v-model="picked2" value="b" />bb</div>

    <!-- `toggle` 为 true 或 false -->
    <input type="checkbox" v-model="toggle" />
    <input type="radio" name="c" v-model="picked" value="c" />cc

    <!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
    <select v-model="selected">
      <option value="abc">ABC</option>
    </select>

    <form>
      <input type="radio" name="sex" />男 <input type="radio" name="sex" />女

      <input type="radio" name="subject" />HTML
      <input type="radio" name="subject" />CSS
    </form>

    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="picked" />
    {{ picked }}

    <input v-model.trim="msg" />
    {{ msg }}

    <input v-model.number="age" type="number" />
    {{ age }}
  </div>
</template>

<script>
export default {
  name: "input1",
  data() {
    return {
      message: "",
      checked: true,
      checkedNames: [],
      picked: "",
      msg: "",
      age: "",
      selected: [],
    };
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>