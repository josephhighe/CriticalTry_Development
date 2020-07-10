export const isValid = obj => {
  return obj !== undefined && obj !== null;
};

export const isEmptyStr = str => {
  return isValid(str) && str !== "";
};
