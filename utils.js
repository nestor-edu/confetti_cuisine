import { readFile } from 'node:fs'
import { html } from './contentType.js'

export function getFile(file, res) {
    readFile(`./${file}`, (error, data) => {
        if (error) {
            res.writeHead(500, html)
            res.end("There was an error reading the file.")
        }
        res.end(data)
    })
}