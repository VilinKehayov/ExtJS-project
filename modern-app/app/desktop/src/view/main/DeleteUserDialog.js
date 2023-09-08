Ext.define('ModernApp.view.main.DeleteUserDialog', {
    extend: 'Ext.Dialog',
    xtype: 'deleteUserDialog',

    requires: ['ModernApp.view.main.DeleteUserDialogController'],

    controller: 'deleteuserdialogcontroller',
    viewModel: {
        data: {
            recordId: null, // Initialize the recordId to null
        },
    },

    title: 'Delete User',
    closable: true,
    defaultFocus: 'button[text=Yes]',
    bodyPadding: 30,
    modal: true,
    maxWidth: 100,
    bind: {
        html: 'Are you sure you want to delete this user with the ID:{recordId}?',
    },

    buttons: [
        {
            text: 'Yes',
            handler: 'YesButtonClick',
        },
        {
            text: 'No',
            handler: function (btn) {
                btn.up('deleteUserDialog').destroy();
            },
        },
    ],
});
