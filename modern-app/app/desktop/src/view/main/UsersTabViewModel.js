Ext.define('ModernApp.view.main.UsersTabViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userstab',
    stores: {
        users: {
            type: 'userstore'
        }
    },
    data: {
        isNewUser: false, // Flag for new user
      },
});
