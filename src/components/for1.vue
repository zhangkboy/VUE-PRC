<template>
  <div class="page">
    <!-- <ul id="example-1">
        <li v-for="item in items" :key="item.message">
            {{ item.message }},
            {{ parentMessage }}
        </li>
        <p></p>
    </ul> -->

    <ul id="example-2">
      <li v-for="(item, index) in items" :key="item.index">
        {{ parentMessage }} - {{ index }} - {{ item.message }} - {{ item }}
      </li>
    </ul>

    <!-- 就地 更新 -->
    <div v-for="(value, name, index) in object" :key="index">
      {{ index }}. {{ name }}: {{ value }}
    </div>

    <p><button v-on:click="aaa">click</button></p>
    <p><button v-on:click="aaa1">click</button></p>

    <ul>
        <li v-for="(n, index) in evenNumbers" :key="index">{{ n }}</li>
    </ul>

    <ul v-for="set in sets" :key="set">
        <li v-for="n in even(set)" :key="n" >{{ n }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'component_name',
  data() {
    return {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'Foo1' },
        { message: 'Bar1' },
        { message: 'Foo2' },
        { message: 'Bar2' },
        { message: 'Foo3' },
        { message: 'Bar3' },
      ],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],

    };
  },
  components: {},
  computed: {
    evenNumbers() {
      return this.items.filter((item) => item.message.match(/Foo/));
    },
  },
  methods: {
    aaa() {
      this.items.push({ message: 'Baz' });
    },
    aaa1() {
    //   this.items.pop();
      this.items = this.items.filter((item) => item.message.match(/Foo/));
    },
    even(numbers) {
      return numbers.filter((number) => number % 2 === 1);
    },

  },
};
</script>

<style lang="scss" scoped>
</style>
