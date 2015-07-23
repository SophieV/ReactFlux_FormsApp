var authenticationService = {
  login: function (email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    pretendRequest(email, pass, function (res) {
      if (res.authenticated) {
        localStorage.token = res.token;
        localStorage.username = res.username;
        if (cb) cb(true);
        this.onChange(true);
      } else {
        if (cb) cb(false);
        this.onChange(false);
      }
    }.bind(this));
  },
  getToken: function () {
    return localStorage.token;
  },
  getUsername: function() {
    return localStorage.username;
  },
  logout: function (cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false);
  },
  loggedIn: function () {
    return !!localStorage.token;
  },
  onChange: function () {}
};

function pretendRequest(email, pass, cb) {
  setTimeout(function () {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7),
        username: email
      });
    } else {
      cb({authenticated: false});
    }
  }, 0);
}

module.exports = authenticationService;