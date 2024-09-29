import Yar from '@hapi/yar'
import config from '../config.js'

const plugin: any = {
  plugin: Yar,
  options: {
    storeBlank: false,
    cookieOptions: {
      password: config.get('cookiePassword'),
      isSecure: config.get('isProd'),
    },
  },
}

export default plugin
