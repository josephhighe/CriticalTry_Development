import UserAccount from "./UserAccount";

class RegisterAccount {
  constructor(first, last, email, passOne, passTwo) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.passOne = passOne;
    this.passTwo = passTwo;
  }

  isValidAccount() {
    //TODO return boolean
  }

  isValidFirst(name) {
    let regex = new RegExp();
  }
}

export default RegisterAccount;
