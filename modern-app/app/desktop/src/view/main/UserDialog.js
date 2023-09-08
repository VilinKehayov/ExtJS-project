Ext.define('ModernApp.view.main.UserDialog', {
    extend: 'Ext.Dialog',
    xtype: 'userDialog',

    requires: [
        'ModernApp.view.main.UserDialogController',
        'ModernApp.view.main.UserDialogViewModel',
    ],

    controller: 'userdialogcontroller',
    viewModel: 'userdialogviewmodel',

    bind: {
        title: '{dialogTitle}',
    },

    closable: true,
    defaultFocus: null,
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
                hidden: '{!isEdit}',
            },
        },
        {
            text: 'Create',
            handler: 'onCreateButtonClick',
            bind: {
                hidden: '{isEdit}',
            },
        },
        {
            text: 'Cancel',
            handler: function (btn) {
                btn.up('userDialog').destroy();
            },
        },
    ],
});
