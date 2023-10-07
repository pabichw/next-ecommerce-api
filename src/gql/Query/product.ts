import { Prisma, Product } from "@prisma/client";
import { prisma, xprisma } from "../../db";

type ProductArgs = {
  id?: string
  name?: string
  pagination?: { page: number, pageSize: number }
  sorting?: string
}

export const product: NonNullable<Product[]> = async (
  _: any,
  arg: ProductArgs,
) => {

  console.log('arg', arg);
  
  if (arg.id) {
    const product = await xprisma.product.findMany({
      where: {
        id: arg.id,
      },
      include: {
        category: true,
        relatedProduct: true,
        reviews: {
          orderBy: {
            rating: 'desc'
          }
        },
      }
    });

    return product;
  }

  let sortField;
  let sortOrder;
  if (arg.sorting) {
    sortField = arg.sorting.split('-')[1]
    sortOrder = arg.sorting?.includes('asc') ? Prisma.SortOrder.asc : Prisma.SortOrder.desc
  }

  return xprisma.product.findMany({
    ...(arg.name ? { where: { name: { contains: arg.name } }} : {}),
    ...(arg.pagination?.page ? { take: arg.pagination.pageSize || 20 } : {}),
    ...(arg.pagination?.page ? { skip: (arg.pagination.pageSize || 20) * (arg.pagination.page - 1) } : {}),
    ...(sortField === 'price' ? { orderBy: { price: sortOrder } } : {}),
    ...(sortField === 'rating' ? { orderBy: { reviewAvg: sortOrder } } : {}),
    include: { reviews: true }
  });
};
