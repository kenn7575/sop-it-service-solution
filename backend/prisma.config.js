const { PrismaClient } = require("@prisma/client");
const { findReferenced } = require("./functions/general");

const prisma = new PrismaClient().$extends({
  query: {
    $allModels: includeInModel(),
  },
});

function includeInModel() {
  return {
    async $allOperations({ args, model, operation, query }) {
      const referenced = await findReferenced(model);
      let select = {};

      for (let ref of referenced) {
        select[ref] = true;
      }

      if (referenced.length)
        args.include = {
          ...args.include,
          _count: { select },
        };

      return query(args);
    },
  };
}

module.exports = prisma;
