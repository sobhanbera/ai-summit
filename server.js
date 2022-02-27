// the main landing page of the ai summit
// official website starts from here as a static server
const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const port = process.env.port || 3000

app.prepare()
    .then(() => {
        createServer((req, res) => {
            const parsedUrl = parse(req.url, true)
            const {pathname, query} = parsedUrl

            if (pathname === 'a') {
                app.render(req, res, '/a', query)
            } else if (pathname === '/b') {
                app.render(req, res, '/b', query)
            } else {
                handle(req, res, parsedUrl)
            }
        }).listen(3000, err => {
            if (err) throw err
        })
    })
    .catch(error => {})
