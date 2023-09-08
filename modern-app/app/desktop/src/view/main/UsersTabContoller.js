Ext.define('ModernApp.view.main.UsersTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usersTabController',

    requires: [
        'ModernApp.view.main.UserForm',
        'ModernApp.model.UserModel',
        'ModernApp.store.UserStore',
    ],

    listen: {
        global: {
            refreshusersstore: 'refreshUsersStore',
        },
    },

    refreshUsersStore: function () {
        console.log('Firing refreshusersstore event...');
        const grid = this.getView().down('grid'),
            store = grid.getStore();

        if (store) {
            console.log('Refreshing the User store..');
            store.load();
        } else {
            console.error('Record store not found.');
        }
    },

    onAddUserClick: function () {
        const userDialog = Ext.create('ModernApp.view.main.UserDialog');
        const userDialogViewModel = userDialog.getViewModel();
        userDialogViewModel.set('isEdit', false);
        userDialogViewModel.set('dialogTitle', 'Create a new user');
        userDialog.setDefaultFocus(userDialog.down('[text=Create]'));
        userDialog.show();
    },

    onEditUserClick: function (button) {
        // Find the clicked button's cell
        const cell = button.up('widgetcell');
        // Extract the record from the cell
        const record = cell.getRecord();
        const userDialog = Ext.create('ModernApp.view.main.UserDialog');
        const userDialogViewModel = userDialog.getViewModel();
        userDialogViewModel.set('dialogTitle', 'Edit User');
        userDialog.setDefaultFocus(userDialog.down('[text=Edit]'));
        userDialogViewModel.set('isEdit', true);
        const form = userDialog.down('userForm');
        form.setRecord(record);
        form.setData(record);
        userDialog.show();
    },

    onDeleteUserClick: function (button) {
        // Find the clicked button's cell
        const cell = button.up('widgetcell');
        // Extract the record from the cell
        const record = cell.getRecord();
        // Create and show the DeleteUserDialog with the record
        const deleteUserDialog = Ext.create(
            'ModernApp.view.main.DeleteUserDialog'
        );
        deleteUserDialog.getViewModel().set({ recordId: record.get('id') });
        deleteUserDialog.show();
    },
});
