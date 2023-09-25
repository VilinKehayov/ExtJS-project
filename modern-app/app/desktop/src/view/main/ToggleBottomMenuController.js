Ext.define('ModernApp.view.main.ToggleBottomMenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.togglemenucontroller',

    init: function () {
        this.bottomMenu = Ext.Viewport.setMenu(this.getMenuCfg('bottom'), {
            side: 'bottom',
            cover: false,
        });
    },

    destroy: function () {
        Ext.destroyMembers(this, 'bottomMenu');

        this.callParent();
    },

    getMenuCfg: function (side) {
        let cfg = {
            side: side,
            items: [
                {
                    text: 'Settings',
                    iconCls: 'x-fa fa-cog',
                    handler: function () {
                        Ext.Viewport.hideMenu(side);
                    },
                },
                {
                    text: 'New Item',
                    iconCls: 'x-fa fa-pencil-alt',
                    handler: function () {
                        Ext.Viewport.hideMenu(side);
                    },
                },
                {
                    xtype: 'button',
                    text: 'Star',
                    iconCls: 'x-fa fa-star',
                    handler: function () {
                        Ext.Viewport.hideMenu(side);
                    },
                },
            ],
        };

        return cfg;
    },

    toggleMenu: function (side) {
        Ext.Viewport.setMenu(this[side + 'Menu'], {
            side: side,
        });

        Ext.Viewport.toggleMenu(side);
    },

    toggleBottom: function () {
        this.toggleMenu('bottom');
    },
});
