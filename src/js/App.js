var React = require('react'),
    Router = require('react-router'),
    LoginPage = require('./components/LoginPage'),
    Logout = require('./components/Logout'),
    PrivateHome = require('./components/PrivateHome'),
    PublicHome = require('./components/PublicHome'),
    MainContainer = require('./components/MainContainer'),
    MyForm = require('./components/MyForm'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    DefaultRoute = Router.DefaultRoute,
    routesConstants = require('./constants/routesConstants');

var routes = (
  <Route handler={MainContainer} path={routesConstants.ROOT}>
    <Route name={routesConstants.LOGIN} handler={LoginPage}/>
    <Route name={routesConstants.LOGOUT} handler={Logout}/>
    <Route name={routesConstants.HOME_PRIVATE} handler={PrivateHome}/>
    <Route name={routesConstants.SOMETHING} handler={MyForm}/>
    <DefaultRoute handler={PublicHome}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});