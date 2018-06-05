<template>
  <article>
    <div class="hello" @tap="two">页面跳转two</div>
    <div class="btn" @tap="toSave2">mapActions保存数据</div>
    <div class="test" @tap="toSaveRoleAction">mapActions保存数据</div>
    <div class="btn2" @tap="getRole">获取数据</div>
    <div class="btn" @tap="showSuccess">show success</div>
    <div class="toast" @tap="showT">show toast</div>
    <div @tap="testReq">test 请求接口</div>
    <div @tap="cutTest">复制hello world到剪切板</div>
    <div @tap="getCutTest">获取剪切板的内容</div>
    <toast ref="toast"></toast>
  </article>
</template>

<script type="text/ecmascript-6">
  import wx from 'wx'
  import * as wechat from 'common/js/wechat'
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import { baseURL } from 'api/config'
  import Toast from '@/components/toast/toast'
  import api from 'api'

  export default {
    onShow () {
      console.log(baseURL.api)
    },
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
      showSuccess () {
        wechat.tipSuccess('操作成功')
      },
      two () {
        let url = `/pages/example-two/example-two`
        wx.navigateTo({url})
      },
      showT () {
        this.$refs.toast.show('hello mpvue')
      },
      testReq () {
        api.exaTest()
          .then(json => {
            console.log(json)
          })
          .catch(err => {
            console.info('catch', err)
          })
      },
      cutTest () {
        wechat.setClipboardData('hello world cut something')
      },
      getCutTest () {
        wechat.getClipboardData()
          .then(res => {
            console.log(res)
          })
      }
    },
    components: {
      Toast
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .hello
    color: red
    font-size: 28px
</style>
