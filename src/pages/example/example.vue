<template>
  <article>
    <div class="hello" @tap="two">页面跳转two</div>
    <div class="btn" @tap="toSave2">mapActions保存数据</div>
    <div class="test" @tap="toSaveRoleAction">mapActions保存数据</div>
    <div class="btn2" @tap="getRole">获取数据</div>
    <div class="btn" @tap="showSuccess">show success</div>
  </article>

</template>

<script type="text/ecmascript-6">
  import wx from 'wx'
  import * as wechat from 'common/js/wechat'
  import { mapMutations, mapActions, mapGetters } from 'vuex'

  export default {
    methods: {
      ...mapGetters(['role']),
      ...mapActions(['saveRole']),
      ...mapMutations({ // 同步
        roleSync: 'ROLE_TYPE'
      }),
      toSaveRoleAction () { // 异步-同步操作
        this.saveRole('shop')
        console.log('mapActions保存shop变量,可异步可同步')
      },
      getRole () { // 获取数据
        console.log(this.role(), '获取数据')
      },
      toSave2 () {
        this.roleSync('union')
        console.log('mapMutations保存union变量,同步')
      },
      showSuccess() {
        wechat.tipSuccess('操作成功')
      },
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
