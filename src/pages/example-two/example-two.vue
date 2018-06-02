<template>
  <div class="two">two-bug-demo</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        test: 0
      }
    },
    onShow () {
      console.log(this.test)
      this.test++
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .two
    color: #abcdef
    font-size: 60px
</style>
