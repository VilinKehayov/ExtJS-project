Ext.define('ModernApp.view.main.PhotosTab', {
    extend: 'Ext.Panel', 
    xtype: 'photostab',
    title: 'Photos',

    items: [{
        xtype: 'list',
        store: {
            type: 'json',
            proxy: {
                type: 'rest',
                url: 'https://jsonplaceholder.typicode.com/photos',
                reader: {
                    type: 'json',
                    rootProperty: ''
                }
            },
            autoLoad: true
        },
        itemTpl: [
            '<div style="text-align: center;">',
            '<img src="{thumbnailUrl}" alt="Photo" style="max-width: 100%;">',
            '<div>{title}</div>',
            '</div>'
        ]
    }]
});
