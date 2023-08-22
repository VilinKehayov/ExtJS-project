Ext.define("ModernApp.view.main.UsersTabController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userstab",

  requires: [
    "ModernApp.view.main.UserForm", // Add this line to include UserForm
    "ModernApp.view.main.UserDialog",
    "ModernApp.view.main.DeleteUserDialog"
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
    // var me = this,
    //   usersTab = me.getView(),
    //   deleteDialog = Ext.create("ModernApp.view.main.DeleteUserDialog", {
    //     // Optional: Pass any necessary data to the dialog
    //   });

    // usersTab.add(deleteDialog);
    // deleteDialog.show();
  },

  onSubmitUserClick: function () {
    console.log("Created new user");
    // var me = this,
    //   form = me.lookupReference("userform");

    // if (form.isValid()) {
    //   var values = form.getValues(),
    //     usersStore = me.getViewModel().getStore("users");

    //   usersStore.add(values);

    //   // Save data to server (POST request)
    //   usersStore.sync({
    //     success: function () {
    //       Ext.toast("User added successfully", "Success");
    //       form.destroy();
    //     },
    //     failure: function () {
    //       Ext.toast("Failed to add user", "Error");
    //     },
    //   });
    // }
  },

  onBeforeShow: function(dialog) {

    console.log("Prefilled the form");
    // var userForm = dialog.down('userform'); // Get the reference to the userform
    // var selectedRecord = this.getSelectedRecord(); // Implement this method to get the selected record
    
    // if (userForm && selectedRecord) {
    //   userForm.setData(selectedRecord.getData()); // Pre-fill the form with the selected record's data
    // }
  },
});
