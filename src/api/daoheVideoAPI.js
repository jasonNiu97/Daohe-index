import request from './index.js'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const daoheVideoAPI = () => {
  return request.post('business/banner/bannerListByPageCode', { pageCode: 'bigHomePageBottom' }, config)
}
