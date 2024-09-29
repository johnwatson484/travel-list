import convict from 'convict'
import convictFormatWithValidator from 'convict-format-with-validator'

convict.addFormats(convictFormatWithValidator)

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  isDev: {
    doc: 'True if the application is in development mode.',
    format: Boolean,
    default: process.env.NODE_ENV === 'development',
  },
  isProd: {
    doc: 'True if the application is in production mode.',
    format: Boolean,
    default: process.env.NODE_ENV === 'production',
  },
  host: {
    doc: 'The host to bind.',
    format: 'ipaddress',
    default: '0.0.0.0',
    env: 'HOST',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port',
  },
  appName: {
    doc: 'The name of the application.',
    format: String,
    default: 'Travel List',
    env: 'APP_NAME',
  },
  cookiePassword: {
    doc: 'The password used to encrypt cookies.',
    format: String,
    default: '',
    nullable: false,
    env: 'COOKIE_PASSWORD',
  },
})

config.validate({ allowed: 'strict' })

export default config
