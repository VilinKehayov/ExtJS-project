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
        { text: "ID", dataIndex: "id" },
        { text: "Name", dataIndex: "name" },
        { text: "Username", dataIndex: "username" },
        { text: "Email", dataIndex: "email" },
        { text: "Address", tpl: "{address.city}", xtype: "templatecolumn" },
        {
          text: "Actions",
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
          cell: {
            xtype: "widgetcell",
            viewModel: true,
            align: "center",
            widget: {
              xtype: "button",
              iconCls: 'x-fa fa-plus',
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
        columns: false, // Can select cells and rows, but not columns
        extensible: true, // Uses the draggable selection extender
      },
    },
  ],
});
