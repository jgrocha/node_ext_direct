var _ = require('underscore');
var async = require('async');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users',
    {

        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }

    },
    {
        timestamps: true,
        freezeTableName: true,
        underscored: true,

        classMethods: {
            
        },
        instanceMethods: {

            toJSON: function() {
                var result = this.values;
                return result;
            },
            update_attributes: function(data, callback){

                var me = this;

                if (data.first_name){
                    me.first_name = data.first_name; 
                }
                if (data.last_name){
                    me.last_name = data.last_name; 
                }
                if (data.username){
                    me.username = data.username; 
                }
                if (data.password){
                    me.password = data.password; 
                }
                callback();
            }
        }
    }
    );
}






