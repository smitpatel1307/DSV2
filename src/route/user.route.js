import express from "express";
import { usercontroller } from "../controller";
import { INTERNAL_LINK } from "../enum";

export default express
  .Router()
  .post(INTERNAL_LINK.USER.ADD_USER, usercontroller.addUser)
  .get(INTERNAL_LINK.USER.GET_USER, usercontroller.getAllUser);
