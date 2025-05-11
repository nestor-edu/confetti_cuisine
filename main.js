import { createServer } from 'http'
import { get, post, handle } from './router.js'
import { html, png, jpg, css, js } from './contentType.js'
import { getFile } from './utils.js'

const port = process.env.PORT || 3000;

get("/", (req, res) => {
    res.writeHead(200, html)
    getFile("views/index.html", res)
})

get("/courses.html", (req, res) => {
    res.writeHead(200, html)
    getFile("views/courses.html", res)
})

get("/contact.html", (req, res) => {
    res.writeHead(200, html)
    getFile("views/contact.html", res)
})

post("/", (req, res) => {
    res.writeHead(200, html)
    getFile("views/thanks.html", res)
})

get("/graph.png", (req, res) => {
    res.writeHead(200, png)
    getFile("public/images/graph.png", res)
})

get("/people.jpg", (req, res) => {
    res.writeHead(200, jpg)
    getFile("public/images/people.jpg", res)
})

get("/product.jpg", (req, res) => {
    res.writeHead(200, jpg)
    getFile("public/images/product.jpg", res)
})

get("/confetti_cuisine.css", (req, res) => {
    res.writeHead(200, css)
    getFile("public/css/confetti_cuisine.css", res)
})

get("/confetti_cuisine.js", (req, res) => {
    res.writeHead(200, js)
    getFile("public/js/confetti_cuisine.js", res)
})

createServer(handle).listen(port)
console.log(`The server is listening on port number: ${port}`)