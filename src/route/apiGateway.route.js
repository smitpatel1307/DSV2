import express from "express";
import { INTERNAL_LINK } from "../enum";
import { apiGatewayController } from "../controller";
export default express
  .Router()
  .post(INTERNAL_LINK.API_GATEWAY.LOGIN, apiGatewayController.login);
