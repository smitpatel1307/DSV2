import { sign, verify } from "jsonwebtoken";
require("dotenv").config({ path: ".env" });

const secret = process.env.SECRETKEY;

const generateJWTToken = (id) => {
  const token = sign({ sub: id }, secret);
  return token;
};

const verifyJWTToken = (token) => {
  const verifyToken = verify(token, secret);
  return verifyToken;
};

export default { generateJWTToken, verifyJWTToken };
