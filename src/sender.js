import Email from "email-templates";
import logger from "./logger";
import transporter from "./mailer";
import { sender } from "./config/email";

const mailSender = new Email({
  transport: transporter,
  send: true,
  preview:
    process.env.NODE_ENV === "development"
      ? {
          open: {
            app: "chrome",
            wait: false,
          },
        }
      : false,
  views: {
    options: {
      extension: "ejs",
    },
  },
});

const sendMail = async (template, receiver, locals) => {
  try {
    await mailSender.send({
      template,
      message: {
        from: `Developers <${sender}>`,
        to: receiver,
      },
      locals,
    });
  } catch (err) {
    logger.error(err);
  }
};

export default sendMail;
