const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID
    username: String
    email: String
    position: String
    createdAt: String
    updatedAt: String
  }

  type Factory {
    id: ID
    factoryname: String
    email: String
    ranking: String
    search: Search
    evaluate: Evaluate
  }

  type Search {
    location: String
    contactPerson: String
    contactTel: String
    cost: Range
    quantity: Range
    leadTime: Range
    items: [String]
  }

  type Range {
    max: Int
    min: Int
  }

  type Evaluate {
    inquiry: Inquiry
    service: Service
    realiability: Realiability
    quality: Quality
  }

  type Inquiry {
    cost: Int
    quantity: Int
    leadTime: Int
  }

  type Service {
    cooperation: Int
    speed: Int
    potential: Int
    afterService: Int
    complement: Int
  }

  type Realiability {
    reputation: Int
    scale: Int
    auditReport: Int
    location: Int
  }

  type Quality {
    printing: Int
    packing: Int
    skills: Int
    quality: Int
    clear: Int
  }

  type GeneralOut {
    id: ID
    email: String
    name: String
    message: String
    isSuccess: Boolean
  }

  type UserOut {
    message: String
    isSuccess: Boolean
    userInfo: User
  }

  type FactoryOut {
    message: String
    isSuccess: Boolean
    factoryInfo: Factory
  }

  input SearchInput {
    location: String
    contactPerson: String
    contactTel: String
    cost: RangeInput
    quantity: RangeInput
    leadTime: RangeInput
    items: [String]
  }

  input EvaluateInput {
    inquiry: InquiryInput
    service: ServiceInput
    realiability: RealiabilityInput
    quality: QualityInput
  }

  input RangeInput {
    max: Int
    min: Int
  }

  input InquiryInput {
    cost: Int
    quantity: Int
    leadTime: Int
  }

  input ServiceInput {
    cooperation: Int
    speed: Int
    potential: Int
    afterService: Int
    complement: Int
  }

  input RealiabilityInput {
    reputation: Int
    scale: Int
    auditReport: Int
    location: Int
  }

  input QualityInput {
    printing: Int
    packing: Int
    skills: Int
    quality: Int
    clear: Int
  }

  type Query {
    users: [User]!
    factories: [Factory]!
    userToken(token: String!): User
  }

  type Mutation {
    user(email: String!): UserOut
    factory(email: String!): FactoryOut
    updateUser(
      username: String!
      position: String
      oldEmail: String!
      newEmail: String!
      password: String!
    ): GeneralOut
    registration(
      username: String!
      email: String!
      position: String
      password: String!
    ): GeneralOut
    login(email: String!, password: String!): GeneralOut
    resetPassword(
      email: String!
      oldPassword: String!
      newPassword: String!
    ): GeneralOut
    createFactory(
      factoryname: String!
      email: String!
      ranking: String!
      search: SearchInput!
      evaluate: EvaluateInput!
    ): GeneralOut
    updateAnalysis(
      email: String!
      ranking: String!
      evaluate: EvaluateInput
    ): GeneralOut
    updateFactory(
      factoryname: String!
      email: String!
      search: SearchInput!
    ): GeneralOut
    findProduct(
      cost: String!
      quantity: String!
      leadTime: String!
      product: String!
    ): [Factory]
  }
`;
