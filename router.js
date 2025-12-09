import { html } from './contentType.js'
import { getFile } from './utils.js'

const routes = {
    "GET": { },
    "POST": { },
}

function handle(req, res) {
    try {
        routes[req.method][req.url](req, res)
    } catch (error) {
        res.writeHead(200, html)
        getFile("views/error.html", res)
    }
}

function get(url, callback) {
    routes["GET"][url] = callback
}

function post(url, callback) {
    routes["POST"][url] = callback
}

