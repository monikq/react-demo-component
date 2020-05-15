const { createElement } = require('react')
const express = require('express')
const ReactDOM = require('react-dom/server')
const { Spinner } = require('react-demo-auth') // rename 'react-demo-component'

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const html = ReactDOM.renderToString(createElement(Spinner))

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      ${html}
  </body>
  </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
