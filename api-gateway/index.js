"use strict";

const express = require('express');
const gateway = require('fast-gateway');
const port = 3000;

const checkAuth = (req, res, next) => {
    if (req.headers) {
        next();
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 401;
        res.end(JSON.stringify({ status: 401, message: 'Authentication fail' }));
    }
};

const server = gateway({
    middlewares: [checkAuth],
    routes: [
        {
            prefix: '/order',
            target: 'http://localhost:3006/',
            methods: ['GET', 'POST']
        },
        {
            prefix: '/payment',
            target: 'http://localhost:3003/',
            methods: ['GET', 'POST']
        }
    ]
});

server.get('/', (req, res) => {
    res.send('Welcome to Api Gateway!');
});

server.start(port).then(server => {
    console.log(`API Gateway Server is running on port: ${port}`);
});