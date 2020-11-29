import { SchemaDirectiveVisitor } from "apollo-server-express";
import { defaultFieldResolver } from "graphql";
import { ensureSignedIn } from "../auth";

export default class AuthDirectives extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = function(...args) {
      const [, , context] = args;
      console.log("context", context);
      ensureSignedIn(context.req);
      return resolve.apply(this, args);
    };
  }
}
