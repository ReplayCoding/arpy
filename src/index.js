(() => {
	const api = require('./api')
	const chalk = require('chalk') // :)
	const colors = ["red", "green", "blue"]
	const colorrand = colors[(Math.random() * colors.length) | 0]
	const replr = require('repl');
	const repl = replr.start(chalk[colorrand]("ARPY > ")) // Have a nice day :)
	Object.assign(repl.context, api)
})()