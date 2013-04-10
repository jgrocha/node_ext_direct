
/*
 * GET home page.
 */

 module.exports = function(app) {

 	var site = app.controllers.index;
 	var direct = app.controllers.direct;

 	app.get('/',
 		site.index
 		);

 	/*app.post('/direct',
 		direct.index
 		)
 	*/
 	app.get('/api',
 		direct.api
 		)


 };