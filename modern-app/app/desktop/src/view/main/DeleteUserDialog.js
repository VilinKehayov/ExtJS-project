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
        handler: function (btn) {
          const deleteUserDialog = btn.up("deleteuserdialog");
          deleteUserDialog.fireEvent("onConfirmDelete"); // Fire the custom event
          deleteUserDialog.destroy();
        },
    },
    {
        text: 'No',
        handler: function (btn) {
            btn.up('deleteuserdialog').destroy();
        }
    }
]
});
