Ext.define("ModernApp.view.main.UserForm", {
    extend: "Ext.form.Panel",
    xtype: "userForm",

    title: "Fill up the form",
    floating: true,
    centered: true,
    modal: true,
    width: 400,

    // Use 'defaults' to set common properties for child items
    defaults: {
        xtype: "textfield",
    },

    items: [
        {
            name: "name",
            label: "Name",
        },
        {
            name: "username",
            label: "Username",
        },
        {
            name: "email",
            label: "Email",
        },
        {
            name: "address",
            label: "Address",
        },
    ],
});
