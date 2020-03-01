class UserAccount {
  constructor() {
    this.initDef(null, null);
  }

  init(first, last, username, pass) {
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

  isLoggedIn() {
    return this.isValid;
  }
}

export default UserAccount;
