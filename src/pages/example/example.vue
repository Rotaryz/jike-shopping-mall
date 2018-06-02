<template>
  <div class="hello" @tap="two">hello</div>
</template>

<script type="text/ecmascript-6">
  import wx from 'wx'

  export default {
    methods: {
      two () {
        let url = `/pages/example-two/example-two`
        wx.navigateTo({url})
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .hello
    color: red
    font-size: 28px
</style>
