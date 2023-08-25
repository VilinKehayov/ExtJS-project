Ext.define("ModernApp.view.main.DeleteUserDialog", {
    extend: "Ext.Dialog",
    xtype: "deleteUserDialog",

    requires: ["ModernApp.view.main.DeleteUserDialogController"],

    controller: "deleteuserdialogcontroller",
    viewModel: { data: { userId: null } },

    title: "Delete User",
    closable: true,
    defaultFocus: "button[text=Yes]",
    bodyPadding: 30,
    modal: true,
    maxWidth: 100,
    html: "Are you sure you want to delete this user?",

    buttons: [
        {
            text: "Yes",
            handler: function (btn) {
                const deleteUserDialog = btn.up("deleteUserDialog"),
                    record = deleteUserDialog.getRecord(); // Get the passed record

                record.erase({
                    success: function () {
                        console.log("The User was destroyed!");
                        // Trigger the custom event to refresh the store
                        ModernApp.app.fireEvent("refreshusersstore");
                        deleteUserDialog.destroy();
                    },
                    failure: function () {
                        console.error("Failed to destroy the User");
                    },
                });
            },
        },
        {
            text: "No",
            handler: function (btn) {
                btn.up("deleteUserDialog").destroy();
            },
        },
    ],
});
