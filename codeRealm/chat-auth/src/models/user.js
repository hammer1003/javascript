import { compare, hash } from "bcryptjs";
import { model, Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const userSchema = Schema(
  {
    email: {
      type: String,
      validate: {
        validator: email => User.doesntExist({ email }),
        message: ({ value }) => "Email has been taken"
        // TODO: security, prevent XSS attack
      }
    },
    username: {
      type: String,
      validate: {
        validator: username => User.doesntExist({ username }),
        message: ({ value }) => "Username has been taken"
        // TODO: security, prevent XSS attack
      }
    },
    chats: [{ type: ObjectId, ref: "Chat" }],
    name: String,
    password: String
  },
  { timestamps: true }
);

userSchema.pre("save", async function() {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
});

// statics: can be call inschema
userSchema.statics.doesntExist = async function(options) {
  return (await this.where(options).countDocuments()) === 0;
};

// methods: can be call instance
userSchema.methods.matchPassword = function(password) {
  return compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
