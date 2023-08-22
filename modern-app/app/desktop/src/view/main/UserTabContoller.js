Ext.define("ModernApp.view.main.UsersTabController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userstab",

  requires: [
    "ModernApp.view.main.UserForm", // Add this line to include UserForm
    "ModernApp.view.main.UserDialog",
    "ModernApp.view.main.DeleteUserDialog",
  ],

  onAddUserClick: function () {
    var userForm = Ext.create("ModernApp.view.main.UserForm");

    Ext.Viewport.add(userForm);

    userForm.show();
  },

  onEditUserClick: function (button) {
    var userDialog = Ext.create("ModernApp.view.main.UserDialog");
    userDialog.show();
  },

  onDeleteUserClick: function (button) {
    var deleteUserDialog = Ext.create("ModernApp.view.main.DeleteUserDialog");
    deleteUserDialog.show();
  },

  onConfirmDelete: function () {
    console.log("User deleted");
  },

  onSubmitUserClick: function () {
    console.log("Created new user");
  },

  onBeforeShow: function (dialog) {
    console.log("Prefilled the form");
  },
});
