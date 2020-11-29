const Factory = require("../models/factory");

module.exports = {
  Query: {
    factories: async () => await Factory.find({})
  },
  Mutation: {
    factory: async (_, { email }) => {
      const factory = await Factory.findOne({ email });
      if (!factory)
        return { message: "Factory does not existed.", isSuccess: false };
      if (factory)
        return {
          message: "Success!!!.",
          isSuccess: true,
          factoryInfo: factory
        };
    },
    createFactory: async (_, args) => {
      const { factoryname, email } = args;
      const info = await Factory.findOne({ email });
      if (info)
        return {
          message: `Fail!! ${factoryname} has been created.`,
          isSuccess: false
        };
      if (!info) {
        const factory = await Factory.create(args);
        return {
          id: factory.id,
          name: factory.factoryname,
          email: factory.email,
          message: `Success!! ${factory.factoryname} has been created.`,
          isSuccess: true
        };
      }
    },
    updateAnalysis: async (_, { email, ranking, evaluate }) => {
      const info = await Factory.updateOne({ email }, { ranking, evaluate });
      if (info.n === 1 && info.nModified === 1)
        return {
          message: `Success!! ${email} has been updated.`,
          isSuccess: true
        };
      return {
        message: `Fail!! ${email} does not existed.`,
        isSuccess: true
      };
    },
    updateFactory: async (_, { factoryname, email, search }) => {
      const info = await Factory.updateOne({ email }, { factoryname, search });
      if (info.n === 1 && info.nModified === 1)
        return {
          message: `Success!! ${email} has been updated.`,
          isSuccess: true
        };
      return {
        message: `Fail!! ${email} does not existed.`,
        isSuccess: true
      };
    },
    findProduct: async (_, { cost, quantity, leadTime, product }) => {
      // console.log("cost", cost);
      // console.log("quantity", quantity);
      // console.log("leadTime", leadTime);
      let costArr = [];
      let quantityArr = [];
      let leadTimeArr = [];
      const costNum = cost.split("-").map(x => +x);
      const quantityNum = quantity.split("-").map(x => +x);
      const leadTimeNum = leadTime.split("-").map(x => +x);
      // console.log("costNum", costNum);
      // console.log("quantityNum", quantityNum);
      // console.log("leadTimeNum", leadTimeNum);

      if (costNum.length === 1) {
        let floor = 0;
        let ceil = 0;
        if (costNum[0] === 0) {
          floor = 1;
          ceil = 10;
        } else {
          floor = Math.floor(costNum[0] / 10) * 10;
          ceil = Math.ceil(costNum[0] / 10) * 10;
        }
        costArr.push(floor, ceil);
      }

      if (quantityNum.length === 1) {
        let floor = 0;
        let ceil = 0;
        if (quantityNum[0] === 0) {
          floor = 1;
          ceil = 10;
        } else {
          floor = Math.floor(quantityNum[0] / 10) * 10;
          ceil = Math.ceil(quantityNum[0] / 10) * 10;
        }
        quantityArr.push(floor, ceil);
      }

      if (leadTimeNum.length === 1) {
        let floor = 0;
        let ceil = 0;
        if (leadTimeNum[0] === 0 || leadTimeNum[0] === 1) {
          floor = 1;
          ceil = 3;
        } else {
          floor = leadTimeNum[0] - 1;
          ceil = leadTimeNum[0] + 1;
        }
        leadTimeArr.push(floor, ceil);
      }

      if (costNum.length === 2) costArr = costNum;
      if (quantityNum.length === 2) quantityArr = quantityNum;
      if (leadTimeNum.length === 2) leadTimeArr = leadTimeNum;

      // console.log("costArr", costArr);
      // console.log("quantityArr", quantityArr);
      // console.log("leadTimeArr", leadTimeArr);

      return await Factory.find({
        $and: [
          { "search.items": product },
          { "search.cost.min": { $lte: costArr[0] } },
          { "search.cost.max": { $gte: costArr[1] } },
          { "search.quantity.min": { $lte: quantityArr[0] } },
          { "search.quantity.max": { $gte: quantityArr[1] } },
          { "search.leadTime.min": { $lte: leadTimeArr[0] } },
          { "search.leadTime.max": { $gte: leadTimeArr[1] } }
        ]
      }).sort([["ranking", "desc"]]);
    }
  }
};
