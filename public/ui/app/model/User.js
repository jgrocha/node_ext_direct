console.log('User Model');
Ext.define('UI.model.User', {
    extend: 'Ext.data.Model',
    fields: ['first_name', 'last_name', 'username', 'password']
});