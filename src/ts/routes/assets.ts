import { ServerRoute } from '@hapi/hapi'

const route: ServerRoute = {
  method: 'GET',
  path: '/assets/{path*}',
  handler: {
    directory: {
      path: [
        'src/assets/css',
        'src/assets/js',
        'src/assets/img',
      ],
    },
  },
}

export default route
