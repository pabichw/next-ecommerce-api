import { Category } from "@prisma/client";
import { prisma } from "../../db";
import { PaginatedResource, withPagination } from "../../util/pagination";

export const category = async (
  _parent,
  _arg,
  _ctx,
): Promise<Category[] | PaginatedResource<Category>> => {

  console.log('\n_arg', _arg);
  console.log('slug', _arg.slug);

  const pageSize = _arg.pagination.pageSize || 20;

  if (_arg.slug) {
    const result = await prisma.$transaction([
      prisma.category.findMany({
        take: 1,
        where: {
          slug: { equals: _arg.slug },
        },
        orderBy: {
          id: 'asc',
        },
        include: {
          product: {
            ...(_arg.pagination.page ? { take: pageSize } : {}),
            ...(_arg.pagination.page ? { skip: pageSize * (_arg.pagination.page - 1) } : {}),
          },
        }
      }),
      prisma.product.count({ where: { category: { some: { slug: { equals: _arg.slug } } } } })
    ]).then(([data, count]) => {

      // paginating products actually
      return (withPagination(data, _arg.pagination.page, pageSize, count)) 
    })

    return result
  }


  return prisma.$transaction([
    prisma.category.findMany({
      ...(_arg.pagination.page ? { take: pageSize } : {}),
      ...(_arg.pagination.page ? { skip: pageSize * (_arg.pagination.page - 1) } : {}),
      include: {
        product: true,
      }
    }),
    prisma.category.count({})
  ])
  .then(([data, count]) => withPagination(data, _arg.pagination.page, pageSize, count))
};
