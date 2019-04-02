


const express = require('express');
const login = require("facebook-chat-api");
const fs = require('fs');
const bodyParser = require("body-parser");

import { onMessage } from './firebase';
import { Message } from "./Models/Message";

//import { mongoose } from './Config/Mongo';
//import { chat_bot } from './Schemas/Chatbots';
import { search } from './GoogleKnowledgeGraph/KnowledgeGraph';

const app = express();


const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
//app.use(mongoose);

app.get("", (req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
});

/**
 * Get a user
 *
 * @class Chatbosts Api
 * @method post
 * @param req {Request} The express request object.
 * @param res {Response} The express response object.
 * @param next {NextFunction} The next function to continue.
 * Esta solo se usa para crear el appstate.json de init
 */
app.get("/login", (req, res) => {

    login({ email: "brixar10@gmail.com", password: "Arma2012" }, (err, api) => {
        if (err) {
            return console.error(err)
        };
        fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
    });

    res.send("Hi :)");
})

let api : any = null;
/**
 * Get a user
 *
 * @class Chatbosts Api
 * @method post
 * @param req {Request} The express request object.
 * @param res {Response} The express response object.
 * @param next {NextFunction} The next function to continue.
 * Este es el que se usa despues de tener el appstate.json
 */
app.post("/message", (req, res) => {

    let message: Message = req.body;
    console.log(message);
    login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, _api) => {
        if (err) {
            res.status(400).send(err);
            return console.error(err);
        }
        
       // let id = "1092348300936238";
        _api.sendMessage(message.message, message.id);
        api = _api;
        onMessage(message);
        res.send("Hi :)");
    })
})

/**
 * Get a user
 *
 * @class Chatbosts Api
 * @method get
 * @param req {Request} The express request object.
 * @param res {Response} The express response object.
 * @param next {NextFunction} The next function to continue.
 * Obtain all the chatbots in the Database
 */
/*api.get("/bots", (req, res) => {
    /*chat_bot.find()
    .then((data) => {
        res.json({
            "confirmation": "Success",
            "bots" : data
        });
    })
    .catch()
})*/

app.get("/message", (req, res) => {
    if (api ==null) {
        res.status(300).send("La Session no se Iniciado");
        return;
    }
    api.listen((api_err, event) => {
        if (api_err) return console.error(api_err);

        console.log(event);

        //Event.body es el mensaje del chat
        if (event.body === "Goodbye") {
            //api.sendMessage("Hasta Luego", event.senderID);
            let goodbyeMessage =  api.sendMessage("Goodbye",req.body.id) 
            console.log("Terminating Call");
            Promise.resolve(goodbyeMessage).then(() => {
                res.send("Goodbye :(" + JSON.stringify(event.body));
                api.logout()
            })
        }
        res.send("Hi :)");
    });
})


app.get("/search/:query", (req, res) => {
    console.log(req.params.query);
    search(req.params.query, (data) => {
        res.send(data["itemListElement"][0]);
    })
})

app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
})
