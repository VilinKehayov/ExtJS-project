Ext.define("ModernApp.view.main.UsersTab", {
  extend: "Ext.Panel",
  xtype: "userstab",
  title: "Users",

  requires: ["ModernApp.store.UserStore"],

  items: [
    {
      xtype: "grid",
      stores: "userstore",
      columns: [
        { text: "ID", dataIndex: "id" },
        { text: "Name", dataIndex: "name" },
        { text: "Username", dataIndex: "username" },
        { text: "Email", dataIndex: "email" },
        { text: "Address", dataIndex: "address" },
        // Add other columns as needed
      ],
    },
  ],
});
