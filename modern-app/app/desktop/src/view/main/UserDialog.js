Ext.define("ModernApp.view.main.UserDialog", {
    extend: "Ext.Dialog",
    xtype: "userdialog", //TODO Change to userDialog

    controller: "userstab", //TODO Create userDialogController and userDialogViewModel for the logic and data in the dialog
    viewModel: "userstab",

    title: "", //TODO You can bind the title to a variable in the VM - for example dialogTitle and set it when creating the dialog
    closable: true,
    defaultFocus: "userform button[text=Submit]",
    bodyPadding: 250,
    modal: true,
    maxWidth: 550,

    items: [
        {
            xtype: "userform",
        },
    ],

    //TODO Add edit/add and close buttons here :)
});
