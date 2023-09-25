Ext.define('ModernApp.view.main.DeleteUserDialog', {
    extend: 'Ext.Dialog',
    xtype: 'deleteUserDialog',

    requires: ['ModernApp.view.main.DeleteUserDialogController'],

    controller: 'deleteuserdialogcontroller',
    viewModel: 'deleteuserdialogviewmodel',

    bind: {
        title: '{deleteDialogTitle}',
        html: '{deleteDialogHtml}{recordId}',
    },
    closable: true,
    defaultFocus: 'button[text=Yes]',
    bodyPadding: 30,
    modal: true,
    maxWidth: 100,

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
