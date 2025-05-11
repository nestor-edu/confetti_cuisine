import { html } from './contentType.js'
import { getFile } from './utils.js'

const routes = {
    "GET": { },
    "POST": { },
}

export function handle(req, res) {
    try {
        routes[req.method][req.url](req, res)
    } catch (error) {
        res.writeHead(200, html)
        getFile("views/error.html", res)
    }
}

export function get(url, callback) {
    routes["GET"][url] = callback
}

export function post(url, callback) {
    routes["POST"][url] = callback
}

