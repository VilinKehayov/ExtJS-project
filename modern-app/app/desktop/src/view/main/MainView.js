// Ext.define('ModernApp.view.main.MainView', {
//     extend: 'Ext.Container',
//     xtype: 'mainview',
//     controller: 'mainviewcontroller',
//     viewModel: {
//         type: 'mainviewmodel'
//     },
//     requires: [
//     'Ext.layout.Fit'
//     ],
//     layout: 'fit',
//     items: [
//         { xtype: 'navview',    reference: 'navview',    docked: 'left',   bind: {width:  '{navview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },
//         { xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
//         { xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
//         { xtype: 'centerview', reference: 'centerview' },
//         { xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  },
//     ]
// });

Ext.define("ModernApp.view.main.MainView", { //TODO You can use 4 spaces tabs for every file for readability :)
    extend: "Ext.tab.Panel",
    xtype: "app-main",

    requires: ["ModernApp.view.main.UsersTab", "ModernApp.view.main.PhotosTab"],

    items: [
        {
            xtype: "userstab",
        },
        {
            xtype: "photostab",
        },
    ],
});
