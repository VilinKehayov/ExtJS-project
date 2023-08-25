Ext.define("ModernApp.view.main.UserForm", {
    extend: "Ext.form.Panel",
    xtype: "userform", //TODO rename to userForm

    controller: "userstab", //TODO YHou do not need controller and vm here :)
    viewModel: "userstab",

    title: "Fill up the form",
    floating: true,
    centered: true,
    modal: true,

    width: 400,

    items: [ //TODO Check defaults - it is used to put recurring things in one please
        {
            xtype: "textfield",
            name: "name",
            label: "Name",
            bind: { //TODO You do not need this binding :)
                value: "{record.name}", // Bind to the name property of the ViewModel's record
            },
        },
        {
            xtype: "textfield",
            name: "username",
            label: "Username",
            bind: {
                value: "{record.username}", // Bind to the name property of the ViewModel's record
            },
        },
        {
            xtype: "textfield",
            name: "email",
            label: "Email",
            bind: {
                value: "{record.email}", // Bind to the name property of the ViewModel's record
            },
        },
        {
            xtype: "textfield",
            name: "address",
            label: "Address",
            bind: {
                value: "{record.address.city}", // Bind to the name property of the ViewModel's record
            },
        },
    ],

    buttons: [ //TODO Move the buttons to UserDialog and create a UserDialogController with the handlers
        {
            text: "Submit",
            handler: "onSubmitUserClick",
        },
        {
            text: "Cancel",
            handler: function (btn) {
                btn.up("userform").destroy(); // "userform close?"
            },
        },
    ],
});
