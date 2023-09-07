Ext.require('Ext.layout.Fit');
Ext.require('Ext.grid.cell.Widget');
Ext.require('Ext.grid.plugin.PagingToolbar');

Ext.define('ModernApp.view.main.UsersTab', {
    extend: 'Ext.Panel',
    xtype: 'usersTab',
    title: 'Users',

    layout: { type: 'fit' },

    requires: [
        'ModernApp.store.UserStore',
        'ModernApp.view.main.UsersTabViewModel',
        'ModernApp.view.main.UsersTabController',
    ],

    controller: 'usersTabController',
    viewModel: 'usersTabViewModel',

    items: [
        {
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            ui: 'action round',
            padding: '15',
            handler: 'onAddUserClick',
            scale: 'large',
            floating: true,
            right: 50,
            bottom: 120,
            shadow: true,
            autoShow: true,
        },
        {
            xtype: 'grid',

            bind: {
                store: '{users}',
            },
            plugins: {
                pagingtoolbar: true,
            },
            columns: [
                { text: 'ID', dataIndex: 'id', flex: 1 },
                { text: 'Name', dataIndex: 'name', flex: 1 },
                { text: 'Username', dataIndex: 'username', flex: 1 },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                {
                    text: 'Address',
                    dataIndex: 'address',
                    flex: 1,
                },
                {
                    text: 'Actions',
                    flex: 1,
                    cell: {
                        xtype: 'widgetcell',
                        viewModel: true,
                        align: 'center',
                        widget: {
                            xtype: 'button',
                            iconCls: 'x-fa fa-home',
                            menu: [
                                {
                                    text: 'Edit',
                                    iconCls: 'x-fa fa-edit',
                                    handler: 'onEditUserClick',
                                },
                                {
                                    text: 'Delete',
                                    iconCls: 'x-fa fa-trash',
                                    handler: 'onDeleteUserClick',
                                },
                            ],
                        },
                    },
                },
                // Add other columns as needed
            ],
            selectable: {
                columns: true,
                extensible: true,
            },
        },
    ],
});
