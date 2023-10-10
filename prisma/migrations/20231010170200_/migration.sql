/*
  Warnings:

  - You are about to drop the column `userConnection` on the `Order` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "userIdConnection" TEXT NOT NULL DEFAULT '',
    "userEmailConnection" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Order" ("id", "status") SELECT "id", "status" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
