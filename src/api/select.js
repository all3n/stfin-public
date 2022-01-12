import request from '@/utils/request'

export function select_active(params) {
  return request({
    url: '/select/active',
    method: 'get',
    params
  })
}
