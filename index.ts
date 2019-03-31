

const express = require('express');
const request = require('request');
const login = require("facebook-chat-api");



const app = express();

const PORT = process.env.PORT || 4000;
app.get("", (req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
});


app.get("/message", (req, res) => {

    login({email: "", password:""}, (err, api) => {
        if(err) return console.error(err);
        let id = "2212532525436748";
        let casales_id = "1053686028"
        var msg = {
            body: "Hey!",
          
        }
        api.sendMessage(msg, casales_id);
    });

    res.send("Hi :)");
})

app.get("/logout", (req, res) => {

  
    res.send("Hi :)");
})

app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
})

