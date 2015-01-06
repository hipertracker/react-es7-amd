define(function (require, exports, module) {
    var React = require('react'),
        ReactRouter = require('react-router');

    var RouteHandler = ReactRouter.RouteHandler;
    var Link = ReactRouter.Link;

    var App = React.createClass({
        render() {
            var styles = {
                margin: 10
            };
            return (
                <section style={styles}>
                    <div className="ui menu">
                        <Link to="home" className="orange item">
                            <i className="home icon"></i>
                            Home
                        </Link>
                        <Link to="about" className="orange item">
                            <i className="bomb icon"></i>
                            About
                        </Link>
                    </div>
                    <RouteHandler/>
                </section>
            )
        }
    });

    module.exports = App;

});
