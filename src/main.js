import Vue from 'vue'
import App from './App.vue'
// import _ from 'lodash'

Vue.config.productionTip = false
// Vue.use(plugin);
// 定义一个名为 button-counter 的新组件
// Vue.component("button-counter", {
//   data: function () {
//     return {
//       count: 0,
//     };
//   },
//   template:
//     '<input v-model.trim="msg" />\
//     < button button v - on: click = "count++" > You clicked me {{ count }} times.</ > ',
// })

// const Feature = Vue.component('component1',component1);


// Vue.component('todo-item', {
//   template: '\
//     <li>\
//       {{ title }}\
//       <button v-on:click="$emit(\'remove\')">Remove</button>\
//     </li>\
//   ',
//   props: ['title']
// })

// new Vue({
//   el: '#todo-list-example',
//   data: {
//     newTodoText: '',
//     todos: [
//       {
//         id: 1,
//         title: 'Do the dishes',
//       },
//       {
//         id: 2,
//         title: 'Take out the trash',
//       },
//       {
//         id: 3,
//         title: 'Mow the lawn'
//       }
//     ],
//     nextTodoId: 4
//   },
//   methods: {
//     addNewTodo: function () {
//       this.todos.push({
//         id: this.nextTodoId++,
//         title: this.newTodoText
//       })
//       this.newTodoText = ''
//     }
//   }
// })





/*
$mount 手动挂在，把生成的实例挂在在app这个标签上
ES5:
render: function(creatElement) {
  return creatElement(app)
}
ES6:
render(creatElement) {
  return creatElement(app)
}

render(h) {
  return h(app)
}

render: h => h(App)
*/
new Vue({
  render: h => h(App),
  // components: {
  //   // 'button-counter': button-counter,
  //   // 'component1': component1
  // }
}).$mount('#app')
