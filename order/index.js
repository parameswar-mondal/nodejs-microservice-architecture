'use strict';

const express = require('express');
const app = express();
const port = 3006;

app.get('/', (req, res) => {
    res.send('Welcome to Order Page');
});

app.get('/order-list', (req, res) => {
    let results = {
        data: {
            items: [
                {
                    id: 1,
                    name: 'Order 1'
                },
                {
                    id: 2,
                    name: 'Order 2'
                }
            ]
        }
    };
    res.status(200).send(results);
});

app.listen(port, () => {
    console.log(`Order server is running on port: ${port}`);
});