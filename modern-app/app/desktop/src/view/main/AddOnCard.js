Ext.define('ModernApp.view.main.AddOnCard', {
    extend: 'Ext.Container',
    xtype: 'addOnCard',
    classCls: 'addOnCard',

    margin: 0,
    padding: 0,

    requires: ['ModernApp.view.main.AddOnCardController'],
    controller: 'addoncardcontroller',

    items: [
        {
            xtype: 'container',
            userCls: 'addOnCard-border-top',
            layout: 'hbox',
            defaults: {
                width: 20,
                height: 20,
            },
            items: [
                {
                    xtype: 'component',
                    userCls: 'addOnCard-corner',
                },
                {
                    xtype: 'spacer',
                    flex: 1,
                },
                {
                    xtype: 'component',
                    userCls: 'addOnCard-corner',
                },
            ],
        },
        {
            xtype: 'container',
            items: [{ xtype: 'component', text: 'inlineComponent' }],
        },
        {
            xtype: 'container',
            margin: '0 40',
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',

                    items: [
                        {
                            xtype: 'component',
                            userCls: 'addOnCard-label',
                            margin: '15 0 0 0',
                            html: '<span style="font-size: 18px">Add-on products<span>',
                        },
                        {
                            xtype: 'spacer',
                            flex: 1,
                        },
                        {
                            xtype: 'button',
                            width: 140,
                            ui: 's light',
                            userCls: 'addOnCard-transparent-button',
                            text: 'Remove',
                        },
                        {
                            xtype: 'button',
                            margin: '0 10 0 0',
                            arrow: false,
                            hidden: false,
                            menu: {
                                defaults: {
                                    iconAlign: 'right',
                                },
                                items: [
                                    {
                                        userCls: 'addOnCard-infobox',
                                        iconCls: 'x-fa fa-arrow-up',
                                    },
                                ],
                            },
                        },
                        {
                            xtype: 'button',
                            itemId: 'toggleButton',
                            iconCls: 'x-fa fa-chevron-down',
                            cls: 'toggle-button',
                            ui: 's plain',
                            handler: 'toggleHandler',
                        },
                    ],
                },
                {
                    xtype: 'container',
                    itemId: 'MainContainer',
                    margin: '24 0 30 0',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'component',
                            userCls: 'addOnCard-label',
                            margin: '0',
                            html: '<span style="font-size: 24px">Agriculture tools</span><br><span class="x-fa fa-sync">Renewable</span>',
                        },
                        {
                            xtype: 'spacer',
                            flex: 1,
                        },
                        {
                            xtype: 'component',
                            userCls: 'addOnCard-label',
                            margin: '0 40 0 0',
                            html: '<span class="x-fa fa-arrow-down">Purchased On</span><br><b><span>01.09.2023</span><b>',
                            hidden: false,
                        },
                        {
                            xtype: 'component',
                            userCls: 'addOnCard-label',
                            margin: '0 40 0 0',
                            html: '<span class="x-fa fa-arrow-up">Expiration date:</span><br><b><span>01.12.2023</span><b>',
                            hidden: false,
                        },
                    ],
                },
                {
                    xtype: 'container',
                    itemId: 'scheduledRemoveProductComponent',
                    hidden: false,
                    items: [
                        {
                            userCls: 'addOnCard-label',
                            html: 'Scheduled Add-on Removal',
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            margin: '8 0 12',
                            padding: 24,
                            userCls: 'addOnCard-transparent-button',

                            items: [
                                {
                                    xtype: 'component',
                                    userCls: 'addOnCard-label',
                                    html: '<span>Scheduled for:</span><br><span>21.03.2024<span>',
                                },
                                {
                                    xtype: 'spacer',
                                    flex: 1,
                                },
                                {
                                    xtype: 'button',
                                    userCls: 'addOnCard-transparent-button',
                                    ui: 's light',
                                    width: 94,
                                    margin: '0 20 0 0',
                                    text: 'Cancel',
                                    hidden: false,
                                    handler: 'cancelHandler',
                                },
                                {
                                    xtype: 'button',
                                    userCls: 'addOnCard-transparent-button',
                                    ui: 's',
                                    width: 136,
                                    hidden: false,
                                    text: 'Remove Now',
                                    handler: 'removeHandler',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            xtype: 'container',
            itemId: 'cardBody',
            reference: 'cardBodyRef',
            userCls: '',
            padding: '0 40 25 40',
            layout: 'vbox',
            height: 0,
            items: [
                {
                    xtype: 'container',
                    margin: '0 10 30 0',
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        xtype: 'component',
                        margin: '0 40 0 0',
                    },
                    items: [
                        {
                            userCls: 'addOnCard-label',
                            html: '<span>Next charge:</span><br><span>200 EURO</span>',
                        },
                        {
                            userCls: 'addOnCard-label',
                            html: '<span>Renewal price:</span><br><span>500 EURO</span>',
                        },
                        {
                            userCls: 'addOnCard-label',
                            html: '<span>Activation price:</span><br><span>100 EURO</span>',
                        },
                    ],
                },
            ],
        },
        {
            xtype: 'container',
            userCls: 'addOnCard-border-bottom',
            layout: 'hbox',
            defaults: {
                width: 20,
                height: 20,
            },
            items: [
                {
                    xtype: 'component',
                    userCls: 'addOnCard-corner addOnCard-corner-left',
                },
                {
                    xtype: 'spacer',
                    flex: 1,
                },
                {
                    xtype: 'component',
                    userCls: 'addOnCard-corner addOnCard-corner-right',
                },
            ],
        },
    ],
});
