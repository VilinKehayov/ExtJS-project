Ext.define("ModernApp.view.main.UsersTabController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userstab",

  requires: [
    "ModernApp.view.main.UserForm", // Add this line to include UserForm
    "ModernApp.view.main.UserDialog",
    "ModernApp.view.main.DeleteUserDialog",
    "ModernApp.model.UserModel"
  ],

  onAddUserClick: function () {
    const userDialog = Ext.create("ModernApp.view.main.UserDialog");
    userDialog.show();
  },

  onEditUserClick: function (button, context) {
    const userDialog = Ext.create("ModernApp.view.main.UserDialog");
    const form = userDialog.down("userform");
    userDialog.getViewModel().set("UserDialog", true);
    form.setRecord(context.record);
    form.setValues(context.record);
    userDialog.show();
  },

  onDeleteUserClick: function (button) {
    const deleteUserDialog = Ext.create("ModernApp.view.main.DeleteUserDialog");
    deleteUserDialog.show();
  },

  onConfirmDelete: function () {
    console.log("User deleted");
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

  //   onBeforeShow: function () {
  //   },
});
