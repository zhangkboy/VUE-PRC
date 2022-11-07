<template>
  <div class="page">
    <ul v-for="(set, index) in sets" :key="index">
      <li v-for="(n, index) in even(set)" :key="index">{{ n }}</li>
    </ul>

    <div>
      <span v-for="(n, index) in 10" :key="index">{{ n }} </span>
    </div>

    <ul>
      <template v-for="(item, index) in items">
        <li :key="index">{{ item.message }}</li>
        <li class="divider" role="presentation" :key="index">q</li>
      </template>
    </ul>

    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        />
        <button>Add</button>
      </form>
      <ul>
        <li
          is="todo-item"
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'for2',
  data() {
    return {
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
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  components: {},
  computed: {},
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
  },

};
</script>

<style lang="scss" scoped>
</style>
