Ext.define("ModernApp.view.main.UserForm", {
  extend: "Ext.form.Panel",
  xtype: "userform",

  controller: "userstab",
  viewModel: "userstab",

  title: "Fill up the form",
  floating: true,
  centered: true,
  modal: true,

  width: 400,

  items: [
    {
      xtype: "textfield",
      name: "name",
      label: "Name",
      bind: {
        value: "{record.name}", // Bind to the name property of the ViewModel's record
      },
    },
    {
      xtype: "textfield",
      name: "username",
      label: "Username",
      bind: {
        value: "{record.username}", // Bind to the name property of the ViewModel's record
      },
    },
    {
      xtype: "textfield",
      name: "email",
      label: "Email",
      bind: {
        value: "{record.email}", // Bind to the name property of the ViewModel's record
      },
    },
    {
      xtype: "textfield",
      name: "address",
      label: "Address",
      bind: {
        value: "{record.address.city}", // Bind to the name property of the ViewModel's record
      },
    },
  ],

  buttons: [
    {
      text: "Submit",
      handler: "onSubmitUserClick",
    },
    {
      text: "Cancel",
      handler: function (btn) {
        btn.up("userform").destroy(); // "userform close?"
      },
    },
  ],
});
