Ext.require('Ext.ActionSheet');
Ext.define('ModernApp.view.main.ToggleBottomMenu', {
    extend: 'Ext.Panel',
    xtype: 'toogleBottomMenu',

    requires: ['ModernApp.view.main.ToggleBottomMenuController'],
    controller: 'togglemenucontroller',

    width: 250,
    maxHeight: 120,
    shadow: true,
    scrollable: true,
    title: 'Toggle Panel',

    items: [
        {
            xtype: 'button',
            cls: 'demobtn',
            margin: '10 0',
            width: '100%',
            text: 'Toggle Bottom Menu',
            handler: 'toggleBottom',
        },
    ],
});
