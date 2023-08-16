Ext.require("Ext.layout.Fit");

Ext.define("ModernApp.view.main.UsersTab", {
  extend: "Ext.Panel",
  xtype: "userstab",
  title: "Users",

  layout: { type: "fit" },

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
        store: "{users}",
      },
      columns: [
        { text: "ID", dataIndex: "id" },
        { text: "Name", dataIndex: "name" },
        { text: "Username", dataIndex: "username" },
        { text: "Email", dataIndex: "email" },
        {
          text: "Address",
          tpl: "{address.city}",
          xtype: "templatecolumn",
        },
        // Add other columns as needed
      ],
      selectable: {
        columns: false, // Can select cells and rows, but not columns
        extensible: true, // Uses the draggable selection extender
      },
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
