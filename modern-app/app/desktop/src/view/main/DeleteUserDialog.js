Ext.define("ModernApp.view.main.DeleteUserDialog", {
  extend: "Ext.Dialog",
  xtype: "deleteuserdialog", //TODO change to camel case deleteUserDialog

  controller: "userstab", //TODO avoid using a single controller and vm for everything :) it will become huge, and it is hard to read and maintain
  viewModel: "userstab", //TODO for a small VM you can use inline one like so > viewModel: {data: {userId = null}}

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
