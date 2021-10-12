import { userService } from "../microServices";
import { passwordValidator, JWTtoken } from "../enum";
const login = async (req, res) => {
  try {
    let { body } = req,
      { email, password } = body,
      userExists;
    userExists = await userService.findOneQuery({ email });
    if (!userExists) throw new Error("User Not Found");

    let validPassword = await passwordValidator.comparePassword(
      password,
      userExists.password
    );
    if (!validPassword) throw new Error("Email Or Password is Incorrect");
    let token = JWTtoken.generateJWTToken(userExists._id);
    res.status(200).send({
      success: true,
      token,
      message: "User Login SuccessFully",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export default {
  login,
};
