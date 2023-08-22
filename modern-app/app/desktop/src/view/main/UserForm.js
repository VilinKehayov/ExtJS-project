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
    },
    {
      xtype: "textfield",
      name: "username",
      label: "Username",
    },
    {
      xtype: "textfield",
      name: "email",
      label: "Email",
    },
    {
      xtype: "textfield",
      name: "address",
      label: "Address",
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
