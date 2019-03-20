import {adjs, nouns} from "./words";
import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";
import { authenticateJwt } from "./passport";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjs.length);
    return `${adjs[randomNumber]} ${nouns[randomNumber]}`;
  };
  
const sendMail = content => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    return sgMail.send(content);
  };
  
export const sendSecretMail = (address, secret) => {
    const email = {
      from: "welcome@inssagram.com",
      to: address,
      subject: "🔒 Login Secret for Inssagram 🔒",
      html: `Hello! Here is Your login secret : <strong>${secret}</strong><br/>Copy paste on the app/website to log in`
    };
    return sendMail(email);
  };

export const generateToken = id => jwt.sign({id}, process.env.JWT_SECRET);