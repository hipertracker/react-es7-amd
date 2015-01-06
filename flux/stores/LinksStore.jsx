define(function (require, exports, module) {
    var Reflux = require('reflux'),
        LinksActions = require('jsx!flux/actions/LinksActions');

    var LinksStore = Reflux.createStore({
        listenables: [LinksActions],

        onLoadDataSuccess: function (data) {
            this.trigger({links: data});
        }
    });

    module.exports = LinksStore;
});
