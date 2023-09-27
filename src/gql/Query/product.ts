import { Product } from "@prisma/client";
import { prisma } from "../../db";

export const product: NonNullable<Product[]> = async (
  _parent,
  _arg,
  _ctx,
) => {

  if (_arg.id) {
    const product = await prisma.product.findUnique({
      where: {
        id: _arg.id,
      },
      include: {
        category: true,
      }
    });

    return [product];
  }

  const products = await prisma.product.findMany({
    ...(_arg.name ? { where: { name: { contains: _arg.name } }} : {}),
    ...(_arg.pagination.page ? { take: _arg.pagination.pageSize || 20 } : {}),
    ...(_arg.pagination.page ? { skip: (_arg.pagination.pageSize || 20) * (_arg.pagination.page - 1) } : {}),
  });

  return products;
};
