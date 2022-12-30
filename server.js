const express = require('express');
const app = express();
const port = 3000

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json({limit : '50mb',extended : true})) // for parsing application/json
app.use(express.urlencoded({limit : '50mb',extended : true, parameterLimit: 50000 }))

const webHooks = require('./src/routes/webhooks.js');
app.use("/", webHooks);

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})