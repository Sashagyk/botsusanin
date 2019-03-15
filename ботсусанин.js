const express = require('express')
const bodyParser = require('body-parser')
const { Botact } = require('botact')

const server = express()
const bot = new Botact({
	token: '80053734c31606889a0db9154da564f401749ae6cbd0ffc56a9b439b48db27cba9ac317c1983c00e4c900',
	confirmation: '79e42c5d'
})

bot.on(function (ctx) {
	console.log(ctx.body)

	ctx.reply('ты шо пьяный?')
})

bot.command('дарова', function (ctx) {

	ctx.reply('ну привет')
})

bot.command('Дай схему', function (ctx){

	ctx.reply('ну привет')
})

server.use(bodyParser.json())

server.post('/', bot.listen)

server.listen(80)