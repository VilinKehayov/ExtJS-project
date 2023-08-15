Ext.require("Ext.data.JsonStore");

Ext.define("ModernApp.store.UserStore", {
  extend: "Ext.data.Store",
  alias: "store.userstore",
  model: "ModernApp.model.UserModel",
  autoLoad: true,
  proxy: {
    type: "ajax",
    url: "https://jsonplaceholder.typicode.com/users", // Update with real server!!
    reader: {
      type: "json",
      rootProperty: '',
    },
  },
});
