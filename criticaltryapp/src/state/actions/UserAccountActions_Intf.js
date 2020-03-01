class UserAccountActions_Intf {
  constructor(user) {
    this.user = user;
  }

  //override this method to perform actions related to a user account
  perform() {
    return null;
  }
}

export default UserAccountActions_Intf;
