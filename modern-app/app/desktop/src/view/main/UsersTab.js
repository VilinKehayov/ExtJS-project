Ext.require("Ext.layout.Fit");
Ext.require("Ext.grid.cell.Widget");

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
        { text: "ID", dataIndex: "id", flex: 1 },
        { text: "Name", dataIndex: "name", flex: 1 },
        { text: "Username", dataIndex: "username", flex: 1 },
        { text: "Email", dataIndex: "email", flex: 1 },
        {
          text: "Address",
          tpl: "{address.city}",
          xtype: "templatecolumn",
          flex: 1,
        },
        {
          text: "Actions",
          flex: 1,
          cell: {
            xtype: "widgetcell",
            viewModel: true,
            align: "center",
            widget: {
              xtype: "button",
              iconCls: "x-fa fa-home", // Icon for the menu button
              menu: [
                {
                  text: "Edit",
                  handler: "onEditUserClick",
                },
                {
                  text: "Delete",
                  handler: "onDeleteUserClick",
                },
              ],
            },
          },
        },
        {
          text: "Add User ",
          flex: 1,
          cell: {
            xtype: "widgetcell",
            viewModel: true,
            align: "center",
            widget: {
              xtype: "button",
              iconCls: "x-fa fa-plus",
              width: "100%",
              handler: "onAddUserClick",
              items: [
                {
                  xtype: "button",
                  text: "+",
                },
              ],
            },
          },
        },
        // Add other columns as needed
      ],
      selectable: {
        columns: true, // Can select cells and rows, but not columns
        extensible: true, // Uses the draggable selection extender
      },
    },
  ],
});
