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
          addonBefore: 'joe@example.com',
          placeholder: 'Enter your email'
        }
      },
      password: {
        type: 'password',
        config: {
          addonBefore: 'password1'
        }
      }
  }
};

var LoginComponent = React.createClass({

  mixins: [Router.Navigation, RedirectWhenLoggedIn],

  statics: {
    attemptedTransition: null
  },

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

  save: function() {
    var value = this.refs.form.getValue();

    if (value && value.username && value.password) {
      console.log(value);

      authenticationService.login(value.username, value.password, function (loggedIn) {
      if (!loggedIn)
        return this.setState({ error: true });
      if (LoginComponent.attemptedTransition) {
        var transition = LoginComponent.attemptedTransition;
        LoginComponent.attemptedTransition = null;
        transition.retry();
      } else {
        this.replaceWith(routesConstants.HOME_PRIVATE); // jump after login
      }
    }.bind(this));

    }
  },

  render: function () {
    var errors = this.state.error ? <p>Bad login information. Try again !</p> : '';

    return (
      <div className="form-box">
        <Button bsStyle='primary' bsSize='large' onClick={this.open}>Log In</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Hey, Do We Know You ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              ref="form"
              type={UserCredentials} options={options}
            />
            <Button onClick={this.save}>Log In</Button>
            {errors}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = LoginComponent;