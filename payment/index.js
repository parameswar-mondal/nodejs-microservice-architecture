'use strict';

const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
    res.send('Welcome to Payment Page');
});

app.get('/payment-list', (req, res) => {
    let results = {
        data: {
            items: [
                {
                    id: 1,
                    name: 'Payment 1'
                },
                {
                    id: 2,
                    name: 'Payment 2'
                }
            ]
        }
    };
    res.status(200).send(results);
});

app.listen(port, () => {
    console.log(`Payment server is running on port: ${port}`);
});