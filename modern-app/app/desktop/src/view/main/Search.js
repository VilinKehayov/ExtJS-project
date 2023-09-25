Ext.require('Ext.form.FieldSet');
Ext.require('Ext.field.Search');
Ext.require('Ext.data.validator.Format');

Ext.define('ModernApp.view.main.Search', {
    extend: 'Ext.Container',
    xtype: 'search',

    requires: ['ModernApp.view.main.SearchController'],

    controller: 'searchcontroller',

    viewModel: {
        data: {
            currentInputType: '',
            label: '',
            activeValidator: '',
        },
    },

    items: [
        {
            xtype: 'fieldset',
            margin: '50 10',
            title: 'Search',
            items: [
                {
                    xtype: 'searchfield',
                    name: 'search',
                    bind: {
                        validators: '{activeValidator}',
                        label: '{label}',
                        inputType: '{currentInputType}',
                    },
                    required: true,
                    listeners: {
                        keyup: 'onSearchFieldKeyUp',
                    },
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-search',
                    ui: 'confirm',
                    shadow: true,
                    margin: '20',
                    text: 'Text Input',
                    handler: 'onTextInputClick',
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-search',
                    shadow: true,
                    padding: 10,
                    ui: 'decline',
                    text: 'Number Input',
                    handler: 'onNumberInputClick',
                },
            ],
        },
    ],
});
