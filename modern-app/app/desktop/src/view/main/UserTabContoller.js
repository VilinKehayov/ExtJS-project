Ext.define("ModernApp.view.main.UsersTabController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userstab",

  requires: [
    "ModernApp.view.main.UserForm", // Add this line to include UserForm
  ],

  onAddUserClick: function () {
    var userForm = Ext.create("ModernApp.view.main.UserForm");

    Ext.Viewport.add(userForm);

    userForm.show();
  },

  onSubmitUserClick: function () {
    var me = this,
      form = me.lookupReference("userform");

    if (form.isValid()) {
      var values = form.getValues(),
        usersStore = me.getViewModel().getStore("users");

      usersStore.add(values);

      // Save data to server (POST request)
      usersStore.sync({
        success: function () {
          Ext.toast("User added successfully", "Success");
          form.destroy();
        },
        failure: function () {
          Ext.toast("Failed to add user", "Error");
        },
      });
    }
  },
});
