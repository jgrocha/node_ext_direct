console.log('Viewport');
Ext.define('UI.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    items: [
		{xtype: 'userlist', title: 'Direct Test'}
    ]
});