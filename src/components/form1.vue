<template>
    <div class="page">
        <!-- v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
    text 和 textarea 元素使用 value property 和 input 事件；
    checkbox 和 radio 使用 checked property 和 change 事件；
    select 字段将 value 作为 prop 并将 change 作为事件。 -->
        <textarea v-model="message" placeholder="add multiple lines"> </textarea>
        {{ message }}
        <p></p>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
        <br />
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>
        <br />
        <span>Checked names: {{ checkedNames }}</span>

        <div id="example-4">
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">One</label>
            <br />
            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Two</label>
            <br />
            <span>Picked: {{ picked }}</span>
        </div>

        <div id="example-5">
            <select v-model="selected">
                <option disabled value="">请选择</option>
                <option value="a">A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>

        <div id="example-6">
            <select v-model="selected" multiple style="width: 50px">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <br />
            <span>Selected: {{ selected }}</span>
        </div>

        <select v-model="selected">
            <option v-for="option in options" v-bind:value="option.value" :key="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>

        <!-- 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步
    (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步： -->
        <input v-model.lazy="msg" />
        <!-- 这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值 -->
        <input v-model.number="age" type="number" />

        <!-- 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符 -->
        <input v-model.trim="msg" />
    </div>
</template>

<script>
export default {
  name: 'component_name',
  data() {
    return {
      message: '',
      checked: false,
      checkedNames: [], // checkedNames: false
      picked: '', //
      // selected: [],
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
