import { Order } from "@prisma/client";
import { prisma } from "../../db";

type OrderArgs = {
  userId: string
  userEmail: string
}
export const order = (
  _:any,
  args: OrderArgs,
): Promise<Order[] | null> => {

  if (args.userId || args.userEmail) {
    // get user orders
    return prisma.order.findMany({
      where: { 
        OR: [
          {
            userIdConnection: args.userId
          },
          {
            userEmailConnection: args.userEmail
          },
        ]
      },
      include: {
        items: {
          include: {
            product: true
          }
        },
      }
    });
  }

  return null;
};
