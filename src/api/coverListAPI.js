import request from './index.js'

export const coverListAPI = () => {
  return request.post('business/orgservice/list')
}
