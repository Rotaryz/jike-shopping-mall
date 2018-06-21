<template>
  <div>
    home
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import { baseURL } from 'api/config'

  export default {
    onShow () {
      console.log(baseURL.api)
    },
    methods: {
      ...mapGetters(['role']),
      ...mapActions(['saveRole']),
      ...mapMutations({ // 同步
        roleSync: 'ROLE_TYPE'
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"


</style>
