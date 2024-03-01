let users;
const addAllUsers = (value) => {
  users = value;
};

const getAllUsers = () => {
  return users;
};

let myInd;

const addIndex = (value) => {
  myInd = value;
};

const getAllIndex = () => {
  return myInd;
};

let details = "no data found";
const addDetails = (val) => {
  details = val;
};

const getDetails = () => {
  return details;
};
export {
  addAllUsers,
  getAllUsers,
  addIndex,
  getAllIndex,
  addDetails,
  getDetails,
};
