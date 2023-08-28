Ext.define("ModernApp.view.main.DeleteUserDialog", {
    extend: "Ext.Dialog",
    xtype: "deleteUserDialog",

    requires: ["ModernApp.view.main.DeleteUserDialogController"],

    controller: "deleteuserdialogcontroller",
    viewModel: {
        data: {
            recordId: null, // Initialize the recordId to null
        },
    },

    title: "Delete User",
    closable: true,
    defaultFocus: "button[text=Yes]",
    bodyPadding: 30,
    modal: true,
    maxWidth: 100,
    bind: {
        html: "Are you sure you want to delete this user with the ID:{recordId}?",
    },

    buttons: [
        {
            text: "Yes",
            handler: function (btn) {
                const deleteUserDialog = btn.up("deleteUserDialog"),
                    // recordId = deleteUserDialog.config.recordId; // Access the recordId directly from the config
                    recordId = deleteUserDialog.getViewModel().get("recordId");

                // Create a new instance of the User model with the recordId
                const user = Ext.create("ModernApp.model.UserModel", {
                    id: recordId,
                });

                user.erase({
                    success: function () {
                        console.log("The User was deleted!");
                        // Trigger the custom event to refresh the store
                        ModernApp.app.fireEvent("refreshusersstore");
                        deleteUserDialog.destroy();
                    },
                    failure: function () {
                        console.error("Failed to delete the User");
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
