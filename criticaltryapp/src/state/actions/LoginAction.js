import { ACCOUNT_ACTION } from "../reducers/AccountReducer";

const accountObj = user => {
  return {
    type: ACCOUNT_ACTION,
    payload: user
  };
};

export const LoginAction = user => {
  //TODO actually login

  //TODO set this based if login was valid
  let isValid = true;

  if (isValid) {
    //TODO remove below, used as mock data
    //updating user data with data from DB
    user.init("Bobbert", "McBobbertson", user.username, user.pass);

    //user is logged in
    user.login();

    return accountObj(user);
  }

  //update account info
  user.failedLogin();

  //TODO handle login by calling actions to lock account if needed

  return accountObj(user);
};
