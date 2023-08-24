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

  buttons: [
    {
      text: "Yes",
      handler: function (btn) {
        const deleteUserDialog = btn.up("deleteuserdialog"),
          record = deleteUserDialog.getRecord(); // Get the passed record

        record.erase({
          success: function () {
            console.log("The User was destroyed!");
            const usersTab = record.getUsersTab();
            usersTab.fireEvent("onRecordDelete", record);
            deleteUserDialog.destroy();
          },
          failure: function () {
            console.error("Failed to destroy the User");
          },
        });
      },
    },
    {
      text: "No",
      handler: function (btn) {
        btn.up("deleteuserdialog").destroy();
      },
    },
  ],
});
