import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 3000

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})