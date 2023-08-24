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

  onEditUserClick: function (button, context) {
    const userDialog = Ext.create("ModernApp.view.main.UserDialog",{
      title: "Edit User", // Set the title for creating a new user
    });
    const form = userDialog.down("userform");
    userDialog.getViewModel().set("UserDialog", true);
    form.setRecord(context.record);
    form.setValues(context.record);
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

  onRecordDelete: function (record) {
    const grid = this.getView().down("grid"),
      store = grid.getStore();

    if (store) {
      store.remove(record);
      console.log("Removed User");
    } else {
      console.error("Record store not found.");
    }
  },

  onSubmitUserClick: function () {
    const userDialog = Ext.create("ModernApp.view.main.UserDialog");
    const form = userDialog.down("userform");

    if (form.validate()) {
      const editedUser = form.getValues();
      const user = Ext.create("ModernApp.model.UserModel", editedUser);

      user.save({
        success: function () {
          Ext.fireEvent("userstore");
          this.getView().destroy();
        }.bind(this),
      });
    }
  },
});
