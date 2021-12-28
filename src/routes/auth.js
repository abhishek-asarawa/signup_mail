import { Router } from "express";
import { userController } from "../controllers";
import { getUserData } from "../middlewares/custom";
import { userValidation } from "../middlewares/validators";
import checkValidationError from "../middlewares/validators/checkValidationError";

const routes = Router();

// add user
routes.post(
  "/signup",
  userValidation.signup,
  checkValidationError,
  getUserData,
  userController.addUser
);

export default routes;
