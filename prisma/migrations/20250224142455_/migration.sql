/*
  Warnings:

  - You are about to drop the column `categorie_id` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categorie_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "categorie_id";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
