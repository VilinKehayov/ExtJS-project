Ext.define('ModernApp.view.main.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcontroller',

    onSearchFieldKeyUp: function (field) {
        const searchText = field.getValue().toLowerCase();

        const usersTab = this.getView().up('usersTab');

        const vm = usersTab.getViewModel();
        vm.set('searchText', searchText);
    },

    onTextInputClick: function () {
        this.getViewModel().set({
            currentInputType: 'text',
            label: 'Text Search',
            activeValidator: /^[A-Za-z]*$/,
        });
    },

    onNumberInputClick: function () {
        this.getViewModel().set({
            currentInputType: 'number',
            label: 'Number Search',
            activeValidator: /^[0-9]*$/,
        });
    },
});
