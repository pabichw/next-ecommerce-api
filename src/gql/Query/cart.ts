import { Order, OrderItem } from "@prisma/client";
import { prisma } from "../../db";

type CartGetCreateArgs = {
  id: string
  productId: string
  items: OrderItem[]
  quantity: string
}

export const cart = async (
  _: any,
  args: CartGetCreateArgs,
): Promise<Order | null> => {

  if (!args.id) {
    // create
    return prisma.order.create({
      data: {
        status: 'draft',
        userConnection: ''
      }
    });
  }

  // get
  return prisma.order.findFirst({
    where: { 
      AND: [
        { id: args.id },
        { status: 'draft' }
      ]
    },
    include: {items: { include: { product:  true }}}
  })
}