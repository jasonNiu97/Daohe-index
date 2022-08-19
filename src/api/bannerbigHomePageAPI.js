import request from './index.js'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const bannerBigHomePageAPI = () => {
  return request.post('business/banner/bannerListByPageCode', { pageCode: 'bigHomePage' }, config)
}
