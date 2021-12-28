import dotenv from "dotenv";
dotenv.config();

export const user = process.env.EMAIL_USER;
export const password = process.env.EMAIL_PASS;
export const sender = process.env.EMAIL_SENDER;
export const host = process.env.EMAIL_HOST;
export const port = process.env.EMAIL_PORT;
