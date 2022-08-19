import request from './index.js'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const moduleListAPI = () => {
  return request.post('business/moduleconfig/modulelist', {}, config)
}
