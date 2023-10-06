import { Order, OrderItem, Product, Review } from "@prisma/client";
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

  /* existing order itme */
  const orderItemWithThisProduct = await prisma.orderItem.findFirst({ where: { AND: [ { orderId: arg.id } , { productId: arg.productId }] }})
  if (orderItemWithThisProduct) {
    await prisma.orderItem.update({ 
      where: { id: orderItemWithThisProduct.id },
      data: { quantity: orderItemWithThisProduct.quantity + arg.quantity },
    })

    return prisma.order.findFirst({
      where: { id: arg.id },
      include: { 
        items: { 
          include: { 
            product: true
          } 
        } 
      }
    })
  }
  /* *** */

  //create new orderItem
  const newOrderItem = await prisma.orderItem.create({ 
    data: {
      productId: arg.productId,
      quantity: arg.quantity,
      configurableAttributes: arg.configurableAttributes || '',
    }
  })
  
  if (!newOrderItem) {
    console.log('Problem while creating an order', newOrderItem)
    return null
  }

  return prisma.order.update({ 
    where: { id: arg.id },
    data: { items: { connect: newOrderItem } },
    include: { 
      items: { 
        include: { 
          product: true
        } 
      } 
    }
  });
}

type UpdateOrderItemQtyArgs = {
  orderId: string,
  orderItemId: string,
  quantity: number,
}

export const updateOrderItemQty = async (
  _: any,
  args: UpdateOrderItemQtyArgs
): Promise<OrderItem | boolean | null> => {
  if (!args.orderItemId) {
    return null;
  }
  if (args.quantity === 0) {
    return prisma.order.update({
      where: { id: args.orderId },
      data: {
        items: {
          disconnect: [{ id: args.orderItemId }]
        }
      }
    }).then(() => null) // fix return type later
    // also delete orderItem
  }

  return prisma.orderItem.update({ 
    where: { id: args.orderItemId }, 
    data: { quantity: args.quantity } 
  })
}
