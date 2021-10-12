import { compare, hash } from "bcryptjs";

const hashedPassword = async (password) => {
  let hashpassword = await hash(password, 10);
  return hashpassword;
};

const comparePassword = (password, hashedPassword) => {
  return compare(password, hashedPassword);
};

export default {
  hashedPassword,
  comparePassword,
};
