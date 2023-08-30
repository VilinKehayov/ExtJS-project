Ext.define('ModernApp.view.main.UserDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userdialogcontroller',

    onSubmitUserClick: function () {
        const userDialog = Ext.create('ModernApp.view.main.UserDialog');
        const form = userDialog.down('userForm');
        const editedUser = form.getRecord();
        const formData = form.getValues();

        // Use the ternary operator to determine whether to create a new user or edit an existing one
        const userOperation = editedUser ? 'edit' : 'create';

        if (form.validate()) {
            if (userOperation === 'edit') {
                editedUser.set(formData);

                // Save the new user to the server
                editedUser.save({
                    success: function () {
                        console.log('The user is successfully edited.');
                        // Trigger the custom event to refresh the store
                        ModernApp.app.fireEvent('refreshusersstore');
                        userDialog.destroy(); // Close the dialog after successful save
                    },
                    failure: function () {
                        console.error('Failed to create the new user.');
                    },
                });
            } else if (userOperation === 'create') {
                const newUser = Ext.create(
                    'ModernApp.model.UserModel',
                    formData
                );
                // delete editedUser.id; //addUser
                // delete editedUser.data.id; //addUser
                // Save the new user to the server
                newUser.save({
                    success: function () {
                        console.log('New user created.');
                        ModernApp.app.fireEvent('refreshusersstore');
                        userDialog.destroy();
                    },
                    failure: function () {
                        console.error('Failed to create the new user.');
                    },
                });
            }
        }
    },
});
