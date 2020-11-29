import Joi from "@hapi/joi";

export default Joi.extend(joi => ({
  type: "objectId",
  base: joi.string(),
  messages: {
    objectId: "must be a valid Object ID"
  },
  validate(value, helpers) {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return { value, errors: helpers.error("objectId") };
    }
    return value;
  }
}));
