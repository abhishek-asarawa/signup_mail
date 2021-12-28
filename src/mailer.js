import nodemailer from "nodemailer";
import { host, port, password, user } from "./config/email";

const transporter = nodemailer.createTransport({
  host: host,
  port: port,
  auth: {
    user: user,
    pass: password,
  },
});

export default transporter;
