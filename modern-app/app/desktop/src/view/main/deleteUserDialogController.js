Ext.define('ModernApp.view.main.DeleteUserDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deleteuserdialogcontroller',

    listen: {
        global: {
            refreshusersstore: 'refreshUsersStore',
        },
    },

    refreshUsersStore: function () {
        const grid = this.getView().down('grid'),
            store = grid.getStore();

        if (store) {
            console.log('Refreshing the User store..');
            store.load(); // Reload the store to reflect changes
        } else {
            console.error('Record store not found.');
        }
    },
});
