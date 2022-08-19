import request from './index.js'

export const listAPI = () => {
  return request.post('business/system/list')
}
