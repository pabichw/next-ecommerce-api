import { Product, Review } from "@prisma/client";
import { prisma } from "../../db";
import { buildWebhook } from "../../util/webhook";

type UpsertProductArg = {
  id: string
  product: Pick<Product, 'description' | 'image' | 'name' | 'price' | 'slug'> 
}

type InsertReviewArg = {
  product: string,
  review: Pick<Review, 'name' | 'content' | 'headline' | 'rating' | 'name' | 'email'>
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

export const insertReview = async (
  _parent: any,
  arg: InsertReviewArg,
): Promise<Product| null> => {
  const product = await prisma.product.findUnique({
    where: { id: arg.product },
  })
  
  if (!product) {
    return null
  }

  const review = await prisma.review.create({ data: {...arg.review } })

  if (!review) {
    return null
  }


  return prisma.product.update({ 
    where: { id: arg.product },
    data: { reviews: { connect: review } }
  }).then((data) => {
    buildWebhook('/products', { productId: data.id })
    return data
  })
}
