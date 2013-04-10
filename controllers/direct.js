
exports.api = function(req, res, next){

	// generate the local variable and assign the configured api to the client
	var api = 'Ext.app.REMOTING_API = \n';
	var config = require('../lib/configuration.js');
	res.set('Content-Type', 'application/javascript');
	res.send(api + JSON.stringify(config.api));

};