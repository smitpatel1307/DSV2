import { usermodel } from "../model";

const insertOneQuery = async (body) => {
  let data = new usermodel(body);
  let newdata = await data.save();
  return newdata;
};

const findOneQuery = async (filter) => {
  let data = await usermodel.findOne(filter);
  return data;
};

const getAll = async () => {
  let data = await usermodel.find();
  return data;
};

export default {
  insertOneQuery,
  findOneQuery,
  getAll,
};
