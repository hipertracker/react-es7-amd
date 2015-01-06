define(function (require, exports, module) {
    var React = require('react'),
        UsefulLinks = require('jsx!flux/components/UsefulLinks');

    var Home = React.createClass({
        render() {
            return (
                <section>
                    <UsefulLinks title="Useful Links"/>
                </section>
            )
        }
    });

    module.exports = Home;
});
