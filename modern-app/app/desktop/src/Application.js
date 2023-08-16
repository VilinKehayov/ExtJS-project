Ext.define("ModernApp.Application", {
  extend: "Ext.app.Application",
  name: "ModernApp",
  requires: ["ModernApp.*"],
  defaultToken: "MainView",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    this.removeSplash();
    var whichView = "app-main";
    Ext.Viewport.add([{ xtype: whichView }]);
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
});
