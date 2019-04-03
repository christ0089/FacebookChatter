'use strict';

const Telegram = require('telegram-node-bot')
const tg = new Telegram.Telegram('887480784:AAFI2CgwbWBbHhFomC7icfRyiTx3754nXNc', {
    workers: 3
})

const TodoController = require('./controllers/todo')
const OtherwiseController = require('./controllers/otherwise')
const todoCtrl = new TodoController()

tg.router
    .when(
        new Telegram.TextCommand('add', 'addCommand'),
        todoCtrl
    )
    .when(
        new Telegram.TextCommand('get', 'getCommand'),
        todoCtrl
    )
    .when(
        new Telegram.TextCommand('check', 'checkCommand'),
        todoCtrl
    )
    .when(
        new Telegram.TextCommand('start', 'startCommand'),
        todoCtrl
    )
    .otherwise(
        new OtherwiseController()
    )