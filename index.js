

const express = require('express');

const request = require('request');

const app = express();

const PORT = process.env.PORT || 4000;
app.get("*", (req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
});

app.get("/message", (req, res) => {
    var batchUrl = 'https://graph.facebook.com';
    var r = request.post(batchUrl, function (error, response, body) {
        if (error) { return console.log("error\n", error) };
        console.log("successfull\n", body);
    })
})

app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
})

