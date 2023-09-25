Ext.require('Ext.layout.Fit');
Ext.require('Ext.grid.cell.Widget');
Ext.require('Ext.grid.plugin.PagingToolbar');

Ext.define('ModernApp.view.main.UsersTab', {
    extend: 'Ext.Panel',
    xtype: 'usersTab',
    title: 'Users',
    itemId: 'usersTab',

    layout: { type: 'vbox' },
    scrollable: true,
    defaults: {
        margin: '10',
        flex: 1,
    },

    requires: [
        'ModernApp.view.main.Search',
        'ModernApp.view.main.AddOnCard',
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
            bottom: 520,
            shadow: true,
            autoShow: true,
        },
        {
            xtype: 'grid',

            bind: {
                store: '{filteredUsers}',
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
            ],
            selectable: {
                columns: true,
                extensible: true,
            },
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'customDialog',
                    data: {
                        title: 'Custom Submit Dialog',
                        contentHtml:
                            'This is a custom dialog component with HTML content template.',
                        buttonText: 'Submit',
                    },
                    flex: 1,
                    listeners: {
                        customButtonClick: function () {
                            Ext.Msg.alert(
                                'Button Clicked',
                                'Submit button clicked!'
                            );
                        },
                    },
                },
                {
                    xtype: 'customDialog',
                    data: {
                        title: 'Custom Cancel Dialog',
                        contentHtml:
                            'This is a custom dialog component with HTML content template.', // Set the content
                        buttonText: 'Cancel',
                    },
                    flex: 1,
                    listeners: {
                        customButtonClick: function () {
                            Ext.Msg.alert(
                                'Button Clicked',
                                'Cancel button clicked!'
                            );
                        },
                    },
                },
            ],
        },
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '0',
            flex: 0,
            items: [
                {
                    xtype: 'search',
                },
                {
                    xtype: 'toogleBottomMenu',
                },
            ],
        },
        { xtype: 'addOnCard' },
    ],
});
