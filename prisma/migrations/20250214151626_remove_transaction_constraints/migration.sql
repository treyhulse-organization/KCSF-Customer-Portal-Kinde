/*
  Warnings:

  - Added the required column `internalId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Transaction_id_key";

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "internalId" TEXT NOT NULL,
ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "quantityCommitted" DROP NOT NULL,
ALTER COLUMN "quantityFulfilled" DROP NOT NULL;
