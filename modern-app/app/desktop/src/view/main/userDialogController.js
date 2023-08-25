Ext.define("ModernApp.view.main.UserDialogController", {
    extend: "Ext.app.ViewController",
    alias: "controller.userdialogcontroller",

    onSubmitUserClick: function () {
        const userDialog = Ext.create("ModernApp.view.main.UserDialog");
        const form = userDialog.down("userForm");

        if (form.validate()) {
            const editedUser = form.getRecord();
            const newUser = Ext.create("ModernApp.model.UserModel", editedUser);

            // Save the new user to the server
            newUser.save({
                success: function () {
                    console.log("New user created.");
                    // Trigger the custom event to refresh the store
                    ModernApp.app.fireEvent("refreshusersstore");
                    userDialog.destroy(); // Close the dialog after successful save
                },
                failure: function () {
                    console.error("Failed to create the new user.");
                },
            });
        }
    },
});
