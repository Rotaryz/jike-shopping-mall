import request from 'common/js/request'

/**
 * 方法前缀名：exa
 */
export default {
  exaTest (data, loading = true) {
    const url = `/api/alliances/data/leader-detail`
    return request.get(url, data, loading)
  }
}
