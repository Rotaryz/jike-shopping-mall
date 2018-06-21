<template>
  <article>
    <div class="two">two-bug-demo</div>
    <div @click="getInfo">vuex获取数据mapGetters</div>
  </article>

</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        test: 0
      }
    },
    onShow () {
      console.log(this)
      this.test++
    },
    methods: {
      ...mapGetters(['role']),
      getInfo () {
        console.log(this.role(), '获取数据')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .two
    color: #abcdef
    font-size: 60px
</style>
