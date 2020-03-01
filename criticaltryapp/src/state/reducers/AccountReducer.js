import "../models/UserAccount";
import UserAccount from "../models/UserAccount";

export const ACCOUNT_ACTION = "ACCOUNT_ACTION_ID";

const AccountReducer = (state = new UserAccount(), action) => {
  //only act on certain actions
  if (action.type !== ACCOUNT_ACTION || action.isConsumed) {
    return state;
  }

  //return account information
  return action.payload;
};

export default AccountReducer;
