/*
  Warnings:

  - Added the required column `petId` to the `orgs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Age" AS ENUM ('filhote', 'adulta', 'velhice');

-- CreateEnum
CREATE TYPE "Body" AS ENUM ('pequeno', 'medio', 'grande');

-- CreateEnum
CREATE TYPE "Independence" AS ENUM ('baixa', 'media', 'alta');

-- CreateEnum
CREATE TYPE "Energy" AS ENUM ('baixa', 'media', 'alta');

-- CreateEnum
CREATE TYPE "Env" AS ENUM ('amplo', 'fechado');

-- AlterTable
ALTER TABLE "orgs" ADD COLUMN     "petId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "age" "Age" NOT NULL DEFAULT 'filhote',
    "body" "Body" NOT NULL DEFAULT 'pequeno',
    "energy" "Energy" NOT NULL DEFAULT 'baixa',
    "independence" "Independence" NOT NULL DEFAULT 'baixa',
    "env" "Env" NOT NULL DEFAULT 'amplo',
    "image" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orgs" ADD CONSTRAINT "orgs_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
