Ext.define('ModernApp.view.main.DeleteUserDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.deleteuserdialogcontroller',

    YesButtonClick: function (btn) {
        const deleteUserDialog = btn.up('deleteUserDialog'),
            // recordId = deleteUserDialog.config.recordId; // Access the recordId directly from the config
            recordId = deleteUserDialog.getViewModel().get('recordId');
        // Create a new instance of the User model with the recordId
        const user = Ext.create('ModernApp.model.UserModel', {
            id: recordId,
        });

        user.erase({
            success: function () {
                console.log('The User was deleted!');
                Ext.fireEvent('refreshusersstore');
                deleteUserDialog.destroy();
            },
            failure: function () {
                console.error('Failed to delete the User');
            },
        });
    },

});
