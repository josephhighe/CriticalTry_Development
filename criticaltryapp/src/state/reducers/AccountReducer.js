import "../models/UserAccount";
import UserAccount from "../models/UserAccount";

const AccountReducer = (state = new UserAccount(), action) => {
  //only act on certain actions
  if (action.type !== "Account" || action.isConsumed) {
    return state;
  }

  //return account information
  return action.payload;
};

export default AccountReducer;
