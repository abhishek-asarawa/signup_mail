import { capitalize, isEmpty } from "lodash";
import { userMethods } from "../methods";
import sendMail from "../sender";
import funcWrapper from "../utils/funcWrapper";
import response from "../utils/response";

export const addUser = funcWrapper(async (req, res, next) => {
  const user = req._userData;
  const { email, firstName, lastName, dob, password } = req.body;

  if (!isEmpty(user))
    return response(
      res,
      null,
      `User with email ${email} already exists.`,
      true,
      400
    );

  const createdUser = await userMethods.add({
    email,
    firstName,
    lastName,
    dob,
    password,
  });

  const capitalizeFN = capitalize(firstName);
  const capitalizeLN = capitalize(lastName);

  // sending mail to user
  sendMail("welcome", email, {
    subject: `Welcome ${capitalizeFN}`,
    name: `${capitalizeFN} ${capitalizeLN}`,
  });

  response(res, createdUser, "User created successfully");
});
