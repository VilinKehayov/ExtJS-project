Ext.require("Ext.data.proxy.Rest");
Ext.require("Ext.data.JsonStore");

Ext.define("ModernApp.store.UserStore", {
    extend: "Ext.data.Store",
    alias: "store.userstore",
    model: "ModernApp.model.UserModel",
    proxy: {
        type: "rest",
        url: "https://jsonplaceholder.typicode.com/users", // Update with real server!! //TODO Better update with the local server - you will be able to add/edit records and use pagination
        reader: {
            type: "json",
            rootProperty: "",
        },
    },
    autoLoad: true,
});
