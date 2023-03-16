import * as http from 'http';
import {forController} from "./controllers/method.controller.js";

const port = 8080;

const server = http.createServer((req, res) => {
    const { method, url } = req;
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        res.on('error', (err) => {
            console.error(err);
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        const responseBody = { method, url, body };

        forController(responseBody);

        res.end();
    });
});

server.listen(port, () => {
    console.log(`Server starts listen http://localhost:${port}`);
});
