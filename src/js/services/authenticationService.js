var authenticationService = {
  login: function (email, password, callback) {
    callback = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (callback) callback(true);
      this.onChange(true);
      return;
    }
    pretendRequest(email, password, function (authResult) {
      if (authResult.authenticated) {
        localStorage.token = authResult.token;
        localStorage.username = authResult.username;
        if (callback) callback(true);
        this.onChange(true);
      } else {
        if (callback) callback(false);
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
  logout: function (callback) {
    delete localStorage.token;
    if (callback) callback();
    this.onChange(false);
  },
  loggedIn: function () {
    return !!localStorage.token;
  },
  onChange: function () {}
};

function pretendRequest(email, password, callback) {
  setTimeout(function () {
    if (email === 'a@b.c' && password === 'abc') {
      callback({
        authenticated: true,
        // generate a random JWT instead of requesting from API
        token: Math.random().toString(36).substring(7),
        username: email
      });
    } else {
      callback({authenticated: false});
    }
  }, 0);
}

module.exports = authenticationService;