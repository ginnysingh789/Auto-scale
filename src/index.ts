import express from 'express';
export const app = express();
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).send("Hello world")
})
app.get('/cpu', (req, res) => {
    for (let i = 0; i < 10000000000; i++) {
        Math.random();
    }
    res.send("Expensive Operation Completed")
})
