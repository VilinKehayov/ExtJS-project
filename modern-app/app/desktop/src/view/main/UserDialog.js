Ext.define('ModernApp.view.main.UserDialog', {
    extend: 'Ext.Dialog',
    xtype: 'userDialog',

    requires: [
        'ModernApp.view.main.UserDialogController',
        'ModernApp.view.main.UserDialogViewModel',
    ],

    controller: 'userdialogcontroller', // Use the created controller
    viewModel: 'userdialogviewmodel',

    bind: {
        title: '{dialogTitle}', // Bind the title to the ViewModel variable
    },

    closable: true,
    defaultFocus: 'userForm button[text=Submit]',
    bodyPadding: 250,
    modal: true,
    maxWidth: 550,

    items: [
        {
            xtype: 'userForm',
        },
    ],

    buttons: [
        {
            text: 'Edit',
            handler: 'onEditButtonClick',
            bind: {
                hidden: '{!isEdit}', // Hide this button when not in edit mode
            },
        },
        {
            text: 'Create',
            handler: 'onCreateButtonClick',
            bind: {
                hidden: '{isEdit}', // Hide this button when in edit mode
            },
        },
        {
            text: 'Cancel',
            handler: function (btn) {
                btn.up('userDialog').destroy(); // "userform close?"
            },
        },
    ],
});
