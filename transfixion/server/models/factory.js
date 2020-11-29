const { model, Schema } = require("mongoose");

const factorySchema = Schema(
  {
    factoryname: String,
    email: String,
    ranking: String,
    search: {
      location: String,
      contactPerson: String,
      contactTel: String,
      cost: { max: Number, min: Number },
      quantity: { max: Number, min: Number },
      leadTime: { max: Number, min: Number },
      items: [String]
    },
    evaluate: {
      inquiry: {
        cost: Number,
        quantity: Number,
        leadTime: Number
      },
      service: {
        cooperation: Number,
        speed: Number,
        potential: Number,
        afterService: Number,
        complement: Number
      },
      realiability: {
        reputation: Number,
        scale: Number,
        auditReport: Number,
        location: Number
      },
      quality: {
        printing: Number,
        packing: Number,
        skills: Number,
        quality: Number,
        clear: Number
      }
    }
  },
  { timestamps: true }
);

module.exports = model("factory", factorySchema);
