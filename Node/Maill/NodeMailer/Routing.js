const fs = require('fs');
const path = require('path');
const {
    Mail,
    HtmlMail
} = require("./Mail.js")

const routing = (
    req,
    res
) => {
    const {
        method,
        url
    } = req
    if (method === 'GET' && url === '/') {
        const htmlPath = path.join(__dirname, 'index.html');

        fs.readFile(htmlPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        });
    } else if (method === 'GET' && url === '/html') {
        const htmlPath = path.join(__dirname, 'htmlindex.html');

        fs.readFile(htmlPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        });
    } else if (method === 'POST' && url === "/") {

        Mail(req, res);
    } else if (method === 'POST' && url === "/htmlsubmit") {

        HtmlMail(req, res);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Not Found');
    }


}
module.exports = routing;
