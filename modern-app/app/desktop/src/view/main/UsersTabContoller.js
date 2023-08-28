Ext.define("ModernApp.view.main.UsersTabController", {
    extend: "Ext.app.ViewController",
    alias: "controller.usersTabController",

    requires: [
        "ModernApp.view.main.UserForm", // Add this line to include UserForm
        "ModernApp.model.UserModel",
        "ModernApp.store.UserStore",
    ],

    onAddUserClick: function () {
        const userDialog = Ext.create("ModernApp.view.main.UserDialog");
        const userDialogViewModel = userDialog.getViewModel();
        userDialogViewModel.set("dialogTitle", "Create a new user");
        userDialog.show();
    },

    onEditUserClick: function (button) {
        // Find the clicked button's cell
        const cell = button.up("widgetcell");

        // Extract the record from the cell
        const record = cell.getRecord();

        const userDialog = Ext.create("ModernApp.view.main.UserDialog");
        const userDialogViewModel = userDialog.getViewModel();
        userDialogViewModel.set("dialogTitle", "Edit User");
        const form = userDialog.down("userForm");
        form.setRecord(record);
        form.setData(record);
        userDialog.show();
    },

    onDeleteUserClick: function (button) {
        // Find the clicked button's cell
        const cell = button.up("widgetcell");

        // Extract the record from the cell
        const record = cell.getRecord();

        // Create and show the DeleteUserDialog with the record
        const deleteUserDialog = Ext.create(
            "ModernApp.view.main.DeleteUserDialog"
            // {
            //     recordId: record.get("id"),
            // }

            //TODO interesting approach - but if I will not use the whole record, maybe I will pass only the recordId :)
        );

        deleteUserDialog.getViewModel().set({ recordId: record.get("id") });

        deleteUserDialog.show();
    },
});
