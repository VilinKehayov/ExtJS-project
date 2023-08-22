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

  onSubmitUserClick: function (form) {
    var me = this;
    var userForm = form.up("userform");

    if (userForm.isValid()) {
      userForm.submit({
        url: "https://jsonplaceholder.typicode.com/users", // Update the URL
        method: "POST", // Use the POST method for creating a new user
        success: function (form, action) {
          var response = Ext.decode(action.response.responseText);
          if (response && response.id) {
            var newUser = {
              id: response.id,
              name: response.name,
              username: response.username,
              email: response.email,
              address: response.address,
              // Add other fields as needed
            };
            var userStore = Ext.getStore("userstore");
            userStore.add(newUser);
            Ext.Msg.alert("Success", "User created with ID: " + response.id);
            userForm.destroy(); // Close the form
          } else {
            Ext.Msg.alert("Failed", "Failed to create user");
          }
        },
        failure: function (form, action) {
          Ext.Msg.alert("Failed", "Failed to create user");
        },
      });
    } else {
      Ext.Msg.alert("Invalid Data", "Please correct form errors.");
    }
  },

  onBeforeShow: function () {
    // var form = Ext.create("ModernApp.view.main.UserForm"); // get the form panel
    //     record = form.getRecord(); // get the underlying model instance
    // if (form.isValid()) { // make sure the form contains valid data before submitting
    //     form.updateRecord(record); // update the record with the form data
    //     record.save({ // save the record to the server
    //         success: function(user) {
    //             Ext.Msg.alert('Success', 'User saved successfully.')
    //         },
    //         failure: function(user) {
    //             Ext.Msg.alert('Failure', 'Failed to save user.')
    //         }
    //     });
    // } else { // display error alert if the data is invalid
    //     Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
    // }
  },
});
