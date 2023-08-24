Ext.define("ModernApp.view.main.UserDialog", {
  extend: "Ext.Dialog",
  xtype: "userdialog",

  controller: "userstab",
  viewModel: "userstab",

  title: "",
  closable: true,
  defaultFocus: "userform button[text=Submit]",
  bodyPadding: 250,
  modal: true,
  maxWidth: 550,

  items: [
    {
      xtype: "userform",
    },
  ],
});
