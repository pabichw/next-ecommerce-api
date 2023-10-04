import { Order, Product, Review } from "@prisma/client";
import { prisma } from "../../db";
import { buildWebhook } from "../../util/webhook";

type AddToCartArgs = {
  id: string,
  productId: string,
  quantity: number,
  configurableAttributes: string
}

export const addToCart = async (
  _: any,
  arg: AddToCartArgs,
): Promise<Order | null> => {

  console.log('addtocart', arg);

  if (!arg.id || !arg.productId || !arg.quantity) {
    return null;    
  }

  const cart = await prisma.order.findFirst({
    where: { AND: [{ id: arg.id }, { status: 'draft' }] },
  })
  
  if (!cart) {
    console.log('no cart found:', arg.id)
    return null
  }

  const product = await prisma.product.findUnique({ where: { id: arg.productId }});

  if (!product) {
    console.log('no such product in store:', arg.productId)
    return null
  }

  const orderItem = await prisma.orderItem.create({ 
    data: {
      productId: arg.productId,
      quantity: arg.quantity,
      configurableAttributes: arg.configurableAttributes || '',
    }
  })
  
  if (!orderItem) {
    console.log('Problem while creating an order', orderItem)
    return null
  }

  return prisma.order.update({ 
    where: { id: arg.id },
    data: { items: { connect: orderItem } },
    include: { 
      items: { 
        include: { 
          product: true
        } 
      } 
    }
  });

}
