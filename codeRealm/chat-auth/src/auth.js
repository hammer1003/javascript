import { AuthenticationError } from "apollo-server-express";
import { SESS_NAME } from "./config";
import { User } from "./models";

export const attamptSignIn = async (email, password) => {
  const message = "Incorrect email and password. Please try again";
  const user = await User.findOne({ email });
  if (!user) {
    throw new AuthenticationError(message);
  }
  if (!(await user.matchPassword(password))) {
    throw new AuthenticationError(message);
  }

  return user;
};

const signedIn = req => req.session.userId;

export const ensureSignedIn = req => {
  if (!signedIn(req)) {
    throw new AuthenticationError("You must be signed in.");
  }
};

export const ensureSignedOut = req => {
  console.log("ensureSignedOut req", req);
  console.log("ensureSignedOut signedIn", signedIn(req));

  if (signedIn(req)) {
    throw new AuthenticationError("You are already signed in.");
  }
};

export const signedOut = (req, res) =>
  new Promise((resolve, reject) => {
    req.session.destroy(err => {
      if (err) reject();
      res.clearCookie(SESS_NAME);
      resolve(true);
    });
  });
