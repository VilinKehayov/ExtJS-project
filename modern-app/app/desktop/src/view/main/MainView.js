Ext.define("ModernApp.view.main.MainView", {
    extend: "Ext.tab.Panel",
    xtype: "app-main",

    requires: ["ModernApp.view.main.UsersTab", "ModernApp.view.main.PhotosTab"],

    items: [
        {
            xtype: "usersTab",
        },
        {
            xtype: "photosTab",
        },
    ],
});
