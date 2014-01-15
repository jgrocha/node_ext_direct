
Ext.define('UI.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',

    title : 'User List',
    store: 'Users',

    columns: [
        {header: 'First Name',  dataIndex: 'first_name',  flex: 1},
        {header: 'Last Name', dataIndex: 'last_name', flex: 1},
        {header: 'Username', dataIndex: 'username', flex: 2}
    ],
    tbar: [
    	{xtype: 'button',  text: 'New', action: 'new'}
    ]
});

