<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="第一天la"/> -->
    <!-- <AOne msg="AAAAOOOO"></AOne> -->
    <!-- <Directives></Directives> -->
    <!-- <modifier></modifier> -->
    <!-- <compute></compute> -->
    <!-- <watch2></watch2> -->
    <!-- <classStyle></classStyle> -->
    <!-- <if1></if1> -->
    <!-- <for1></for1> -->
    <!-- <event></event> -->
    <!-- <input1></input1> -->
    <!-- <button-counter></button-counter> -->
    <!-- <for2></for2> -->
    <!-- <todoItem></todoItem> -->
    <!-- <system></system> -->
    <!-- <todo-item></todo-item> -->
    <!-- <form1></form1> -->
    <!-- <component1 :title="'ssss'" :likes="22222"></component1>
    <component1 :value="myValue" @valueChanged="vChange"></component1> -->
    <!-- <component1
      :value="myValue"
      @valueChanged="vChange"
      :title="myTitle"
      :likes="myLikes"
    ></component1> -->
    <!-- <component1
      :value.sync="myValue"
      :title="myTitle"
      :likes="myLikes"
    ></component1> -->
    <!-- <component2
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      v-bind:content="post.content"
      v-bind:publishedAt="post.publishedAt"
      v-bind:comments="post.comments"
    >
    </component2> -->

    <!-- <component2
      :style="{ fontSize: postFontSize + 'em' }"
      v-for="post in posts"
      :key="post.id"
      :post="post"
      v-on:enlarge-text="postFontSize += 0.1"
    >
    </component2>
    <!-- 可以通过 $event 访问到被抛出的这个值： -->
    <!-- <div :style="{ fontSize: postFontSize + 'em' }">
      <component2 v-for="post in posts" :key="post.id" :post="post" v-on:enlarge-text="postFontSize += $event">
      </component2>
    </div>

    <component2
      :style="{ fontSize: postFontSize + 'em' }"
      v-for="post in posts"
      :key="post.id"
      :post="post"
      v-on:enlarge-text="onEnlargeText"
    ></component2> -->
    -->
    <customInput v-model="searchText"></customInput>
    <custom-input v-bind:value="searchText" v-on:input="searchText = $event"></custom-input>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AOne from '@/components/AOne.vue'
// import Directives from '@/components/Directives.vue'
// import modifier from './components/modifier.vue'
// import compute from '@/components/computed.vue'
import watch2 from '@/components/watch2.vue'
import classStyle from '@/components/classStyle.vue'
import if1 from '@/components/if1.vue'
import for1 from '@/components/for1.vue'
// import event from '@/components/event.vue'
import input1 from '@/components/input1.vue'
import for2 from '@/components/for2.vue'
import system from '@/components/system.vue'
import form1 from '@/components/form1.vue'
import component1 from '@/components/component1.vue'
import component2 from '@/components/component2.vue'
import customInput from '@/components/custom-input.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AOne,
    // Directives,
    // modifier,
    // compute,
    watch2,
    classStyle,
    if1,
    for1,
    event,
    input1,
    for2,
    system,
    form1,
    component1,
    component2,
    customInput
  },
  data() {
    return {
      myValue: '',
      myTitle: 'a a a a',
      myLikes: 0,
      posts: [
        { id: 1, title: 'My journey with Vue', content: 'content1' },
        { id: 2, title: 'Blogging with Vue', content: 'content2' },
        { id: 3, title: 'Why Vue is so fun', content: 'content3' }
      ],
      postFontSize: 1,
      searchText: ''
    }
  },
  methods: {
    vChange(v1, v2, v3) {
      console.log(`aa${v1}`)
      console.log(`bb${v2}`)
      console.log(`cc${v3}`)
      this.myValue = v1
      // this.myTitle = v2;
      // this.myLikes = v3;
    },
    onEnlargeText(enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
