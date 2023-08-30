Ext.define('ModernApp.model.UserModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'email', type: 'string' },
        {
            name: 'address',
            type: 'string',
            mapping: 'address.city',
        },
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/users',
    },
});
