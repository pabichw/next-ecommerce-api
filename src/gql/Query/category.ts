import { Category } from "@prisma/client";
import { prisma } from "../../db";

export const category: Promise<Category[]> = (
  _parent,
  _arg,
  _ctx,
) => {

  console.log('\n_arg', _arg);
  console.log('slug', _arg.slug);

  if (_arg.slug) {
    return prisma.category.findMany({
      take: 1,
      where: {
        slug: { equals: _arg.slug },
      },
      orderBy: {
        id: 'asc',
      },
      include: {
        product: true,
      }
    });
  }

  const pageSize = _arg.pagination.pageSize || 20;

  return prisma.category.findMany({
    ...(_arg.pagination.page ? { take: pageSize } : {}),
    ...(_arg.pagination.page ? { skip: pageSize * (_arg.pagination.page - 1) } : {}),
    include: {
      product: true,
    }
  })
};
