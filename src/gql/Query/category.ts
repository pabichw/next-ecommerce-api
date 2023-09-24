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

  return prisma.category.findMany({
    ...(_arg.pagination.page ? { take: _arg.pagination.pageSize || 20 } : {}),
    ...(_arg.pagination.page ? { skip: (_arg.pagination.pageSize || 20) * (_arg.pagination.page - 1) } : {}),
  })
};
