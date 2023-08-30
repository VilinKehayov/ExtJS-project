Ext.define('ModernApp.model.UserModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'Username', type: 'string' },
        { name: 'Email', type: 'string' },
        {
            name: 'Address',
            type: 'string',
            mapping: 'address.city',
        },
    ],
});
