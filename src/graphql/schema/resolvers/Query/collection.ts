import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";

export const collection: NonNullable<QueryResolvers["collection"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const collection = prisma.collection.findUnique({
    where: {
      id: _arg.id,
    },
  });

  return collection;
};
