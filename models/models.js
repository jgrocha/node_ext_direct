
console.log('In models!');

var Sequelize = require('sequelize'),
    db = new Sequelize('database', 'username', 'password',{
     
    pool: { maxConnections: 250, maxIdleTime: 30}
    
});


var self = module.exports = {
    'db' : db,
    User: db.import(__dirname + '/User.js'),

    mapAttributes : function(instance) {
            var obj = new Object(),
                ctx = instance;
            ctx.attributes.forEach(function(attr) {
                obj[attr] = ctx[attr];
            });

            return obj;
        }
};

db.sync();

