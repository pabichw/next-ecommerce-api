import { Product } from "@prisma/client";
import { prisma } from "../../db";
import { buildWebhook } from "../../util/webhook";

type UpsertProductArg = {
  id: string
  product: Pick<Product, 'description' | 'image' | 'name' | 'price' | 'slug'> 
}

export const upsertProduct = async (
  _parent: any,
  arg: UpsertProductArg,
): Promise<Product| null> => {

  if (!arg.product) {
    return null
  }

  if (arg.id) {
    // edit
    return prisma.product.update({
      where: { id: arg.id },
      data: { ...arg.product }
    }).then((data) => {
      buildWebhook('/products', { productId: data.id })
      return data
    })
  }

  // insert
  return prisma.product.create({
    data: { ...arg.product }
  }).then((data) => {
    buildWebhook('/products', { productId: data.id }); 
    return data;
  })
};
