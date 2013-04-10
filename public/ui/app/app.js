

Ext.require('Ext.direct.*');

Ext.onReady(function() {
  Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
});

Ext.Loader.setConfig({
    enabled : true
});


Ext.application({
    name: 'UI',
    appFolder: 'ui/app',

    autoCreateViewport: true,

    requires: ['Ext.data.proxy.Direct'],
    models: ['User'],
    views: ['user.List', 'user.Edit', 'user.New'],

    controllers: [
    'Users'
    ],
    

    launch: function(){
       
    }

});

