const INIT_STATE = 100;
export const accountBalance = (state = INIT_STATE, action) => {
  if (action.type == "Withdraw") {
    return state - action.payload;
  }
  if (action.type == "Deposit") {
    
    return state + action.payload;
  }
  return state;
};
