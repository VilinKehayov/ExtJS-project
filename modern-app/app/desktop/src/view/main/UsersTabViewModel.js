Ext.define('ModernApp.view.main.UsersTabViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersTabViewModel',

    stores: {
        users: {
            type: 'userstore',
        },
        filteredUsers: {
            source: '{users}',
            filters: [
                {
                    property: 'name',
                    value: '{searchText}',
                    operator: 'like',
                    caseSensitive: false,
                },
            ],
        },
    },

    data: {
        isNewUser: false,
        searchText: '',
    },
});
