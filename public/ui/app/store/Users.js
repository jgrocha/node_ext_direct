console.log('User store');
Ext.define('UI.store.Users', {
    extend: 'Ext.data.Store',
    model: 'UI.model.User',
    autoLoad: false,
    
    
    proxy: {
        type: 'direct',
        api: {
            create: 'User.create',
            read: 'User.getAll',
            update: 'User.update',
            destroy: 'User.destroy'
        },
        reader: {
            type: 'json',
            successProperty: 'success'
        }
    }
});