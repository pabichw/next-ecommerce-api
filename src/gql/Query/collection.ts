import { Collection } from "@prisma/client";
import { prisma } from "../../db";

export const collection = (
  _parent,
  _arg,
  _ctx,
): Promise<Collection[]> => {

  if (_arg.name) {
    return prisma.collection.findMany({
      take: 1,
      where: {
        name: _arg.name
      },
      include: {
        product: true,
      }
    });
  }

  return prisma.collection.findMany({});
};
