const express = require('express');
const mainRouter = require('./routers/router');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/getdata',mainRouter);
const port = 4000
app.listen(port,()=>{
    console.log("Server is runing on Port: "+port);
})