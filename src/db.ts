import { PrismaClient, Product, Review } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
})

export const xprisma = prisma.$extends({
  result: {
    product: {
      reviewAvg: {
        // the dependencies
        // @ts-ignore
        needs: { reviews: true, reviewAvg: true },
        // @ts-ignore
        async compute(product: Product) {
          // @ts-ignore
          const { reviews } = product;

          if (!reviews || reviews.length === 0) {
            return 0;
          }
          const reviewsCount = reviews.length;
          const reviewsTotal = reviews.reduce((aggr: number, curr: Review) => aggr += curr.rating, 0);

          return reviewsTotal / reviewsCount;
        },
      },
    },
  },
});