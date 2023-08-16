Ext.define("ModernApp.view.main.UsersTab", {
  extend: "Ext.Panel",
  xtype: "userstab",
  title: "Users",

  requires: [
    "ModernApp.store.UserStore",
    "ModernApp.view.main.UsersTabViewModel",
    "ModernApp.view.main.UsersTabController",
  ],

  controller: "userstab",
  viewModel: "userstab",

  items: [
    {
      xtype: "grid",
      bind: {
        store: "userstore",
      },
      columns: [
        { text: "ID", dataIndex: "id" },
        { text: "Name", dataIndex: "name" },
        { text: "Username", dataIndex: "username" },
        { text: "Email", dataIndex: "email" },
        { text: "Address", dataIndex: "address" },
        // Add other columns as needed
      ],
      dockedItems: [
        {
          xtype: "toolbar",
          dock: "top",
          items: [
            {
              text: "Add User",
              handler: "onAddUserClick",
            },
          ],
        },
      ],
    },
  ],
});
