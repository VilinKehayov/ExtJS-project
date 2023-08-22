Ext.define("ModernApp.view.main.UserDialog", {
  extend: "Ext.Dialog",
  xtype: "userdialog",

  title: "Edit User",
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