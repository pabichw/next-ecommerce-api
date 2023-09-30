/*
  Warnings:

  - You are about to drop the `RelatedProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "RelatedProduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_relatedProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_relatedProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_relatedProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_relatedProduct_AB_unique" ON "_relatedProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_relatedProduct_B_index" ON "_relatedProduct"("B");
