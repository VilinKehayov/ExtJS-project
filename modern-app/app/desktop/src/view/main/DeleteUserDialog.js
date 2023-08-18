Ext.define("ModernApp.view.main.DeleteUserDialog", {
  extend: "Ext.Dialog",
  xtype: "deleteuserdialog",

  title: "Delete User",
  closable: true,
  defaultFocus: "button[text=Yes]",
  bodyPadding: 30,
  modal: true,
  maxWidth: 100,
  html: "Are you sure you want to delete this user?",

  items: [
    {
      xtype: "dialog",
      margin: "0 0 20 0",
    },
  ],

  buttons: {
    yes: "onConfirmDelete",
    no: "onCancelDelete",
  },
});
