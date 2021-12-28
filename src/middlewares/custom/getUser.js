import { findUserByEmail } from "../../methods/user";

export default async (req, res, next) => {
  try {
    const mail = req.body.email;
    let user = null;

    if (mail) {
      user = await findUserByEmail(mail);
    }

    req._userData = user;

    next();
  } catch (err) {
    next(err);
  }
};
