Ext.require('Ext.data.proxy.Rest');
Ext.require('Ext.data.JsonStore');

Ext.define('ModernApp.store.UserStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userstore',
    model: 'ModernApp.model.UserModel',
    pageSize: 2,
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/users',
        startParam: '_start',
        limitParam: '_limit',
        pageParam: '_page',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'totalCount',
        },
    },
    autoLoad: true,
});
