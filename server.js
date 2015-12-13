/**
 * Created by Yujia on 2015/12/14.
 */
import express from 'express';
import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { routes } from './routes';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    match({routes, location: req.url}, (err, redirectLocation, props) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }
        else if (props) {
            const markup = renderToString(<RoutingContext {...props} />);
            res.render('index', {markup})
        } else {
            // 404 view here
            res.sendStatus(404);
        }
    });
});

const server = http.createServer(app);

server.listen(port);
server.on('listening', () => {
    console.log('Server listening on ' + port);
});