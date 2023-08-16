Ext.define("ModernApp.view.main.UsersTabController", {
  extend: "Ext.app.ViewController",
  alias: "controller.userstab",

  onAddUserClick: function () {
    var view = this.getView(),
      userForm = Ext.create("ModernApp.view.main.UserForm");
      userForm.showBy(view.down("toolbar[dock=top] > button[text=Add User]"));
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
