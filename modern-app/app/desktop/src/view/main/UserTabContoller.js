Ext.define("ModernApp.view.main.UsersTabController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userstab",

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
    userDialog.show();
  },

  onEditUserClick: function (button) {
    const grid = this.getView().down("grid");

    // Find the clicked button's cell
    const cell = button.up("widgetcell");

    // Extract the record from the cell
    const record = cell.getRecord();
    console.log(record);

    const userDialog = Ext.create("ModernApp.view.main.UserDialog", {
      title: "Edit User",
    });
    const form = userDialog.down("userform");

    // Set the form's record data to the existing user data
    const userFormViewModel = form.getViewModel();
    userFormViewModel.set("record", record.data); // Use record.data

    userDialog.show();
  },

  onDeleteUserClick: function (button) {
    const grid = this.getView().down("grid");

    // Find the clicked button's cell
    const cell = button.up("widgetcell");

    // Extract the record from the cell
    const record = cell.getRecord();

    // Create and show the DeleteUserDialog with the record
    const deleteUserDialog = Ext.create(
      "ModernApp.view.main.DeleteUserDialog",
      {
        record: record, // Pass the record to the dialog
      }
    );

    deleteUserDialog.show();
  },

  onRecordDelete: function () {
    const grid = this.getView().down("grid"),
      store = grid.getStore();

    if (store) {
      console.log("The User was deleted!");
      store.load(); // Reload the store to reflect changes
    } else {
      console.error("Record store not found.");
    }
  },

  onSubmitUserClick: function () {
    const userDialog = Ext.create("ModernApp.view.main.UserDialog");
    const form = userDialog.down("userform");

    if (form.validate()) {
      const editedUser = form.getValues();
      const userStore = Ext.getApplication().getStore("UserStore");

      // Create a new UserModel instance using the editedUser data
      const newUser = Ext.create("ModernApp.model.UserModel", editedUser);

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
