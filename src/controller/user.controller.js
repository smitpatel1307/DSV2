import { userService } from "../microServices";
import { passwordValidator } from "../enum";
const addUser = async (req, res) => {
  try {
    let { body } = req,
      { password, email, fname, lname, phno } = body,
      saveUser = null;
    let userExists = await userService.findOneQuery({ email: email });
    if (userExists) throw new Error("Email Address Already In Use");
    let hashPassword = await passwordValidator.hashedPassword(password);
    body = {
      ...body,
      password: hashPassword,
    };

    saveUser = await userService.insertOneQuery(body);

    saveUser &&
      res.status(200).send({
        success: true,
        message: "User Save SuccessFully",
      });
  } catch (error) {
    console.log(`error`, error);
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    let data = await userService.getAll();
    //console.log(`data`, data);
    data &&
      res.status(200).send({
        success: true,
        data: data,
      });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export default {
  addUser,
  getAllUser,
};
