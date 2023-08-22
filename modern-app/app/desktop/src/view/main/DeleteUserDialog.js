Ext.define("ModernApp.view.main.DeleteUserDialog", {
  extend: "Ext.Dialog",
  xtype: "deleteuserdialog",

  controller: "userstab",
  viewModel: "userstab",

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

  buttons: [
    {
        text: 'Yes',
        handler: 'onConfirmDelete'
    },
    {
        text: 'No',
        handler: function (btn) {
            btn.up('deleteuserdialog').destroy();
        }
    }
]
});
