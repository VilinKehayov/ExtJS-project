Ext.require('Ext.data.proxy.Rest');
Ext.require('Ext.data.JsonStore');

Ext.define('ModernApp.store.UserStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userstore',
    model: 'ModernApp.model.UserModel',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/users', //https://jsonplaceholder.typicode.com/users
        reader: {
            type: 'json',
            rootProperty: 'items',
        },
    },
    autoLoad: true,
});
