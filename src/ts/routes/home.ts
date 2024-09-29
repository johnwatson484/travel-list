import { ServerRoute, Request, ResponseToolkit, ResponseObject } from '@hapi/hapi'
import { List, getList } from '../list.js'

const route: ServerRoute = {
  method: 'GET',
  path: '/',
  handler: (_request: Request, h: ResponseToolkit): ResponseObject => {
    const list: List = getList()
    return h.view('home', { list })
  },
}

export default route
