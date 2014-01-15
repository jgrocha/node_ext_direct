
var enabled = true;

module.exports = function(onoff, models) {

	enabled = (onoff == 'on') ? true : false;

	return function(req, res, next) {
		if (enabled) {

            var model = models[req.body.action];
            var action = api[req.body.method];  //create the closure
            
            if (action !== undefined && typeof action === 'function'){
                var a = action(model,req,res,next);
                a();
            }else{
                console.log('api call is undefined');
                res.end('Undefined');
            }
        }
    }

};


var api = {

    getAll: function(model, req, res, next){

    // closure must return the inner function
    return function(){

        model.findAll({})
        .success(function(data){
            var response = {};
            response.type = 'rpc';
            response.tid = req.body.tid;
            response.action = req.body.action;
            response.method = req.body.method;
            response.result = data;
            res.json(response);

        });
    }

},
create: function(model, req, res, next){


    return function(){

     model.create(req.body.data[0]).success(function (data){
         var response = {};
         response.type = 'rpc';
         response.tid = req.body.tid;
         response.action = req.body.action;
         response.method = req.body.method;
         response.result = data;
         res.json(response);
     });


 }
},
update: function(model, req, res, next){


    return function(){

        var modelId = parseInt(req.body.data[0].id);
        model.find({where: {id: modelId}})
        .success(function(Model){
            Model.update_attributes(req.body.data[0], function (err){
                Model.save(
                    ).success(function(){
                        var response = {};
                        response.type = 'rpc';
                        response.tid = req.body.tid;
                        response.action = req.body.action;
                        response.method = req.body.method;
                        response.result = Model;
                        res.json(response);
                    });
                });
        }).failure(function(err){
            console.log(err);
        })
    }
},
destroy: function(model, req, res, next){

    return function(){

        var modelId = parseInt(req.body.data[0].id);
        model.find({where: {id: modelId}})
        .success(function(Model){    
            Model.destroy(
                ).success(function(){
                    var response = {};
                    response.type = 'rpc';
                    response.tid = req.body.tid;
                    response.action = req.body.action;
                    response.method = req.body.method;
                    response.result = '';
                    res.json(response);
                });
    }).failure(function(err){
        console.log(err);
    })

}

}



};