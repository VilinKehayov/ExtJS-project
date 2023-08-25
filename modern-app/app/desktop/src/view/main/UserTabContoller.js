Ext.define("ModernApp.view.main.UsersTabController", { //TODO Rename the file ;) missing an 's'
    extend: "Ext.app.ViewController",
    alias: "controller.userstab", //TODO Change this to usersTabController

    requires: [
        "ModernApp.view.main.UserForm", // Add this line to include UserForm
        "ModernApp.view.main.UserDialog",
        "ModernApp.view.main.DeleteUserDialog",
        "ModernApp.model.UserModel",
        "ModernApp.store.UserStore",
    ],

    onAddUserClick: function () {
        const userDialog = Ext.create("ModernApp.view.main.UserDialog", {
            title: "Create a new user", // Set the title for creating a new user
        });
        //TODO dialog can have a VM, and you can pass for example the dialogTitle, some text, dialogType and use it later :)
        userDialog.show();
    },

    onEditUserClick: function (button) {
        const grid = this.getView().down("grid"); //TODO You don't need and use this :)

        // Find the clicked button's cell
        const cell = button.up("widgetcell");

        // Extract the record from the cell
        const record = cell.getRecord();
        console.log(record);

        const userDialog = Ext.create("ModernApp.view.main.UserDialog", {
            title: "Edit User",
        });
        //TODO dialog can have a VM, and you can pass for example the dialogTitle, some text, dialogType and use it later :)
        const form = userDialog.down("userform");
        //TODO you can easily use form.setRecord(record) and form.getRecord then in the dialogController's handlers

        // Set the form's record data to the existing user data
        const userFormViewModel = form.getViewModel(); // TODO U can use form.setData(record) to 'fill' the form with data
        userFormViewModel.set("record", record.data); // Use record.data

        userDialog.show();
    },

    onDeleteUserClick: function (button) {
        const grid = this.getView().down("grid"); //TODO You don't need and use this :)

        // Find the clicked button's cell
        const cell = button.up("widgetcell");

        // Extract the record from the cell
        const record = cell.getRecord();

        // Create and show the DeleteUserDialog with the record
        const deleteUserDialog = Ext.create(
            "ModernApp.view.main.DeleteUserDialog",
            {
                record: record, // Pass the record to the dialog
            } //TODO interesting approach - but if I will not use the whole record, maybe I will pass only the recordId :)
        );

        deleteUserDialog.show();
    },

    onRecordDelete: function () { //TODO Better to use a listener for refreshing the store, because it can be reused for different purposes (refreshUsersStore)
        //TODO can be added like this right after the requires in the start of the controller
        // listen: {
        //   global: {
        //     refreshusersstore: 'refreshUsersStore',
        //   }
        // }

        const grid = this.getView().down("grid"),
            store = grid.getStore();

        if (store) {
            console.log("The User was deleted!");
            store.load(); // Reload the store to reflect changes
        } else {
            console.error("Record store not found.");
        }
    },

    onSubmitUserClick: function () { //TODO Move this to userDialogController
        const userDialog = Ext.create("ModernApp.view.main.UserDialog"); //TODO This will be a new empty dialog - you can target the dialog easier if this handler was in userDialogController
        const form = userDialog.down("userform");

        if (form.validate()) {
            const editedUser = form.getValues();
            const userStore = Ext.getApplication().getStore("UserStore");

            // Create a new UserModel instance using the editedUser data
            const newUser = Ext.create("ModernApp.model.UserModel", editedUser);

            //TODO better approach will be to use newUser.save(); then on the success handler to just Ext.fireEvent('refreshusersstore');
            userStore.add(newUser); // Add the new user to the store

            userStore.sync({
                success: function () {
                    console.log("New user created.");
                    userStore.load(); // Reload the store to reflect changes
                    userDialog.destroy(); // Close the dialog after successful save
                },
            });
        }
    },
});
