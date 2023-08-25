Ext.require("Ext.layout.Fit");
Ext.require("Ext.grid.cell.Widget");

Ext.define("ModernApp.view.main.UsersTab", {
    extend: "Ext.Panel",
    xtype: "userstab", // TODO Rename to usersTab
    title: "Users",

    layout: { type: "fit" },

    requires: [
        "ModernApp.store.UserStore",
        "ModernApp.view.main.UsersTabViewModel",
        "ModernApp.view.main.UsersTabController",
    ],

    controller: "userstab", //TODO Rename controller to usersTabController
    viewModel: "userstab", //TODO Rename viewModel to usersTabViewModel

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
                                    iconCls: "x-fa fa-edit",
                                    handler: "onEditUserClick",
                                },
                                {
                                    text: "Delete",
                                    iconCls: "x-fa fa-trash",
                                    handler: "onDeleteUserClick",
                                },
                            ],
                        },
                    },
                },
                {
                    text: "Add User ", //TODO Move this not to column but maybe into the dialog header as a tool
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
