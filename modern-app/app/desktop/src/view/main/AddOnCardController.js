Ext.define('ModernApp.view.main.AddOnCardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addoncardcontroller',

    toggleHandler: function () {
        const view = this.getView();
        const toggleContainer = view.down('#cardBody');
        if (toggleContainer.getHeight() === 0) {
            toggleContainer.setHeight(100);
        } else {
            toggleContainer.setHeight(0);
        }
    },

    cancelHandler: function () {
        const dialog = Ext.create('ModernApp.view.main.DeleteUserDialog');

        const viewModel = dialog.getViewModel();

        viewModel.set({
            deleteDialogTitle: 'Cancel Dialog',
            deleteDialogHtml: 'Hello inside Cancel Dialog',
        });

        dialog.show();
    },

    removeHandler: function () {
        const dialog = Ext.create('ModernApp.view.main.DeleteUserDialog');

        const viewModel = dialog.getViewModel();

        viewModel.set({
            deleteDialogTitle: 'Remove Dialog',
            deleteDialogHtml: 'Hello inside Remove Dialog',
        });

        dialog.show();
    },
});
