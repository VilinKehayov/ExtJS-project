Ext.define('ModernApp.view.main.UserDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userdialogcontroller',

    onEditButtonClick: function () {
        const userDialog = this.getView();
        const form = userDialog.down('userForm');
        const editedUser = form.getRecord();
        const formData = form.getValues();

        // Call the saveUser function and pass the necessary variables
        this.saveUser('edit', userDialog, form, editedUser, formData);
    },

    onCreateButtonClick: function () {
        const userDialog = this.getView();
        const form = userDialog.down('userForm');
        // Get the form data
        const formData = form.getValues();

        // Call the saveUser function and pass the necessary variables
        this.saveUser('create', userDialog, form, null, formData);
    },

    saveUser: function (userOperation, userDialog, form, editedUser, formData) {
        if (form.validate()) {
            const user =
                userOperation === 'edit'
                    ? editedUser
                    : Ext.create('ModernApp.model.UserModel', formData);
            user.set(formData);

            user.save({
                success: function () {
                    console.log(
                        userOperation === 'edit'
                            ? 'The user is successfully edited.'
                            : 'New user created.'
                    );
                    Ext.fireEvent('refreshusersstore');
                    userDialog.destroy();
                },
                failure: function () {
                    console.error('Failed to create or edit the user.');
                },
            });
        }
    },
});
