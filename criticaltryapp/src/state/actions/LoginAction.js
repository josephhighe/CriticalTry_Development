export const LoginAction = user => {
  //try to login
  let isValid = true;

  //if valid login
  if (isValid) {
    //TODO remove below, used as mock data
    //updating user data with data from DB
    user.init("Bobbert", "McBobbertson", user.username, user.pass);

    //user is logged in, account data is valid
    user.isValid = true;

    //return updated user information to be store in global state
    return {
      type: "Account",
      payload: user
    };
  }

  //failed login, return null
  return {
    type: "Account",
    payload: null
  };
};
