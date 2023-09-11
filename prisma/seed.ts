import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const productsCount = 5;
const categoriesCount = 2;
const collectionsCount = 2;

// @ts-ignore
const collectionHasItems = async (collection: string): Promise<boolean> => await prisma[collection].count() > 0;

const productsExisting = await collectionHasItems('product');

if (productsExisting) {
  console.log(`Not generating. Collection products has items.`)
} else {
  for (let i = 0; i < productsCount; i++) {
    const name = faker.commerce.productName();


    const createdProduct = await prisma.product.create({
      data: {
        name: name,
        slug: faker.helpers.slugify(name).toLowerCase(),
        description: faker.commerce.productDescription(),
        price: Number(faker.commerce.price()) * 100,
      }
    })

    console.log(`Created product of id: ${createdProduct.id}`)
  }
}

const categoriesExisting = await collectionHasItems('category');

if (categoriesExisting) {
  console.log(`Not generating. Collection categories has items.`)
} else {
  for (let i = 0; i < categoriesCount; i++) {
    const name = faker.commerce.department();

    const createdCategory = await prisma.category.create({
      data: {
        name: name,
        slug: faker.helpers.slugify(name).toLowerCase(),
      }
    })

    console.log(`Created category of id: ${createdCategory.id}`)
  }
}

const collectionsExisting = await collectionHasItems('collection');

if (collectionsExisting) {
  console.log(`Not generating. Collection collections has items.`)
} else {
  for (let i = 0; i < collectionsCount; i++) {
    const name = faker.commerce.department();

    const createdCollection = await prisma.collection.create({
      data: {
        name: name,
      }
    })

    console.log(`Created collection of id: ${createdCollection.id}`)
  }
}
