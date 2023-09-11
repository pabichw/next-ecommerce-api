import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";

export const category: NonNullable<QueryResolvers["category"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const category = prisma.category.findUnique({
    where: {
      id: _arg.id,
    },
  });

  return category;
};
