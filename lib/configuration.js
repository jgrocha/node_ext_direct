 var self = module.exports = {

 	'api' : {
 		type: 'remoting', 
 		  url: '/direct',
 		  actions: { 
 			   User: [ 
 			     {name: 'create', len: 1},
 			     {name: 'getAll', len: 1},
 			     {name: 'update', len: 1},
 			     {name: 'destroy', len: 1}
 			     ]}
 		}


 	}