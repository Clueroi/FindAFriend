/*
  Warnings:

  - You are about to drop the column `petId` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the `pets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "orgs" DROP CONSTRAINT "orgs_petId_fkey";

-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "petId";

-- DropTable
DROP TABLE "pets";

-- DropEnum
DROP TYPE "Age";

-- DropEnum
DROP TYPE "Body";

-- DropEnum
DROP TYPE "Energy";

-- DropEnum
DROP TYPE "Env";

-- DropEnum
DROP TYPE "Independence";
