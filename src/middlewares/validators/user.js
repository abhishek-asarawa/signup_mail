import { check } from "express-validator";

const isPasswordMatch = (val, { req }) => val === req.body.password;

export const signup = [
  check("email")
    .exists()
    .withMessage("Please provide email")
    .custom((val) => /\S+@\S+\.\S+/.test(val))
    .withMessage("Please provide valid email"),

  check("firstName")
    .exists()
    .withMessage("Please provide first name")
    .trim()
    .isLength({ min: 1, max: 40 })
    .withMessage("first name must be between 1 to 40 char long"),

  check("lastName")
    .exists()
    .withMessage("Please provide last name")
    .trim()
    .isLength({ min: 1, max: 40 })
    .withMessage("last name must be between 1 to 40 char long"),

  check("password")
    .exists()
    .withMessage("Please provide password")
    .isLength({ min: 6, max: 20 })
    .withMessage("Password should be between 6 - 20 char long"),

  check("verifyPassword")
    .custom(isPasswordMatch)
    .withMessage("Password confirmation does not match to password"),
];
