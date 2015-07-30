var React = require('react'),
    Router = require('react-router'),
    authenticationService = require('../services/authenticationService'),
    RedirectWhenLoggedIn = require('../mixins/redirect_when_logged_in'),
    routesConstants = require('../constants/routesConstants'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    Button = require('react-bootstrap/lib/Button'),
    Modal = require('react-bootstrap/lib/Modal'),
    t = require('tcomb-form'),
    Form = t.form.Form;

var UserCredentials = t.struct({
  username: t.Str,
  password: t.Str
});

var options = {
  legend: 'Log In to our Awesome Site',
  fields: {
      username: {
        config: {
          addonBefore: 'a@b.c',
          placeholder: 'Enter your email'
        }
      },
      password: {
        type: 'password',
        config: {
          addonBefore: 'abc'
        }
      }
  }
};

var LoginComponent = React.createClass({

  mixins: [Router.Navigation, RedirectWhenLoggedIn],

  getInitialState: function () {
    return {
      error: false,
      showModal: false
    };
  },

  componentDidMount: function(){
  },
  componentWillUnmount: function(){
    this.close();
  },

  close(){
    this.setState({ showModal: false, error: false });
  },

  open(){
    this.setState({ showModal: true });
  },

  _logIn: function() {
    var value = this.refs.form.getValue();

    // TODO
    // in order to decouple the routing, and also provide dynamic refresh
    // a LoginStore would propagate the changes to any component listening to it
    if (value && value.username && value.password) {
      authenticationService.login(value.username, value.password, function (loggedIn) {
        // here's the callback triggered by the auth service
        if (!loggedIn) {
          return this.setState({ error: true });
        } else {
          this.replaceWith(routesConstants.HOME_PRIVATE); // jump after successful login
        }
      }.bind(this));
    }
  },

  render: function () {
    var errors = this.state.error ? <p>Bad login information. Try again !</p> : '';

    // needs to be returned as an LI tag to be aligned in the bootstrap navbar
    return (
      <li>
        <Button className="auth-btn" onClick={this.open}>Log In</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Hey, Do We Know You ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              ref="form"
              type={UserCredentials} options={options}
            />
            {errors}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this._logIn}>Log In</Button>
          </Modal.Footer>
        </Modal>
      </li>
    );
  }
});

module.exports = LoginComponent;