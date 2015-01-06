define(function (require, exports, module) {
    var React = require('react'),
        ReactRouter = require('react-router');

    var Link = ReactRouter.Link;

    var Menu = React.createClass({
        render() {
            return (
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
            )
        }
    });

    module.exports = Menu;
});



