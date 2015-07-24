var React = require('react'),
    Router = require('react-router'),
    authenticationService = require('../services/authenticationService'),
    RedirectWhenLoggedIn = require('../mixins/redirect_when_logged_in'),
    routesConstants = require('../constants/routesConstants'),
    RouteHandler = Router.RouteHandler,
    Route = Router.Route,
    Link = Router.Link,
    Popover = require('react-bootstrap/lib/Popover'),
    Tooltip = require('react-bootstrap/lib/Tooltip'),
    Button = require('react-bootstrap/lib/Button'),
    OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger')
    Modal = require('react-bootstrap/lib/Modal');

var Login = React.createClass({

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

  handleSubmit: function (event) {
    event.preventDefault();

    var email = this.refs.email.getDOMNode().value;
    var pass = this.refs.pass.getDOMNode().value;
    
    authenticationService.login(email, pass, function (loggedIn) {
      if (!loggedIn)
        return this.setState({ error: true });
      if (Login.attemptedTransition) {
        var transition = Login.attemptedTransition;
        Login.attemptedTransition = null;
        transition.retry();
      } else {
        this.replaceWith(routesConstants.HOME_PRIVATE); // jump after login
      }
    }.bind(this));
  },

  render: function () {
    var popover = <Popover title='popover'>very popover. such engagement</Popover>;
    var tooltip = <Tooltip>wow.</Tooltip>;
    var errors = this.state.error ? <p>Bad login information</p> : '';
    return (
      <div className="form-box">
        <Button bsStyle='primary' bsSize='large' onClick={this.open}>Log In</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input ref="email" placeholder="email" defaultValue="joe@example.com"/>
              </label>
              <label>
                <input ref="pass" placeholder="password"/>
              </label> (hint: password1)
              <br/>
              <button type="submit">login</button>
              {errors}
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = Login;