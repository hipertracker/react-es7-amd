define(function (require, exports, module) {
    var React = require('react');
    var _ = require('lodash');

    // mounting a React component to a selector id location
    var mount = function (component, location, argv) {
        argv = argv || {};
        if (!location) {
            location = document.body;
        } else {
            location = document.getElementById(location);
        }
        if (!React.isValidElement(component)) {
            component = React.createFactory(component);
        }
        React.render(component(argv), location);
    };

    // merging properties, used in React component for aggregating styles
    var m = function () {
        var res = {};
        _.each(arguments, function (arg) {
            return arg && _.merge(res, arg)
        });
        return res;
    };

    module.exports = {
        mount: mount,
        m: m
    };
});


