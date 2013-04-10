console.log('The User Controller');
Ext.define('UI.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: ['Users'],
    models: ['User'],
    views: [ 'user.List', 'user.Edit', 'user.New'],


    init: function() {
    	var me = this;
        me.control({
            'userlist dataview': {
                itemdblclick: me.editUser
            },
            'userlist button[action=new]': {
                click: me.createUser
            },
            'usercreate button[action=create]': {
                click: me.newUser
            },
            'useredit button[action=save]': {
                click: me.updateUser
            }

        }
        );
    } , 
    editUser: function(grid, record) {
        console.log('EDIT USER');
        var edit = Ext.create('UI.view.user.Edit').show();
        edit.down('form').loadRecord(record);
    },
    createUser: function(grid, record) {
        var edit = Ext.create('UI.view.user.New').show();
        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record.set(values);
        record.store.sync();
        win.close();

    },
    newUser: function(button) {
        var win = button.up('window');
        var form = win.down('form');
        var record = Ext.create('UI.model.User');
        var values = form.getValues();
        record.set(values);
        this.getUsersStore().add(record);
        form.loadRecord(record);
        this.getUsersStore().sync();
        win.close();

    },
    onLaunch: function () {
      console.log('Launching User');
      var store = this.getUsersStore();
      store.load();
  },

});
