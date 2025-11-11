// imports named version
import { app } from './server.ts'
import { env } from '../env.ts'

// sets up a listening socket on a port (default hello world port is 3000)
// after => is just a callback, not really necessary
app.listen(env.PORT, () => {
  console.log('server running on port ${env.PORT}1')
})

