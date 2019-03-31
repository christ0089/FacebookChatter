

const express = require('express');

const request = require('request');

const app = express();

const PORT = process.env.PORT || 4000;
app.get("", (req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
});

app.get("/message", (req, res) => {

    let token = "EAAFZC54cpsSkBAJniWOWSnGuPY2FXZCZA9VFMZAnylhNqLBuiZCUbJwdeNuZBJjolocdZCxMNQE8oUazZA6ZA4g87Tyxyqx9jDNj0P24aXmM9nk21zuMMgjz4D7F2ib5Y96tJpUzzXGzuqgLU6X6U1S6m1rvLfv3YJqNL5ia7n1b8PtPcpvBOF6CSMt0j8i0dlolWz4eQR1HbWAZDZD"
    let id = "2212532525436748"
    let casales_id = "1053686028"
    var batchUrl = `https://graph.facebook.com`;
    var r = request.post(batchUrl, function (error, response, body) {
        if (error) { return console.log("error\n", error) };
        console.log("successfull\n", body);
    })
    var form = r.form();
    var recipient = "recipient=" + encodeURIComponent(JSON.stringify({ "id": id }));
    var batchMessage = {
        "method": "POST",
        "relative_url": "v2.6/me/messages",
        "body": recipient + "&" + "Hola"
    };
    form.append("access_token", token)
    form.append("batch", JSON.stringify([batchMessage]));
    res.send("Hi :)");
})

app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
})

