Ext.define('UI.view.user.New' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.usercreate',
    title : 'New User',
	layout: 'fit',
	autoShow: true,
 
    initComponent: function() {
        this.items = [{
			xtype: 'form',
			items: [{
				xtype: 'textfield',
				name: 'first_name',
				fieldLabel: 'First Name'
			},{
				xtype: 'textfield',
				name: 'last_name',
				fieldLabel: 'First Name'
			},{
				xtype: 'textfield',
				name: 'username',
				fieldLabel: 'Username'
			},{
				xtype: 'textfield',
				name: 'password',
				fieldLabel: 'Password'
			}
			]

        }];
 
        this.buttons = [
            {text: 'Save',  action: 'create'},
            {text: 'Cancel', scope: this, handler: this.close}
        ];
 
        this.callParent(arguments);
    }
});