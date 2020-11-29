import Joi from "@hapi/joi";

const email = Joi.string()
  .email()
  .required()
  .label("Email");

const username = Joi.string()
  .alphanum()
  .min(4)
  .max(30)
  .required()
  .label("Username");

const name = Joi.string()
  .max(254)
  .required()
  .label("Name");

//"must have one uppercase letter, one lowercase letter, one digit and one special character."
const password = Joi.string()
  .pattern(
    new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/
    )
  )
  .label("Password");

export const signUp = Joi.object({
  email,
  username,
  name,
  password
});

export const signIn = Joi.object({
  email,
  password
});
