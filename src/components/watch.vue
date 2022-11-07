<template>
  <div class="page">
      <div id="demo">{{ fullName }}</div>
      <p><button @click="aaa">click</button></p>
  </div>
</template>

<script>
export default {
  name: "watch",
  data() {
    return {
        firstName: 'Foo',
        lastName: 'Bar',
        // fullName: 'Foo Bar'
    }
  },
  components: {

  },
  computed: {
    //   fullName () {
    //     return this.firstName + ' ' + this.lastName
    // }

    fullName: {
        // getter
        get: function () {
            return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            // this.firstName = names[0]
            this.lastName = names[names.length - 1]
            // this.lastName = names[names.length - 1]
    }
    }
  },
  methods: {
        aaa() {
            this.fullName = 'KC WL'
        //   this.firstName = 'KC'
      }
  },
  watch: {
      firstName(v) {
        this.fullName = v + ' ' + this.lastName
      },
      lastName(v) {        
        this.fullName = this.firstName + ' ' + v
      }

    // firstName: function (val) {
    //   this.fullName = val + ' ' + this.lastName
    // },
    // lastName: function (val) {
    //   this.fullName = this.firstName + ' ' + val
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>