import express from "express";
import { urlencoded, json } from "body-parser";
require("dotenv").config({ path: ".env" });
require("./src/conn/db.config");
const PORT = process.env.PORT;
const server = express();
import { INTERNAL_LINK } from "./src/enum";
import { userRoute, apiGatewayRoute } from "./src/route";

server.use(urlencoded({ extended: true }));
server.use(json());
server.use(INTERNAL_LINK.USER.BASE_URL, userRoute);
server.use(INTERNAL_LINK.API_GATEWAY.BASE_URL, apiGatewayRoute);

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}/api-docs`);
});
