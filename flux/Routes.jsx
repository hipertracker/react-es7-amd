define(function (require, exports, module) {
    var ReactRouter = require('react-router');
    var App =   require('jsx!flux/components/App');
    var Home =  require('jsx!flux/components/Home');
    var About = require('jsx!flux/components/About');

    var Route = ReactRouter.Route
    var DefaultRoute = ReactRouter.DefaultRoute;

    var routes = (
        <Route name="app" path="/" handler={App}>
            <Route name="home" handler={Home}/>
            <Route name="about" handler={About}/>
            <DefaultRoute handler={Home}/>
        </Route>
    );

    ReactRouter.run(routes, function (Handler) {
        React.render(<Handler/>, document.getElementById('app'));
    });

});
