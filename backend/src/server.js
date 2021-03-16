import express from 'express';

const app = express();

app.get('/users', () => {
    console.log('cvcx');
})

app.listen(3333);