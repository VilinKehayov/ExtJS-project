Ext.define('ModernApp.view.custom.CustomDialog', {
    extend: 'Ext.Component', // Ext.Component is used as the base class
    xtype: 'customDialog',

    config: {
        title: 'Dialog Title', // Default dialog title
        contentHtml: 'Hello World', // Default HTML content
        buttonText: 'OK', // Default button text
    },

    // Template for the dialog component
    tpl: [
        '<div class="custom-dialog-wrap">',
        '   <div class="custom-dialog-title">{title}</div>',
        '   <div class="custom-dialog-content">{contentHtml}</div>',
        '   <div class="custom-dialog-button">',
        '       <button class="custom-button">{buttonText}</button>',
        '   </div>',
        '</div>',
    ],

    // Initialize the component
    initialize: function () {
        this.callParent(arguments);

        // // Add a listener for the button click event
        this.element.down('.custom-button').on('tap', this.onButtonClick, this);
    },

    // Custom method to handle button click
    onButtonClick: function () {
        this.fireEvent('customButtonClick', this);
    },
});
