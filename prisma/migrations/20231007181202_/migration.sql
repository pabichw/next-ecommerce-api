-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL DEFAULT '',
    "configurableAttributes" TEXT NOT NULL DEFAULT '',
    "reviewAvg" REAL NOT NULL DEFAULT 0.00
);
INSERT INTO "new_Product" ("configurableAttributes", "description", "id", "image", "name", "price", "slug") SELECT "configurableAttributes", "description", "id", "image", "name", "price", "slug" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
