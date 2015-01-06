define(function (require, exports, module) {
    var React = require('react'),
        ReactRouter = require('react-router'),
        Menu = require('jsx!flux/components/Menu');

    var RouteHandler = ReactRouter.RouteHandler;
    var App = React.createClass({
        render() {
            var styles = {
                margin: 10
            };
            return (
                <section style={styles}>
                    <Menu/>
                    <RouteHandler/>
                </section>
            )
        }
    });

    module.exports = App;

});
