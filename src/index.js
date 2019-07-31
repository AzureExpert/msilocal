const fetchConfig = require('./fetchConfig.js')
const localServer = require('./localServer.js')
const logger = require('./logger.js')

const port = Math.floor(Math.random() * 1000) + 4000

process.env['MSI_ENDPOINT'] = `http://localhost:${port}`
process.env['MSI_SECRET'] = 'msiLocalEmulator'

const startServer = async () => {
  try {
    const config = await fetchConfig()
    logger('info', 'Starting server')
    localServer(config, port)
  } catch (error) {
    logger('error', `startServer: ${error}`)
  }
}

startServer()