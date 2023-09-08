Ext.define('ModernApp.view.main.UsersTabViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersTabViewModel',

    stores: {
        users: {
            type: 'userstore',
        },
    },

    data: {
        isNewUser: false,
    },
});
