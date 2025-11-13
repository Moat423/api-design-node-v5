import express from 'express'

// create app and expose server (app = server)
const app = express()

// when someone does get request to that app on /health (meaning trying to access the domain ending with /health):
// Health check endpoint - always good to have!
// request object contains all the information about the request, like the client info, user agent, headers
// response object is what we use to respond to request
// you can chain several methods of the object after each other, order doesnt matter (.status().json() or .json().status())
app.get('/health', (req, res) => {
  res.json({ message: 'hello there' }).status(200)
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Habit Tracker API',
  })
  // res.send('<button>click</button>')
})

app.post('/cake', () => {})

// imports as a named import or as a default
// gives the option to name it
// Export the app for use in other modules (like tests)
export { app }

// or without a name
// Default export for convenience
export default app
