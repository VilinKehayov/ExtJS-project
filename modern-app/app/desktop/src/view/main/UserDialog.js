Ext.define("ModernApp.view.main.UserDialog", {
    extend: "Ext.Dialog",
    xtype: "userDialog",

    requires: [
        "ModernApp.view.main.UserDialogController",
        "ModernApp.view.main.UserDialogViewModel",
    ],

    controller: "userdialogcontroller", // Use the created controller
    viewModel: {
        type: "userdialogviewmodel", // Use the created ViewModel
    },

    bind: {
        title: "{dialogTitle}", // Bind the title to the ViewModel variable
    },

    closable: true,
    defaultFocus: "userForm button[text=Submit]",
    bodyPadding: 250,
    modal: true,
    maxWidth: 550,

    items: [
        {
            xtype: "userForm",
        },
    ],

    buttons: [
        {
            text: "Submit",
            handler: "onSubmitUserClick",
        },
        {
            text: "Cancel",
            handler: function (btn) {
                btn.up("userDialog").destroy(); // "userform close?"
            },
        },
    ],
});
