import { Collection } from "@prisma/client";
import { prisma } from "../../db";

export const collection: Promise<Collection[]> = (
  _parent,
  _arg,
  _ctx,
) => {

  return prisma.collection.findMany({
    take: 1,
    where: {
      name: _arg.name
    },
    include: {
      product: true,
    }
  });

};
