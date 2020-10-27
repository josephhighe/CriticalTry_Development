const MAX_LOGIN_ATTEMPTS = 5;

class UserAccount {
  constructor() {
    this.initDef(null, null);
  }

  init(first, last, username, pass) {
    //if usernames changes, reset login attempts
    if (this.username !== username) {
      this.loginAttemps = 0;
    }

    this.first = first;
    this.last = last;
    this.username = username;
    this.pass = pass;
    this.isValid = false;
    return this;
  }

  initDef(username, pass) {
    this.init(null, null, username, pass);
    return this;
  }

  login() {
    this.isValid = true;
    this.loginAttemps = 0;
    this.pass = null;
  }

  isLoggedIn() {
    return this.isValid;
  }

  failedLogin() {
    ++this.loginAttemps;
  }

  isAccountLocked() {
    //TODO change to be based upon backend information
    return MAX_LOGIN_ATTEMPTS < this.loginAttemps;
  }
}

export const PLACEHOLDER_ACCOUNT = new UserAccount().init(
  "Bobbert",
  "McBobbertson",
  "bobbert@bobbert.com",
  "Bobbert123"
);

export default UserAccount;
